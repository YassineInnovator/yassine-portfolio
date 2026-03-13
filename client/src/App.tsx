import { useEffect, useState } from 'react';
import { fetchPortfolio } from './lib/api';
import {
  appCopy,
  localizePortfolio,
  localizeRuntimeMessage,
  type Locale,
} from './lib/localization';
import type { PortfolioResponse } from './types/portfolio';
import './App.css';

const localeStorageKey = 'portfolio-locale';

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
  const [language, setLanguage] = useState<Locale>('en');
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(localeStorageKey);

    if (savedLocale === 'en' || savedLocale === 'fr') {
      setLanguage(savedLocale);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(localeStorageKey, language);
    document.documentElement.lang = language;
    document.title = appCopy[language].metaTitle;
  }, [language]);

  const copy = appCopy[language];
  const localizedError = error ? localizeRuntimeMessage(error, language) : null;

  const languageSwitch = (
    <div
      className="language-switch"
      role="group"
      aria-label={copy.languageSwitcherLabel}
    >
      <button
        type="button"
        className={language === 'en' ? 'is-active' : undefined}
        aria-pressed={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={language === 'fr' ? 'is-active' : undefined}
        aria-pressed={language === 'fr'}
        onClick={() => setLanguage('fr')}
      >
        FR
      </button>
    </div>
  );

  if (localizedError) {
    return (
      <main className="status-view">
        <div className="status-card">
          {languageSwitch}
          <span className="eyebrow">{copy.status.errorEyebrow}</span>
          <h1>{copy.status.errorTitle}</h1>
          <p>{localizedError}</p>
          <a className="button-primary" href="mailto:elid.yass123@gmail.com">
            {copy.status.errorCta}
          </a>
        </div>
      </main>
    );
  }

  if (!portfolio) {
    return (
      <main className="status-view">
        <div className="status-card">
          {languageSwitch}
          <span className="eyebrow">{copy.status.loadingEyebrow}</span>
          <h1>{copy.status.loadingTitle}</h1>
          <p>{copy.status.loadingCopy}</p>
        </div>
      </main>
    );
  }

  const localizedPortfolio = localizePortfolio(portfolio, language);
  const { profile, stats, projects, experiences, skillGroups } = localizedPortfolio;
  const phoneHref = `tel:${profile.phone.replace(/\s+/g, '')}`;

  return (
    <div className="app-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          YEI
        </a>
        <div className="header-actions">
          {languageSwitch}
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => {
              setMenuOpen((current) => !current);
            }}
          >
            {menuOpen ? copy.closeMenu : copy.openMenu}
          </button>
        </div>
        <nav
          id="site-nav"
          className={`site-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label={copy.navigationLabel}
        >
          {copy.sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
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
                {copy.hero.downloadCv}
              </a>
              <a className="button-secondary" href={`mailto:${profile.email}`}>
                {copy.hero.emailMe}
              </a>
            </div>

            <div className="contact-strip">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>{profile.location}</span>
              <a href={phoneHref}>{profile.phone}</a>
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
              <span className="hero-card-label">{copy.hero.currentFocus}</span>
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
            eyebrow={copy.intros.focus.eyebrow}
            title={copy.intros.focus.title}
            copy={copy.intros.focus.copy}
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
            eyebrow={copy.intros.projects.eyebrow}
            title={copy.intros.projects.title}
            copy={copy.intros.projects.copy}
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
            eyebrow={copy.intros.experience.eyebrow}
            title={copy.intros.experience.title}
            copy={copy.intros.experience.copy}
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
            eyebrow={copy.intros.skills.eyebrow}
            title={copy.intros.skills.title}
            copy={copy.intros.skills.copy}
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
              eyebrow={copy.intros.education.eyebrow}
              title={copy.intros.education.title}
              copy={copy.intros.education.copy}
            />

            <div className="detail-stack">
              {localizedPortfolio.education.map((item) => (
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
              eyebrow={copy.intros.more.eyebrow}
              title={copy.intros.more.title}
              copy={copy.intros.more.copy}
            />

            <div className="detail-stack">
              <article className="detail-card">
                <h3>{copy.detailTitles.certifications}</h3>
                <ul className="compact-list">
                  {localizedPortfolio.certifications.map((certification) => (
                    <li key={certification.name}>
                      <span>{certification.name}</span>
                      <strong>{certification.issuer}</strong>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>{copy.detailTitles.languages}</h3>
                <ul className="compact-list">
                  {localizedPortfolio.languages.map((language) => (
                    <li key={language.name}>
                      <span>{language.name}</span>
                      <strong>{language.level}</strong>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>{copy.detailTitles.interests}</h3>
                <div className="chip-row">
                  {localizedPortfolio.interests.map((interest) => (
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
            <span className="eyebrow">{copy.contact.eyebrow}</span>
            <h2>{copy.contact.title}</h2>
            <p>{copy.contact.copy}</p>
          </div>

          <div className="contact-actions">
            <a className="button-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="button-secondary" href={phoneHref}>
              {profile.phone}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
