import { motion } from 'framer-motion';

const VolunteerExperience = () => {
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

  const volunteerExperiences = [
    {
      role: 'President',
      organization: 'UMT ACM Student Chapter',
      duration: 'Nov 2023 - Nov 2024',
      description:
        'Led the UMT ACM Student Chapter with 30+ team members and 1000+ community members for 1 year, organizing workshops, hackathons, and events to foster innovation and collaboration in science and technology.',
    },
    {
      role: 'Student Volunteer',
      organization: 'Rizq • Social Services',
      description:
        'Committed to making an impact and helping those in need in our community through social services and food distribution initiatives in the Holy Month of Ramadan.',
    },
    {
      role: 'Volunteer',
      organization: 'Pakistan Citizens Alliance',
      duration: 'Mar 2024 - Present',
      description:
        'Raised funds to overcome water crises in rural areas of Pakistan, such as Rahim Yar Khan, contributing to improving living conditions for affected communities.',
    },
    {
      role: 'Campus Ambassador 2024',
      organization: 'SOFTEC • Science and Technology',
      description:
        'Recognized as a top ambassador for successfully leading and representing UMT ACM with 20+ teams. Collaborated with participants to foster innovation, teamwork, and a passion for technology, contributing to one of the region’s most renowned tech events.',
    },
  ];

  return (
    <section className="bg-black/30 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center text-[#DDFE35]"
      >
        Volunteer Experience
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        {volunteerExperiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={item}
            className="mb-6 p-4 bg-[#1a1a1a] rounded-lg shadow-lg hover:shadow-[#DDFE35]/20 transition-all"
          >
            <h3 className="text-xl font-bold text-white">{experience.role}</h3>
            <p className="text-[#DDFE35]">
              {experience.organization} {experience.duration && `• ${experience.duration}`}
            </p>
            <p className="mt-2 text-gray-300">{experience.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default VolunteerExperience;
