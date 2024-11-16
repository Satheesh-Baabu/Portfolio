import React from 'react'
import SkillsComp from '../Components/SkillsComp';

function Skills() {
  const skillsdata = [
    {
      title: 'Programming Languages & Scripts',
      image:["/html-5.svg","/css-3.svg","/js.svg","/java.svg",] ,
    },
    {
      title: 'Frameworks and Libraries',
      image: ["/react.svg","/expressjs.svg","/node-js.svg","tailwind-css.svg"],
    },
    {
      title:"Databases",
      image:["/mysql.svg","/mongodb.svg"] 
    },
    {
      title:"Version Control Tools",
      image:["/git.svg","/github1.svg"] 
    }
  ];
  return (
    <div id="skills" className='h-max bg-gradient-to-r from-cyan-950 to-gray-800 w-full pt-10 px-12'>
      <h1 className='text-4xl md:text-5xl pb-10 font-medium font-serif text-white pt-12'>Skills</h1>
      {skillsdata.map((skills) => (
              <SkillsComp key={skills.title} {...skills}/>
            ))}
    </div>
)
}
export default Skills