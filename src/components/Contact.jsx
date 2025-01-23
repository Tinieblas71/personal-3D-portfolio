import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import "boxicons";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSWhatsApp = () => {
    let url = `https://api.whatsapp.com/send?phone=5215612807356&text=Hola!%20Soy%3A%20${form.name}%0AMi%20mensaje%3A%20${form.message}%0AMi%20correo%3A%20${form.email}`;
    window.open(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_13528t1",
        "template_wjc3646",
        {
          from_name: form.name,
          to_name: "Santiago",
          from_email: form.email,
          to_email: "2morenoestradasantiago@gmail.com",
          message: form.message,
        },
        "2GVHHeDv3VAp0zFM3"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "¡Gracias! Te contactaré de vuelta tan pronto como sea posible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, Algo salió mal, Por favor intenta de nuevo.");
        }
      );
  };

  return (
    <div
      className={`w-full xl:mt-12 flex flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Vamos a platicar</p>
        <h3 className={styles.sectionHeadText}>Contacto.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Su Nombre</span>
            <input
              type="text"
              name="name"
              required="true"
              value={form.name}
              onChange={handleChange}
              placeholder="Cuál es su nombre completo?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Su correo eléctronico
            </span>
            <input
              type="email"
              name="email"
              required="true"
              value={form.email}
              onChange={handleChange}
              placeholder="Cuál es su e.mail?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Su Mensaje</span>
            <textarea
              rows={7}
              name="message"
              required="true"
              value={form.message}
              onChange={handleChange}
              placeholder="Qué es lo quiere decirme?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="w-full flex flex-col xs:flex-row flex-wrap items-center gap-4 mt-4">
            {/* Texto "Por" */}
            <span className="text-secondary xs:text-sm text-center xs:text-left">
              <u>Por</u>
            </span>

            {/* Botón de Correo */}
            <button
              type="submit"
              className="flex items-center justify-center bg-tertiary rounded-xl w-full xs:w-auto px-6 py-3 text-white font-bold shadow-md shadow-primary hover:scale-105 hover:bg-blue-600 transition-transform duration-300"
            >
              <box-icon
                name="envelope"
                type="logo"
                color="#ffffff"
                size="md"
              ></box-icon>
            </button>

            {/* Texto "Ó" */}
            <span className="text-secondary xs:text-sm text-center xs:text-left">
              <u>Ó</u>
            </span>

            {/* Botón de WhatsApp */}
            <a
              className="flex items-center justify-center bg-tertiary rounded-xl w-full xs:w-auto px-6 py-3 text-white font-bold shadow-md shadow-primary hover:scale-105 hover:bg-green-500 transition-transform duration-300"
              onClick={handleSWhatsApp}
            >
              <box-icon
                name="whatsapp"
                type="logo"
                color="#ffffff"
                size="md"
              ></box-icon>
            </a>

            {/* Estado de envío */}
            {loading && (
              <p className="text-sm text-green-500 text-center mt-2 xs:mt-0">
                <i>Enviando...</i>
              </p>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
