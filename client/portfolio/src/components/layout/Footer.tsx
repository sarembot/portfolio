export default function Footer() {
  return (
    <footer className='w-full bg-slate-700 text-white py-4 bottom-0'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <p>&copy; {new Date().getFullYear()} Mitchell Saremba. All rights reserved.</p>
        <div className='flex flex-row gap-4 justify-center'>
          <a
            href='https://www.linkedin.com/in/mitchellsaremba/'
            target='_blank'
            className='hover:opacity-80'
          >
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a href='https://github.com/sarembot' target='_blank' className='hover:opacity-80'>
            <i className='fa-brands fa-github'></i>
          </a>
          <a href='https://x.com/mitchellsaremba' target='_blank' className='hover:opacity-80'>
            <i className='fa-brands fa-twitter'></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
