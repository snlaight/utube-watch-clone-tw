import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
    src: string | StaticImageData;
}

const Avatar: React.FC<Props> = ({ src }: Props) => (
  <Image src={src} alt='user avatar' className='w-10 h-10 rounded-full bg-white' />
);

export default Avatar;
