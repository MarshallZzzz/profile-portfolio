import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion } from "framer-motion"
import Hero from './components/hero'
import Card from './components/card'
import About from './components/About'
import Spline from '@splinetool/react-spline'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='relative bg-[#654321] opacity-90 min-h-screen overflow-x-hidden text-white'>
      <Navbar />
      <div className='fixed inset-0 bg-[#0a0703] opacity-90 min-h-screen overflow-x-hidden text-white -z-10'>
        <img className='absolute w-1/3 top-0 right-0 opacity-60 z-10'
          src='gradient.png'
          alt='Gradient-img' />
        <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] 
        shadow-[0_0_900px_20px_#06402B] -rotate-[30deg] z-0'></div>

        <img className='absolute w-1/3 top-0 left-0 opacity-60 z-10'
          src='gradient.png'
          alt='Gradient-img' />
        <div className='h-0 w-[40rem] absolute top-[20%] left-[-5%] 
        shadow-[0_0_900px_20px_#06402B] rotate-[30deg] z-0'></div>
      </div>
      {/* <Spline scene="https://prod.spline.design/hVuiwmlFxumggILw/scene.splinecode" /> */}
      <Hero />
      <About />
      <div className='mx-auto max-w-4xl px-20 flex flex-col
      items-center justify-center'>

        {/* Work Experience */}
        <section className='container mx-auto justify-items-center pt-16' id='Experience'>
          <div className='w-full'>

            <h1 className='text-7xl text-center'>Work</h1>
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
        <section className='container mx-auto justify-items-center p-16' id='Education'>
          <div className='w-full'>
            <h1 className='text-7xl text-center'>Education</h1>
          </div>
          <div className='flex flex-col pt-8 gap-4'>

            <Card
              imgURL="/UP_Logo.png"
              heading="University of Portland"
              subheading="B.S. Computer Science & Engineering"
              date="2020 - 2025"
            />
            <Card
              imgURL="/UP_Logo.png"
              heading="University of Portland"
              subheading="B.S. Music"
              date="2020 - 2025"
            />
          </div>
        </section>

        {/* Projects */}
        <section id='projects' className=''>
          <div className='w-full p-8'>

            <h1 className='text-7xl text-center'>Projects</h1>
          </div>
          {/* <div className='p-8'/> */}
          <div className='flex flex-col gap-16'>
            <div className='justify-items-center text-center bg-[#06402B] p-6 rounded-4xl'>
              <div className='pb-4 flex flex-col gap4'>
                <h1 className='text-5xl'>Template Website</h1>
                <h2 className='italic font-serif'>Mega United Corporation LTD<span className='ml-8'>July 2025</span></h2>
              </div>
              <div className='bg-amber-100 p-4 rounded-lg'>
                <video width={"640"} height={"360"} controls onMouseEnter={e => e.target.play()} muted loop>
                  <source src='/megaUnited.mp4' type='video/mp4' />
                </video>
              </div>
            </div>
            <div className='justify-items-center text-center bg-[#06402B] p-6 rounded-4xl'>
              <div className='pb-4 flex flex-col gap4'>

                <h1 className='text-5xl pt-4'>UP Global Contributions</h1>
                <h2 className='italic font-serif'>University of Portland<span className='ml-8'>Spring 2024</span></h2>
              </div>
              <div className='bg-amber-100 p-4 rounded-lg'>
                <video width={"640"} height={"360"} controls onMouseEnter={e => e.target.play()} muted loop>
                  <source src='/UPContributions.mp4' type='video/mp4' />
                </video>
              </div>
            </div>
            <div className='justify-items-center text-center bg-[#06402B] p-6 rounded-4xl'>
              <div className='pb-4 flex flex-col gap4'>

                <h1 className='text-5xl pt-4'>Senior Capstone - MicroMouse</h1>
                <h2 className='italic font-serif'>University of Portland<span className='ml-8'>Fall 2024 - Spring 2025</span></h2>
              </div>
              <div className='bg-amber-100 p-4 rounded-lg'>
                <video height={"300"} width={"260"} controls onMouseEnter={e => e.target.play()} muted loop>
                  <source src='/microMouse.mp4' type='video/mp4' />
                </video>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id='gameDesign' className='pb-16'>
        <div className='w-full p-8'>
          <h1 className='text-7xl text-center'>Games</h1>
        </div>

        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Card 1 */}
            <div className="text-center bg-[#06402B] p-6 rounded-3xl">
              <div className="pb-4 flex flex-col gap-4">
                <h1 className="text-3xl pt-2">Mortal Cooking</h1>
              </div>
              <div className="bg-amber-100 p-3 rounded-lg">
                <video
                  className="w-full h-auto rounded-md"
                  controls
                  onMouseEnter={(e) => e.currentTarget.play()}
                  muted
                  loop
                  playsInline
                >
                  <source src="/mortalCooking.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Card 2 */}
            <div className="text-center bg-[#06402B] p-6 rounded-3xl">
              <div className="pb-4 flex flex-col gap-4">
                <h1 className="text-3xl pt-2">Speedrun</h1>
              </div>
              <div className="bg-amber-100 p-3 rounded-lg">
                <video
                  className="w-full h-auto rounded-md"
                  controls
                  onMouseEnter={(e) => e.currentTarget.play()}
                  muted
                  loop
                  playsInline
                >
                  <source src="/speedRun.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Card 3 */}
            <div className="text-center bg-[#06402B] p-6 rounded-3xl">
              <div className="pb-4 flex flex-col gap-4">
                <h1 className="text-3xl pt-2">Hylophobia</h1>
              </div>
              <div className="bg-amber-100 p-3 rounded-lg">
                <video
                  className="w-full h-auto rounded-md"
                  controls
                  onMouseEnter={(e) => e.currentTarget.play()}
                  muted
                  loop
                  playsInline
                >
                  <source src="/Hylophobia.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default App
