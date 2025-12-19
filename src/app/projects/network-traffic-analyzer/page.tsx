import Link from "next/link";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function NetworkTrafficAnalyzerPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />
      <Container>
        <div className="py-10">
          <Link href="/projects" className="text-sm text-white/70 underline">
            ← Back to Projects
          </Link>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Network Traffic Analyzer (Python)
          </h1>

          <p className="mt-3 max-w-3xl text-white/80">
            Mini project focused on network traffic analysis: capture packets (PCAPNG),
            extract fields using tshark, and generate a structured report (CSV/JSON)
            with core traffic metrics.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative h-56 w-full">
              <Image
                src="/projects/network-traffic.png"
                alt="Network traffic screenshot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-8 space-y-8 text-white/80">
            <section>
              <h2 className="text-xl font-semibold text-white">Pipeline</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Capture traffic into PCAPNG (Wireshark/tshark)</li>
                <li>Extract fields to TSV using tshark (src/dst IP, ports, protocol, frame length)</li>
                <li>Analyse TSV with Python + pandas and generate <code>report.json</code> and <code>report.csv</code></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Results (sample capture)</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong>Packets:</strong> 8,189</li>
                <li><strong>Bytes:</strong> 364,411</li>
                <li><strong>Capture duration:</strong> 29.657s</li>
                <li><strong>Average throughput:</strong> ~98.3 kbps</li>
                <li><strong>Protocol breakdown:</strong> TCP (100%)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">What I learned</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>How to capture and inspect traffic using Wireshark/tshark</li>
                <li>How to extract packet-level fields and compute useful aggregates</li>
                <li>How to structure network telemetry into reproducible reports for analysis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Links</h2>
              <p className="mt-3">
                <a
                  className="underline"
                  href="https://github.com/gustav0fari4/network-traffic-analyzer"
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