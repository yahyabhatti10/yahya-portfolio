import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="bg-black/30 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-[#DDFE35]"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-7xl mx-auto text-center text-lg"
        >
          I am a dedicated Full Stack Software Engineer passionate about creating scalable, high-performance web applications and software solutions. With expertise in modern frontend frameworks like React.js and backend technologies including Python Django REST, Node.js, and Express.js, I thrive on delivering seamless user experiences and robust systems. My interests include building innovative solutions in AI leveraging cutting-edge tools like LangChain. Passionate about problem-solving, I enjoy challenges like LeetCoding and continuously improving my skills to tackle complex technical problems. With a keen interest in AI, Generative AI, Machine Learning, Deep Learning, Neural Networks, and a vast knowledge of LLMs, I stay curious about advancements that shape the future of technology. Always eager to explore new challenges, I focus on crafting efficient, user-friendly applications that drive impact.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
