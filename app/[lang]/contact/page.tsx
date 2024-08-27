import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { getDictionary } from "../dictionaries";
import ContactBody from "../components/contact/contactBody";

export default async function About({ params }: any) {
  const full_dict = await getDictionary(params.lang);

  return <ContactBody full_dict={full_dict} />;
}
