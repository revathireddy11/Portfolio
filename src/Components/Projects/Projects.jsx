import React from 'react'
import './Projects.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='projects' className="project">
      <div className="project-title">
        <h1 className='gradient-text'>My Projects</h1>
      </div>

      <div className="project-container">
        {mywork_data.map((work, index) => (
          <div className="project-card" key={index}>
            {work.github_link ? (
              <a
                href={work.github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={work.w_img}
                  alt={work.title}
                  className="project-image"
                />
              </a>
            ) : (
              <img
                src={work.w_img}
                alt={work.title}
                className="project-image"
              />
            )}
            <h3 className="project-title1">{work.title}</h3>
            <p className="project-description">{work.description}</p>
            {work.github_link && (
              <a
                href={work.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Optional show more button */}
      {/* 
      <div className="project-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
      */}
    </div>
  )
}

export default Projects
