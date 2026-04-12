import { portfolioData } from '@/portfolio-data'
import { Project } from './project'

export function Projects() {
  return (
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
      {portfolioData.projects.map((project, i) => (
        <div key={project.name} className='mx-auto h-full w-full'>
          <Project
            tags={project.tags}
            title={project.name}
            description={project.description}
            image={project.image}
          />
        </div>
      ))}
    </div>
  )
}
