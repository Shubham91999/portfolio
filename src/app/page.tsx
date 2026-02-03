import About from '../components/home/About';
import EducationSection from '../components/home/ExperienceEducation';
import Certifications from '../components/home/Certifications';
import { AllProjects } from '../components/home/AllProjects';
import Parallax from '../components/home/Parallax';
import SkillsParallax from '../components/home/SkillsParallax';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <div className="overflow-x-hidden w-screen">
      <section className="relative h-screen w-full">
        <Parallax />
      </section>
      
      <section className="relative bg-white dark:bg-neutral-950 w-full">
        <About />
      </section>
      
      <section className="relative bg-neutral-50 dark:bg-black w-full">
        <SkillsParallax />
      </section>
      
      <section className="relative bg-white dark:bg-neutral-950 w-full">
        <AllProjects />
      </section>
      
      <section className="relative bg-neutral-50 dark:bg-black w-full">
        <EducationSection />
      </section>
      
      <section className="relative bg-white dark:bg-neutral-950 w-full">
        <Certifications />
      </section>
      
      <section className="relative bg-neutral-50 dark:bg-black w-full">
        <Contact />
      </section>
    </div>
  );
}
