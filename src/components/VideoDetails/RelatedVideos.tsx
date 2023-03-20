import React from 'react';
import Image from 'next/image';

import { RelatedVideos as RelatedVideosData } from '@/data/relatedvideos';

const RelatedVideos = () => (
  <div className='w-2/5 px-6 space-y-6 py-8'>
    {React.Children.toArray((RelatedVideosData).map((video) => (
      <div className='flex flex-col'>
        <div className='flex flex-row space-x-3'>
          <Image src={video.thumbnail} alt={video.title} width={180} height={160} className='rounded-lg' />
          <div className='flex flex-col justify-between pb-2'>
            <p className='font-white '>
              {video.title}
            </p>
            <div className='text-light text-[10px]'>
              {video.author}
              <span className='flex flex-row'>
                {video.views.toLocaleString()} views • {video.uploaded}
              </span>
            </div>
          </div>
        </div>
      </div>
    )))}
  </div>
);

export default RelatedVideos;
