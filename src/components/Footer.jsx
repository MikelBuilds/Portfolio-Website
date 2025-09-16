export default function Footer() {
  const year = new Date().getFullYear();
  const accent = "#E23744";

  return (
    <footer className="mt-20 bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold">
              Mikel{" "}
              <span
                className="text-[var(--accent)]"
                style={{ "--accent": accent }}
              >
                Fernandes
              </span>
            </h2>
            <p className="mt-3 text-gray-300">
              Full-Stack Developer · DSA Enthusiast
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com/MikelBuilds"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                style={{ "--accent": accent }}
              >
                {/* GitHub */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.77-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.3-1.23 3.3-1.23.67 1.7.25 2.96.13 3.27.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                style={{ "--accent": accent }}
              >
                {/* LinkedIn */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.451 20.451H16.9v-5.569c0-1.329-.027-3.039-1.852-3.039-1.853 0-2.136 1.447-2.136 2.943v5.665H9.363V9h3.4v1.561h.048c.474-.899 1.634-1.848 3.361-1.848 3.595 0 4.257 2.366 4.257 5.442v6.296zM5.337 7.433a1.972 1.972 0 1 1 0-3.944 1.972 1.972 0 0 1 0 3.944zM6.96 20.451H3.714V9h3.247v11.451z" />
                </svg>
              </a>
              <a
                href="mailto:"
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                style={{ "--accent": accent }}
              >
                {/* Email */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.26l8 5.24 8-5.24V6.5a.5.5 0 0 0-.5-.5h-15Zm15.5 3.24-7.46 4.89a1 1 0 0 1-1.08 0L4 9.24V17.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V9.24Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              {[
                { href: "#projects", label: "Projects" },
                { href: "#experience", label: "Experience" },
                { href: "#techstack", label: "Tech Stack" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[var(--accent)] transition-colors"
                    style={{ "--accent": accent }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Call-to-action */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Get in touch
            </h3>
            <p className="mt-4 text-gray-300">
              Open to opportunities, collaborations, and cool ideas.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:"
                className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-4 py-2 font-semibold text-white shadow-md hover:brightness-110 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                style={{ "--accent": accent }}
              >
                Email me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 font-semibold text-white hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                style={{ "--accent": accent }}
              >
                View projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-400 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Mikel Fernandes. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">
              Back to top ↑
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>Built with React, Vite & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
