import Image from 'next/image';
import { Search as SearchIcon, MicIcon } from '@/assets';

const Search = () => (
  <div className='md:flex hidden space-x-2'>
    <div className='flex flex-row'>
      <input
        type='text'
        className='bg-[#121212] p-2 w-full focus:outline-none text-light rounded-sm border border-tertiary'
        placeholder='Search'
      />
      <Image src={SearchIcon} alt='Search' className='cursor-pointer w-20' />
    </div>
    <Image src={MicIcon} className='cursor-pointer h-[80%] my-auto' alt='mic icon' />
  </div>
);

export default Search;
