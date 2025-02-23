import React from 'react';
import '../styles/CustomAiPage.css'; // Import the CSS file

function CustomAiPage() {
  return (
    <div className="custom-ai-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Custom AI Solutions</h1>
          <p>
            Unlock the power of AI tailored specifically to your business
            needs. Our expert team will work with you to design, develop, and
            deploy cutting-edge AI solutions.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
            <img src="/ai-illustration.svg" alt="Custom AI" />
        </div>
      </section>

      <section className="features">
        <h2>Our Custom AI Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Personalized Solutions</h3>
            <p>AI solutions built precisely for your unique requirements.</p>
          </div>
          <div className="feature-item">
            <h3>Scalability</h3>
            <p>Adaptable AI systems that grow with your business.</p>
          </div>
          <div className="feature-item">
            <h3>Expert Support</h3>
            <p>Ongoing support and maintenance from our AI experts.</p>
          </div>
          <div className="feature-item">
            <h3>Data Security</h3>
            <p>Your data is safe and secure with our robust systems.</p>
          </div>
        </div>
      </section>
        <section className='contact-us'>
            <h2>Contact Us</h2>
            <p>Contact us to have more information about our product</p>
            <button className='contact-button'>Contact Us</button>
        </section>
    </div>
  );
}

export default CustomAiPage;
