import React from 'react'
import SkillsComp from '../Components/SkillsComp';

function Skills() {
  const skillsdata = [
    {
      title: 'Programming Languages & Scripts',
      image:["/html.svg","/css.svg","/js.svg","/java.svg",] ,
      names:["HTML","CSS","JavaScript","Java"],
    },
    {
      title: 'Frameworks and Libraries',
      image: ["/react.svg","/expressjs.svg","/nodejs.svg","tailwind-css.svg"],
      names:["React.js","Express.js","Node.js","TailwindCSS"],

    },
    {
      title:"Databases",
      image:["/mysql.svg","/mongodb.svg"] ,
      names:["MySQL","MongoDB"],
    },
    {
      title:"Version Control Tools",
      image:["/git.svg","/github1.svg"],
      names:["HTML","CSS","JavaScript","Java"],
 
    }
  ];
  return (
    <div id="skills" className='h-full bg-gradient-to-r from-cyan-950 to-gray-800 w-full pt-10 px-12 md:flex flex-col justify-center items-center'>
      <h1 className='text-4xl md:text-5xl pb-10 font-medium font-serif text-white pt-12'>Skills</h1>
      {skillsdata.map((skills) => (
              <SkillsComp key={skills.title} {...skills}/>
            ))}
    </div>
)
}
export default Skills