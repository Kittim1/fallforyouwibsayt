/* ============================================================
   EDIT THIS FILE to change your content and images.
   Images can be:
     - a local path   -> "assets/me.png"   (put the file in the assets/ folder)
     - a web URL      -> "https://..."
     - left as ""     -> a placeholder is shown
   You can ALSO change images directly in the browser:
   click the "Edit images" button (bottom-right), then click any image.
   ============================================================ */

window.SITE = {
  brand: "ABDUL INC.",
  name: "Kittim",
  badge: "I'M A WEB DEVELOPER",
  headline: "I build things for the web.",
  intro:
    "I'm a passionate web developer specializing in building exceptional digital experiences with modern technologies.",
  email: "kittim.ignalig8@gmail.com",
  phone: "+63 991 295 4239",
  cvFile: "assets/cv.pdf", // put your CV here

  images: {
    hero: "assets/tims.jpg",          // your photo (transparent PNG looks best)
    testimonialAvatar: "assets/sarah.jpg"
  },

  tech: ["html5", "css3", "javascript", "typescript", "react", "nodejs", "git"],

  about: {
    title: "I'm passionate about creating digital solutions",
    text:
      "With 4+ years of experience in web development, I help businesses and individuals bring their ideas to life through clean, efficient, and user-friendly code.",
    stats: [
      { icon: "calendar", value: "4+", label: "Years Experience" },
      { icon: "code", value: "50K+", label: "Projects Completed" },
      { icon: "smile", value: "30+", label: "Happy Clients" },
      { icon: "trophy", value: "100%", label: "Client Satisfaction" }
    ]
  },

  skills: [
    { name: "HTML", icon: "html5", level: 95 },
    { name: "React.js", icon: "react", level: 85 },
    { name: "Node.js", icon: "nodejs", level: 80 },
    { name: "CSS", icon: "css3", level: 90 },
    { name: "Next.js", icon: "nextjs", level: 80 },
    { name: "Tailwind CSS", icon: "tailwindcss", level: 90 },
    { name: "JavaScript", icon: "javascript", level: 90 },
    { name: "TypeScript", icon: "typescript", level: 85 },
    { name: "Git", icon: "git", level: 85 }
  ],

  projects: [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack e-commerce solution with modern UI/UX",
      image: "assets/project1.png",
      link: "#"
    },
    {
      title: "Task Management App",
      desc: "Collaborative task management application",
      image: "assets/project2.png",
      link: "#"
    },
    {
      title: "Crypto Dashboard",
      desc: "Real-time cryptocurrency tracking dashboard",
      image: "assets/project3.png",
      link: "#"
    }
  ],

  cta: {
    title: "Have a project in mind?",
    text: "I'm always open to discussing new projects and opportunities. Let's create something amazing together!"
  },

  testimonial: {
    quote:
      "Alex is an exceptional developer who delivers high-quality work on time. His attention to detail and problem-solving skills are outstanding.",
    author: "Sarah Johnson",
    role: "CEO, TechStart"
  },

  social: {
    github: "https://github.com/Kittim1",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/timoyyyyy_"
  }
};
