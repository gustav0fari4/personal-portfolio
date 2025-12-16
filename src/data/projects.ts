export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "MotoGP Sustainability Calendar Optimisation",
    description:
      "Python project that simulates MotoGP team travel distance and applies SA/GA/PSO optimisation with constraint checks.",
    tech: ["Python", "NumPy", "DEAP", "pyswarms", "simanneal"],
    githubUrl: "https://github.com/gustav0fari4/motogp-sustainability-calendar",
  },
  {
    title: "Full‑Stack Web App (Coming soon)",
    description: "Next.js/Node/MySQL full‑stack project — deploying soon.",
    tech: ["Next.js", "Node.js", "MySQL"],
  },
];