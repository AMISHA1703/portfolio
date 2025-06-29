import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_Template_ID, form.current, {
        publicKey:import.meta.env.VITE_EMAILJS_Public_Key,
      })
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          setStatus(`Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <section id="contact" className="bg-black/60 shadow-xl backdrop-blur-sm py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Contact Me</h2>
      
      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded bg-black/80 text-white outline-none focus:ring-2 focus:ring-teal-500"
        />
       
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full p-4 rounded bg-black/80 text-white outline-none focus:ring-2 focus:ring-teal-500"
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="bg-teal-500 cursor-pointer hover:bg-teal-600 text-white px-6 py-3 rounded transition font-semibold"
          >
            Send Message
          </button>
        </div>

        {status && (
          <p className="text-center text-sm text-teal-400 mt-2">{status}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
