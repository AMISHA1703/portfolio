import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_Template_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_Public_Key,
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          setStatus(`Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <section
      id="contact"
      className="shadow-xl rounded-xl backdrop-blur-sm py-16 px-6 md:px-20 transition-all duration-300 
      bg-black/20 border border-white/10"
    >
      <h3 className="text-3xl font-bold text-center mb-1 text-white">
        Contact Me
      </h3>

      <span className="block text-sm mb-8 text-center text-gray-400">
        (Open to website development opportunities (MERN/PERN) and freelance
        work (MERN/PERN & WordPress).)
      </span>

      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto space-y-6">
        <input
          type="email"
          name="name"
          placeholder="Your email"
          required
          className="w-full p-4 rounded outline-none focus:ring-2 focus:ring-teal-500 transition 
          bg-black/5 border border-white/20 text-white placeholder-gray-400"
        />

        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full p-4 rounded outline-none focus:ring-2 focus:ring-teal-500 transition 
          bg-black/5 border border-white/20 text-white placeholder-gray-400"
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="cursor-pointer px-6 py-3 rounded transition font-semibold 
            bg-teal-500/30 hover:bg-teal-600/10 text-white"
          >
            Send Message
          </button>
        </div>

        {status && (
          <p className="text-center text-sm mt-2 text-teal-300">{status}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
