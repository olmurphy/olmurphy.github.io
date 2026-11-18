export type MemberRole = "phd" | "masters" | "undergrad" | "alumni";

export interface GroupMember {
  name: string;
  role: MemberRole;
  period: string;
  researchFocus: string;
  coAdvisor?: string;
  website?: string;
  nextPosition?: string;
}

export interface GroupContent {
  title: string;
  subtitle: string;
  prospectiveNote: string;
  members: readonly GroupMember[];
}

export const GROUP_CONTENT: GroupContent = {
  title: "Research Group",
  subtitle:
    "Current Ph.D. students, master's and undergraduate researchers, and alumni.",
  prospectiveNote:
    "Prospective Ph.D. and M.S. students interested in reliable deep learning, computational biology, or multi-agent systems are welcome to reach out with their CV and research interests.",
  members: [],
} as const;
