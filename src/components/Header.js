import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img className='max-h-[110px] max-w-[200px] justify-center items-center'
          src={logo} alt=''/>
        </a>
        <button className='btn btn-sm'>
          work with me
        </button>
      </div>

    </div>
  </header>;
};

export default Header;
