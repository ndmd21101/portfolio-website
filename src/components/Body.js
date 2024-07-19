import React, { useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from 'framer-motion';

const Body = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Set a timeout to show the image after a delay
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 1000); // Adjust the delay time as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="Body">
      <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <Stars factor={1} count={2300} radius={300} depth={100}/>
      </Canvas>
      <div className="Navbar">
        {/* Your navbar content goes here */}
      </div>
      <div className="Content">
        <div className={`ImageContainer ${showImage ? 'show' : ''}`}>
          <img src={require('C:/PortfolioWebsite/my-react-app/src/assets/Avatar.png')} alt="Avatar" />
          <div className='Intro'>
            <h1>My name is Duc Nguyen</h1>
            <h2></h2>
          </div>
        </div>
        <div className="Introduction">
          <h1 style={{ textAlign: "center" }}>Introduction</h1>
          <p>
            Yo! I'm Duc, your friendly neighborhood coder and all-around cool dude. When I'm not rocking the keyboard, you can catch me vibing to tunes, chilling with my beautiful girlfriend, or dominating the courts and pool halls. I'm all about leveling up and chasing my dreams every day. With a fierce commitment to making a difference, I'm ready to bring my A-game and contribute to your organization in a big way!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
