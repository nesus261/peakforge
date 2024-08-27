"use client";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import NavBar from "../../components/home/navBar";
import ContactForm from "../../components/contact/contactForm";

export default function ContactBody({ full_dict }: any) {
  const dict = full_dict.contact;
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfXGv8pAAAAAHQ3Ub1lOknesSv0PN42DBDVN8LH">
      <div className="min-h-screen scroll-smooth snap-y snap-mandatory">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-950 via-slate-900/40 pt-10 pb-10">
          <NavBar
            dict={full_dict}
            navigation={["home", "about"]}
            fastLoad={true}
          ></NavBar>
          <h1 className="text-center text-5xl text-4xl font-bold animate-fade-in-fast">
            {dict.title}
          </h1>
          <div className="mb-2 mt-10 text-2xl text-center max-w-3xl mx-8 leading-9 animate-fade-in-fast">
            <h5 className="">{dict.description1}</h5>
            <h5 className="">{dict.description2}</h5>
            <h5 className="">{dict.description3}</h5>
            <ContactForm dict={dict}></ContactForm>
          </div>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
}
