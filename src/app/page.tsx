/* eslint-disable max-len */
import { VideoDetails } from '@/components';

import { Comments } from '@/data/comments';

const Home = () => (
  <main>
    <VideoDetails
      author='Javascript Mastery'
      title='Build and Deploy 3 Modern React API Applications in 8 Hours - Full Course | RapidAPI'
      uploadedAt='2023-01-06'
      views={155860}
      likes={5906}
      dislikes={0}
      description={`
      In this one video, learn how to develop a fully functional full-stack MERN dashboard application with complete CRUD functionalities, authentication, pagination, sorting, filtering, and more!
      `}
      subscribers={0}
      comments={Comments}
    />
  </main>
);

export default Home;
