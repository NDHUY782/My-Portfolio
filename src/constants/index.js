import { edunet } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  angular,
  bootstrap,
  docker,
  figma,
  snapgram,
  threads,
  facebook,
  sql,
  sqlServer,
  redis,
  nestjs,
  aws,
  mysql,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  // {
  //   imageUrl: mui,
  //   name: "Material-UI",
  //   type: "Frontend",
  // },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: nestjs,
    name: "Nestjs",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Database",
  },
  {
    imageUrl: redis,
    name: "Redis",
    type: "Database",
  },
  {
    imageUrl: sqlServer,
    name: "SQL Server",
    type: "Database",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "DevOps",
  },
  // {
  //   imageUrl: figma,
  //   name: "Figma",
  //   type: "Design",
  // },
];

export const experiences = [
  {
    title: "Back-end Developer (Internship)",
    company_name: "EDUNET Co., Ltd",
    icon: edunet,
    iconBg: "#EEEDEB",
    date: "June 2023 - February  2024",
    points: [
      "Build system: Facial identify system and Check Attendance-Check Time Sheet for customer request by NodejsExpress-Sql",
      "Technologies: Nodejs, Express, JavaScript, Docker.",
      "Designed and optimized database schemas, improving data storage and retrieval eciency",
      "Perform product presentations and demos for QTSC",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    iconUrl: facebook,
    link: "https://www.facebook.com/profile.php?id=100053606777826",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/NDHUY782",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/%C4%91%E1%BB%A9c-huy",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-orange",
    name: "Media Social Web Application - SoulDev",
    description:
      "Welcome to SoulDev, the ultimate destination for developers to connect, collaborate, and innovate. Join our vibrant community to exchange ideas, share insights, and build together. Experience the power of unity in coding.",
    techStack: [
      "Nodejs",
      "Javascript",
      "NextJs",
      "Docker",
      "AWS ",
      "Socket.IO",
    ],
    link: "https://github.com/NDHUY782/SoulDev_Server",
    demoLink: "https://souldev.online",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-green",
    name: "Online Furniture Store Website",
    description:
      "Web E-commerce website allowing furniture buying and selling, product management.",
    techStack: [
      "JavaScript",
      "NodeJS",
      "Express",
      "MongoDB",
      "EJS",
      "Socket.IO",
    ],
    link: "https://github.com/NDHUY782/Huy-Store",
    demoLink: "https://huy-store.onrender.com",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-black",
    name: "Online Pet Store Website",
    description:
      "Web E-commerce website allowing pet buying and selling, product management.",
    techStack: ["NodeJs", "Express", "MongoDb"],
    link: "https://github.com/NDHUY782/PetStore",
    demoLink: "https://familypet.website/",
  },
];
