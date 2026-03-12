import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { createPrismaPgAdapter } from '../src/prisma/adapter';

const adapter = createPrismaPgAdapter();
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.portfolioProfile.deleteMany();

  await prisma.portfolioProfile.create({
    data: {
      fullName: 'Yassine El Idrissi',
      headline: 'Junior Full-Stack Developer',
      tagline:
        'NestJS, React and PostgreSQL builder with a security-first mindset.',
      location: 'Vandoeuvre-les-Nancy, France',
      email: 'elid.yass123@gmail.com',
      phone: '+33 7 53 77 08 39',
      githubUrl: 'http://github.com/YassineInnovator',
      linkedInUrl: 'https://www.linkedin.com/in/yassine-el-idrissi-6b1223290/',
      summary:
        'Master 2 Computer Science student focused on full-stack web development, application security and software engineering. Looking for a 6-month internship starting March 20, 2026.',
      availability: 'Available for a 6-month internship starting March 20, 2026',
      resumePath: '/cv/CV_YassineELidrissi.pdf',
      focusAreas: [
        'TypeScript products from UI to API',
        'Secure web engineering and threat-aware thinking',
        'CI/CD, containers and developer experience',
      ],
      stackHighlights: [
        'TypeScript',
        'React',
        'NestJS',
        'PostgreSQL',
        'GraphQL',
        'Docker',
      ],
      stats: {
        create: [
          {
            value: '3',
            label: 'Internships',
            description:
              'Software engineering, SOC analysis, and web development experience.',
            displayOrder: 1,
          },
          {
            value: '4',
            label: 'Flagship projects',
            description:
              'Health-tech, DevOps, campus software, and security tooling.',
            displayOrder: 2,
          },
          {
            value: 'M2',
            label: 'Current degree',
            description:
              'Master 2 Computer Science, Software Engineering at FST Nancy.',
            displayOrder: 3,
          },
          {
            value: '20 Mar',
            label: 'Available from',
            description:
              'Open to a 6-month internship from March 20, 2026.',
            displayOrder: 4,
          },
        ],
      },
      experiences: {
        create: [
          {
            period: 'Jun 2025 - Aug 2025',
            role: 'Software Development Intern',
            company: 'NEWDEV MAROC',
            location: 'Fez, Morocco',
            summary:
              'Built a modular stock and cash register management system with a modern TypeScript stack.',
            highlights: [
              'Implemented product tracking, supplier management, and stock movement workflows.',
              'Worked with NestJS, Angular, TypeORM, and GraphQL on a business-critical internal platform.',
            ],
            stack: ['NestJS', 'Angular', 'TypeORM', 'GraphQL'],
            displayOrder: 1,
          },
          {
            period: 'Jun 2024 - Sep 2024',
            role: 'Security Analyst Intern (SOC)',
            company: 'SINGLA LA GIRONDE',
            location: 'Casablanca, Morocco',
            summary:
              'Designed a SOC-oriented tool to detect suspicious network activity using Python and machine learning.',
            highlights: [
              'Automated security alerts to shorten investigation loops.',
              'Worked on packet analysis and suspicious traffic detection.',
            ],
            stack: ['Python', 'Machine Learning', 'Network Analysis'],
            displayOrder: 2,
          },
          {
            period: 'Jul 2023 - Sep 2023',
            role: 'Web Development Intern',
            company: 'ALTEN',
            location: 'Fez, Morocco',
            summary:
              'Developed a trainee management web application for internal operational use.',
            highlights: [
              'Implemented the app with PHP, HTML, and CSS.',
              'Delivered a simple administrative workflow for managing internship activity.',
            ],
            stack: ['PHP', 'HTML', 'CSS'],
            displayOrder: 3,
          },
        ],
      },
      projects: {
        create: [
          {
            name: 'Aura',
            period: '2025 - 2026',
            kind: 'Academic health-tech platform',
            summary:
              'Designed a health monitoring dashboard with NestJS, React, and GraphQL to move beyond a classic REST-only architecture.',
            challenge:
              'Turned natural language questions into structured data access for better decision support.',
            highlights: [
              'Integrated an OpenAI-powered assistant to translate natural language into structured queries.',
              'Designed secure storage for health and time-series data with MongoDB.',
            ],
            stack: ['NestJS', 'React', 'GraphQL', 'MongoDB', 'OpenAI API'],
            displayOrder: 1,
          },
          {
            name: 'DevOps and Infrastructure Automation',
            period: '2025 - 2026',
            kind: 'Academic infrastructure project',
            summary:
              'Reduced deployment friction by standardizing builds, tests, and runtime environments.',
            challenge:
              'Eliminated setup drift and made every code change reproducible.',
            highlights: [
              'Built a GitLab CI pipeline so every change was containerized, built, and tested automatically.',
              'Configured Docker, SSH access, and firewall rules for remote server hardening.',
            ],
            stack: ['Docker', 'GitLab CI/CD', 'Linux', 'SSH'],
            displayOrder: 2,
          },
          {
            name: 'CampusSoft',
            period: '2025 - 2026',
            kind: 'Team software project',
            summary:
              'Built campus management software in a Scrum team of six with a strong delivery workflow.',
            challenge:
              'Coordinated team delivery while keeping deployment reliable.',
            highlights: [
              'Implemented CI/CD flows around a Next.js and PostgreSQL stack.',
              'Worked in a collaborative team environment with agile ceremonies and shared ownership.',
            ],
            stack: ['Next.js', 'PostgreSQL', 'Scrum', 'CI/CD'],
            displayOrder: 3,
          },
          {
            name: 'Web Vulnerability Scanner',
            period: '2024 - 2025',
            kind: 'Academic security tool',
            summary:
              'Created a Python tool to analyze and identify common weaknesses in web applications.',
            challenge:
              'Automated recurring security checks to make issues visible earlier.',
            highlights: [
              'Focused on practical vulnerability discovery for common web patterns.',
              'Strengthened my application security and automation fundamentals.',
            ],
            stack: ['Python', 'Security Testing', 'Automation'],
            displayOrder: 4,
          },
        ],
      },
      education: {
        create: [
          {
            period: '2025 - Present',
            institution: 'FST Nancy',
            degree: 'Master 2 Computer Science - Software Engineering',
            location: 'Nancy, France',
            note: 'Current program',
            displayOrder: 1,
          },
          {
            period: '2024 - 2025',
            institution: 'ESISA',
            degree: 'Master 1 Information Systems Engineering',
            location: 'Fez, Morocco',
            displayOrder: 2,
          },
          {
            period: '2021 - 2024',
            institution: 'ESISA',
            degree: 'Bachelor in Software Engineering',
            location: 'Fez, Morocco',
            displayOrder: 3,
          },
          {
            period: '2018 - 2019',
            institution: 'Groupe Scolaire Omega Sciences',
            degree: 'Baccalaureate in Physical Sciences',
            location: 'Fez, Morocco',
            displayOrder: 4,
          },
        ],
      },
      skillGroups: {
        create: [
          {
            name: 'Languages',
            description: 'Core programming languages used across projects and coursework.',
            items: ['TypeScript', 'Python', 'Java', 'C#', 'C++', 'SQL'],
            displayOrder: 1,
          },
          {
            name: 'Frameworks',
            description: 'Frontend and backend tools already applied in academic and internship work.',
            items: [
              'NestJS',
              'React',
              'Next.js',
              'Spring Boot',
              'Angular',
              'Flask',
              'Django',
              '.NET',
              'Flutter',
            ],
            displayOrder: 2,
          },
          {
            name: 'Databases',
            description: 'Relational and document databases used for product and platform work.',
            items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
            displayOrder: 3,
          },
          {
            name: 'DevOps and Tools',
            description: 'Tooling for delivery, infrastructure, debugging, and team workflows.',
            items: ['Docker', 'Kubernetes', 'GitLab CI/CD', 'Git', 'Postman', 'Linux'],
            displayOrder: 4,
          },
          {
            name: 'Testing',
            description: 'Testing foundations already explored, with room to deepen further.',
            items: ['Jest', 'Jasmine', 'Karma'],
            displayOrder: 5,
          },
          {
            name: 'Human skills',
            description: 'The collaboration habits I bring into junior teams.',
            items: [
              'Communication',
              'Teamwork',
              'Problem solving',
              'Autonomy',
              'Technical curiosity',
            ],
            displayOrder: 6,
          },
        ],
      },
      certifications: {
        create: [
          {
            name: 'Introduction to Cybersecurity',
            issuer: 'Cisco',
            displayOrder: 1,
          },
          {
            name: 'Networking Basics',
            issuer: 'Cisco',
            displayOrder: 2,
          },
          {
            name: 'Linux Essentials',
            issuer: 'NDG',
            displayOrder: 3,
          },
        ],
      },
      languages: {
        create: [
          {
            name: 'Arabic',
            level: 'Native',
            displayOrder: 1,
          },
          {
            name: 'French',
            level: 'Fluent (DELF B2)',
            displayOrder: 2,
          },
          {
            name: 'English',
            level: 'Advanced',
            displayOrder: 3,
          },
        ],
      },
      interests: {
        create: [
          {
            label: 'Swimming',
            displayOrder: 1,
          },
          {
            label: 'Travel',
            displayOrder: 2,
          },
          {
            label: 'Cycling',
            displayOrder: 3,
          },
          {
            label: 'Video games',
            displayOrder: 4,
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
