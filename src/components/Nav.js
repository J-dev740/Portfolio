import React from 'react';
import {BiHomeAlt, BiUser } from "react-icons/bi"
import {BsClipboardData, BsbriefCase, BsChatSquare, BsChat} from "react-icons/bs"
import {Link} from "react-scroll"
// import {active} from '../index.css'
// import {} from ""


const Nav = () => {
  return <nav className='fixed bottm-2 lg:bottom-8 w-full z-50 overflow-hidden'>
    <div className='containter mx-auto'>
      <div className='w-full bg-black/20 h-[90px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
        <Link to='home'
        activeClass='active'
        smooth={true}
        offset={200}
        spy={true} className='cursor-pointer  justify-center items-center '>
        <BiHomeAlt/>
        </Link>
        <Link to='about'
        activeClass='active'
        smooth={true}
        spy={true} className='cursor-pointer  justify-center items-center '>
        <BiUser/>
        </Link>
        <Link to='services'
        activeClass='active'
        smooth={true}
        spy={true} className='cursor-pointer  justify-center items-center '>
        <BsClipboardData/>
        </Link>
        <Link to='work'
        activeClass='active'
        smooth={true}
        spy={true} className='cursor-pointer  justify-center items-center '>
        <BsChatSquare/>
        </Link>
        <Link to='contact'
        activeClass='active'
        smooth={true}
        spy={true} className='cursor-pointer  justify-center items-center '>
        <BsChat/>
        </Link>

      </div>
    </div>
  </nav>
};

export default Nav;
