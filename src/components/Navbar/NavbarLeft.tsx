import Link from 'next/link';
import Image from 'next/image';

import { Logo } from '@/assets';

const NavbarLeft = () => (
  <Link href='/'>
    <Image src={Logo} className='w-[90px] cursor-pointer' alt='logo' />
  </Link>
);

export default NavbarLeft;
