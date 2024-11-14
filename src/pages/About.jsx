import React from 'react'
import Profile from '../assets/SatheeshBaabu.png'
import Button from '../Components/Button'
function About() {
    return (
        <div className='px-12 bg-gradient-to-r from-cyan-950 to-gray-800 md:h-max w-full pt-10' id="about">
            <div className='md:hidden pt-10'>
            <h1 className='text-4xl mb-10 font-medium font-serif text-cyan-400'>About <span className='text-white'>ME</span></h1>
            </div>
            <div className=' md:flex place-items-center h-full'>

                <div className=' h-auto md:w-1/2 flex place-items-center justify-center my-10'>
                    <div className='md:w-96 md:h-96 w-64 h-64 rounded-full
                inline-flex items-center justify-center circleanim relative overflow-hidden after:bg-gradient-to-r '>
                        <img src={Profile} alt="NO Image" className=' h-full p-5 rounded-full z-10' />
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl mb-10 font-medium font-serif text-cyan-400 md:block hidden'>About <span className='text-white'>ME</span></h1>

                    {/* <h1 className='text-5xl text-cyan-400 md:block hidden mb-10'>About Me</h1> */}
                    <p className='text-white text-justify indent-20 mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor voluptas odio nulla facere, repellat consequuntur hic. Totam unde maxime iusto eveniet libero. Error non rem commodi nam odio ab hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga enim, rerum dolores eum eligendi inventore et beatae, excepturi in cum facilis repellendus iste praesentium magnam aut asperiores, ipsam fugiat hic. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum reiciendis, sapiente possimus hic in omnis, tempora fuga minus iure velit consectetur, fugiat quas eaque reprehenderit natus ad sed unde maiores.</p>
                    <Button content={"Resume >"}/>
                </div>
            </div>
        </div>
    )
}

export default About