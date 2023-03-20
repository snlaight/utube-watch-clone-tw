import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { Avatar } from '@/components';
import { LikeButton, DislikeButton } from '@/assets';

export interface Comment {
    id: number;
    avatar: string | StaticImageData;
    author: string;
    uploadedAt: string;
    content: string;
    likes: number;
    dislikes: number;
}

type Props = {
    comment: Comment
}

const VideoComment: React.FC<Props> = ({ comment }: Props) => (
  <div className='flex flex-row items-start gap-4 mt-6'>
    <Avatar src={comment.avatar} />
    <div className='flex flex-col space-y-2'>
      <span className='text-sm items-center space-x-2 font-bold flex flex-row'>
        <span>
          {comment.author}
        </span>
        <span className='text-[10px] text-light'>
          Posted on: {comment.uploadedAt}
        </span>
      </span>
      <div className='text-xs'>
        {comment.content}
      </div>
      <div className='flex text-xs text-light flex-row'>
        <span className='flex items-center'>
          <Image src={LikeButton} alt='likes' />{comment.likes}
        </span>
        <span className='flex items-center ml-4'>
          <Image src={DislikeButton} alt='dislikes' />
        </span>
      </div>
    </div>
  </div>
);

export default VideoComment;
