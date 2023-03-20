import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Apps, Create, Profile, Notifications } from '@/assets';

const NavItems = [
  {
    href: '/create',
    icon: <Image src={Create} alt='Create' />,
  },
  {
    href: '/apps',
    icon: <Image src={Apps} alt='Apps' />,
  },
  {
    href: '/notifications',
    icon: <Image src={Notifications} alt='Notifications' />,
  },
  {
    href: '/profile',
    icon: <Image src={Profile} alt='Profile' />,
  },
];

const NavbarRight = () => (
  <div className='flex space-x-1'>
    {React.Children.toArray((NavItems).map((item) => (
      <Link href={item.href}>
        {item.icon}
      </Link>
    )))}
  </div>
);

export default NavbarRight;
