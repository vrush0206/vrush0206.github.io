import { CardIcon, SkillIcon } from './components/CardIcon';
import { Projects } from './components/Projects';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { achievements, beyondWork, education, experience, profile, skills } from './data/portfolio';

const tabs = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'beyond-work', label: 'Beyond Work' },
] as const;
type Tab = typeof tabs[number]['id'];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('projects');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    function syncHash() {
      const tab = tabs.find((item) => `#${item.id}` === window.location.hash);
      if (tab) {
        setActiveTab(tab.id);
        document.getElementById('work')?.scrollIntoView();
      }
    }
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  function selectSection(tab: Tab) {
    setActiveTab(tab);
    // Move focus with navigation so keyboard users arrive at the selected content.
    document.getElementById(`tab-${tab}`)?.focus({ preventScroll: true });
  }

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    setActiveTab(tabs[next].id);
    tabRefs.current[next]?.focus({ preventScroll: true });
    tabRefs.current[next]?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
  }

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#intro" className="brand" aria-label={`${profile.name} - back to introduction`}>VA<span aria-hidden="true">.</span></a>
          <nav aria-label="Main navigation" className="main-nav">
            <a href="#projects" onClick={() => selectSection('projects')}>Work</a>
            <a href="#experience" onClick={() => selectSection('experience')}>About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section id="intro" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Software development · AI application engineering</p>
              <h1>{profile.name}</h1>
              <p className="headline">{profile.headline}</p>
              <p className="lede">{profile.intro}</p>
              <div className="action-row">
                <a className="button accent" href="#projects" onClick={() => selectSection('projects')}>View Projects <span aria-hidden="true">↗</span></a>
                <a className="button secondary" href={`${import.meta.env.BASE_URL}resume.pdf`} download>Download Résumé <span aria-hidden="true">↓</span></a>
                <a className="button text-button" href="#contact">Contact</a>
                <a className="button text-button" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
                <a className="button text-button" href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>
            <div className="portrait-frame"><img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Portrait of Vrushali Alugade" /></div>
          </div>
        </section>
        <section id="achievements" className="achievements-section" aria-labelledby="achievements-title">
          <div className="container">
            <h2 id="achievements-title" className="small-heading">Selected Achievements</h2>
            <ul className="achievement-grid">
              {achievements.map((achievement, index) => <li key={achievement}><span className="achievement-number" aria-hidden="true">0{index + 1}</span><p>{achievement}</p></li>)}
            </ul>
          </div>
        </section>
        <section id="work" className="work-section" aria-label="Work and background">
          <div className="container">
            <div className="tab-scroll">
              <div className="tab-bar" role="tablist" aria-label="Explore my portfolio">
                {tabs.map((tab, index) => <button key={tab.id} ref={(element) => { tabRefs.current[index] = element; }} id={`tab-${tab.id}`} role="tab" aria-selected={activeTab === tab.id} aria-controls={tab.id} tabIndex={activeTab === tab.id ? 0 : -1} onClick={() => setActiveTab(tab.id)} onKeyDown={(event) => handleTabKey(event, index)}>{tab.label}</button>)}
              </div>
            </div>
            {tabs.map((tab) => <div key={tab.id} id={tab.id} role="tabpanel" aria-labelledby={`tab-${tab.id}`} hidden={activeTab !== tab.id} tabIndex={0} className="tab-panel">
              {tab.id === 'projects' && <Projects />}
              {tab.id === 'experience' && <>
                <SectionHeading eyebrow="Experience" title="Enterprise delivery to applied research" />
                <div className="timeline">{experience.map((item) => <article key={`${item.company}-${item.period}`} className="timeline-item"><p className="timeline-date">{item.period}</p><div className="timeline-content"><p className="eyebrow">{item.company} · {item.location}</p><h3>{item.role}</h3><p>{item.summary}</p>{item.responsibilities && <details className="inline-details"><summary>More responsibilities<span className="sr-only"> at {item.company}</span></summary><ul>{item.responsibilities.map((detail) => <li key={detail}>{detail}</li>)}</ul></details>}</div></article>)}</div>
                <div className="education-block"><h3>Education</h3>{education.map((item) => <p key={item.institution}><span className="meta-line">{item.period}</span><br /><strong>{item.degree}</strong> · {item.institution}<br /><span>{item.specialty}</span></p>)}</div>
              </>}
              {tab.id === 'skills' && <><SectionHeading eyebrow="Skills" title="Tools I work with" /><div className="skills-grid">{skills.map((group) => <article key={group.title} className="card skill-group"><SkillIcon title={group.title} /><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></>}
              {tab.id === 'beyond-work' && <><SectionHeading eyebrow="Beyond work" title="Learning, collaboration & recognition" /><div className="beyond-grid"><article className="card beyond-card"><CardIcon name="award" /><h3>Hackathons & awards</h3><ul>{beyondWork.awards.map((item) => <li key={item}>{item}</li>)}</ul></article><article className="card beyond-card"><CardIcon name="certificate" /><h3>Certifications</h3><ul>{beyondWork.certifications.map((item) => <li key={item}>{item}</li>)}</ul></article><article className="card beyond-card"><CardIcon name="publication" /><h3>Publication</h3><p>{beyondWork.publication}</p></article><article className="card beyond-card"><CardIcon name="languages" /><h3>Languages</h3><ul>{beyondWork.languages.map((item) => <li key={item}>{item}</li>)}</ul></article></div></>}
            </div>)}
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="container contact-box"><div><p className="eyebrow">Contact</p><h2>Let’s connect.</h2><p>Open to software development and AI application engineering opportunities.</p></div><div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email} ↗</a><a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub: {profile.username} ↗</a><a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn: {profile.name} ↗</a></div></div>
        </section>
      </main>
    </div>
  );
}
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>;
}
export default App;
