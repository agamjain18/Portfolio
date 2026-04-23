import React, { useEffect, useRef } from 'react';

const AmbientLight = () => {
  const lightRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!lightRef.current) return;
      const x = e.clientX - 300;
      const y = e.clientY - 300;
      lightRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={lightRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(128,232,0,0.07) 0%, transparent 68%)',
        pointerEvents: 'none', zIndex: 1,
        borderRadius: '50%', filter: 'blur(30px)',
        transition: 'transform 0.12s ease',
        willChange: 'transform',
      }}
    />
  );
};

export default AmbientLight;
