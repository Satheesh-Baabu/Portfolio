import React from 'react'
import Profile from '../assets/SatheeshBaabu.png'
import Button from '../Components/Button'
function About() {
    return (
        <div className='px-12 bg-gradient-to-r from-cyan-950 to-gray-800 md:h-max w-full md:pt-20 ' id="about">
            <div className='md:hidden pt-10'>
            <h1 className='text-4xl mb-10 font-medium font-serif text-cyan-400'>About <span className='text-white'>ME</span></h1>
            </div>
            <div className=' md:flex place-items-center h-full'>

                <div className=' h-auto md:w-1/2 flex place-items-center justify-center my-10'>
                    <div className='md:w-96 md:h-96 w-64 h-64 rounded-full
                inline-flex items-center justify-center circleanim relative overflow-hidden after:bg-gradient-to-r drop-shadow-lg'>
                        <img src={Profile} alt="NO Image" className=' h-full p-5 rounded-full z-10' />
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl mb-10 font-medium font-serif text-cyan-400 md:block hidden'>About <span className='text-white'>ME</span></h1>

                    {/* <h1 className='text-5xl text-cyan-400 md:block hidden mb-10'>About Me</h1> */}
                    <p className='text-white text-justify indent-20 '>Hello, I’m Satheesh Baabu, an aspiring Web Developer with a passion for crafting functional and visually engaging digital solutions. I am currently pursuing final year<b className='text-lg'> B.Sc  Computer Science</b> at Ayya Nadar Janaki Ammal College, Sivakasi, and have gained hands-on experience through internships and projects that have sharpened my technical and collaborative skills.</p>
                    <h1 className='text-white text-lg'>My Journey :</h1>
                    <p className='text-white text-justify indent-20 mb-3'>My academic journey began with strong foundations in programming and problem-solving, as reflected in my achievements in<b> SSLC (84%)</b> and <b>HSC (92%)</b>. Alongside formal education, I completed a Diploma in Computer Hardware and honed my skills in web development.</p>
                    <p className='text-white text-justify indent-20 mb-3'>I specialize in front-end and back-end development using HTML, CSS, JavaScript, C, Java and the<b> MERN stack (MongoDB, Express.js, React.js, Node.js)</b>. I am also skilled in version control systems like Git & GitHub and have experience with databases like MySQL and MongoDB.</p>
                    <h1 className='text-white text-lg'>What Drive Me :</h1>
                    <p className='text-white text-justify indent-20 mb-10'>I am deeply motivated to collaborate with dynamic teams, contribute to innovative projects, and grow as a developer by learning new technologies. My mission is to build web and mobile applications that make a meaningful impact. Feel free to explore my portfolio and connect with me to know more about my journey and work! 😊</p>
                    <Button content={"Resume >"}/>
                </div>
            </div>
        </div>
    )
}

export default About