import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fields = [
  { name: "from_name",    placeholder: "Votre nom",        type: "text",  required: true,  half: true  },
  { name: "from_email",   placeholder: "Votre email",      type: "email", required: true,  half: true  },
  { name: "phone_from",   placeholder: "Téléphone",        type: "text",  required: false, half: true  },
  { name: "from_subject", placeholder: "Sujet",            type: "text",  required: false, half: true  },
];

function Field({ name, placeholder, type, required, error, icon }) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled]   = useState(false);

  return (
    <div className={`cf-field ${focused ? "focused" : ""} ${error ? "has-error" : ""}`}>
      <input
        type={type}
        name={name}
        required={required}
        placeholder=" "
        onFocus={() => setFocused(true)}
        onBlur={(e) => { setFocused(false); setFilled(!!e.target.value); }}
        onChange={(e) => setFilled(!!e.target.value)}
      />
      <label className={filled ? "filled" : ""}>{placeholder}{required && " *"}</label>
      {error && <span className="cf-error">{error}</span>}
    </div>
  );
}

function Form() {
  const form    = useRef();
  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const d = new FormData(form.current);
    const e = {};
    if (!d.get("from_name"))                                        e.from_name  = "Nom requis";
    if (!d.get("from_email"))                                       e.from_email = "Email requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.get("from_email"))) e.from_email = "Email invalide";
    if (!d.get("message"))                                          e.message    = "Message requis";
    if (d.get("phone_from") && isNaN(d.get("phone_from")))         e.phone_from = "Numéro invalide";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await emailjs.sendForm("service_v2cyzwd", "template_51nvso5", form.current, {
        publicKey: "mAEuoe1jJBiroGTih",
      });
      toast.success("Message envoyé avec succès !");
      form.current.reset();
      setErrors({});
    } catch {
      toast.error("Échec de l'envoi. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="bottom-center" autoClose={5000} theme="light" />

      <form className="cf-form" ref={form} onSubmit={sendEmail} noValidate>

        <div className="cf-row">
          {fields.slice(0, 2).map(f => (
            <Field key={f.name} {...f} error={errors[f.name]} />
          ))}
        </div>

        <div className="cf-row">
          {fields.slice(2, 4).map(f => (
            <Field key={f.name} {...f} error={errors[f.name]} />
          ))}
        </div>

        {/* Textarea */}
        <div className={`cf-field cf-textarea-wrap ${errors.message ? "has-error" : ""}`}>
          <textarea name="message" placeholder=" " rows={5} required />
          <label>Votre message *</label>
          {errors.message && <span className="cf-error">{errors.message}</span>}
        </div>

        <button className={`cf-submit ${loading ? "loading" : ""}`} type="submit" disabled={loading}>
          {loading ? (
            <><span className="cf-spinner" /> Envoi en cours…</>
          ) : (
            <><i className="icon-paper-plane" /> Envoyer le message</>
          )}
        </button>

      </form>
    </>
  );
}

export default Form;