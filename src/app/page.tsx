import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Highlights } from "@/components/Highlights";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />
      <Container>
        <header className="py-12">
          <p className="text-sm text-white/70">Dublin, Ireland • Stamp 4</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Gustavo Faria
          </h1>

          <p className="mt-3 max-w-2xl text-white/80">
            Computing Science student (Year 3, expected May 2027) in Dublin. I build
            full‑stack and optimisation projects using Next.js/Node, SQL/MySQL, and Python,
            with a strong focus on clean code, testing fundamentals, and reliability.
            Stamp 4 — eligible for full‑time work in Ireland.
          </p>

          <p className="mt-2 max-w-2xl text-white/70">
            Interested in Junior Software / Full‑Stack roles and interships.
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
              I am a third-year Computing Science student in Dublin (expected May 2027) building projects across <b> 
              full-stack development</b> and <b>optimisation</b>. I focus on clean, maintainable code, strong fundamentals
              (OOP, SQL, REST), and testing where applicable. Currently, I am looking for a junior/internship opportunity
              where I can contribute to shipping features, learn from experienced engineers, and keep improving as a developer.
            </p>
          </Section>

          <Section title="Highlights" id="highlights">
            <Highlights />
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

          <Section title="Featured Projects" id="projects">
            <div className="grid gap-4 md:grid-cols-2">
              {featuredProjects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>

            <div className="mt-6">
              <Link
                className="inline-block rounded-xl border border-white/15 px-4 py-2 text-sm text-white/90"
                href="/projects"
              >
                View all projects →
              </Link>
            </div>
          </Section>

          <Section title="Experience" id="experience">
            <div className="space-y-6 text-white/80">
              <div>
                <p className="font-semibold text-white">
                  Sous Chef — Gather & Gather (Catering for Tech Companies), Dublin
                </p>
                <p className="text-sm text-white/60">Mar 2022 – Present</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>Lead day-to-day operations, coordinating inventory, procurement, suppliers, and compliance.</li>
                  <li>Implemented workflow improvements to reduce waste and improve resource allocation.</li>
                  <li>Collaborated across teams to maintain service quality under pressure.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Restaurant Manager — McDonald’s, São Paulo, Brazil
                </p>
                <p className="text-sm text-white/60">Aug 2008 – Jun 2019</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>Managed large teams and daily operations, focusing on training, performance routines, and compliance.</li>
                  <li>Supported KPI-driven planning, budgeting, and forecasting through structured reporting.</li>
                  <li>Progressed through multiple roles over time through consistent performance and leadership.</li>
                </ul>
              </div>
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
          <p>
            <a className="underline text-white/70" href="#">
              Back to top
            </a>
          </p>
        </footer>
      </Container>
    </div>
  );
}