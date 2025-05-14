export default function Header() {
  return (
    <header className='bg-slate-800 sticky top-0 z-10'>
      <section className='max-w-4xl mx-auto p-4 flex justify-between'>
        <a className='bg-slate-800 text-2xl text-white text-start mx-4'>
          <h1 className='text-2xl font-medium'>Mitchell Saremba</h1>
        </a>
        <div>
          <button id='mobile-hamburger' className='text-3xl sm:hidden focus:outline-none'>
            &#9776;
          </button>
          <nav className='hidden sm:block space-x-4 text-xl' aria-label='main'>
            <a href='#home' className='text-white hover:opacity-90'>
              Home
            </a>
            <a href='#services' className='text-white hover:opacity-90'>
              Services
            </a>
            <a href='#skills' className='text-white hover:opacity-90'>
              Skills
            </a>
            <a href='#blog' className='text-white hover:opacity-90'>
              Blog
            </a>
            <a href='#contact' className='text-white hover:opacity-90'>
              Contact
            </a>
          </nav>
        </div>
      </section>
    </header>
  );
}
