import type { PortfolioResponse } from '../types/portfolio';

export type Locale = 'en' | 'fr';

export interface AppCopy {
  metaTitle: string;
  navigationLabel: string;
  languageSwitcherLabel: string;
  openMenu: string;
  closeMenu: string;
  sections: Array<{
    href: string;
    label: string;
  }>;
  status: {
    loadingEyebrow: string;
    loadingTitle: string;
    loadingCopy: string;
    errorEyebrow: string;
    errorTitle: string;
    errorCta: string;
  };
  hero: {
    downloadCv: string;
    emailMe: string;
    currentFocus: string;
  };
  intros: {
    focus: {
      eyebrow: string;
      title: string;
      copy: string;
    };
    projects: {
      eyebrow: string;
      title: string;
      copy: string;
    };
    experience: {
      eyebrow: string;
      title: string;
      copy: string;
    };
    skills: {
      eyebrow: string;
      title: string;
      copy: string;
    };
    education: {
      eyebrow: string;
      title: string;
      copy: string;
    };
    more: {
      eyebrow: string;
      title: string;
      copy: string;
    };
  };
  detailTitles: {
    certifications: string;
    languages: string;
    interests: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    copy: string;
  };
}

export const appCopy: Record<Locale, AppCopy> = {
  en: {
    metaTitle: 'Yassine El Idrissi | Junior Full-Stack Developer',
    navigationLabel: 'Main navigation',
    languageSwitcherLabel: 'Language switcher',
    openMenu: 'Menu',
    closeMenu: 'Close',
    sections: [
      { href: '#projects', label: 'Projects' },
      { href: '#experience', label: 'Experience' },
      { href: '#skills', label: 'Skills' },
      { href: '#education', label: 'Story' },
      { href: '#contact', label: 'Contact' },
    ],
    status: {
      loadingEyebrow: 'Loading',
      loadingTitle: 'Assembling the portfolio',
      loadingCopy: 'Fetching profile data from the NestJS API.',
      errorEyebrow: 'API required',
      errorTitle: 'Portfolio data is offline',
      errorCta: 'Contact Yassine',
    },
    hero: {
      downloadCv: 'Download CV',
      emailMe: 'Email me',
      currentFocus: 'Current focus',
    },
    intros: {
      focus: {
        eyebrow: 'Profile',
        title: 'A junior profile with clear direction',
        copy:
          'The goal is simple: ship modern web products, keep the delivery pipeline clean, and grow inside a strong engineering team.',
      },
      projects: {
        eyebrow: 'Projects',
        title: 'Work that already reflects my target stack',
        copy:
          'These builds show the direction of the portfolio: TypeScript-heavy products, practical architecture choices, and a visible engineering process behind the UI.',
      },
      experience: {
        eyebrow: 'Experience',
        title: 'Internships across software, web, and security',
        copy:
          'The portfolio is junior by title, but not empty by practice. Each internship added a different layer: product delivery, security visibility, or direct web implementation.',
      },
      skills: {
        eyebrow: 'Stack',
        title: 'Technical range with a TypeScript center of gravity',
        copy:
          'NestJS, React, and PostgreSQL sit at the center, but the wider stack already includes security tooling, cloud-minded workflows, and delivery automation.',
      },
      education: {
        eyebrow: 'Education',
        title: 'Academic path',
        copy:
          'My current path combines software engineering depth with practical full-stack projects.',
      },
      more: {
        eyebrow: 'More',
        title: 'Certifications, languages, and interests',
        copy:
          'A junior portfolio should still feel human. This section adds the signals around communication, language range, and personal energy.',
      },
    },
    detailTitles: {
      certifications: 'Certifications',
      languages: 'Languages',
      interests: 'Interests',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Open to junior full-stack opportunities',
      copy:
        'I am looking for a 6-month internship from March 20, 2026. If your team needs a motivated junior developer who already works with NestJS, React, and PostgreSQL, this portfolio is ready for the conversation.',
    },
  },
  fr: {
    metaTitle: 'Yassine El Idrissi | Developpeur full-stack junior',
    navigationLabel: 'Navigation principale',
    languageSwitcherLabel: 'Selection de la langue',
    openMenu: 'Menu',
    closeMenu: 'Fermer',
    sections: [
      { href: '#projects', label: 'Projets' },
      { href: '#experience', label: 'Experience' },
      { href: '#skills', label: 'Competences' },
      { href: '#education', label: 'Parcours' },
      { href: '#contact', label: 'Contact' },
    ],
    status: {
      loadingEyebrow: 'Chargement',
      loadingTitle: 'Chargement du portfolio',
      loadingCopy: "Recuperation des donnees depuis l'API NestJS.",
      errorEyebrow: 'API requise',
      errorTitle: 'Les donnees du portfolio sont indisponibles',
      errorCta: 'Contacter Yassine',
    },
    hero: {
      downloadCv: 'Telecharger le CV',
      emailMe: "M'ecrire",
      currentFocus: 'Focus actuel',
    },
    intros: {
      focus: {
        eyebrow: 'Profil',
        title: 'Un profil junior avec une direction claire',
        copy:
          "L'objectif est simple : livrer des produits web modernes, garder une chaine de livraison propre et progresser dans une equipe d'ingenierie solide.",
      },
      projects: {
        eyebrow: 'Projets',
        title: 'Des projets deja alignes avec ma stack cible',
        copy:
          "Ces realisations montrent la direction du portfolio : des produits centres sur TypeScript, des choix d'architecture concrets et un vrai processus d'ingenierie derriere l'interface.",
      },
      experience: {
        eyebrow: 'Experience',
        title: 'Des stages entre logiciel, web et securite',
        copy:
          "Le portfolio est junior par le titre, mais pas vide dans la pratique. Chaque stage a ajoute une couche differente : livraison produit, visibilite securite ou implementation web directe.",
      },
      skills: {
        eyebrow: 'Stack',
        title: 'Une base technique large avec TypeScript au centre',
        copy:
          "NestJS, React et PostgreSQL sont au coeur du profil, avec autour des outils de securite, des workflows orientes cloud et de l'automatisation de livraison.",
      },
      education: {
        eyebrow: 'Formation',
        title: 'Parcours academique',
        copy:
          'Mon parcours actuel combine une vraie profondeur en genie logiciel avec des projets full-stack concrets.',
      },
      more: {
        eyebrow: 'Plus',
        title: 'Certifications, langues et centres dinteret',
        copy:
          'Un portfolio junior doit aussi rester humain. Cette section ajoute des signaux autour de la communication, des langues et de mon energie personnelle.',
      },
    },
    detailTitles: {
      certifications: 'Certifications',
      languages: 'Langues',
      interests: 'Centres dinteret',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Ouvert aux opportunites full-stack junior',
      copy:
        "Je recherche un stage de 6 mois a partir du 20 mars 2026. Si votre equipe a besoin d'un developpeur junior motive qui travaille deja avec NestJS, React et PostgreSQL, ce portfolio est pret pour la discussion.",
    },
  },
};

const frenchText: Record<string, string> = {
  'Unable to load the portfolio API. Start the Nest server and seed PostgreSQL first.':
    "Impossible de charger l'API du portfolio. Demarrez le serveur Nest et initialisez PostgreSQL d'abord.",
  'Unable to load the portfolio data.':
    'Impossible de charger les donnees du portfolio.',
  'Failed to fetch': 'Impossible de recuperer les donnees.',
  'Junior Full-Stack Developer': 'Developpeur full-stack junior',
  'NestJS, React and PostgreSQL builder with a security-first mindset.':
    "Constructeur d'applications NestJS, React et PostgreSQL avec une approche orientee securite.",
  'Master 2 Computer Science student focused on full-stack web development, application security and software engineering. Looking for a 6-month internship starting March 20, 2026.':
    "Etudiant en Master 2 informatique, oriente developpement web full-stack, securite applicative et genie logiciel. Je recherche un stage de 6 mois a partir du 20 mars 2026.",
  'Available for a 6-month internship starting March 20, 2026':
    'Disponible pour un stage de 6 mois a partir du 20 mars 2026',
  'TypeScript products from UI to API':
    "Produits TypeScript de l'interface a l'API",
  'Secure web engineering and threat-aware thinking':
    'Ingenierie web securisee et reflexes orientes menace',
  'CI/CD, containers and developer experience':
    'CI/CD, conteneurs et experience developpeur',
  Internships: 'Stages',
  'Software engineering, SOC analysis, and web development experience.':
    'Experience en genie logiciel, analyse SOC et developpement web.',
  'Flagship projects': 'Projets majeurs',
  'Health-tech, DevOps, campus software, and security tooling.':
    'Health-tech, DevOps, logiciel campus et outillage securite.',
  'Current degree': 'Diplome actuel',
  'Master 2 Computer Science, Software Engineering at FST Nancy.':
    'Master 2 informatique, genie logiciel a la FST Nancy.',
  'Available from': 'Disponible a partir du',
  'Open to a 6-month internship from March 20, 2026.':
    'Disponible pour un stage de 6 mois a partir du 20 mars 2026.',
  '20 Mar': '20 mars',
  'Jun 2025 - Aug 2025': 'Juin 2025 - Aout 2025',
  'Jun 2024 - Sep 2024': 'Juin 2024 - Septembre 2024',
  'Jul 2023 - Sep 2023': 'Juillet 2023 - Septembre 2023',
  '2025 - Present': "2025 - Aujourd'hui",
  'Software Development Intern': 'Stagiaire developpement logiciel',
  'Security Analyst Intern (SOC)': 'Stagiaire analyste securite (SOC)',
  'Web Development Intern': 'Stagiaire developpement web',
  'Fez, Morocco': 'Fes, Maroc',
  'Casablanca, Morocco': 'Casablanca, Maroc',
  'Built a modular stock and cash register management system with a modern TypeScript stack.':
    "Conception d'un systeme modulaire de gestion de stock et de caisse avec une stack TypeScript moderne.",
  'Implemented product tracking, supplier management, and stock movement workflows.':
    'Mise en place du suivi produit, de la gestion fournisseurs et des flux de mouvement de stock.',
  'Worked with NestJS, Angular, TypeORM, and GraphQL on a business-critical internal platform.':
    'Travail avec NestJS, Angular, TypeORM et GraphQL sur une plateforme interne critique pour le metier.',
  'Designed a SOC-oriented tool to detect suspicious network activity using Python and machine learning.':
    "Conception d'un outil oriente SOC pour detecter les activites reseau suspectes avec Python et le machine learning.",
  'Automated security alerts to shorten investigation loops.':
    "Automatisation des alertes de securite pour reduire le temps d'investigation.",
  'Worked on packet analysis and suspicious traffic detection.':
    "Travail sur l'analyse de paquets et la detection de trafic suspect.",
  'Developed a trainee management web application for internal operational use.':
    "Developpement d'une application web de gestion des stagiaires pour un usage operationnel interne.",
  'Implemented the app with PHP, HTML, and CSS.':
    "Implementation de l'application avec PHP, HTML et CSS.",
  'Delivered a simple administrative workflow for managing internship activity.':
    "Livraison d'un workflow administratif simple pour gerer l'activite de stage.",
  'Academic health-tech platform': 'Plateforme academique health-tech',
  'Designed a health monitoring dashboard with NestJS, React, and GraphQL to move beyond a classic REST-only architecture.':
    "Conception d'un tableau de bord de suivi de sante avec NestJS, React et GraphQL pour depasser une architecture REST classique.",
  'Turned natural language questions into structured data access for better decision support.':
    'Transformation de questions en langage naturel en acces structure aux donnees pour une meilleure aide a la decision.',
  'Integrated an OpenAI-powered assistant to translate natural language into structured queries.':
    "Integration d'un assistant alimente par OpenAI pour traduire le langage naturel en requetes structurees.",
  'Designed secure storage for health and time-series data with MongoDB.':
    'Conception dun stockage securise pour les donnees de sante et de series temporelles avec MongoDB.',
  'DevOps and Infrastructure Automation': 'DevOps et automatisation dinfrastructure',
  'Academic infrastructure project': 'Projet academique dinfrastructure',
  'Reduced deployment friction by standardizing builds, tests, and runtime environments.':
    'Reduction des frictions de deploiement en standardisant les builds, les tests et les environnements dexecution.',
  'Eliminated setup drift and made every code change reproducible.':
    'Suppression des derives de configuration pour rendre chaque changement reproductible.',
  'Built a GitLab CI pipeline so every change was containerized, built, and tested automatically.':
    'Mise en place dun pipeline GitLab CI pour containeriser, builder et tester automatiquement chaque changement.',
  'Configured Docker, SSH access, and firewall rules for remote server hardening.':
    'Configuration de Docker, des acces SSH et des regles firewall pour durcir un serveur distant.',
  'Team software project': 'Projet logiciel en equipe',
  'Built campus management software in a Scrum team of six with a strong delivery workflow.':
    'Developpement dun logiciel de gestion de campus dans une equipe Scrum de six personnes avec un workflow de livraison solide.',
  'Coordinated team delivery while keeping deployment reliable.':
    'Coordination de la livraison equipe tout en gardant un deploiement fiable.',
  'Implemented CI/CD flows around a Next.js and PostgreSQL stack.':
    'Mise en place de flux CI/CD autour dune stack Next.js et PostgreSQL.',
  'Worked in a collaborative team environment with agile ceremonies and shared ownership.':
    'Travail dans un environnement collaboratif avec ceremonies agiles et responsabilite partagee.',
  'Web Vulnerability Scanner': 'Scanner de vulnerabilites web',
  'Academic security tool': 'Outil academique de securite',
  'Created a Python tool to analyze and identify common weaknesses in web applications.':
    'Creation dun outil Python pour analyser et identifier les faiblesses courantes des applications web.',
  'Automated recurring security checks to make issues visible earlier.':
    'Automatisation de controles de securite recurrents pour rendre les problemes visibles plus tot.',
  'Focused on practical vulnerability discovery for common web patterns.':
    'Concentration sur la detection pratique de vulnerabilites dans des schemas web courants.',
  'Strengthened my application security and automation fundamentals.':
    'Renforcement de mes bases en securite applicative et en automatisation.',
  'Master 2 Computer Science - Software Engineering':
    'Master 2 informatique - genie logiciel',
  'Current program': 'Programme en cours',
  'Master 1 Information Systems Engineering':
    "Master 1 ingenierie des systemes d'information",
  'Bachelor in Software Engineering':
    'Licence en genie logiciel',
  'Baccalaureate in Physical Sciences':
    'Baccalaureat en sciences physiques',
  Languages: 'Langages',
  'Core programming languages used across projects and coursework.':
    'Langages principaux utilises dans les projets et le cursus.',
  Frameworks: 'Frameworks',
  'Frontend and backend tools already applied in academic and internship work.':
    'Outils frontend et backend deja utilises dans les projets academiques et les stages.',
  Databases: 'Bases de donnees',
  'Relational and document databases used for product and platform work.':
    'Bases relationnelles et documentaires utilisees pour des produits et des plateformes.',
  'DevOps and Tools': 'DevOps et outils',
  'Tooling for delivery, infrastructure, debugging, and team workflows.':
    "Outillage pour la livraison, l'infrastructure, le debug et les workflows dequipe.",
  Testing: 'Tests',
  'Testing foundations already explored, with room to deepen further.':
    'Bases de test deja explorees, avec encore de la marge pour aller plus loin.',
  'Human skills': 'Soft skills',
  'The collaboration habits I bring into junior teams.':
    "Les habitudes de collaboration que j'apporte dans une equipe junior.",
  Communication: 'Communication',
  Teamwork: "Travail d'equipe",
  'Problem solving': 'Resolution de problemes',
  Autonomy: 'Autonomie',
  'Technical curiosity': 'Curiosite technique',
  'Introduction to Cybersecurity': 'Introduction a la cybersecurite',
  'Networking Basics': 'Bases reseau',
  'Linux Essentials': 'Fondamentaux Linux',
  Native: 'Natif',
  'Fluent (DELF B2)': 'Courant (DELF B2)',
  Advanced: 'Avance',
  Swimming: 'Natation',
  Travel: 'Voyage',
  Cycling: 'Cyclisme',
  'Video games': 'Jeux video',
};

function translateText(value: string, locale: Locale) {
  if (locale === 'en') {
    return value;
  }

  return frenchText[value] ?? value;
}

function translateMaybe(value: string | null, locale: Locale) {
  if (value === null) {
    return null;
  }

  return translateText(value, locale);
}

function translateList(values: string[], locale: Locale) {
  return values.map((value) => translateText(value, locale));
}

export function localizePortfolio(
  portfolio: PortfolioResponse,
  locale: Locale,
): PortfolioResponse {
  if (locale === 'en') {
    return portfolio;
  }

  return {
    profile: {
      ...portfolio.profile,
      headline: translateText(portfolio.profile.headline, locale),
      tagline: translateText(portfolio.profile.tagline, locale),
      location: translateText(portfolio.profile.location, locale),
      summary: translateText(portfolio.profile.summary, locale),
      availability: translateText(portfolio.profile.availability, locale),
      focusAreas: translateList(portfolio.profile.focusAreas, locale),
      stackHighlights: translateList(portfolio.profile.stackHighlights, locale),
    },
    stats: portfolio.stats.map((stat) => ({
      ...stat,
      value: translateText(stat.value, locale),
      label: translateText(stat.label, locale),
      description: translateText(stat.description, locale),
    })),
    experiences: portfolio.experiences.map((experience) => ({
      ...experience,
      period: translateText(experience.period, locale),
      role: translateText(experience.role, locale),
      location: translateText(experience.location, locale),
      summary: translateText(experience.summary, locale),
      highlights: translateList(experience.highlights, locale),
      stack: translateList(experience.stack, locale),
    })),
    projects: portfolio.projects.map((project) => ({
      ...project,
      name: translateText(project.name, locale),
      period: translateText(project.period, locale),
      kind: translateText(project.kind, locale),
      summary: translateText(project.summary, locale),
      challenge: translateMaybe(project.challenge, locale),
      highlights: translateList(project.highlights, locale),
      stack: translateList(project.stack, locale),
    })),
    education: portfolio.education.map((item) => ({
      ...item,
      period: translateText(item.period, locale),
      degree: translateText(item.degree, locale),
      location: translateText(item.location, locale),
      note: translateMaybe(item.note, locale),
    })),
    skillGroups: portfolio.skillGroups.map((group) => ({
      ...group,
      name: translateText(group.name, locale),
      description: translateText(group.description, locale),
      items: translateList(group.items, locale),
    })),
    certifications: portfolio.certifications.map((certification) => ({
      ...certification,
      name: translateText(certification.name, locale),
      issuer: translateText(certification.issuer, locale),
    })),
    languages: portfolio.languages.map((language) => ({
      ...language,
      name: translateText(language.name, locale),
      level: translateText(language.level, locale),
    })),
    interests: translateList(portfolio.interests, locale),
  };
}

export function localizeRuntimeMessage(message: string, locale: Locale) {
  return translateText(message, locale);
}
