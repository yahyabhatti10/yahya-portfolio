import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Interviewer",
    description:
      "Built a system that uses OpenAI's GPT models to parse resumes and auto-fill application forms. The system includes an AI-driven VAPI interviewer and evaluation module, which analyzes interview transcripts and scores candidates.",
    technologies: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "VAPI"],
    link: "https://github.com/yahyabhatti10/ATS",
  },
  {
    title: "Feel Great System Website",
    description:
      "Created a professional affiliate marketing website for the US Client, focusing on user engagement and seamless navigation to showcase health products of Unicity.",
    technologies: ["JavaScript", "React.js", "Bootstrap", "EmailJS"],
    link: "https://www.feelgreathealthelixir.com/",
  },
  {
    title: "RAG-based UMT Chatbot",
    description:
      "Developed a Retrieval-Augmented Generation (RAG) chatbot of UMT using LangChain and OpenAI models. The chatbot answers queries related to university information by retrieving data from a database populated through web scraping of UMT website using Python Scrapy framework.",
    technologies: ["Python", "LangChain", "OpenAI", "Scrapy", "Streamlit"],
    link: "https://github.com/yahyabhatti10/umt-scraper",
  },
  {
    title: "Airbnb Database Clone",
    description:
      "Developed a Airbnb clone using MySQL and API integration, incorporating advanced database features like joins, stored procedures, and triggers for efficient data management, enabling seamless accommodation booking, user communication, and reviews.",
    technologies: ["Database", "MySQL", "Node.js", "Express.js"],
    link: "https://github.com/yahyabhatti10/Resiluxe",
  },
  {
    title: "Hospital Emergency Ward System",
    description:
      "Developed a system to manage hospital emergency wards, using a Priority Queue which implemented with a Linked List, system ensures that patients are prioritized based on the severity of their condition, enabling quick and effective decision-making by hospital staff.",
    technologies: ["C++", "Data Structures", "Priority Queue"],
    link: "https://github.com/yahyabhatti10/Hospital-Emergency-Ward-System",
  },
  {
    title: "Health & Fitness Gym Website",
    description:
      "Developed a responsive gym website for an Australian client using HTML, CSS, JavaScript, PHP, and MySQL. Built entirely from scratch, the site features secure user registration and login, comprehensive membership management, and a dynamic review system that allows users to post feedback and update their details seamlessly.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/yahyabhatti10/gym-website",
  },
  {
    title: "Math Tutor Chatbot",
    description:
      "Designed a chatbot that provides step-by-step solutions to math problems. Integrated with YouTube API to recommend video resources for further learning.",
    technologies: ["Python", "LangChain", "Streamlit", "YouTube", "OpenAI"],
    link: "https://github.com/yahyabhatti10",
  },
  {
    title: "AI Name & Domain Finder",
    description:
      "Developed a Python-based script to generate project names using OpenAI's GPT models and verify domain name availability via GoDaddy's API. Results were exported to an Excel sheet for convenience.",
    technologies: ["Python", "OpenAI", "Automation", "Prompt Engineering"],
    link: "https://github.com/yahyabhatti10/AI---NameFinder-",
  },
  {
    title: "Course Registration Automation Script",
    description:
      "Created a Python automation script to handle course registration on a busy university portal. The script continuously checks for available slots in preferred courses and registers them automatically.",
    technologies: ["Python", "Selenium", "Automation"],
    link: "https://github.com/yahyabhatti10",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-[#DDFE35]"
        >
          Projects
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={item}
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#DDFE35]/10 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#DDFE35] text-black px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-[#DDFE35] hover:underline"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
