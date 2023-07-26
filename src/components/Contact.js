import React from 'react';
import  {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Contact = () => {
  return <section className=' py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className=' w-full flex flex-col lg:flex-row  gap-x-20 items-center'>
        {/* text */}
        <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}}
        className='flex-1 flex flex-col justify-start items-center'>
          <h4 className='text-xl text-accent font-medium uppercase mb-2 tracking-wide'>Get In Touch</h4>
          <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 text-white'>Let's Work <br/> Together </h2>
        </motion.div>
        {/* form */}
        <motion.form variants={fadeIn('left',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-20 p-6 items-start'>
          <input className='bg-transparent border-b py-3 focus:border-accent placeholder:text-white outline-none w-full transaction-all'
          placeholder='Your Name'
          type='text'/>
         <input className='bg-transparent border-b py-3 focus:border-accent placeholder:text-white outline-none w-full transaction-all'
          placeholder='Email'
          type='text'/>
          <textarea className='bg-transparent border-b py-12 focus:border-accent placeholder:text-white outline-none w-full transaction-all
          resize-none mb-12'
          placeholder='Your Message '></textarea>
          <button className='btn btn-lg '>Send message</button>
          
        </motion.form>
      </div>


    </div>

    </section>;
};

export default Contact;
