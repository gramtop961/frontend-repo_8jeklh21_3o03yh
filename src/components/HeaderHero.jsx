import { Github, Linkedin, Mail } from 'lucide-react';

export default function HeaderHero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-rose-200 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
          Portfolio
        </p>
        <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
          Hi, I’m <span className="underline decoration-white/60 underline-offset-4">Your Name</span>
        </h1>
        <p className="mt-3 max-w-2xl text-white/90 sm:text-lg">
          A passionate learner who loves building things on the web. Focused on clean design, solid fundamentals, and continuous growth.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow md:text-base"
          >
            <Mail size={18} /> Contact Me
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white/95 transition hover:bg-white/10 md:text-base"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white/95 transition hover:bg-white/10 md:text-base"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
