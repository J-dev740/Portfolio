import React from 'react';
import image from '../assets/avatar.png'
import {FaGithub,FaYoutube, FaDribbble} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import  {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

      <div className='flex-1 text-center font-secondary lg:text-left'>
        {/* text */}
        <motion.h1 variants={fadeIn('up',0.5)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
          J- <span>DEV</span>
        </motion.h1>
        <motion.div variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}}
        className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
          <span className='mr-4 text-white'>I am a </span>
          <TypeAnimation
          sequence={[
            'Developer',
            2000,
            'Creator',
            2000,
            'Explorer',
            2000,
          ]}
          speed={50}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
          />
        </motion.div>
        <motion.p variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}}
         className='mb-8 max-w-lg mx-auto lg:mx-0'> lorem ipsum dolor sit amot consectetur adipisciing elit. Undo, numquam.Harum delieinit id sapiente velit inventore accusantium dicta magnuam tempoze
        </motion.p>
        <motion.div variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}}
        className='flex max-w-max gap-x-6 mb-12 items-center mx-auto lg:mx-0 '>
          <button className='btn btn-lg'>Contact me</button>
          <a href='#' className='text-gradient btn-link'> My Portfolio</a>
        </motion.div>
        {/* socials */}
        <motion.div variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}}
        className=''>
          <div className='flex text-[25px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='#'>
              <FaGithub/>
            </a>
            <a href='#'>
              <FaYoutube/>
            </a>
            <a href='#'>
              <FaDribbble/>
            </a>
          </div>
        </motion.div>

      </div>
      <motion.div variants={fadeIn('down',0.6)} initial='hidden' whileInView={'show'} 
      className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
        {/* image */}
        <img src={image} alt='image'/>
      </motion.div>

      </div>

    </div>
  </section>;
};

export default Banner;
  