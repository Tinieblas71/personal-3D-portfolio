import React from "react";
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 350,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Descripción general.</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          ¡Hola! Soy Santi M, un programador de 18 años apasionado por crear soluciones digitales impactantes. Desde joven, descubrí mi interés por la tecnología y el diseño, lo que me llevó a especializarme en el desarrollo de software.
          <br />
          Creo en el poder de la tecnología para innovar y generar impacto. Aspiro a crecer en áreas como la programación y la inteligencia artificial, contribuyendo a proyectos significativos que marquen una diferencia.
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Mi objetivo es desarrollar herramientas modernas y funcionales que ayuden a negocios y emprendedores a destacar en el mundo digital.
          <br />
          Además, me esfuerzo por aprender constantemente y evolucionar tanto en lo profesional como en lo personal, siempre buscando nuevas formas de conectar con el futuro a través de la tecnología.
        </motion.p>
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
