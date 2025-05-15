import Navlink from './Navlink';
// import { useState } from 'react';

export default function MobileMenu() {
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='mobile-menu' className='absolute top-0 left-0 w-full h-full bg-slate-800 text-white'>
      <div className='flex flex-col items-center justify-center h-full'>
        <Navlink href='#hero' children='Home' />
        <Navlink href='#projects' children='Projects' />
        <Navlink href='#skills' children='Skills' />
        <Navlink href='#blog' children='Blog' />
        <Navlink href='#contact' children='Contact' />
      </div>
    </div>
  );
}
