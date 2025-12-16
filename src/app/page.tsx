import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Container>
        <header className="py-12">
          <p className="text-sm text-white/70">Dublin, Ireland • Stamp 4</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Gustavo Faria
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Interested in Junior Software / Full‑Stack roles.
          </p>
          <p className="mt-3 max-w-2xl text-white/80">
            Computing Science student (Year 3, expected May 2027) in Dublin. I build full‑stack and 
            optimisation projects using Next.js/Node, SQL/MySQL and Python. Stamp 4 — eligible for full‑time 
            work in Ireland
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black"
              href="#projects"
            >
              View Projects
            </a>

            <a
              className="rounded-xl border border-white/15 px-4 py-2 text-sm"
              href="https://github.com/gustav0fari4"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="rounded-xl border border-white/15 px-4 py-2 text-sm"
              href="https://www.linkedin.com/in/gustavo-cfaria/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="rounded-xl border border-white/15 px-4 py-2 text-sm"
              href="/cv-gustavo-faria.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CV (PDF)
            </a>
          </div>
        </header>

        <main>
          <Section title="About">
            <p className="max-w-3xl text-white/80">
              I enjoy building practical, well-structured software and improving reliability through testing and clear engineering practices.
              I’m especially interested in full‑stack development and problem-solving projects.
            </p>
          </Section>

          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "Java",
                "SQL",
                "Python",
                "React/Next.js",
                "Node.js",
                "MySQL",
                "Git/GitHub",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Projects" id="projects">
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </Section>

          <Section title="Contact">
            <p className="text-white/80">
              Email:{" "}
              <a className="underline" href="mailto:gustaavofaria@hotmail.com">
                gustaavofaria@hotmail.com
              </a>
            </p>

            <p>
              Phone:{" "}
              <a className="underline" href="href=tel:+353831191502">
                +353 83 119 1502
              </a>
              {" • "}
              <a className="underline" href="https://wa.me/353831191502" target="_blank" rel="noreferrer noopener">
              WhatsApp
              </a>
            </p>
          </Section>
        </main>

        <footer className="py-10 text-sm text-white/60">
          © {new Date().getFullYear()} Gustavo Faria
        </footer>
      </Container>
    </div>
  );
}