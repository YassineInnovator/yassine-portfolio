import { useEffect, useState } from 'react';
import { fetchPortfolio } from './lib/api';
import type { PortfolioResponse } from './types/portfolio';
import './App.css';

const sections = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Story' },
  { href: '#contact', label: 'Contact' },
];

function SectionIntro(props: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{props.eyebrow}</span>
      <h2>{props.title}</h2>
      <p>{props.copy}</p>
    </div>
  );
}

function App() {
  const [portfolio, setPortfolio] = useState<PortfolioResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const loadPortfolio = async () => {
      try {
        const data = await fetchPortfolio();

        if (active) {
          setPortfolio(data);
        }
      } catch (loadError) {
        if (active) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : 'Unable to load the portfolio data.',
          );
        }
      }
    };

    void loadPortfolio();

    return () => {
      active = false;
    };
  }, []);

  if (error) {
    return (
      <main className="status-view">
        <div className="status-card">
          <span className="eyebrow">API required</span>
          <h1>Portfolio data is offline</h1>
          <p>{error}</p>
          <a className="button-primary" href="mailto:elid.yass123@gmail.com">
            Contact Yassine
          </a>
        </div>
      </main>
    );
  }

  if (!portfolio) {
    return (
      <main className="status-view">
        <div className="status-card">
          <span className="eyebrow">Loading</span>
          <h1>Assembling the portfolio</h1>
          <p>Fetching profile data from the NestJS API.</p>
        </div>
      </main>
    );
  }

  const { profile, stats, projects, experiences, skillGroups } = portfolio;
  const phoneHref = `tel:${profile.phone.replace(/\s+/g, '')}`;
  const socialLinks = [
    { label: 'GitHub', href: profile.githubUrl },
    { label: 'LinkedIn', href: profile.linkedInUrl },
  ];

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#home">
          YEI
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {sections.map((section) => (
            <a key={section.href} href={section.href}>
              {section.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-content">
        <section className="section-panel hero-panel" id="home">
          <div className="hero-copy">
            <span className="eyebrow">{profile.availability}</span>
            <p className="headline-pill">{profile.headline}</p>
            <h1>{profile.fullName}</h1>
            <p className="hero-summary">{profile.summary}</p>

            <div className="cta-row">
              <a className="button-primary" href={profile.resumePath} download>
                Download CV
              </a>
              <a className="button-secondary" href={`mailto:${profile.email}`}>
                Email me
              </a>
            </div>

            <div className="contact-strip">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>{profile.location}</span>
              <a href={phoneHref}>{profile.phone}</a>
            </div>

            <div className="social-row">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="social-link"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="stack-row">
              {profile.stackHighlights.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span className="hero-card-label">Current focus</span>
              <div className="hero-monogram">YE</div>
            </div>
            <p className="hero-card-copy">{profile.tagline}</p>

            <div className="stats-grid">
              {stats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <h3>{stat.label}</h3>
                  <p>{stat.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-panel" id="focus">
          <SectionIntro
            eyebrow="Profile"
            title="A junior profile with clear direction"
            copy="The goal is simple: ship modern web products, keep the delivery pipeline clean, and grow inside a strong engineering team."
          />

          <div className="focus-grid">
            {profile.focusAreas.map((focusArea, index) => (
              <article key={focusArea} className="focus-card">
                <span className="focus-index">0{index + 1}</span>
                <p>{focusArea}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel" id="projects">
          <SectionIntro
            eyebrow="Projects"
            title="Work that already reflects my target stack"
            copy="These builds show the direction of the portfolio: TypeScript-heavy products, practical architecture choices, and a visible engineering process behind the UI."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="card-topline">
                  <span>{project.kind}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="card-summary">{project.summary}</p>
                {project.challenge ? (
                  <p className="project-challenge">{project.challenge}</p>
                ) : null}
                <ul className="feature-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="chip-row">
                  {project.stack.map((item) => (
                    <span key={item} className="chip chip-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel" id="experience">
          <SectionIntro
            eyebrow="Experience"
            title="Internships across software, web, and security"
            copy="The portfolio is junior by title, but not empty by practice. Each internship added a different layer: product delivery, security visibility, or direct web implementation."
          />

          <div className="timeline">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="timeline-item"
              >
                <div className="timeline-meta">
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
                <h3>{experience.role}</h3>
                <p className="timeline-company">{experience.company}</p>
                <p className="card-summary">{experience.summary}</p>
                <ul className="feature-list">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="chip-row">
                  {experience.stack.map((item) => (
                    <span key={item} className="chip chip-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel" id="skills">
          <SectionIntro
            eyebrow="Stack"
            title="Technical range with a TypeScript center of gravity"
            copy="NestJS, React, and PostgreSQL sit at the center, but the wider stack already includes security tooling, cloud-minded workflows, and delivery automation."
          />

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.name} className="skill-card">
                <h3>{group.name}</h3>
                <p>{group.description}</p>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel detail-layout" id="education">
          <div className="detail-column">
            <SectionIntro
              eyebrow="Education"
              title="Academic path"
              copy="My current path combines software engineering depth with practical full-stack projects."
            />

            <div className="detail-stack">
              {portfolio.education.map((item) => (
                <article
                  key={`${item.institution}-${item.period}`}
                  className="detail-card"
                >
                  <div className="card-topline">
                    <span>{item.institution}</span>
                    <span>{item.period}</span>
                  </div>
                  <h3>{item.degree}</h3>
                  <p>{item.location}</p>
                  {item.note ? <span className="mini-badge">{item.note}</span> : null}
                </article>
              ))}
            </div>
          </div>

          <div className="detail-column">
            <SectionIntro
              eyebrow="More"
              title="Certifications, languages, and interests"
              copy="A junior portfolio should still feel human. This section adds the signals around communication, language range, and personal energy."
            />

            <div className="detail-stack">
              <article className="detail-card">
                <h3>Certifications</h3>
                <ul className="compact-list">
                  {portfolio.certifications.map((certification) => (
                    <li key={certification.name}>
                      <span>{certification.name}</span>
                      <strong>{certification.issuer}</strong>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>Languages</h3>
                <ul className="compact-list">
                  {portfolio.languages.map((language) => (
                    <li key={language.name}>
                      <span>{language.name}</span>
                      <strong>{language.level}</strong>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>Interests</h3>
                <div className="chip-row">
                  {portfolio.interests.map((interest) => (
                    <span key={interest} className="chip">
                      {interest}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-panel contact-panel" id="contact">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Open to junior full-stack opportunities</h2>
            <p>
              I am looking for a 6-month internship from March 20, 2026. If your
              team needs a motivated junior developer who already works with
              NestJS, React, and PostgreSQL, this portfolio is ready for the
              conversation.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="button-secondary" href={phoneHref}>
              {profile.phone}
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="button-secondary"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
