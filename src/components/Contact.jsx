import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import 'boxicons';

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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_13528t1',
        'template_wjc3646',
        {
          from_name: form.name,
          to_name: "Santiago",
          from_email: form.email,
          to_email: "2morenoestradasantiago@gmail.com",
          message: form.message,
        },
        '2GVHHeDv3VAp0zFM3'
      )
      .then(
        () => {
          setLoading(false);
          alert("¡Gracias! Te contactaré de vuelta tan pronto como sea posible.");

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
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Vamos a platicar</p>
        <h3 className={styles.sectionHeadText}>Contacto.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Su Nombre</span>
            <input
              type='text'
              name='name'
              required='true'
              value={form.name}
              onChange={handleChange}
              placeholder="Cuál es su nombre completo?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Su correo eléctronico</span>
            <input
              type='email'
              name='email'
              required='true'
              value={form.email}
              onChange={handleChange}
              placeholder="Cuál es su e.mail?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Su Mensaje</span>
            <textarea
              rows={7}
              name='message'
              required='true'
              value={form.message}
              onChange={handleChange}
              placeholder='Qué es lo quiere decirme?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <div className="flex gap-4 mt-1">

          <span className="py-6 text-secondary"> <u>Por</u> </span>

          <button
            type='submit'
            className='bg-tertiary rounded-xl outline-none w-fit text-xs text-white font-bold shadow-md shadow-primary'
          >
            <div className='pt-2 px-8 w-full transition ease-in duration-300'>
              <box-icon name='envelope' type='logo' color='#ffffff' size='md' ></box-icon>
            </div>
          </button>

          <span className="py-6 text-secondary"> <u>Ó </u> </span>

          <a className='bg-tertiary rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:cursor-pointer transition ease-linear duration-300 hover:bg-green-500'
          onClick={handleSWhatsApp}>
            <div className='pt-4 px-8'>
              <box-icon name='whatsapp' type='logo' color='#ffffff' size='md' ></box-icon>
            </div>
          </a>

          <p className={`text-sm pt-7 px-8 text-green-500`}>
            <i>
              {loading ? "Enviando..." : ""}
            </i>
          </p>

          </div>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
