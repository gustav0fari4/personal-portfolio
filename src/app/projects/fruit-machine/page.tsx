import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Fruit Machine Game (Java) | Gustavo Faria",
  description:
    "Console-based slot machine game in Java with credits, difficulty levels, and randomized outcomes.",
};

export default function FruitMachinePage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />

      <Container>
        <div className="py-10">
          <div className="flex items-center justify-between gap-4">
            <Link href="/projects" className="text-sm text-white/70 underline">
              ← Back to Projects
            </Link>
  
            <Link href="/" className="text-sm text-white/70 underline">
              Home
            </Link>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Fruit Machine Game (Java)
          </h1>

          <p className="mt-3 max-w-3xl text-white/80">
            Console-based slot machine game built in Java. Implements a menu-driven
            flow, difficulty levels, credit management, <code>Random</code>.
          </p>

          <section className="mt-6">
            <h2 className="text-xl font-semibold text-white">Screenshot</h2>

            <div className="mt-4 overflow-hidden rounded 2x1 border border-white/10 bg-white/5">
              <div className="relative h-[520px] w-full">
                <Image
                src="/projects/screenshots/console.png"
                alt="Fruit Machine console output"
                fill
                className="object-contain bg-black"
                priority
                />
              </div>

              <p className="px-5 pb-4 text-sm text-white/60">
                Example gameplay: menu → difficulty selection → spin result → credits update.
              </p>
            </div>
          </section>

          <div className="mt-8 space-y-8 text-white/80">

            <section>
              <h2 className="text-xl font-semibold text-white">Gameplay rules</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Starting credits: <strong>100</strong></li>
                <li>Cost per game: <strong>10 credits</strong> × difficulty</li>
                <li>Difficulty levels: Easy (x1), Medium (x2), Hard (x3)</li>
                <li>Payouts: 3 matches → higher payout, 2 matches → payout, no match → 0</li>
                <li>Special win: 5% chance when matching <strong>'7'</strong> symbols</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Implementation notes</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Separeted responsibilities into small methods (menu, input validation, spin, payouts).</li>
                <li>Used robust input parsin with retry loop to avoid crashes from invalid input.</li>
                <li>Implemented difficulty scaling for both cost and winnings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Sample run</h2>
              <p className="mt-2 text-white/70">
                Short excerpt from a run (trimmed):
              </p>

              <pre className="mt-4 overflow-auto rounded-2xl border border-white/10 bg-black/60 p-4 text-sm text-white/80">
{`*********Grand Casino*********
1. Play a new game
2. See ruleset
3. See remaining credits
4. Buy credits
5. Exit

Enter your choice: 1

=== Choose Difficulty ===
1. Easy (x1)
2. Medium (x2)
3. Hard (x3)

Enter difficulty level: 2

=== Spin Result ===
|   7   | |   $   | |   #   |
Credits won 0
Remaining credits 80`}
              </pre>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Key features</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Menu system (play, rules, credits, buy credits, exit)</li>
                <li>Difficulty selection affecting cost and payout</li>
                <li>Credit system with win/loss updates</li>
                <li>Randomized wheel results using Java Random</li>
                <li>Input validation to avoid invalid menu selections</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">What I practiced</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Input validation + retry loop (try/catch, parsing)</li>
                <li>State management via credits variable</li>
                <li>Randomness.probability logic</li>
              </ul>
            </section>

            <section>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black"
                  href="https://github.com/gustavoFari4/Fruit-Machine-Game" target="_blank" rel="noreferrer noopener">
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