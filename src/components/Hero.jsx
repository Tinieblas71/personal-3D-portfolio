import { motion, useTime } from "framer-motion";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { favicon } from "../assets"

const Hero = () => {

  const [ text ] = useTypewriter({
    words: ['Jr Software Dev.' ,'Estudiante Autodidacta.', 'Freelancer.', 'Estudiante de IA.','Web Full-Stack Dev.'],
    loop: {},
  });


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-5`}
        >
        <div className="">
          <h1 className={`${styles.heroHeadText}`}>
            Hola, Soy <span className='text-[#82ecff]'>Santi M.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           <span className='text-[#82ecff]'> Soy </span> <i>{text}</i><Cursor/> <br className='sm:block hidden' />
          </p>
        </div>
        <img src={favicon} alt="Santis Logo" width={400} height={400} className="mt-8"/>
      </div>

      {/*<ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
