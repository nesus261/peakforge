import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [send, setSend] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false || !captchaToken) {
      event.stopPropagation();
      setShowAlert(true);
    } else {
      setShowAlert(false);
      // Handle form submission, e.g., send data to your server
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message, captchaToken }),
      });
      const result = await response.json();
      if (result.success) {
        // Handle successful form submission
        setSend(true);
        await new Promise(r => setTimeout(r, 2000));
        navigate('/');
      } else {
        // Handle error in form submission
        alert('Error sending message. Please try again.');
      }
    }
    setValidated(true);
  };

  const handleReCaptchaVerify = async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('yourAction');
    setCaptchaToken(token);
  };

  return (
    <>
    {send ? 
    <div className='text-center mt-5 pt-5'>
      <h2>Dziękujemy za wypełnienie formularza!</h2>
    </div> 
    :
    <form className='mt-4 max-w-3 mx-auto' noValidate validated={validated.toString()} onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="mb-1 mt-2 mx-2" htmlFor="formEmail">Email</label>
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
        <label className="mb-1 mt-2 mx-2"  htmlFor="formSubject">Temat</label>
        <input
          type="text"
          className="form-control"
          id="formSubject"
          placeholder="Temat"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <div className="invalid-feedback">
          Wprowadź temat.
        </div>
      </div>

      <div className="form-group">
        <label className="mb-1 mt-2 mx-2"  htmlFor="formMessage">Wiadomość</label>
        <textarea
          className="form-control"
          id="formMessage"
          rows="3"
          placeholder="Twoja wiadomość"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div className="invalid-feedback">
          Wprowadź treść wiadomości.
        </div>
      </div>

      <div className="form-group mt-1">
        <button type="button" className="btn btn-secondary" onClick={handleReCaptchaVerify}>
          Zweryfikuj Captcha
        </button>
        {!captchaToken && (
          <div className="invalid-feedback" style={{ display: 'block' }}>
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
    </form>}
    </>
  );
};

export default ContactForm;
