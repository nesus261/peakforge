"use client";

import { sendMessage, State } from "@/app/lib/actions";
import React, { useActionState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState } from "react";

export default function ContactForm() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(sendMessage, initialState);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("yourAction");
    const field = document.querySelector("#captchaToken");
    setCaptchaToken(token);
  };

  return (
    <>
      <form action={formAction} className="mt-4 mx-auto text-left" noValidate>
        {/* Email address */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                className="bg-zinc-900 peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500 transform transition-transform duration-500 hover:scale-[1.01] focus:scale-[1.01]"
                aria-describedby="email-error"
              />
            </div>
          </div>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="mb-2 block text-sm font-medium">
            Temat
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Temat"
                className="bg-zinc-900 peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500 transform transition-transform duration-500 hover:scale-[1.01] focus:scale-[1.01]"
                aria-describedby="subject-error"
              />
            </div>
          </div>
          <div id="subject-error" aria-live="polite" aria-atomic="true">
            {state.errors?.subject &&
              state.errors.subject.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Wiadomość
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Twoja wiadomość"
                className="bg-zinc-900 peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500 transform transition-transform duration-500 hover:scale-[1.01] focus:scale-[1.01]"
                aria-describedby="message-error"
              />
            </div>
          </div>
          <div id="message-error" aria-live="polite" aria-atomic="true">
            {state.errors?.message &&
              state.errors.message.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <button
                type="button"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500 transform transition-transform duration-500 hover:scale-[1.01] hover:bg-blue-950"
                onClick={handleReCaptchaVerify}
              >
                Zweryfikuj Captcha
              </button>
              <input
                id="captchaToken"
                name="captchaToken"
                type="text"
                value={captchaToken ? captchaToken : ""}
                aria-describedby="captchaToken-error"
                hidden
                readOnly
              />
            </div>
          </div>
          {!captchaToken && (
            <div
              className="mt-2 mb-4 text-red-400 text-base"
              style={{ display: "block" }}
            >
              Uzupełnij CAPTCHA.
            </div>
          )}
          <div id="captchaToken-error" aria-live="polite" aria-atomic="true">
            {state.errors?.captchaToken &&
              !captchaToken &&
              state.errors.captchaToken.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div id="empty-error" aria-live="polite" aria-atomic="true">
          <p
            className={
              "mt-2 mb-4 text-base " +
              (state.success == true ? "text-green-500" : "text-red-500")
            }
            key={state.message}
          >
            {state.message}
          </p>
        </div>

        <button className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 transform transition-transform duration-500 hover:scale-105">
          Wyślij
        </button>
      </form>
      {/*
      {send ? (
        <div className="text-center mt-5 pt-5">
          <h2>Dziękujemy za wypełnienie formularza!</h2>
        </div>
      ) : (
        <form
          className="mt-4 max-w-3 mx-auto"
          noValidate
          validated={validated.toString()}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label className="mb-1 mt-2 mx-2" htmlFor="formEmail">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="formEmail"
              placeholder="Wprowadź email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback">
              Wprowadź poprawny adres email.
            </div>
          </div>

          <div className="form-group">
            <label className="mb-1 mt-2 mx-2" htmlFor="formSubject">
              Temat
            </label>
            <input
              type="text"
              className="form-control"
              id="formSubject"
              placeholder="Temat"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <div className="invalid-feedback">Wprowadź temat.</div>
          </div>

          <div className="form-group">
            <label className="mb-1 mt-2 mx-2" htmlFor="formMessage">
              Wiadomość
            </label>
            <textarea
              className="form-control"
              id="formMessage"
              rows="3"
              placeholder="Twoja wiadomość"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <div className="invalid-feedback">Wprowadź treść wiadomości.</div>
          </div>

          <div className="form-group mt-1">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleReCaptchaVerify}
            >
              Zweryfikuj Captcha
            </button>
            {!captchaToken && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                Uzupełnij CAPTCHA.
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Wyślij
          </button>

          {showAlert && (
            <div className="alert alert-danger mt-3" role="alert">
              Wypełnij wszystkie pola i zweryfikuj CAPTCHA.
            </div>
          )}
        </form>
      )}*/}
    </>
  );
}
