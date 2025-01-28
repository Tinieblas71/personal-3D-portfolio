import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { styles } from "../styles";
import { favicon } from "../assets";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Desarrollador de Software.",
      "Estudiante Autodidacta.",
      "Desarrollador Web.",
      "Estudiante de IA.",
      "Freelancer",
      "Diseñador.",
    ],
    loop: {},
  });

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-5`}
      >
        <div className="text-center">
          {/* Encabezado */}
          <h1
            className={`${styles.heroHeadText} text-4xl md:text-5xl lg:text-6xl font-bold text-white`}
          >
            Hola, soy <span className="text-[#82ecff]">Santi M.</span>
          </h1>

          {/* Subtítulo con efecto de escritura */}
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-white-100 leading-relaxed">
            <span className="text-[#82ecff] font-semibold">Soy </span>
            <b className="font-light">{text}</b>
            <Cursor className="text-[#82ecff]" />
          </p>
        </div>
        <img
          src={favicon}
          alt="Santis Logo"
          width={400}
          height={400}
          className="mt-8"
        />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
