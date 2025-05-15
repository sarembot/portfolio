import Navlink from './Navlink';

export default function MobileMenu() {
  return (
    <div id='mobile-menu' className='sm:hidden w-full bg-slate-800 text-white flex flex-col gap-3'>
      <Navlink href='#hero' children='Home' />
      <Navlink href='#projects' children='Projects' />
      <Navlink href='#skills' children='Skills' />
      <Navlink href='#blog' children='Blog' />
      <Navlink href='#contact' children='Contact' />
    </div>
  );
}
