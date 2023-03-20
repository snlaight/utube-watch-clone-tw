import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { LikeButton, DislikeButton, MoreButton, ShareButton, SaveButton, DefaultAvatar } from '@/assets';
import { Avatar } from '@/components';
import Video from './Video';
import RelatedVideos from './RelatedVideos';
import VideoComment, { Comment } from './VideoComment';

type Props = {
    author: string;
    title: string;
    uploadedAt: string;
    views: number;
    likes: number;
    dislikes: number;
    description: string;
    subscribers: number;
    comments: Comment[];
}

const VideoDetails: React.FC<Props> = ({ author, title, uploadedAt, views, likes, dislikes, description, subscribers, comments }) => (
  <div className='flex flex-col lg:flex-row'>
    <div className='flex-col'>
      <Video src='https://www.youtube.com/watch?v=dyFVwXROzZk' />
      <div>
        <div className='pt-5 text-lg flex-col'>
          {title}
          <div className='flex flex-row font-bold text-sm pt-2 justify-between items-center'>
            <div className='flex items-center space-x-2'>
              <Avatar src={DefaultAvatar} />
              <div className='flex-col text-xs font-normal text-light'>
                <div className='font-semibold md:hover:uppercase text-white md:hover:transition-colors md:hover:animate-spin md:hover:text-yt-red cursor-pointer text-base'>
                  {author}
                </div>
                {subscribers} subscribers
              </div>
            </div>
            <div className='flex flex-row items-center text-white space-x-4 uppercase sm:text-xs md:text-sm box-border'>
              <button type='button' className='rounded-full bg-light px-4 py-2 text-secondary font-normal hover:bg-light/90'>
                Subscribe
              </button>
              <div className='lg:flex items-center hidden'>
                <Image src={LikeButton} alt='Like' className='cursor-pointer' />{likes.toLocaleString()}
                <Image src={DislikeButton} alt='Dislike' className='cursor-pointer' />{dislikes.toLocaleString()}
                <Image src={ShareButton} alt='Share' className='cursor-pointer hidden' /> share
                <Image src={SaveButton} alt='Save' className='cursor-pointer' /> save
                <Image src={MoreButton} alt='More' className='cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#2e2e2e] my-4 rounded-lg p-4 text-sm font-semibold'>
          {views.toLocaleString()} views
          <span className='mx-2'>•</span>
          {new Date(uploadedAt).toDateString()}
          <div className='font-normal'>
            {description}
          </div>
        </div>
        <span className='font-semibold'>
          {comments && comments.length} comments
        </span>
        {React.Children.toArray(comments.map((comment) => (
          <VideoComment comment={comment} />
        )))}
      </div>
    </div>
    <RelatedVideos />
  </div>
);

export default VideoDetails;
