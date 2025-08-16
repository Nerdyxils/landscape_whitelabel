import React, { useState, useEffect } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Homeowner',
      location: 'North District',
      rating: 5,
      text: 'GreenScape transformed our neglected backyard into a beautiful outdoor living space. The team was professional, creative, and completed the project on time. We now spend every evening enjoying our new patio and garden!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Property Manager',
      location: 'Downtown Office Complex',
      rating: 5,
      text: 'We hired GreenScape for our commercial property landscaping, and the results exceeded our expectations. Their attention to detail and maintenance schedule keeps our property looking professional year-round.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Restaurant Owner',
      location: 'Riverside District',
      rating: 5,
      text: 'The outdoor dining area GreenScape created for our restaurant has become our biggest attraction. Customers love the beautiful garden setting and we\'ve seen a significant increase in outdoor reservations.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their experience with GreenScape and the transformation of their outdoor spaces.
          </p>
        </div>

        <div className="testimonials-container">
          {/* Testimonial Display */}
          <div className="testimonial-display">
            <div className="testimonial-card active">
              <div className="testimonial-content">
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                    <span key={index} className="star">⭐</span>
                  ))}
                </div>
                
                <blockquote className="testimonial-text">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="testimonial-author">
                  <div className="author-image">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                    />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                    <p className="author-title">{testimonials[currentTestimonial].title}</p>
                    <p className="author-location">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="testimonials-nav">
            <button 
              className="nav-btn prev" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="nav-btn next" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="trust-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
