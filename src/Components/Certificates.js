import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import ok from '../Components/asset/ok.png';
import COGNIZANCE from '../Components/asset/COGNIZANCE.png';
import one from '../Components/asset/NssCer.jpg';
import camday from '../Components/asset/camday.jpg';
import nss2 from '../Components/asset/nss2.png';
import appetizer from '../Components/asset/appetizer.jpg';
import bhawanApp from '../Components/asset/bhawanApp.jpg';
import SyntaxError from '../Components/asset/syntexError.jpg';


function Certificates() {
  const slides = [
    {
      des: "Recognized for exceptional performance as a Marketing volunteer at Cognizance 2023, Asia's second-largest tech fest by IIT Roorkee.",
      img: COGNIZANCE
    },
    {
      des: "Awarded for exemplary technical management at ChemDay, the chemistry research publication event of IIT Roorkee.",
      img: camday
    },
    {
      des: "Recognized for outstanding contribution as a Marketing Executive in NSS IIT Roorkee, promoting social welfare initiatives and fostering community engagement during the fest.",
      img: one
    },
    {
      des: "Served as: Deputy Cell Secretary (Web Development Cell)of National Service Scheme, IIT Roorkee during August 1, 2023 - September 20,2023",
      img: nss2
    },
    {
      des: "Developed the Appetizer app with my team to manage attendance and a menu of the hostel mess.",
      img: appetizer
    },
    {
      des: "Developed and managed the Bhawan App, facilitating hostel complaint submissions, election processes, and various student needs throughout the academic tenure.",
      img: bhawanApp
    },
    {
      des: "My team and I participated in 'Syntax Error X' (Oct 27-29, 2023), developing a 3D multiplayer game in C# and Unity, where I focused on backend development.",
      img: SyntaxError
    },
  ];

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleButtonClick = (img) => {
    setFullscreenImage(img);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="relative">
      {/* Container with background image */}
      <div
        className="flex flex-col justify-center items-center w-screen m-auto py-10 px-5 sm:py-16 sm:px-10 relative group"
        style={{ backgroundImage: `url(${ok})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1 className="text-center py-8 text-3xl md:text-4xl font-Quicksand text-yellow-500 font-serif font-bold">My certificates</h1>

        {/* Horizontal scroll container */}
        <div className="w-full overflow-x-auto p-5 flex justify-start md:justify-center space-x-4">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <div className="flex space-x-4 justify-center bg-transparent">
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div key={index} className=" w-[220px] h-80  sm:w-[300px] sm:h-96 bg-white rounded-lg bg-transparent shadow-lg">
                    {/* Image container */}
                    <div className="w-full h-1/2 rounded-t-lg p-2 bg-blue-500 rounded-bl-[25px]">
                      <img src={slide.img} className="rounded-t-lg w-full h-full rounded-bl-[25px]" alt="" />
                    </div>

                    {/* Description and button */}
                    <div className="w-full h-1/2 px-3 py-2 flex flex-col justify-between gap-2 rounded-b-lg">
                      <p className="text-[0.7rem] sm:text-sm font-Quicksand text-black">{slide.des}</p>
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  text-[0.7rem] sm:text-sm px-3 py-2 sm:px-5 sm:py-2.5 mb-2 focus:outline-none"
                        onClick={() => handleButtonClick(slide.img)}
                      >
                        View Fullscreen
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

      </div>

      {/* Fullscreen image viewer */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleCloseFullscreen}
        >
          <img src={fullscreenImage} className="w-full max-w-screen-lg h-auto" alt="Fullscreen" />
        </div>
      )}
    </div>
  );
}

export default Certificates;
