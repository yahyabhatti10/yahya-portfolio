import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company: "Upwork",
    duration: "2022 - Present",
    description: "Developed scalable, high-performance web applications for clients globally. Specialized in React.js for frontend and Python Django for backend development."
  },
  {
    title: "Software Development Intern",
    company: "Artilence Pvt. Ltd.",
    duration: "June 2023 - Aug 2023",
    description: "Worked on Generative AI projects, building Retrieval-Augmented Generation (RAG) systems using OpenAI models, LangChain, and Streamlit. Performed web scraping using Scrapy, Beautiful Soup, and Selenium. Developed automation scripts and contributed to an AI Interviewer System using FastAPI."
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

const ExperienceSection = () => {
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
          Work Experience
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative pl-8 border-l-2 border-[#DDFE35]"
            >
              <div className="absolute w-4 h-4 bg-[#DDFE35] rounded-full -left-[9px] top-2" />
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-[#DDFE35] text-sm mb-1">
                {exp.company} • {exp.duration}
              </p>
              <p className="text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
