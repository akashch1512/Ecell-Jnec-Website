import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "200+ Participants",
    icon: web,
  },
  {
    title: "3+ Events",
    icon: mobile,
  },
  {
    title: "40+ Startups Ideas",
    icon: backend,
  },
  {
    title: "20+ Colleges",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Launch Event",
    companyName: "E-Cell JNEC",
    icon: starbucks, // Update with the E-Cell logo if available
    iconBg: "#383E56",
    date: "August 2024",
    points: [
      "Introduction of the E-Cell JNEC to students, discussing the mission, vision, and upcoming plans.",
      "Engaged over 100 students from various departments.",
      "Conducted a session on entrepreneurship and innovation.",
    ],
  },
  {
    title: "Srujan Event",
    companyName: "E-Cell JNEC",
    icon: tesla, // Update with relevant icon
    iconBg: "#E6DEDD",
    date: "September 2024",
    points: [
      "Conducted our first major event, Srujan, which attracted 200+ participants from over 20 colleges.",
      "Focused on startup ideas, entrepreneurship, and the importance of innovation.",
      "Invited notable entrepreneurs for panel discussions and interactive sessions.",
    ],
  },
  {
    title: "QR Quest",
    companyName: "E-Cell JNEC",
    icon: shopify, // Update with relevant icon
    iconBg: "#383E56",
    date: "October 2024",
    points: [
      "Organized a fun and engaging QR Quest for participants to solve challenges related to startups and entrepreneurship.",
      "Winners were rewarded with prizes and mentorship opportunities.",
      "Gained participation from multiple colleges, increasing the reach of E-Cell JNEC.",
    ],
  },
  {
    title: "Upcoming Event: Eureka 2024",
    companyName: "E-Cell JNEC",
    icon: meta, // Update with relevant icon
    iconBg: "#E6DEDD",
    date: "November 2024",
    points: [
      "Planning to host our flagship event, Eureka 2024, to inspire and encourage student-led startups.",
      "Expected participation from over 300 students.",
      "Focus will be on innovative solutions for real-world problems, with guidance from industry experts.",
    ],
  },
];
const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Being the Secretary of E-Cell JNEC has been a transformative experience. Our goal is to nurture entrepreneurship and innovation, and seeing the enthusiasm among students is truly inspiring. Each event we conduct feels like a step towards a brighter future for young innovators.",
    name: "Akash Chaudhari",
    designation: "Secretary",
    company: "E-Cell JNEC",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with Akash's image
  },
  {
    testimonial:
      "As the Vice Secretary, I am constantly amazed by the potential of our team and the students we work with. Our events like QR Quest and Srujan have shown how eager students are to develop their skills and chase entrepreneurial dreams. It's a privilege to be a part of this journey.",
    name: "Nirbhay Khedekar",
    designation: "Vice Secretary",
    company: "E-Cell JNEC",
    image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with Nirbhay's image
  },
  {
    testimonial:
      "The design philosophy at E-Cell JNEC is to make entrepreneurship visually appealing and accessible. Each event is a new challenge for us to create a lasting impression through our visual storytelling.",
    name: "Steven Dsilva",
    designation: "Design Head",
    company: "E-Cell JNEC",
    image: "https://randomuser.me/api/portraits/men/3.jpg", // Replace with Steven's image
  },
];

const projects: TProject[] = [
  {
    name: "Srujan Event",
    description:
      "The first event by E-Cell JNEC, 'Srujan,' focused on inspiring innovation and entrepreneurship among students. With keynote speakers, interactive sessions, and startup idea presentations, this event marked the official launch of E-Cell JNEC.",
    tags: [
      {
        name: "Entrepreneurship",
        color: "blue-text-gradient",
      },
      {
        name: "Innovation",
        color: "green-text-gradient",
      },
      {
        name: "Workshops",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Replace with an appropriate image from the event
    sourceCodeLink: "", // No source code link, can be omitted for events
  },
  {
    name: "QR Quest",
    description:
      "An engaging treasure hunt event where participants decoded QR codes to solve business challenges and puzzles. This event encouraged students to think creatively and collaborate in teams, promoting problem-solving and critical thinking skills.",
    tags: [
      {
        name: "Teamwork",
        color: "blue-text-gradient",
      },
      {
        name: "Problem-Solving",
        color: "green-text-gradient",
      },
      {
        name: "Interactive",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Replace with an appropriate image from the event
    sourceCodeLink: "", // No source code link, can be omitted for events
  },
  {
    name: "Eureka 2024",
    description:
      "A flagship event of E-Cell JNEC, 'Eureka' aims to bring together budding entrepreneurs from across colleges to present their innovative startup ideas. With 200+ participants, the event features competitions, workshops, and mentoring sessions with industry experts.",
    tags: [
      {
        name: "Startup Competition",
        color: "blue-text-gradient",
      },
      {
        name: "Mentoring",
        color: "green-text-gradient",
      },
      {
        name: "Workshops",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Replace with an appropriate image from the event
    sourceCodeLink: "", // No source code link, can be omitted for events
  },
];

export { services, technologies, experiences, testimonials, projects };
