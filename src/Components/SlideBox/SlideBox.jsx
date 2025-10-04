import React, { useEffect, useState } from 'react';
import './SlideBox.css';

const SlideBox = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger slide-in animation after component mounts
    setVisible(true);
  }, []);

  return (
    <div className={`slide-box ${visible ? 'slide-in' : ''}`}>
      <h2>Hello! Welcome to my portfolio.</h2>
      <p><br></br>This box slides in from the left on page load. How cool!</p>
    </div>
  );
};

export default SlideBox;
