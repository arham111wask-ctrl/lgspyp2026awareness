// Edit this file to update the website's content. No coding knowledge needed —
// just change the text between the quotes.

export const SITE = {
  name: "LEARN KASHMIR",
  tagline: "Understanding Education. Embracing Technology. Empowering Kashmir.",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/then-vs-now", label: "Then vs Now" },
  { to: "/challenges", label: "Challenges" },
  { to: "/voices", label: "Voices" },
  { to: "/survey", label: "Survey" },
  { to: "/solutions", label: "Solutions" },
  { to: "/research", label: "Our Research" },
  { to: "/about", label: "About Us" },
] as const;

// Statistics: set `value` and `source` only once verified. Leave value as null to show a placeholder.
export const STATS: { label: string; value: string | null; source: string | null }[] = [
  { label: "Students in Kashmir with home internet access", value: null, source: null },
  { label: "Schools with smart classrooms", value: null, source: null },
  { label: "Students who use technology for daily study", value: null, source: null },
];

// Interviews: fill in quote, name, and media links (photo/video/audio URLs) once recorded.
export const VOICES: {
  group: string;
  prompt: string;
  quote: string | null;
  name: string | null;
  photo: string | null;
  video: string | null;
  audio: string | null;
}[] = [
  { group: "Students", prompt: "How do you use technology to learn today?", quote: null, name: null, photo: null, video: null, audio: null },
  { group: "Teachers", prompt: "How has teaching changed in your classroom?", quote: null, name: null, photo: null, video: null, audio: null },
  { group: "Parents", prompt: "What do you notice about how your children study?", quote: null, name: null, photo: null, video: null, audio: null },
  { group: "Grandparents", prompt: "What was learning like when you were young?", quote: null, name: null, photo: null, video: null, audio: null },
];

// Research page content.
export const RESEARCH = {
  questions: [
    "How is technology changing the way students in Kashmir learn?",
    "What digital tools do students, teachers and families use for education?",
    "What challenges stop some students from using technology to learn?",
    "How have learning experiences changed across generations?",
    "What actions could make digital learning fairer for everyone?",
  ],
  interviewFindings: [] as { title: string; detail: string }[],
  photos: [] as { src: string; caption: string }[],
  references: [] as { title: string; url?: string }[],
};

// Team: replace names and roles with your nine members.
export const TEAM = Array.from({ length: 9 }, (_, i) => ({
  name: `Team Member ${i + 1}`,
  role: "Researcher",
}));
