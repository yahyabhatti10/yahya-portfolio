import { motion } from 'framer-motion';

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

const EducationSection = () => {
  return (
    <section className="bg-black/30 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center text-[#DDFE35]"
      >
        Educational Background
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-4"
      >
        <motion.div variants={item} className="mb-6">
          <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
          <p className="text-[#DDFE35]">
            University of Management and Technology (UMT) • 2021 - 2025
          </p>
          <p className="mt-2">
            Final-year Computer Science student with a CGPA of 3.11. Completed
            coursework in System Design, Advanced Web Technologies, Machine and Deep Learning,
            Neural Networks, Computer Vision, , Database Systems, Object Oriented Programming, Data Structures and Algortithms.
          </p>
        </motion.div>
        <motion.div variants={item}>
          <h3 className="text-xl font-bold">
            Intermediate in Pre-engineering (F.Sc.)
          </h3>
          <p className="text-[#DDFE35]">
            Unique Group of Institutions • 2019 - 2021
          </p>
          <p className="mt-2">
            Specialized in Pre-Engineering, achieving strong grades and building
            a foundation in mathematics and physical sciences.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
