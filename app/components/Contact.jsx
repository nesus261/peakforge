import React from 'react'
import NavBar from './NavBar'
import { Form } from 'react-router-dom'
import ContactForm from './contact/ContactForm'

const Contact = () => {
  return (
    <>
        <NavBar active="contact"></NavBar>
        <div className="container-about-1 text-1 d-flex justify-content-center align-items-center">
            <div className="container-fluid mt-3 mb-3">
                <h1 className="text-5 text-center">Kontakt</h1>
                <h5 className="mx-auto max-w-1 center-or-not mt-4">Masz pomysł na projekt? Chcesz usprawnić swoje procesy biznesowe? Skontaktuj się z nami, a razem stworzymy coś wyjątkowego!</h5>
                <h5 className='mx-auto max-w-1 center-or-not'>Wyślij wiadomość na nasz email lub wypełnij formularz kontaktowy</h5>
                <h5 className='mx-auto max-w-1 center-or-not mt-4'>Email: kontakt@nazwafirmy.pl</h5>
                <ContactForm></ContactForm>
            </div>
        </div>
    </>
  )
}

export default Contact