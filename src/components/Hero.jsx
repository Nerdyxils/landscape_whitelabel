import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {/* Using user's actual landscaping image */}
        <div className="hero-image">
          <img 
            src="/src/images/Lawn-Care01.jpg" 
            alt="Professional lawn care services - lush green grass and well-maintained landscape"
          />
          <div className="hero-overlay"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Outdoors with <span className="highlight">GreenScape</span>
          </h1>
          <p className="hero-subtitle">
            Professional landscaping services that turn your vision into reality. 
            From lawn care to garden design, we create outdoor spaces you'll love to spend time in.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get Free Quote</a>
            <a href="#portfolio" className="btn btn-secondary">View Our Work</a>
          </div>
          
          {/* Trust indicators */}
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon">⭐</span>
              <span>15+ Years Experience</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🏆</span>
              <span>500+ Projects Completed</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">💚</span>
              <span>100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
