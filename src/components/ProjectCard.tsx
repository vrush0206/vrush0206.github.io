import { useLayoutEffect, useRef, useState } from 'react';
import type { Project } from '../data/portfolio';

export function ProjectCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false);
  const frontButton = useRef<HTMLButtonElement>(null);
  const backButton = useRef<HTMLButtonElement>(null);
  const hasFlipped = useRef(false);
  const detailsId = `details-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  useLayoutEffect(() => {
    if (hasFlipped.current) {
      (flipped ? backButton : frontButton).current?.focus({ preventScroll: true });
    }
  }, [flipped]);

  function flip(value: boolean) {
    hasFlipped.current = true;
    setFlipped(value);
  }

  const links = (project.repository || project.demo) && (
    <div className="project-links">
      {project.repository && <a href={project.repository} target="_blank" rel="noreferrer">Repository</a>}
      {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">{project.demoLabel ?? 'Demo'}</a>}
    </div>
  );

  return (
    <article className={`project-card${flipped ? ' is-flipped' : ''}`} aria-label={project.title} onKeyDown={(event) => {
      if (event.key === 'Escape' && flipped) {
        event.preventDefault();
        flip(false);
      }
    }}>
      <div className="project-card-inner">
        <div className="card project-face project-front" aria-hidden={flipped} ref={(element) => { if (element) element.inert = flipped; }}>
          <div className="project-visual">
            <img src={`${import.meta.env.BASE_URL}illustrations/${project.category.toLowerCase().replace(/ /g, '-')}.png`} alt="" width="1536" height="1024" loading="lazy" decoding="async" />
            <span>{project.category.replace(' Projects', '')}</span>
          </div>
          <p className="meta-line">{project.period} · {project.type}</p>
          <h3>{project.title}</h3>
          <p className="status">{project.status}</p>
          <div className="project-detail"><h4>Purpose</h4><p>{project.problem}</p></div>
          <div className="project-detail"><h4>My contribution</h4><p>{project.contribution[0]}</p></div>
          <div className="project-detail"><h4>Technologies</h4><p className="technology-list">{project.technologies.join(' · ')}</p></div>
          <button ref={frontButton} className="flip-control" type="button" aria-expanded={flipped} aria-controls={detailsId} onClick={() => flip(true)}>View details<span className="sr-only"> for {project.title}</span><span aria-hidden="true"> ↻</span></button>
          {links}
        </div>
        <div id={detailsId} className="card project-face project-back" aria-hidden={!flipped} ref={(element) => { if (element) element.inert = !flipped; }}>
          <p className="eyebrow">{project.category} / Details</p>
          <h3>{project.title}</h3>
          <p className="meta-line">{project.period} · {project.type}</p>
          <h4>My contribution</h4>
          <ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="project-detail"><h4>Result / current status</h4><p>{project.status}</p></div>
          {links}
          <button ref={backButton} className="flip-control" type="button" onClick={() => flip(false)}><span aria-hidden="true">↶ </span>Back to overview<span className="sr-only"> for {project.title}</span></button>
        </div>
      </div>
    </article>
  );
}
