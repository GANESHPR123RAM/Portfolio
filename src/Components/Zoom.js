// src/ZoomText.js
import React, { useState, useEffect } from 'react';

const ZoomText = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = 1 + scrollPosition / 1000;
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-black overflow-hidden">
      <div
        className=" text-3xl sm:text-5xl md:text-6xl text-white transition-transform duration-100 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
       Ok Let's Start
      </div>
    </div>
  );
};

export default ZoomText;
