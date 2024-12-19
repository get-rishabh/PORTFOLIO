import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const HandleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const HandleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      emailjs.send(
        "service_f4vx8qr",
        "template_bwjt58b",
        {
          from_name: form.name,
          to_namee: "Rishabh",
          from_email: form.email,
          to_email: "rishabh208020@gmail.com",
          message: form.message,
        },
        "TSLgIL5Jw-NKSokKn"
      );

      setLoading(false);
      alert("Your message has been sent successfully ✔");
      setForm({
        name : '',
        email : '',
        message : ''
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Error While Sending Message !!!");
    }
  };
  return (
    <section className="c-space my-20" id='contact'>
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="Terimnal_BG"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text mt-7">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether youre looking to build a new website, improve your existing
            platform, or bring a unique project to life, I&apos;m here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={HandleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={HandleChange}
                required
                className="field-input"
                placeholder="Xavier"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">E-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={HandleChange}
                required
                className="field-input"
                placeholder="xavier.email@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={HandleChange}
                required
                roe={5}
                className="field-input"
                placeholder="Hi, I'm interested in..."
              />
            </label>

            <button className="field-btn mt-7" type="submit" disabled={loading}>
              {loading ? "Sending ..." : "Send Message"}
              <img
                src="./assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
