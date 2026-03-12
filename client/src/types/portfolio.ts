export interface PortfolioProfile {
  fullName: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedInUrl: string;
  summary: string;
  availability: string;
  resumePath: string;
  focusAreas: string[];
  stackHighlights: string[];
}

export interface PortfolioStat {
  value: string;
  label: string;
  description: string;
}

export interface PortfolioExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface PortfolioProject {
  name: string;
  period: string;
  kind: string;
  summary: string;
  challenge: string | null;
  highlights: string[];
  stack: string[];
}

export interface PortfolioEducation {
  period: string;
  institution: string;
  degree: string;
  location: string;
  note: string | null;
}

export interface PortfolioSkillGroup {
  name: string;
  description: string;
  items: string[];
}

export interface PortfolioCertification {
  name: string;
  issuer: string;
}

export interface PortfolioLanguage {
  name: string;
  level: string;
}

export interface PortfolioResponse {
  profile: PortfolioProfile;
  stats: PortfolioStat[];
  experiences: PortfolioExperience[];
  projects: PortfolioProject[];
  education: PortfolioEducation[];
  skillGroups: PortfolioSkillGroup[];
  certifications: PortfolioCertification[];
  languages: PortfolioLanguage[];
  interests: string[];
}
