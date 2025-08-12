import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion } from "framer-motion"
import Hero from './components/hero'
import Card from './components/card'
import About from './components/About'
import Spline from '@splinetool/react-spline'

function App() {

  return (
    <div className='relative bg-black opacity-90 min-h-screen overflow-x-hidden text-white'>
      <div className='fixed inset-0 bg-black opacity-90 min-h-screen overflow-x-hidden text-white -z-10'>
        <img className='absolute w-1/3 top-0 right-0 opacity-60 z-10'
          src='gradient.png'
          alt='Gradient-img' />
        <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] 
        shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] z-0'></div>

        <img className='absolute w-1/3 top-0 left-0 opacity-60 z-10'
          src='gradient.png'
          alt='Gradient-img' />
        <div className='h-0 w-[40rem] absolute top-[20%] left-[-5%] 
        shadow-[0_0_900px_20px_#e99b63] rotate-[30deg] z-0'></div>
      </div>
      {/* <Spline scene="https://prod.spline.design/hVuiwmlFxumggILw/scene.splinecode" /> */}
      <Hero />
      <About />
      <div className='mx-auto max-w-4xl px-20 min-h-screenflex flex-col
    items-center justify-center'>

        {/* Work Experience */}
        <section className='container mx-auto justify-items-center pt-16' id='Experience'>
          <div className='w-full border-b-4 border-white'>

            <h1 className='text-7xl text-right'>Relevent Experience</h1>
          </div>
          <div className='pt-8 flex flex-col gap-4'>
            <Card
              imgURL="/MWhite.png"
              heading="Mega United"
              subheading="Full Stack Developer"
              date="July 2025"
              description={`- Designed and developed a responsive full stack website template for a construction company, raising the company’s profile
- Developed interactive features inducing a navigation bar, scrolling cards, card displays, map pins, pop-up displays, and timeline progress bar
- Implemented MongoDB integration for future scalability and dynamic content
- Built REST API endpoints to enable secure and scalable data retrieval and updates`}
            />
            <Card
              imgURL="/UP_Logo.png"
              heading="University of Portland"
              subheading="Teaching Assistant"
              date="2023 - 2024"
              description={`Courses: Introduction to Computer Science, Data Structures, Theory of Computation
- Communicated with professors about student grades and feedback through Microsoft spreadsheets and weekly meetings
- Debugged student homework and provided feedback for improvement`}
            />
            <Card
              imgURL="/MWhite.png"
              heading="Mega United"
              subheading="Construction Worker"
              date="Summers '23, '24"
              description={`- Troubleshooted, maintained, and installed AC and refrigerators with a team of 3
- Pulled needles from planks, filled gaps in walls, pulled wires, installed light bulbs, smoke alarms, outlets, and switches, laid pipes,
excavated job site with backhoe
- Communicated with customers for requirements, concerns, and payments
- Participated in government bidding, site management, and financial meetings with accountants and project managers`}
            />
          </div>

        </section>

        {/* Education */}
        <section className='container mx-auto justify-items-center pt-16' id='Education'>
          <div className='w-full border-b-4 border-white'>
            <h1 className='text-7xl text-left'>Education</h1>
          </div>
          <div className='pt-8'>

            <Card
              imgURL="/UP_Logo.png"
              heading="University of Portland"
              subheading="B.S. Computer Science & Engineering"
              date="2020 - 2025"
            />
          </div>
        </section>

        {/* Projects */}
        <section id='Projects'>
          <div className='w-full border-b-4 border-white'>

            <h1 className='text-7xl text-right'>Projects</h1>
          </div>
        </section>
      </div>
    </div>

  )
}

export default App
