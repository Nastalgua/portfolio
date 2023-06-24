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
        name: 'Genus',
        language: 'React',
        description: 'Compete against friends in brain games! Communicate with them with in-game chat.',
        opacity: DEFAULT_OPACITY,
        link: 'https://genus-cxe0.onrender.com/'
      },
      {
        name: 'Project',
        language: 'Vue',
        description: 'Create and join events in one’s local community.',
        opacity: DEFAULT_OPACITY,
        link: 'https://devpost.com/software/project-a9rz5m'
      },
      {
        name: 'CAAAC Website',
        language: 'Vue',
        description: 'Prototype website for the Chinese American Association for Autistic Community.',
        opacity: DEFAULT_OPACITY,
        link: 'https://resonant-zuccutto-ec89fe.netlify.app/#/about'
      },
      {
        name: 'Eco-City',
        language: 'C#',
        description: 'A game about managing energy sources with care.',
        opacity: DEFAULT_OPACITY,
        link: 'https://nastalgia.itch.io/eco-city'
      },
      {
        name: 'Basketball AI',
        language: 'C#',
        description: 'Training a machine learning agent to shoot hoops.',
        opacity: DEFAULT_OPACITY,
        link: 'https://darmingeek.itch.io/basketball-ml'
      },
      {
        name: 'Discern',
        language: 'Dart',
        description: 'Quickly identify and learn how to dispose of harmful household items.',
        opacity: DEFAULT_OPACITY,
        link: 'https://devpost.com/software/discern'
      },
      {
        name: 'StorageDepth',
        language: 'Java',
        description: 'Plugin that adds more depth to storage blocks in Minecraft.',
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
