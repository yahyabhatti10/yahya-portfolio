import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import VolunteerWorkSection from "./components/VolunteerSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-[#121212] text-white">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <VolunteerWorkSection />
      <Footer/>
    </div>
  );
}

export default App;
