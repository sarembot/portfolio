interface NavlinkProps {
  href: string;
  children: string;
}

export default function Navlink({ href, children }: NavlinkProps) {
  return (
    <a className='text-white hover:opacity-90' href={href}>
      {children}
    </a>
  );
}
