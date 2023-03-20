/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

type Props = {
  src: string;
}

const Video: React.FC<Props> = ({ src }) => (
  <video controls src={src} className='w-full aspect-video' />
);

export default Video;
