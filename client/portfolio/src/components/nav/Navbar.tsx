import Navlink from './Navlink';
import MobileMenu from './MobileMenu';
import { useState } from 'react';

// Navbar logo top left
function Logo() {
  return (
    <a className='bg-slate-800 text-2xl text-white text-start mx-4'>
      <h1 className='text-2xl font-medium'>Mitchell Saremba</h1>
    </a>
  );
}

// Hamburger icon top right on mobile
// Click to toggle mobile menu
function Hamburger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      id='mobile-hamburger'
      className='z-10 text-3xl sm:hidden focus:outline-none hover:cursor-pointer'
    >
      &#9776;
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Create state variable to track mobile menu

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='max-w-4xl mx-auto p-4 flex justify-between'>
      <Logo />
      <div>
        <Hamburger onClick={toggleMobileMenu} />
        <nav className='hidden sm:block space-x-4 text-xl' aria-label='main'>
          <Navlink href='#hero' children='Home' />
          <Navlink href='#projects' children='Projects' />
          <Navlink href='#skills' children='Skills' />
          <Navlink href='#blog' children='Blog' />
          <Navlink href='#contact' children='Contact' />
        </nav>
        {isOpen ? <MobileMenu /> : ''} {/* Show mobile menu if isOpen */}
      </div>
    </section>
  );
}
