import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'lawn-care',
      title: 'Complete Lawn Transformation',
      location: 'Residential - North District',
      beforeImage: '/images/Lawn-Care01.jpg',
      afterImage: '/images/lawn-care02.jpg',
      description: 'Transformed a neglected lawn into a lush, healthy green space with proper irrigation and maintenance.',
      services: ['Lawn Care', 'Irrigation', 'Fertilization']
    },
    {
      id: 2,
      category: 'hardscaping',
      title: 'Modern Hardscape Installation',
      location: 'Residential - Luxury Home',
      beforeImage: '/images/hardscape01.jpg',
      afterImage: '/images/hardscape02.jpg',
      description: 'Created a stunning outdoor living space with custom stone work, modern design, and functional layout.',
      services: ['Hardscaping', 'Patio Design', 'Outdoor Structures']
    },
    {
      id: 3,
      category: 'lawn-care',
      title: 'Professional Lawn Maintenance',
      location: 'Commercial - Office Complex',
      beforeImage: '/images/Lawn-Care01.jpg',
      afterImage: '/images/lawn-care02.jpg',
      description: 'Maintained pristine lawn appearance for commercial property with regular care and seasonal treatments.',
      services: ['Lawn Care', 'Maintenance', 'Seasonal Care']
    },
    {
      id: 4,
      category: 'hardscaping',
      title: 'Outdoor Living Space Design',
      location: 'Residential - Garden District',
      beforeImage: '/images/hardscape01.jpg',
      afterImage: '/images/hardscape02.jpg',
      description: 'Designed and built a complete outdoor entertainment area with fire pit, seating, and landscaping.',
      services: ['Hardscaping', 'Landscape Design', 'Outdoor Living']
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'lawn-care', label: 'Lawn Care' },
    { key: 'hardscaping', label: 'Hardscaping' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Portfolio</h2>
          <p>
            See the transformation of outdoor spaces through our professional landscaping services. 
            Each project showcases our commitment to quality, creativity, and customer satisfaction.
          </p>
        </div>

        {/* Portfolio Filters */}
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="portfolio-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-images">
                <div className="image-container before">
                  <img src={item.beforeImage} alt={`Before: ${item.title}`} />
                  <div className="image-label">Before</div>
                </div>
                <div className="image-container after">
                  <img src={item.afterImage} alt={`After: ${item.title}`} />
                  <div className="image-label">After</div>
                </div>
              </div>
              
              <div className="portfolio-content">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-location">{item.location}</p>
                <p className="portfolio-description">{item.description}</p>
                
                <div className="portfolio-services">
                  {item.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="service-tag">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="portfolio-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>Let us transform your outdoor space with our professional landscaping services.</p>
          <a href="#contact" className="btn btn-primary">Get Started Today</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
