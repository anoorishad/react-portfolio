import React from 'react';
import Headshot from '../../assets/Andrew Noorishad Head Shot cropped.jpeg'
import './About.css'

export default function About() {
  const headShot = {
    image: Headshot
  }
  return (
    <div className='bodyStyle'>
      <h1>About</h1>
      <img className='headShot' src={headShot.image} alt='head shot' />
      <p>
        Full-stack web developer leveraging a background in IT, looking to balance functionality and design while optimizing the end-user experience. Recently earned a certificate in full-stack development from the University of Washington, with skills in JavaScript, CSS, React.js, and responsive web design. I approach every project analytically and am determined to produce results I take pride in. I’m excited to apply my skills in a fast-paced and adaptable team, driven to create unique web experiences.
      </p>
    </div>
  );
}
