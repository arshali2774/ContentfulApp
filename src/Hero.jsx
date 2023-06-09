import React from 'react';
import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur inventore dolores velit veniam nulla similique aliquam
            quis cumque harum ipsum, error vel nisi mollitia adipisci minus unde
            dignissimos distinctio optio!
          </p>
        </div>
        <div className='img-container'>
          <img
            src={heroImg}
            alt='women and the browser'
            className='img'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
