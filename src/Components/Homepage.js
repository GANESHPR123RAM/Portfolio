import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './style.css';
import ok from '../Components/asset/ok.png'
import me from '../Components/asset/55.png';



function Homepage() {

  useEffect(() => {
    const typed = new Typed('.auto-type', {
      strings: ['Web developer', 'Coder'],
      typeSpeed: 100,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className=" w-screen h-screen flex items-center justify-center " style={{ backgroundImage: `url(${ok})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className=" w-[100%] h-[100%] gap-[5%] p-10 md:p-32 flex  items-center justify-center ">
          <div className=" w-[60%] pl-3 ">
            <h1 className=' text-[16px] sm:text-[22px] xl:text-[30px] font-bold'>
              Hi! I'm Ganesh prajapati &amp;<br /><h2 className=' text-[16px] sm:text-[22px] md:text-[30px] xl:text-[35px]  font-bold font-Quicksand'>I'm a
                <span className="auto-type pl-2 text-[#ef9f3e]"></span></h2>
            </h1>
            <p className=' text-[10px] sm:text-[12px] md:text-[15px] xl:text-[20px] pt-3 sm:pt-5'>
              I'm a Web Developer with extensive experience.<br /> My expertise is to create and website design and many more...
            </p>
          </div>
          <div className=" p-0 sm:p-5 md:p-10 xl:p-14  w-[35%] flex items-end justify-end">
            <img src={me} alt='Ganesh Prajapati' className='w-[100%] mt-10 h-[100%]' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;


