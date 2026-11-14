export interface ReadingItem {
  title?: string;
  book?: string;
  suffix?: string;
}

export interface LearningCategory {
  heading: string;
  items: readonly ReadingItem[];
}

export const LEARNING_CONTENT = {
  title: "Learning",
  subtitle:
    "What I'm studying outside of coursework. It shows how I think, and it's a good conversation starter.",
  reflection:
    "Self-studying textbooks from first principles—from spectral graph theory and matrix analysis down to GPU memory hierarchies and biochemistry—has changed how I read ML papers. Seeing the same variational, spectral, and dynamical structures reappear across electrodynamics, statistical physics, and molecular systems helps me strip away library abstractions and focus on underlying mathematical mechanisms.",
  categories: [
    {
      heading: "Mathematics",
      items: [
        { title: "Graduate-level linear algebra and matrix theory" },
        { book: "Graph Theory", suffix: " — Diestel" },
        { book: "Abstract Algebra", suffix: " — Dummit & Foote" },
        {
          title: "Spectral graph theory; next: ",
          book: "Introduction to Smooth Manifolds",
          suffix: " — Lee",
        },
      ],
    },
    {
      heading: "Computer science",
      items: [
        { book: "Computer Architecture", suffix: " — Hennessy & Patterson" },
        { book: "Distributed Systems", suffix: " — van Steen & Tanenbaum" },
        { book: "Computer Networking", suffix: " — Kurose & Ross" },
        {
          title: "Compilers (Aho et al.), HPC (Grama), cloud computing (Hwang)",
        },
      ],
    },
    {
      heading: "Natural sciences",
      items: [
        { book: "Introduction to Electrodynamics", suffix: " — Griffiths" },
        { book: "Organic Chemistry", suffix: " — Clayden" },
        { title: "Biochemistry, genetics, and neuroscience" },
        { title: "Robotics — Lynch & Park, Spong, Thrun" },
      ],
    },
  ] satisfies readonly LearningCategory[],
} as const;
