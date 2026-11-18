export interface ResearchDirection {
  title: string;
  description: string;
}

export interface GrantEntry {
  title: string;
  funder: string;
  date: string;
  amountOrRole?: string;
  description?: string;
}

export interface ResearchContent {
  title: string;
  subtitle: string;
  statement: string;
  directions: readonly ResearchDirection[];
  exploringAreas: readonly string[];
  grants: readonly GrantEntry[];
  grantsEmptyTodo: string;
  foundations: string;
}

export const RESEARCH_CONTENT: ResearchContent = {
  title: "Research",
  subtitle: "What I work on, what I'm curious about, and where I'm headed.",
  statement:
    "My long-term goal is to build machine-learning methods that are reliable enough to be useful in biology and medicine. That means models that know when they don't know, that can be trusted at scale, and that respect the structure of the scientific problem they're applied to.",
  directions: [
    {
      title: "Reliable deep learning",
      description:
        "confidence, abstention, and robustness. Studying how well-calibrated models stay under distribution shift, comparing standard training with data-augmentation approaches such as AugMix on CIFAR-10 Wide ResNets (evaluated on CIFAR-10-C and CIFAR-10.1).",
    },
    {
      title: "Computational biology",
      description:
        "deep learning for the life sciences. Building the foundations to work on single-cell and spatial omics, structural biology, and computer-aided drug discovery.",
    },
  ] satisfies readonly ResearchDirection[],
  exploringAreas: [
    "Deep learning",
    "NLP",
    "Reinforcement learning",
    "Single-cell & spatial omics",
    "Structural biology",
    "Systems biology",
    "Drug discovery",
    "Computational neuroscience",
    "Phylogenetics",
    "Synthetic biology",
    "Precision medicine",
  ] as const,
  grants: [],
  grantsEmptyTodo:
    "None listed yet — add research fellowships, travel grants, or compute credits here.",
  foundations:
    "I study mathematics beyond what my coursework requires — linear algebra and matrix theory, spectral graph theory, abstract algebra, functional analysis, and differential geometry — because I believe strong theory pays off in applied ML. Alongside this I study theoretical physics, computer architecture (GPU and memory hierarchies), neuroscience, and chemistry.",
} as const;
