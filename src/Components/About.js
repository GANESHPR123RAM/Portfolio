import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import me from '../Components/asset/me.png';
import ok from '../Components/asset/ok.png';

function Homepage() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <ScrollTrigger onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
        <div
          className={`py-10 w-screen overflow-x-hidden flex items-center justify-evenly transform transition-all duration-700 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
          id='Aboutus'
          style={{ backgroundImage: `url(${ok})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="w-full px-10  sm:h-[25rem] rounded-xl relative z-0">
            <div className="w-full h-full p-10 text-4xl text-white font-Quicksand">
              <h1 className='text-2xl sm:text-4xl text-[#FFD308]'>About Me</h1>
              <h2 className='text-white text-[0.5rem] leading-3 sm:text-sm md:text-xl mt-5 sm:mt-10'>
                👋 Hi there! I'm Ganesh Prajapati, a third-year student at IIT Roorkee with a passion for web development. When I'm not buried in code, you can find me actively involved in various groups on campus, such as NSS, CIG, and IARC, where I serve as the Joint Secretary of Web Development.
                My journey into the world of tech began with a fascination for solving complex problems, particularly in data structures and algorithms. Whether it's crafting elegant user interfaces or tackling algorithmic challenges, I thrive on the creative and analytical aspects of software development.
                Feel free to connect with me to chat about all things tech, collaboration opportunities, or just to share some coding adventures!
              </h2>
            </div>
          </div>
          {/* <div className='mr-5 mb-10 sm:mb-0'>
            <img src={me} alt='Ganesh Prajapati' className='w-[100%] h-[100%]' />
          </div> */}
        </div>
      </ScrollTrigger>
    </>
  );
}

export default Homepage;
