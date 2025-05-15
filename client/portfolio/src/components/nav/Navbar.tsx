import Navlink from './Navlink';

function Logo() {
  return (
    <a className='bg-slate-800 text-2xl text-white text-start mx-4'>
      <h1 className='text-2xl font-medium'>Mitchell Saremba</h1>
    </a>
  );
}

function Hamburger() {
  return (
    <button
      id='mobile-hamburger'
      className='text-3xl sm:hidden focus:outline-none hover:cursor-pointer'
    >
      &#9776;
    </button>
  );
}

export default function Navbar() {
  return (
    <section className='max-w-4xl mx-auto p-4 flex justify-between'>
      <Logo />
      <div>
        <Hamburger />
        <nav className='hidden sm:block space-x-4 text-xl' aria-label='main'>
          <Navlink href='#hero' children='Home' />
          <Navlink href='#projects' children='Projects' />
          <Navlink href='#skills' children='Skills' />
          <Navlink href='#blog' children='Blog' />
          <Navlink href='#contact' children='Contact' />
        </nav>
      </div>
    </section>
  );
}
