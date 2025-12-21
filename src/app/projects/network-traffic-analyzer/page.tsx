import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Network Traffic Analyzer (Python) | Gustavo Faria",
  description:
    "PCAPNG traffic analysis pipeline using tshark + Python (pandas) to generate JSON/CSV metrics: protocols, top talkers/ports, throughput.",
};

export default function NetworkTrafficAnalyzerPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />

      <Container>
        <div className="py-10">
          <div className="flex items-center justify-between gap-4">

            <Link href="/" className="text-sm text-white/70 underline">
              Home
            </Link>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Network Traffic Analyzer (Python)
          </h1>

          <p className="mt-3 max-w-3xl text-white/80">
            Mini project focused on network traffic analysis: capture packets (PCAPNG),
            extract fields using <code>tshark</code>, and generate a structured report 
            (<code>report.json</code>/<code>report.csv</code>) with core traffic metrics.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative h-80 w-full">
              <Image
                src="/projects/screenshots/capture.png"
                alt="Network traffic analyzer preview"
                fill
                className="object-contain bg-black"
                priority
              />
            </div>
            <p className="px-5 pb-4 text-sm text-white/60">
              Snapshot of a sample run (capture → extract → analyze)
            </p>
          </div>

          <div className="mt-10 space-y-8 text-white/80">
            <section>
              <h2 className="text-xl font-semibold text-white">Pipeline</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Capture traffic into PCAPNG (Wireshark/tshark)</li>
                <li>Extract fields to TSV using tshark (timestamp, src/dst IP, protocol, ports, frame length)</li>
                <li>Analyze TSV with Python + pandas and export JSON/CSV reports for reproducibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Results (sample capture)</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong>Packets:</strong> 598</li>
                <li><strong>Bytes:</strong> 36,210</li>
                <li><strong>Capture duration:</strong> 29.058s</li>
                <li><strong>Average throughput:</strong> ~9.959 kbps</li>
                <li><strong>Protocol breakdown:</strong> TCP (100%)</li>
              </ul>
              <p className="mt-3 text-sm text-white/60">
                Note: numbers depend on the selected interface and capture window.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Metrics computed</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Protocol breakdown (TCP/UDP/ICMP/Other)</li>
                <li>Top talkers (src/dst) by bytes and by packet count</li>
                <li>Top destination ports</li>
                <li>Throughput per second and average throughput (kbps)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Screenshots</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="relative h-80 w-full">
                    <Image
                      src="/projects/screenshots/report.png"
                      alt="Analyzer quick summary output"
                      fill
                      className="object-contain bg-black"
                    />
                  </div>
                  <p className="px-5 pb-4 text-sm text-white/60">
                    Python output summary + generated report files.
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="relative h-80 w-full">
                    <Image
                      src="/projects/screenshots/report.csv.png"
                      alt="tshark extraction output"
                      fill
                      className="object-contain bg-black"
                    />
                  </div>
                  <p className="px-5 pb-4 text-sm text-white/60">
                    Field extraction step (tshark → TSV).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">What I learned</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>How to capture and inspect traffic using Wireshark/tshark</li>
                <li>Extracting packet-level fields and aggregating metrics in Python</li>
                <li>Building a reproducible analysis pipeline (inputs → outputs)</li>
              </ul>
            </section>

            <section>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black"                  
                  href="https://github.com/gustav0fari4/network-traffic-analyzer" target="_blank" rel="noreferrer noopener">
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