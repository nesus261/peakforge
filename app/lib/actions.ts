'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const nodemailer = require('nodemailer');


const secretKey = '6LfXGv8pAAAAAKcaLOTimAc9V5dfEfYqqkVKxrFQ';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
  }
});

const Contact = z.object({
  email: z.string().trim().email({ message: 'Wprowadź poprawny adres email.' }),
  subject: z.string({
    invalid_type_error: 'Wprowadź temat.',
  }).trim().min(1, { message: 'Wprowadź temat.' }),
  message: z.string({
    invalid_type_error: 'Pole wiadomości nie może być puste.',
  }).trim().min(1, { message: 'Wiadomość nie może być pusta.' }),
  captchaToken: z.string({
    invalid_type_error: 'reCAPTCHA token is required.',
  }).trim().min(1, { message: 'Wykonaj captche.' }),
});

export type State = {
    errors?: {
      email?: string[];
      subject?: string[];
      message?: string[];
      captchaToken?: string[];
    };
    message?: string | null;
};

export async function sendMessage(prevState: State, formData: FormData) {
    const user_env = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const email_env = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
    const rawFormData = Object.fromEntries(formData.entries());
    
    const validatedFields = Contact.safeParse(rawFormData);
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Brakujące pola. Nie udało się wysłać wiadomości.',
      };
    }
    
    const { email, subject, message, captchaToken } = validatedFields.data;

    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    try {
        const response = await fetch(verificationURL, { method: 'POST' });
        const data = await response.json();

        if (data.success) {
            // Handle successful reCAPTCHA verification
            // Handle form submission, e.g., save data to database, send email, etc.
            var mailOptions = {
                from: user_env,
                to: email_env,
                subject: subject,
                text: `Message from email: ${email}\nContent: ${message}`
            };
            
            transporter.sendMail(mailOptions, function(error: any, info: any){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            var mailOptions2 = {
                from: user_env,
                to: email,
                subject: 'Potwierdzenie wypełnienia formularza',
                text: `Dziękujemy za wypełnienie formularza na stronie peakforge.pl!\n\nTemat: ${subject}\nTwoja wiadomość: ${message}`
            };
            
            transporter.sendMail(mailOptions2, function(error: any, info: any){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            return { success: true, message: 'Wiadomość wysłana pomyślnie' };
        } else {
            return { success: false, message: 'reCAPTCHA verification failed' };
        }
    } catch (error) {
        return {
            success: false,
            message: 'Server Error: Failed to Send Message.',
        };
    }
  
    revalidatePath('/contact');
    redirect('/contact');
  }