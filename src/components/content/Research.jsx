import { useState } from 'react';

import { Element } from 'react-scroll';

import { ProjectItem } from '../helper/ProjectItem';

import './Projects.css';

export const Research = () => {
  const DEFAULT_OPACITY = 1;
  const UNFOCUSED_OPACITY = 0.2;

  const [projects, setProjects] = useState(
    [
      {
        name: 'HVAC',
        language: 'Python',
        description: 'CSIRE 2021. A reinforcement learning approach to improving HVAC systems.',
        opacity: DEFAULT_OPACITY,
        link: 'https://github.com/Nastalgua/hvac'
      }
    ]
  );

  const [allowHighlight, setAllowHighlight] = useState(true);

  const highlightProject = (index) => {
    if (!allowHighlight) return;
    const projectsCopy = projects.map(project => {
      return {
        ...project,
        opacity: UNFOCUSED_OPACITY
      }
    });

    projectsCopy[index].opacity = DEFAULT_OPACITY;

    setProjects(projectsCopy);
    setAllowHighlight(false);
  }

  const unhighlightProject = () => {
    setProjects(
      projects.map(project => {
        return {
          ...project,
          opacity: DEFAULT_OPACITY
        };
      })
    );

    setAllowHighlight(true);
  }

  return (
    <Element name='research' className='projects'>
      {
        projects.map(
          (project, index) =>
            <ProjectItem
              key={index}
              name={project.name}
              language={project.language}
              description={project.description}
              opacity={project.opacity}
              link={project.link}
              index={index}
              highlightProject={highlightProject}
              unhighlightProject={unhighlightProject}
            />
        )
      }
    </Element>
  )
}
