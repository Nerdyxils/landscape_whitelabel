import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🌱',
      title: 'Lawn Care & Maintenance',
      description: 'Professional lawn care services including mowing, edging, fertilization, and seasonal maintenance to keep your grass healthy and beautiful year-round.',
      features: ['Regular mowing & edging', 'Fertilization & weed control', 'Seasonal clean-up', 'Irrigation maintenance'],
      image: '/images/Lawn-Care01.jpg'
    },
    {
      id: 2,
      icon: '🌿',
      title: 'Garden Design & Installation',
      description: 'Transform your outdoor space with custom garden designs that reflect your style and create a welcoming environment for family and guests.',
      features: ['Custom garden planning', 'Plant selection & installation', 'Seasonal color displays', 'Garden maintenance'],
      image: '/images/lawn-care02.jpg'
    },
    {
      id: 3,
      icon: '🏗️',
      title: 'Hardscaping & Structures',
      description: 'Build lasting outdoor structures including patios, walkways, retaining walls, and outdoor living spaces that enhance your property value.',
      features: ['Patios & walkways', 'Retaining walls', 'Outdoor kitchens', 'Fire pits & seating areas'],
      image: '/images/hardscape01.jpg'
    },
    {
      id: 4,
      icon: '💧',
      title: 'Irrigation & Water Management',
      description: 'Smart irrigation systems and water management solutions that conserve water while keeping your landscape lush and healthy throughout all seasons.',
      features: ['Smart irrigation systems', 'Drip irrigation installation', 'Water conservation design', 'System maintenance & repair'],
      image: '/images/hardscape02.jpg'
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Professional Services</h2>
          <p>
            We offer comprehensive landscaping solutions to transform your outdoor space. 
            From routine maintenance to complete landscape design, we handle every detail with expertise and care.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="service-card-image">
                <img src={service.image} alt={service.title} />
                <div className="service-image-overlay"></div>
              </div>
              
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="service-cta">
                <a href="#contact" className="btn btn-secondary">Get Quote</a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Outdoor Space?</h3>
            <p>Contact us today for a free consultation and estimate on your landscaping project.</p>
            <a href="#contact" className="btn btn-primary">Schedule Free Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
