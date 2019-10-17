import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../utils/svg/index';

function Header() {
  return (
    <header>
      <div className='mb-4 py-4 px-8 w-full h-24 bg-indigo-600 text-white border border-indigo-700 flex items-center'>
        <div className='container mx-auto flex'>
          <div className='w-3/5 flex'>
            <div className='invisible md:visible '>
              <Link to='/' className='w-auto inline-flex items-center h-full'>
                <Logo />
              </Link>
            </div>
          </div>
          <div class='w-2/5 flex justify-end items-center'>
            <Link
              to='/'
              className='text-gray px-8 py-2.2 font-semibold text-xs ml-3 no-underline hover:text-indigo-200'
            >
              ALL POSTS
            </Link>
            <Link
              to='/add'
              className='border border-indigo-700 bg-white text-indigo-400 px-8 py-4 font-semibold text-xs rounded ml-4 no-underline hover:bg-indigo-700 hover:text-white hover:border-indigo-600'
            >
              ADD NEW
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
