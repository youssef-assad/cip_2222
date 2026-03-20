import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const notify = (message, type) => toast(message, { type });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const formData = new FormData(form.current);
    let errors = {};
    if (!formData.get('from_name')) {
      errors.from_name = 'Name is required';
    }
    if (!formData.get('from_email')) {
      errors.from_email = 'Email is required';
    } else if (!validateEmail(formData.get('from_email'))) {
      errors.from_email = 'Email is not valid';
    }
    if (!formData.get('message')) {
      errors.message = 'Message is required';
    }
    if (formData.get('phone_from') && isNaN(formData.get('phone_from'))) {
      errors.phone_from = 'Phone number must be numeric';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      notify("Please fill in all required fields correctly", "error");
      return;
    }

    emailjs
      .sendForm("service_v2cyzwd", "template_51nvso5", form.current, {
        publicKey: "mAEuoe1jJBiroGTih",
      })
      .then(
        () => {
          notify("Message envoyée avec success", "success");
          form.current.reset();
          setErrors({});
        },
        (error) => {
          console.log("FAILED...", error.text);
          notify("Failed to send message", "error");
        }
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="toaster"
      />
      <div className="contact-form-row">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name.."
          className="contact-input"
          required
        />
        {errors.from_name && <p className="text-danger">{errors.from_name}</p>}
        <input
          type="email"
          name="from_email"
          placeholder="* Your Email.."
          className="contact-input"
          required
        />
      </div>
        {errors.from_email && <p className="text-danger">{errors.from_email}</p>}
      <div className="contact-form-row">
        <input
          type="text"
          placeholder="Phone Number"
          className="contact-input"
          name="phone_from"
        />
        <input
          type="text"
          placeholder="Your Subject..."
          className="contact-input"
          name="from_subject"
          />
      </div>
          {errors.phone_from && <p className="text-danger">{errors.phone_from}</p>}
      <textarea
        placeholder="* Your Message Here"
        className="contact-textarea"
        name="message"
        required
      ></textarea>
      {errors.message && <p className="text-danger">{errors.message}</p>}
      <button type="submit" className="contact-submit-button">
        Send To us
      </button>
    </form>
  );
}

export default Form;
