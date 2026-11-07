import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { OpenSource } from './components/OpenSource';
import { Projects } from './components/Projects';
import { Achievement } from './components/Achievement';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProgressRail } from './components/ProgressRail';
import { useReveal } from './hooks/useReveal';
import { useScrollSpy } from './hooks/useScrollSpy';

const IDS = ['top', 'experience', 'open-source', 'projects', 'achievement', 'skills', 'contact'];

export default function App() {
  useReveal();
  const { active, progress } = useScrollSpy(IDS);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header active={active} />
      <ProgressRail ids={IDS} active={active} progress={progress} />
      <main id="main">
        <Hero />
        <Experience />
        <OpenSource />
        <Projects />
        <Achievement />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
