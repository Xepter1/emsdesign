export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Bloom Botanicals",
    category: "Brand Identity",
    description:
      "Komplette visuelle Identität für ein nachhaltiges Kosmetikunternehmen — von Logo bis Packaging.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    year: "2025",
    tags: ["Logo", "Branding", "Guidelines"],
  },
  {
    id: 2,
    title: "Café Lumière",
    category: "Social Media",
    description:
      "Social-Media-Kampagne und Content-Design für eine Specialty Coffee Roastery in Berlin.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    year: "2025",
    tags: ["Instagram", "Content", "Stories"],
  },
  {
    id: 3,
    title: "Naturkind Tee",
    category: "Packaging",
    description:
      "Packaging-Design für eine handgemachte Bio-Tee-Kollektion mit botanischen Illustrationen.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    year: "2024",
    tags: ["Verpackung", "Illustration", "Print"],
  },
  {
    id: 4,
    title: "Studio Klang",
    category: "Editorial Design",
    description:
      "Magazin-Layout und typographisches Konzept für ein Berliner Musikstudio.",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
    year: "2024",
    tags: ["Magazin", "Typografie", "Layout"],
  },
  {
    id: 5,
    title: "Welle Digital",
    category: "Web Design",
    description:
      "UI/UX Design und visuelle Gestaltung für die Website einer Digital-Marketing-Agentur.",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
    year: "2024",
    tags: ["UI/UX", "Website", "Digital"],
  },
  {
    id: 6,
    title: "Wildblume Festival",
    category: "Illustration",
    description:
      "Illustrierte Poster-Serie und Merchandise-Design für ein Sommer-Musikfestival.",
    imageUrl: "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=600&h=400&fit=crop",
    year: "2023",
    tags: ["Poster", "Illustration", "Merch"],
  },
];
