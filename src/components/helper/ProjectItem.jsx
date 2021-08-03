import './ProjectItem.css';

export const ProjectItem = ({ name, language, description, opacity, link, index, highlightProject, unhighlightProject }) => {
  return (
    <div className='project-item noselect' style={{ opacity }}
      onMouseEnter={() => highlightProject(index)}
      onMouseLeave={() => unhighlightProject()}
      onClick={() => window.open(link, '_blank').focus()}
    >
      <div className='project-language'>{language}</div>
      <h2 className='project-name'>{name}</h2>
      <div className='project-description'>{description}</div>
    </div>
  )
}
