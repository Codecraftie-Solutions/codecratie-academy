// Public offer tiers shown on the homepage. Edit prices here.
export type Tier = {
  name: string;
  price: string;
  positioning: string;
  lead?: string;
  items: string[];
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    name: "Foundation",
    price: "₦80,000",
    positioning: "Learn the foundations and build real projects.",
    items: [
      "8-week technical curriculum",
      "Live sessions",
      "Projects",
      "Resource library",
      "Assessments",
      "Instructor feedback",
    ],
  },
  {
    name: "Career Launch",
    price: "₦150,000",
    positioning: "Learn the skills, build the proof, and prepare yourself to pursue real opportunities.",
    lead: "Everything in Foundation, plus:",
    items: [
      "CV and LinkedIn optimization",
      "GitHub and portfolio review",
      "Interview preparation",
      "Freelancing fundamentals",
      "Upwork profile optimization",
      "Client acquisition and proposal training",
      "Client communication and scoping",
    ],
    featured: true,
  },
  {
    name: "1:1 Pro",
    price: "₦300,000",
    positioning: "Personalized career and freelance coaching.",
    lead: "Everything in Career Launch, plus individual coaching on:",
    items: [
      "CV, LinkedIn and portfolio",
      "Upwork profile and proposals",
      "Positioning and interviews",
      "Your personal action plan",
    ],
  },
];
