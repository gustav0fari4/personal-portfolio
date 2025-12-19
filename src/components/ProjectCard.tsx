import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {project.image && (
        <div className="relative h-40 w-full">
          <Image
            src={project.image}
            alt={`${project.title} cover`}
            fill
            className="object-cover"
            priority={project.slug === "motogp"}
          />
        </div>
      )}

      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-white/80">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4 text-sm">
          {project.githubUrl && (
            <a className="underline text-white/90" href={project.githubUrl} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a className="underline text-white/90" href={project.liveUrl} target="_blank" rel="noreferrer noopener">
              Live
            </a>
          )}
          {project.slug && (
            <Link className="underline text-white/90" href={`/projects/${project.slug}`}>
              Case study
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}