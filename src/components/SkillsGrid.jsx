const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'HTML & CSS', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Git & GitHub', level: 'Advanced' },
  { name: 'REST APIs', level: 'Intermediate' },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold sm:text-3xl">Skills</h2>
        <span className="text-sm text-gray-500">Tap a card to see level</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-zinc-900"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">{skill.name}</p>
              <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white">
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
