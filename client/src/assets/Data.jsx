import JS from "./javascript.svg";
import HTML from "./html.svg";
import Express from "./express.png";
import Mongo from "./mongodb.svg";
import Tailwind from "./tailwind.svg";
import CSS from "./css.svg";
import VSCODE from "./vs-code.svg";
import Node from "./nodejs.svg";
import Github from "./github.svg";

// ! Project Images
import About from "./images/about.jpg";
import Port from "./images/port.jpg";
import Port2 from "./images/portfolio3.jpg";
import Sample from "./images/sample.jpg";
import Dental from "./images/dental.jpg";
import Blog from "../assets/images/Blog.jpg";
import Chat from "../assets/images/globalChat.jpg";
import Condor from "../assets/images/condor.jpg";

export const stack_data = [
  JS,
  HTML,
  Express,
  Mongo,
  Tailwind,
  CSS,
  VSCODE,
  Node,
  Github,
];

export const position_data = [
  "Front-End Developer",
  "Back-End Developer",
  "MERN Developer",
  "Web Developer",
];

export const project_data = [About, Port, Port2, Sample, Dental];

export const projects_data = [
  {
    name: "Clanginess",
    image: Sample,
    description: "A web application for ordering management system",
    link: "https://cake-shop-dgvz.onrender.com",
    stacks: ["React Js", "NodeJs", "Express Js", "MongoDB"],
  },

  {
    name: "First Portfolio",
    image: Port,
    description: "My first official portfolio",
    link: "https://portfolio-frontend-ug1h.onrender.com",
    stacks: ["React Js", "NodeJs", "Express Js", "MongoDB"],
  },

  {
    name: "Portfolio",
    image: Port2,
    link: "https://francisalj.onrender.com/",
    description: "My 2nd official portfolio",
    stacks: ["React Js", "NodeJs", "Express Js", "MongoDB"],
  },

  {
    name: "Dental-Suite",
    image: Dental,
    description:
      "Platform for dental clinics with appointment system, dental charts and content-based filtering.",
    stacks: ["React Js", "NodeJs", "Express Js", "MongoDB"],
  },

  {
    name: "Simple Blog",
    image: Blog,
    link: "https://blog-supabase-three.vercel.app/",
    description: "Simple blog website using ReactJs and Supabase",
    stacks: ["ReactJs", "Tailwind", "Redux", "Supabase"],
  },

  {
    name: "Global Chat",
    image: Chat,
    link: "https://chatglobal-socket.vercel.app/",
    description: "Simple chat application using MERN and Socket.io.",
    stacks: ["Reactjs", "NodeJs", "ExpressJs", "MongoDB", "Socket.io"],
  },

  {
    name: "Condor POS Solution Inc.",
    image: Condor,
    link: "https://condorpossolutions.ph/",
    description: "Condor POS website, contribute as a frontend",
    stacks: ["Wordpress"],
  },
];
