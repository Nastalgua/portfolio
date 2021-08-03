import { useState } from 'react';

import { Element } from 'react-scroll';

import { ProjectItem } from '../helper/ProjectItem';

import './Projects.css';

export const Projects = () => {
  const DEFAULT_OPACITY = 1;
  const UNFOCUSED_OPACITY = 0.2;

  const [projects, setProjects] = useState(
    [
      {
        name: 'Project',
        language: 'Typescript',
        description: 'Create and join event in one’s local community.',
        opacity: DEFAULT_OPACITY,
        link: 'https://github.com/Nastalgua/Project'
      },
      {
        name: 'Discern',
        language: 'Dart',
        description: 'Quickly identify and learn how to dispose of harmful household items.',
        opacity: DEFAULT_OPACITY,
        link: 'https://github.com/Nastalgua/discern'
      },
      {
        name: 'Intervent',
        language: 'Dart',
        description: 'Vent out one’s issues with anonymous chat messaging.',
        opacity: DEFAULT_OPACITY,
        link: 'https://github.com/Nastalgua/intervent'
      },
      {
        name: 'StorageDepth',
        language: 'Java',
        description: 'Add more depth to storage blocks in Minecraft.',
        opacity: DEFAULT_OPACITY,
        link: 'https://github.com/Nastalgua/StorageDepth'
      },
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
    <Element name='projects' className='projects'>
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
