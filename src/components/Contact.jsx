import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Reemplaza estos valores con los de tu cuenta de EmailJS
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        setEnviado(true);
        form.current.reset(); // Limpia el formulario tras enviar
    }, (error) => {
        console.log(error.text);
        alert("Ocurrió un error al enviar el mensaje.");
    });
  };

  return (
    <section id="contacto" className="contact">
      <h2>Contacto</h2>
      
      {enviado ? (
        <div className="success-msg">
          <p>¡Gracias! Tu mensaje ha sido enviado con éxito. Te responderé pronto.</p>
          <button onClick={() => setEnviado(false)} className="btn-primary">Enviar otro</button>
        </div>
      ) : (
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          {/* Importante: El atributo 'name' debe coincidir con tu plantilla de EmailJS */}
          <input type="text" name="from_name" placeholder="Tu Nombre" required />
          <input type="email" name="reply_to" placeholder="Tu Email" required />
          <textarea name="message" placeholder="Tu Mensaje" rows="5" required></textarea>
          <button type="submit" className="btn-primary">Enviar Mensaje</button>
        </form>
      )}
    </section>
  );
};

export default Contact;