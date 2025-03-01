import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Home = () => {
  const pathref = useRef();
  const containerRef = useRef();
  
  // Initialize state with default path
  const [newD, setnewD] = useState('M 0 100 Q 500 100 1000 100');

  useGSAP(() => {
    gsap.from('.box', {
      y: -50,
      opacity: 0,
      duration: 1
    });
  });
  useGSAP(() => {
    gsap.from('h1', {
      y: -50,
      opacity: 0,
      duration: 1
    });
  });

  const handelEntered = (e) => {
    const svgRect = containerRef.current.getBoundingClientRect();
    const rawX = e.clientX - svgRect.left;
    const rawY = e.clientY - svgRect.top;

    const constrainedX = Math.min(Math.max(rawX, 0), 1000);
    const constrainedY = Math.min(Math.max(rawY, 0), 500);

    const newD1 = `M 0 100 Q ${constrainedX} ${constrainedY} 1000 100`;
    
    // Update state and DOM directly
    setnewD(newD1);
    gsap.to(pathref.current, {
      attr: { d: newD1 },  // Use newD1 instead of newD
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handelLeaved = () => {
    const resetD = 'M 0 100 Q 500 100 1000 100';
    setnewD(resetD);
    gsap.to(pathref.current, {
      attr: { d: resetD },
      duration: 1.2,
      ease: "elastic.out(1, 0.2)"
    });
  };

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] text-3xl'>
      <h1 className='text-3xl text-center mb-8'>Welcome Here!</h1>
      <div 
        ref={containerRef}
        onMouseLeave={handelLeaved}
        className=' relative box'
      >
        <svg 
          onMouseMove={handelEntered}
          width="1000" 
          height="200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            ref={pathref} 
            d={newD}  // Use state directly with initial value
            stroke="white" 
            strokeWidth="2"
            fill="transparent" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Home;