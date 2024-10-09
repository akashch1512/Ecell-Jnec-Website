type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "E-Cell JNEC — Empowering Entrepreneurship",
    fullName: "E-Cell JNEC",
    email: "ecelljnec2024@gmail.com",
  },
  hero: {
    name: "Illuminate",
    p: [
      "Hands-On Learning: Build, Collaborate, Succeed!",
    ],
  },
  contact: {
    p: "Get in touch with us",
    h2: "Contact Us",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "How can we help you?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "What is Illuminate",
      content: `Illuminate is a distinguished initiative of E-Cell IIT Bombay, dedicated to igniting the entrepreneurial spirit and refining business acumen among students across India. Our workshops address pivotal aspects such as business models, finance, and core entrepreneurial principles, all aimed at empowering and inspiring future leaders.`,
    },
    experience: {
      p: "Our Journey",
      h2: "Achievements and Initiatives.",
    },
    feedbacks: {
      p: "Our Team",
      h2: "Leads",
    },
    works: {
      p: "Our Work",
      h2: "Projects & Events.",
      content: `Our projects and events reflect our commitment to fostering innovation. 
      Events like 'Srujan', 'Eureka 2024', and 'QR Quest' have brought together students 
      and industry experts to collaborate and learn. Our projects aim to support 
      aspiring entrepreneurs by providing them with the tools and resources they need to succeed.`,
    },
  },
};
