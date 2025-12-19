import Link from "next/link";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import Image from "next/image";

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
          <Link href="/projects" className="text-sm text-white/70 underline">
            ← Back to Projects
          </Link>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Fruit Machine Game (Java)
          </h1>

          <p className="mt-3 max-w-3xl text-white/80">
            Console-based slot machine game built in Java. Implements a menu-driven
            flow, difficulty levels, credit management, and randomised wheel spins.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative h-56 w-full">
              <Image
                src="/projects/fruit-machine.png"
                alt="Fruit Machine game screenshot"
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
                <li>Menu system (play, rules, credits, buy credits, exit)</li>
                <li>Difficulty selection affecting cost and payout</li>
                <li>Credit system with win/loss updates</li>
                <li>Randomized wheel results using Java Random</li>
                <li>Input validation to avoid invalid menu selections</li>
              </ul>
            </section>

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
              <h2 className="text-xl font-semibold text-white">What I practiced</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>OOP and clean method decomposition</li>
                <li>Control flow and user input handling</li>
                <li>Basic probability (special win chance)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Links</h2>
              <p className="mt-3">
                <a
                  className="underline"
                  href="https://github.com/gustav0Fari4/Fruit-Machine-Game"
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