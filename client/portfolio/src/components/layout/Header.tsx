export default function Header() {
  return (
    <header className='w-full h-15 sm:h-18 bg-slate-800'>
      <nav className='h-full flex items-center justify-between'>
        <a className='bg-slate-800 text-2xl text-white text-start mx-4'>Mitchell Saremba</a>
        <div className='hidden sm:flex mx-4'>
          <a href='#home' className='text-white mx-4'>
            Home
          </a>
          <a href='#services' className='text-white mx-4'>
            Services
          </a>
          <a href='#skills' className='text-white mx-4'>
            Skills
          </a>
          <a href='#blog' className='text-white mx-4'>
            Blog
          </a>
          <a href='#contact' className='text-white mx-4'>
            Contact
          </a>
        </div>
        <button className='space-y-2 sm:hidden mx-4'>
          <div className='w-8 h-0.5 bg-gray-600'></div>
          <div className='w-8 h-0.5 bg-gray-600'></div>
          <div className='w-8 h-0.5 bg-gray-600'></div>
        </button>
      </nav>
    </header>
  );
}
