import { useState } from 'react';
import { projectCategories, projects } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

type Filter = 'Featured' | 'All' | typeof projectCategories[number];
const filters: Filter[] = ['Featured', 'All', ...projectCategories];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('Featured');
  const matches = (value: Filter) => {
    const matchingProjects = projects.filter((project) =>
      value === 'All' || (value === 'Featured' ? project.featured : project.category === value),
    );
    return value === 'Featured'
      ? matchingProjects.sort((a, b) => projectCategories.indexOf(a.category) - projectCategories.indexOf(b.category))
      : matchingProjects;
  };
  const visibleProjects = matches(filter);

  return (
    <>
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Featured projects & explorations</h2>
        <p className="project-intro">A selection across enterprise applications, research and personal prototypes.</p>
      </div>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((value) => (
          <button key={value} type="button" aria-pressed={filter === value} aria-controls="project-results" onClick={() => setFilter(value)}>
            {value.replace(' Projects', '')}<span className="filter-count" aria-hidden="true">{matches(value).length}</span>
          </button>
        ))}
      </div>
      <p className="project-result-count" role="status" aria-live="polite" aria-atomic="true">
        Showing {visibleProjects.length} of {projects.length} projects{filter === 'Featured' ? ' \u2014 selected highlights' : ''}
      </p>
      <div id="project-results" className="project-grid">
        {visibleProjects.map((project) => <ProjectCard key={`${filter}-${project.title}`} project={project} />)}
      </div>
    </>
  );
}
