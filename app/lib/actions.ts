'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const nodemailer = require('nodemailer');

import { getDictionary } from "../[lang]/dictionaries";


const secretKey = '6LfXGv8pAAAAAKcaLOTimAc9V5dfEfYqqkVKxrFQ';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
  }
});

export type State = {
    errors?: {
      email?: string[];
      subject?: string[];
      message?: string[];
      captchaToken?: string[];
    };
    message?: string | null | any;
    success?: boolean;
};

export async function sendMessage(lang: string, prevState: State, formData: FormData) {
    const dict = (await getDictionary(lang)).contact.actions;

    const Contact =  z.object({
        email: z.string().trim().email({ message: dict.enterEmail }),
        subject: z.string({
            invalid_type_error: dict.enterSubject,
        }).trim().min(1, { message: dict.enterSubject }),
        message: z.string({
            invalid_type_error: dict.messageCannotBeEmpty,
        }).trim().min(1, { message: dict.messageCannotBeEmpty }),
        captchaToken: z.string({
            invalid_type_error: dict.completeCaptcha,
        }).trim().min(1, { message: dict.completeCaptcha }),
    });
    const user_env = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const email_env = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
    const rawFormData = Object.fromEntries(formData.entries());
    
    const validatedFields = Contact.safeParse(rawFormData);
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: dict.missingFields,
        success: false
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
                subject: dict.formConfirmation,
                text: `${dict.confirmationMessage1} ${subject}\n${dict.confirmationMessage2} ${message}`
            };
            
            transporter.sendMail(mailOptions2, function(error: any, info: any){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            return { success: true, message: dict.sentMessage };
        } else {
            return { success: false, message: dict.recaptchaFailed };
        }
    } catch (error) {
        return {
            success: false,
            message: dict.serverError,
        };
    }
  
    revalidatePath('/contact');
    redirect('/contact');
  }