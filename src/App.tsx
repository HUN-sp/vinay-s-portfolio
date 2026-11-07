import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { OpenSource } from './components/OpenSource';
import { Projects } from './components/Projects';
import { Achievement } from './components/Achievement';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
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
