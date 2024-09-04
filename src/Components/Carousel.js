import React, { useEffect, useState } from 'react';
import ok from '../Components/asset/ok.png';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import 'tailwindcss/tailwind.css';
import './Carousel.css'


function Carousel() {
  const [counterOn, setCounterOn] = useState(false);

  const skills = [
    { name: 'HTML', percentage: 96 },
    { name: 'CSS', percentage: 96 },
    { name: 'JS', percentage: 90 },
    { name: 'React', percentage: 96 },
    { name: 'Node js', percentage: 85 },
    { name: 'Express js', percentage: 85 },
    { name: 'Mongo DB', percentage: 85 },
    { name: 'Git/Github', percentage: 85 },
    { name: 'Responsys Development', percentage: 100 },
    { name: 'Animation', percentage: 90 },
    { name: 'UI/UX', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'Bootstrap', percentage: 90 },
    { name: 'Figma', percentage: 85 },
    { name: 'C++', percentage: 85 },
    { name: 'Data Structures', percentage: 40 },
  ];

  const firstHalfSkills = skills.slice(0, 8);
  const secondHalfSkills = skills.slice(8);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  return (
    <>
      <div className="w-screen p-10"  style={{ backgroundImage: `url(${ok})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className='py-5 text-center font-Quicksand text-5xl md:text-6xl'>Skill Meter</h1>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <div className="flex w-full flex-wrap sm:flex-nowrap">
            <div className="w-full sm:w-1/2 p-5">
              <ul className="text-white">
                {firstHalfSkills.map((skill, index) => (
                  <li key={index} className="mb-4 font-Quicksand">
                    {skill.name} <br />
                    <div className="relative w-full h-3 rounded-lg overflow-hidden bg-gray-300">
                      <div
                        className="absolute font-Quicksand top-0 left-0 h-full bg-green-500 transition-all duration-1000"
                        style={{ width: `${counterOn ? skill.percentage : 0}%` }}
                      />
                    </div>
                    {counterOn && <CountUp start={0} end={skill.percentage} delay={0} />}%
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 p-5">
              <ul className="text-white">
                {secondHalfSkills.map((skill, index) => (
                  <li key={index} className="mb-4 font-Quicksand">
                    {skill.name} <br />
                    <div className="relative w-full h-3 rounded-lg overflow-hidden bg-gray-300">
                      <div
                        className="absolute font-Quicksand top-0 left-0 h-full bg-green-500 transition-all duration-1000"
                        style={{ width: `${counterOn ? skill.percentage : 0}%` }}
                      />
                    </div>
                    {counterOn && <CountUp start={0} end={skill.percentage} delay={0} />}%
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>

  );
}

export default Carousel;