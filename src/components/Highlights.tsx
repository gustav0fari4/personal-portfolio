export function Highlights() {
  const items = [
    "Optimisation project (Python): SA/GA/PSO + constraint checks + unit tests.",
    "Network Traffic Analyzer (Python + tshark/Wireshark): PCAPNG field extraction + JSON/CSV reporting (top talkers/ports, protocol breakdown, throughput).",
    "Java/OOP project: menu-driven console game, input validation, randomised outcomes, credit system.",
    "Full-stack suite (Next.js + MySQL): CRUD apps com API routes, auth e role-based access (tenant/landlord/admin) (inventory, rentals, ticketing).",
    "Leadership: process improvement and team coordination in high‑pressure environments.",
  ];

  return (
    <ul className="list-disc space-y-2 pl-5 text-white/80">
      {items.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  );
}