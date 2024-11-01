import React from 'react'
import Profile from '../assets/SatheeshBaabu.png'
function About() {
    return (
        <div className='px-12 bg-gradient-to-r from-cyan-950 to-gray-800 md:h-screen w-full'>
            <div className='md:hidden pt-10'><h1 className='text-4xl text-cyan-400'>About Me</h1></div>
            <div className=' md:flex place-items-center h-full'>

                <div className=' h-auto md:w-1/2 flex place-items-center justify-center my-10'>
                    <div className='md:w-96 md:h-96 border border-cyan-400 rounded-full 
                inline-flex items-center justify-center'>
                        <img src={Profile} alt="NO Image" className=' h-full p-5 rounded-full' />
                    </div>
                </div>
                <div className=' px-10'>
                    <h1 className='text-5xl text-cyan-400 md:block hidden mb-10'>About Me</h1>
                    <p className='text-white text-justify indent-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor voluptas odio nulla facere, repellat consequuntur hic. Totam unde maxime iusto eveniet libero. Error non rem commodi nam odio ab hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga enim, rerum dolores eum eligendi inventore et beatae, excepturi in cum facilis repellendus iste praesentium magnam aut asperiores, ipsam fugiat hic. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum reiciendis, sapiente possimus hic in omnis, tempora fuga minus iure velit consectetur, fugiat quas eaque reprehenderit natus ad sed unde maiores.</p>
                </div>
            </div>
        </div>
    )
}

export default About