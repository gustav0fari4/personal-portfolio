export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  slug?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "MotoGP Sustainability Calendar Optimisation",
    description:
      "Python project that simulates MotoGP team travel distance and applies SA/GA/PSO optimisation with constraint checks.",
    tech: ["Python", "NumPy", "DEAP", "pyswarms", "simanneal"],
    githubUrl: "https://github.com/gustav0fari4/motogp-sustainability-calendar",
    slug: "motogp",
    image: "/projects/motogplogo.png",
    featured: true,
  },
  {
  title: "Fruit Machine Game (Java)",
  description:
    "Console-based slot machine game with difficulty levels, credit system, and randomized outcomes.",
  tech: ["Java", "OOP", "Random", "Scanner"],
  githubUrl: "https://github.com/gustav0Fari4/Fruit-Machine-Game",
  slug: "fruit-machine",
  image: "/projects/fruit-machine.png",
    featured: true,
  },
  {
    title: "Network Traffic Analyzer",
    description:
      "Captured and analysed traffic from a PCAPNG file, generating metrics like top talkers, protocol breakdown and throughput over time.",
    tech: ["Python", "tshark/Wireshark", "pandas", "TCP/IP"],
    githubUrl: "https://github.com/gustav0fari4/network-traffic-analyzer",
    slug: "network-traffic-analyzer",
    image: "/projects/network-traffic.png",
    featured: false,
  },
  {
    title: "Full Stack Web Dev – Inventory, Rental & Ticketing",
    description:
      "Collection of full-stack apps: Cinema & Inventory Manager, Appliance Tracker (CRUD), and Property Letting Platform with role-based dashboards.",
    tech: ["Next.js", "MySQL", "CRUD", "RBAC", "API Routes"],
    githubUrl: "https://github.com/gustav0fari4/Full-Stack-Web-Dev-Inventory-Rental-Ticketing-",
    slug: "full-stack-web-dev",
    image: "/projects/full-stack-web-dev.png",
    featured: false,
  }
];