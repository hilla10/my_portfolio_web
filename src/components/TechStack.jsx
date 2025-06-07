import React from 'react';

const TechStack = ({ techStack }) => {
  return (
    <div className='portfolio__stack'>
      {Array.isArray(techStack)
        ? techStack.map((stack, i) =>
            typeof stack === 'object' ? (
              Object.entries(stack).map(([section, techs]) => (
                <div key={section}>
                  <strong>{section}</strong>
                  <div className='tech-stack'>
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className={`tech-badge ${tech
                          .toLowerCase()
                          .replace(/[^a-z0-9]/g, '')}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <span
                key={i}
                className={`tech-badge ${stack
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, '')}`}>
                {stack}
              </span>
            )
          )
        : null}
    </div>
  );
};

export default TechStack;
