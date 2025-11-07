import HeaderHero from './components/HeaderHero';
import SkillsGrid from './components/SkillsGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import PersonalDetails from './components/PersonalDetails';

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500">
      <div className="flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="#skills" className="hover:text-gray-700">Skills</a>
          <a href="#experience" className="hover:text-gray-700">Experience</a>
          <a href="#about" className="hover:text-gray-700">About</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <HeaderHero />
      <main>
        <SkillsGrid />
        <ExperienceTimeline />
        <PersonalDetails />
      </main>
      <Footer />
    </div>
  );
}
