import React from 'react'
import Spline from '@splinetool/react-spline'
import Skill from './skill'

const About = () => {
    return (
        <div className='w-full flex flex-col
    items-center justify-start px-16' id='About'>
            <div className='w-full p-16'>
                <h1 className='text-7xl text-center underline'>About</h1>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-2 gap-4'>
                <div className='justify-items-center p-16'>
                    <img src='profile.jpg' width={"200"} height={"200"} className='pb-4 rounded-full'/>
                    <p className='text-bold text-3xl font-Galindo'>I’m committed to the pursuit of the greater good. With strong foundations in full stack development, I strive to create technology that enables focused productivity. My bread and butter is Java, but I’m also proficient in python and C. On my free time, I like to play tennis, exercise, and cook. </p>
                </div>
                <div className='flex flex-col items-center'>
                     <div className="flex gap-3 md:gap-4">
                        <Skill
                            imgURL={"/skills/react_logo.png"}
                            title={"React"}
                        />
                        <Skill
                            imgURL={"/skills/nodejs.webp"}
                            title={"Node JS"}
                        />
                    </div>
                     <div className="flex gap-3 md:gap-4 -mt-[calc(var(--hex)/3)] ml-[calc(var(--hex)/2)]">
                        <Skill
                            imgURL={"/skills/JS.png"}
                            title={"JavaScript"}
                        />
                        <Skill
                            imgURL={"/skills/python.png"}
                            title={"Python"}
                        />
                        <Skill
                            imgURL={"/skills/mongo.png"}
                            title={"MongoDB"}
                        />
                    </div>
                    <div className="flex gap-3 md:gap-4 -mt-[calc(var(--hex)/3)]">
                        <Skill
                            imgURL={"/skills/java.png"}
                            title={"Java"}
                        />
                        <Skill
                            imgURL={"/skills/C.png"}
                            title={"C"}
                        />
                        <Skill
                            imgURL={"/skills/tailwindcss.png"}
                            title={"TailwindCSS"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
