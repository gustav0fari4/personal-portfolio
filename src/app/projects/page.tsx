import Link from "next/link";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />

      <Container>
        <div className="py-10">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
            <Link href="/" className="text-sm text-white/70 underline">
              ← Back to Home
            </Link>
          </div>

          <p className="mt-3 max-w-3xl text-white/80">
            Selected academic and personal projects. Click “Case study” for
            detailed write-ups where available.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}