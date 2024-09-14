import React from 'react';
import styles from './styles/body.module.css';

const Body = () => {
  return (
    <div className={styles.bodyContent}>
      {/* Hero Section */}
      <section id="hero" className={styles.heroSection}>
        <h1>Welcome to Lorem Picsum</h1>
        <p>Discover beautiful, random pictures that captivate your imagination.</p>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.featuresSection}>
        <h2>Features</h2>
        <p>
          Lorem Picsum offers you a collection of beautiful, random images that you can use for
          your design, development, or personal projects. You can customize image dimensions
          and generate as many as you need!
        </p>
        <ul>
          <li>Random image generator</li>
          <li>Customizable image sizes</li>
          <li>Free to use for any project</li>
          <li>Thousands of high-quality images</li>
        </ul>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <h2>About Lorem Picsum</h2>
        <p>
          Lorem Picsum was created to provide developers and designers with a simple way to
          generate placeholder images. It offers a wide variety of images, ranging from nature
          to architecture, animals, and much more.
        </p>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className={styles.ctaSection}>
        <h2>Get Started</h2>
        <p>
          Ready to explore the world of random images? Get started by heading over to Lorem Picsum
          and discover endless possibilities for your projects.
        </p>
        <a href="https://picsum.photos" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
          Explore Now
        </a>
      </section>
    </div>
  );
};

export default Body;
