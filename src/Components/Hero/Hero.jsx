// import React from 'react'
// import './Hero.css'

// const Hero = () => {
//   return (
//     <div className='hero'>
//     </div>
//   )
// }

// export default Hero

import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // trigger slide-in on page load
  }, []);

  return (
    <div className='hero'>
      <div className={`slide-box ${visible ? 'slide-in' : ''}`}>
        <h2>Hello!</h2>
        <p>Welcome to my portfolio.</p>
      </div>
    </div>
  )
}

export default Hero;
