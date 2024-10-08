import AnimatedButton from '../../components/buttons/AnimatedButton';

import magnumVideo1 from '../../assets/video/magnumVideo_compressed.mp4';
import { useState } from 'react';
import Modal from '../../components/Modals/Modal';

const VideoSection = () => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className='flex md:flex-row flex-col gap-5 md:pl-20 md:py-20 py-5'>
      <div className='text-white flex-1  items-center pl-5 lg:pl-20 hidden md:flex'>
        <div className=''>
          <h1 className='text-5xl  md:text-[56px]'>Production</h1>
          <AnimatedButton title={'Engagement (e)'} />
        </div>
      </div>
      <div
        // onClick={() => setIsopen(true)}
        className='relative md:w-1/2'
      >
        <iframe
          className='h-[300px] md:h-[450px] w-full'
          src='https://www.youtube.com/embed/46L9y2dkF7A?si=Wb-OySqnXukr95sx'
          title='YouTube video player'
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />

        {/* <video width='100%' height='auto' autoPlay loop muted playsInline>
          <source src={magnumVideo1} type='video/mp4' />
        </video> */}
      </div>
      {/* {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsopen}>
          <div className='w-full relative'>
            <video width='100%' height='90%' autoPlay loop muted playsInline>
              <source src={magnumVideo1} type='video/mp4' />
            </video>

            <button
              onClick={() => {
                setIsopen(false);
              }}
              className='absolute top-1 right-1 rounded-full w-5 h-5 bg-white z-[999]'
            >
              X
            </button>
          </div>
        </Modal>
      )} */}

      <div className='text-white flex-1  items-center pl-5 lg:pl-20 flex md:hidden'>
        <div className=''>
          <h1 className='text-5xl  md:text-[56px]'>Production</h1>
          <AnimatedButton title={'Engagement (e)'} />
        </div>
      </div>

      {/* <img
          className="w-10 md:w-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={play}
          alt="play_button"
        /> */}
    </div>
  );
};

export default VideoSection;
