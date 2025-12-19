export function Highlights() {
  const items = [
    "Optimisation project (Python): SA/GA/PSO + constraint checks + unit tests.",
    "Java/OOP project: menu-driven console game, input validation, randomised outcomes, credit system.",
    "Full‑stack (in progress): authentication, CRUD APIs and MySQL integration.",
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