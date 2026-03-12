export interface PortfolioProfileDto {
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

export interface PortfolioStatDto {
  value: string;
  label: string;
  description: string;
}

export interface ExperienceDto {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ProjectDto {
  name: string;
  period: string;
  kind: string;
  summary: string;
  challenge: string | null;
  highlights: string[];
  stack: string[];
}

export interface EducationDto {
  period: string;
  institution: string;
  degree: string;
  location: string;
  note: string | null;
}

export interface SkillGroupDto {
  name: string;
  description: string;
  items: string[];
}

export interface CertificationDto {
  name: string;
  issuer: string;
}

export interface SpokenLanguageDto {
  name: string;
  level: string;
}

export interface PortfolioResponseDto {
  profile: PortfolioProfileDto;
  stats: PortfolioStatDto[];
  experiences: ExperienceDto[];
  projects: ProjectDto[];
  education: EducationDto[];
  skillGroups: SkillGroupDto[];
  certifications: CertificationDto[];
  languages: SpokenLanguageDto[];
  interests: string[];
}
