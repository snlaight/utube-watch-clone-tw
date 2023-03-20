import React from 'react';

import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import { Search } from '@/components';

const Navbar = () => (
  <nav className='bg-primary w-full h-14 flex px-4 items-center justify-between'>
    <NavbarLeft />
    <Search />
    <NavbarRight />
  </nav>
);

export default Navbar;
