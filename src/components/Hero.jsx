import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const nameText = "Marshall";
const letters = Array.from(nameText);

const TYPING_DELAY = 0.2;
const STAGGER = 0.08;
const LETTER_DUR = 0.22;

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER, delayChildren: TYPING_DELAY },
  },
};

const letter = {
  hidden: { opacity: 0, y: "0.3em" },
  visible: { opacity: 1, y: 0, transition: { duration: LETTER_DUR } },
};

export default function Hero() {
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setReplayKey((k) => k + 1), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-center'>
      <div className='z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
        <h1 className='text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-Galindo tracking-wider my-8'>
          Hi! I&apos;m{" "}
          <motion.span
            key={replayKey}
            className="inline-flex items-baseline"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {letters.map((ch, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {ch}
              </motion.span>
            ))}
          </motion.span>
        </h1>
        <div className='flex lg:flex-row sm:flex-col gap-4 justify-center'>
          <a
            href='#projects'
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#06402B] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'
          >
            <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 hover:invert transition duration-300'>
              <i class='bx  bx-terminal'  ></i>  Software Developer
             
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
