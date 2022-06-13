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
      <img className='headShot' src={headShot.image} alt='head shot'/>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
