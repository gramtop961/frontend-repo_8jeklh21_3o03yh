const experiences = [
  {
    title: 'Software Engineering Intern',
    org: 'Tech Startup',
    period: 'Jun 2024 - Aug 2024',
    points: [
      'Built internal dashboards using React and Tailwind CSS.',
      'Improved API performance by optimizing data fetching patterns.',
      'Collaborated with designers and backend engineers in agile sprints.',
    ],
  },
  {
    title: 'Teaching Assistant',
    org: 'University CS Department',
    period: 'Jan 2024 - May 2024',
    points: [
      'Led weekly lab sessions for Web Development course.',
      'Mentored students on JavaScript fundamentals and Git workflows.',
    ],
  },
  {
    title: 'Hackathon Participant',
    org: 'Local Hack Day',
    period: 'Nov 2023',
    points: [
      'Built a full-stack app in 24 hours and won “Best UI” award.',
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <h2 className="mb-8 text-2xl font-bold sm:text-3xl">College Experience</h2>
      <ol className="relative space-y-8 border-l border-gray-200 pl-6 dark:border-white/10">
        {experiences.map((exp, idx) => (
          <li key={idx} className="ml-4">
            <div className="absolute -left-2 mt-2 h-3 w-3 rounded-full border-2 border-white bg-indigo-600 shadow" />
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-zinc-900">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{exp.org}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
