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

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            MotoGP Sustainability Calendar Optimisation
          </h1>

          <p className="mt-3 max-w-3xl text-white/80">
            Python project that simulates MotoGP team travel distance and applies
            Simulated Annealing, Genetic Algorithms and Particle Swarm Optimisation
            to reduce logistics cost while respecting scheduling constraints.
          </p>

          <div className="mt-8 space-y-8 text-white/80">
            <section>
              <h2 className="text-xl font-semibold text-white">Screenshots</h2>
  
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <a
                    href="/projects/screenshots/results.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-zoom-in"
                    title="Open full size"
                  >
                    <div className="relative h-80 w-full">
                      <Image
                        src="/projects/screenshots/results.png"
                        alt="Optimisation results output"
                        fill
                        className="object-contain bg-black"
                      />
                    </div>
                  </a>
                  <p className="px-5 pb-4 text-sm text-white/60">
                    Best overall strategy (SA)                  
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <a
                    href="/projects/screenshots/constraints.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-zoom-in"
                    title="Open full size"
                  >
                    <div className="relative h-80 w-full">
                      <Image
                        src="/projects/screenshots/constraints.png"
                        alt="Constraint checks output"
                        fill
                        className="object-contain bg-black"
                      />
                    </div>
                  </a>
                  <p className="px-5 pb-4 text-sm text-white/60">
                    Constraint checks + baseline vs PSO improvement                  
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 space-y-8 text-white/80">
            <section>
              <h2 className="text-xl font-semibold text-white">Results</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Baseline distance (original calendar): <strong>146,768.18 km</strong>
                </li>
                <li>
                  Best overall strategy: <strong>Simulated Annealing</strong>
                </li>
                <li>
                  Best distance (SA, no penalties): <strong>124,200.20 km</strong>
                </li> 
                <li>
                  Improvement vs baseline: <strong>22,567.98 km</strong> (~<strong>15.38%</strong>)
                </li>
                <li>
                  Constraint checks: <strong>temperature OK</strong>, <strong>summer shutdown OK</strong>,{" "}
                  <strong>no duplicates</strong>, <strong>Valencia fixed</strong>, <strong>no triple headers</strong>
                </li>
              </ul>
            </section>

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
              <h2 className="text-xl font-semibold text-white">What I learned</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>How to model a real-world logistics problem with constraints and penalties</li>
                <li>Trade-offs between SA/GA/PSO approaches and parameter tuning</li>
                <li>Building reliable code with unit tests and reproducible environments</li>
              </ul>
            </section>

            <section>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black"
                  href="https://github.com/gustav0fari4/motogp-sustainability-calendar" target="_blank" rel="noreferrer noopener">
                  View on GitHub
                </a>
                <Link className="rounded-xl border border-white/15 px-4 py-2 text-sm" href="/projects">
                  Back to Projects
                </Link>
              </div>
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