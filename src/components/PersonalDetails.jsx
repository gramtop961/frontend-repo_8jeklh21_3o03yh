export default function PersonalDetails() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Personal Details</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="mt-2 text-gray-700">
            I’m a curious and motivated student who enjoys building web projects, learning modern tools, and collaborating with others. I value clean code, thoughtful design, and a growth mindset.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900">
          <h3 className="text-lg font-semibold">Contact</h3>
          <dl className="mt-3 grid grid-cols-3 gap-2 text-sm">
            <dt className="col-span-1 text-gray-500">Email</dt>
            <dd className="col-span-2">your.email@example.com</dd>
            <dt className="col-span-1 text-gray-500">Location</dt>
            <dd className="col-span-2">Your City, Country</dd>
            <dt className="col-span-1 text-gray-500">Interests</dt>
            <dd className="col-span-2">Web Dev, UI/UX, Open Source</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
