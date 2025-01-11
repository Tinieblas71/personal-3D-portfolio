import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  webmaker,
  appleswebsite,
  java,
  mysql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca De",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "testimonials",
    title: "Testimonios",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Jr. Software Developer",
    icon: web,
  },
  {
    title: "Jr. Web Full Stack",
    icon: mobile,
  },
  {
    title: "Machine Learning Student",
    icon: backend,
  },
  {
    title: "Jr. Movile App Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Pensé que era imposible hacer un sitio web tan bonito como nuestro producto, pero Santi me demostró que estaba equivocada.",
    name: "Carmen Ortiz",
    designation: "Asesor inmobiliario",
    company: "Independiente",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Santi no solo creó un sitio web increíble, sino que también entendió perfectamente la esencia de nuestro negocio y cómo reflejarla en cada detalle.",
    name: "Karla García",
    designation: "Especialista en Educación",
    company: "Cognitribu",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "Lo que más me sorprendió de Santi fue su capacidad para transformar nuestras ideas en un sitio web funcional y hermoso que conecta con nuestros clientes.",
    name: "Franciso Montes",
    designation: "Gerente",
    company: "Donut Station",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const projects = [
  {
    name: "Apple's Website Clone",
    description:
      "Recreé el sitio web oficial del iPhone 15 Pro con React, Tailwind CSS, Three.js y GSAP. Enfrenté desafíos para replicar la experiencia exacta del sitio web, en particular al implementar un modelo 3D del iPhone.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "orange-text-gradient",
      },
    ],
    image: appleswebsite,
    source_code_link: "https://iphone-doc.vercel.app/",
  },
  {
    name: "Web Maker's",
    description:
      "Construí un sitio web para alojar un proyecto, una web estática, utilizando React y TaildwinCSS principalmente, implementando un diseño llamativo, utilicé framer-motion para añadir animaciones suaves.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "text-fuchsia-400",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: webmaker,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
