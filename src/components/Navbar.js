import React, { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos === 0;
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <ul className="navbar-links border-opacity-0">
        <li><a href="#"><FaHome /></a></li>
        <li><a href="#"><FaInfoCircle /></a></li>
        <li><a href="#"><FaEnvelope /></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
