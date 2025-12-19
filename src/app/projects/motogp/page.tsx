import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";

export default function MotoGPProjectPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />
      <Container>
        <div className="py-10">
          <Link href="/projects" className="text-sm text-white/70 underline">
            ← Back to Projects
          </Link>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            MotoGP Sustainability Calendar Optimisation
          </h1>

          <p className="mt-3 max-w-3xl text-white/80">
            Python project that simulates MotoGP team travel distance and applies
            Simulated Annealing, Genetic Algorithms and Particle Swarm Optimisation
            to reduce logistics cost while respecting scheduling constraints.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative h-56 w-full">
              <Image
                src="/projects/motogplogo.png"
                alt="MotoGP project cover"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-8 space-y-8 text-white/80">
            <section>
              <h2 className="text-xl font-semibold text-white">Key features</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Distance simulation using Haversine formula and week-by-week travel rules</li>
                <li>Constraint checks (temperature limits, summer shutdown, no triple headers, fixed finale)</li>
                <li>Penalty-based objective function to guide optimisation</li>
                <li>Unit tests to validate parsing and calculations</li>
                <li>Reproducible setup with requirements.txt + environment.yml</li>
              </ul>
            </section>

            <section>
  <h2 className="text-xl font-semibold text-white">Results (example)</h2>
  <ul className="mt-3 list-disc space-y-2 pl-5">
    <li>
      Baseline distance (original calendar): <strong>TODO km</strong>
    </li>
    <li>
      Best optimised distance: <strong>TODO km</strong>
    </li>
    <li>
      Improvement: <strong>TODO km</strong> (TODO%)
    </li>
    <li>
      Constraints satisfied: temperature range, summer shutdown, no triple headers, fixed finale
    </li>
  </ul>
  <p className="mt-3 text-sm text-white/60">
    paste the numbers printed by your Python script output here.
  </p>
</section>

<section>
  <h2 className="text-xl font-semibold text-white">What I learned</h2>
  <ul className="mt-3 list-disc space-y-2 pl-5">
    <li>How to model a real-world logistics problem with constraints and penalties</li>
    <li>Trade-offs between SA/GA/PSO approaches and parameter tuning</li>
    <li>Building reliable code with unit tests and reproducible environments</li>
  </ul>
</section>

            <section>
              <h2 className="text-xl font-semibold text-white">Links</h2>
              <p className="mt-3">
                <a
                  className="underline"
                  href="https://github.com/gustav0fari4/motogp-sustainability-calendar"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub repository
                </a>
              </p>
            </section>
            <Link href="/" className="inline-block rounded-xl border border-white/15 px-4 py-2 text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}