import React from 'react'
import ImageCard from '../Components/ImageCard';
function Projects() {
  const projectsData = [
    {
        title: 'Simple Calculator',
        description: 'Simple Calculator using Javascript.',
        demoLink: 'https://satheeshbaabucalc.netlify.app/',
        githubLink: 'https://github.com/Satheesh-Baabu/Simple-Calculator',
        image: "/Calculator.png",
        tech:["HTML","CSS","JavaScript"],
    },
    {
      title: 'Old Portfolio',
      description: 'Building a basic portfolio at the time of learing HTML, CSS and animation effects without responsive layout.',
      demoLink: 'https://satheeshbaabuportfolio.netlify.app/',
      githubLink: 'https://github.com/Satheesh-Baabu/portfolio-old',
      image:"/oldportfolilo.png" ,
      tech:["HTML","CSS","Animation Effects"],
    },
    {
      title: 'Portfolio',
      description: 'Explore my accomplished portfolio projects, showcasing expertise and creativity in one click.',
      demoLink: 'https://satheeeshbaabuportfolio.netlify.app/',
      githubLink: 'https://github.com/Satheesh-Baabu/Portfolio/',
      image:"/portfolio.png" ,
      tech:[
        "React.js",
        "Tailwind CSS",
        "JavaScript","Responsive"
    ],
    },
    {
      title: 'V Print Tech Website',
      description: `"V Print Tech" is a printing offset website developed using the MERN stack in collaboration with Sudhakar.`,
      demoLink: 'https://vprinttech.netlify.app/',
      githubLink: 'https://github.com/Satheesh-Baabu/InternshipFrontend/',
      image: "/vprint.png",
      tech:["React.js","Node.js","Express.js","MongoDB","Tailwind CSS"]
    },
    {
      title: 'Smart Restaurant Management System',
      description: `A full-stack MERN web app for restaurant ordering. Features real-time order tracking, cart management, payment integration (Razorpay) and a user-friendly UI.`,
      demoLink: 'https://msvrestaurant.vercel.app/',
      githubLink: 'https://github.com/Satheesh-Baabu/ProjectRestaurantFrontend',
      image: "/msvrestaurant.png",
      tech:["MERN Stack","Tailwind CSS","Socket.io","Razorpay integration"]
    },
  ];
  return (
    <div id="projects" className='h-max bg-gradient-to-r from-cyan-950 to-gray-800 w-full pt-10 px-12'>
      <h1 className='text-4xl md:text-5xl pb-10 font-medium font-serif text-white pt-12'><span className='text-cyan-500'>My</span> Projects</h1>
      <div className="grid gap-7 grid-cols-1 lg:grid-cols-2">
            {projectsData.map((project) => (
              <ImageCard key={project.title} {...project}/>
            ))}
          </div>
    </div>
      )
}

      export default Projects