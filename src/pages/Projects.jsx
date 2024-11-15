import React from 'react'
import ImageCard from '../Components/ImageCard';
function Projects() {
  const projectsData = [
    {
      title: 'Portfolio',
      description: 'Explore my accomplished portfolio projects, showcasing expertise and creativity in one click.',
      demoLink: 'https://satheeeshbaabuportfolio.netlify.app/home',
      githubLink: 'https://github.com/Satheesh-Baabu/Portfolio',
      image:"/portfolio.png" ,
    },
    {
      title: 'Website V Print Tech',
      description: 'Discover my expertise in one click with my weather app, showcasing creativity and skill in delivering accurate forecasts.',
      demoLink: 'https://vprinttech.netlify.app/',
      githubLink: 'https://github.com/Satheesh-Baabu/InternshipFrontend/',
      image: "/vprint.png",
    },
    // {
    //   title: 'Calculator',
    //   description: 'Discover my expertise in one click with my weather app, showcasing creativity and skill in delivering accurate forecasts.',
    //   demoLink: 'https://vprinttech.netlify.app/',
    //   githubLink: 'https://github.com/Satheesh-Baabu/InternshipFrontend/',
    //   image: "/vprint.png",
    // },
    // Add more projects here
  ];
  return (
    <div id="projects" className='h-max bg-gradient-to-r from-cyan-950 to-gray-800 w-full pt-10 px-12'>
      <h1 className='text-4xl md:text-5xl pb-10 font-medium font-serif text-white pt-12'>My Projects</h1>
      <div className="grid gap-7 grid-cols-1 lg:grid-cols-2">
            {projectsData.map((project) => (
              <ImageCard key={project.title} {...project}/>
            ))}
          </div>
    </div>
      )
}

      export default Projects