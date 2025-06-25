import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // We'll create this CSS file next
// import ProductList from '../Products/ProductList'; // Example: if you want to show some products

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Unique Digital Assets</h1>
          <p className="hero-subtitle">
            High-quality animations, templates, React components, and more,
            all meticulously crafted by TelaioDev.
          </p>
          <Link to="/products" className="hero-cta-button">
            Explore Products
          </Link>
        </div>
        <div className="hero-image-container">
          {/* Placeholder for a hero image or animation */}
          {/* <img src="/path-to-your-hero-image.jpg" alt="Digital Assets Showcase" /> */}
          <div className="hero-placeholder-image"></div>
        </div>
      </section>

      <section className="featured-categories">
        <h2>Featured Categories</h2>
        <div className="categories-grid">
          <Link to="/products?category=animations" className="category-card">
            <div className="category-icon">🎬</div> {/* Placeholder icon */}
            <h3>Animations</h3>
            <p>Bring your projects to life with stunning animations.</p>
          </Link>
          <Link to="/products?category=templates" className="category-card">
            <div className="category-icon">📄</div> {/* Placeholder icon */}
            <h3>Templates</h3>
            <p>Kickstart your work with professional templates.</p>
          </Link>
          <Link to="/products?category=react-components" className="category-card">
            <div className="category-icon">⚛️</div> {/* Placeholder icon */}
            <h3>React Components</h3>
            <p>Reusable and robust components for your apps.</p>
          </Link>
          <Link to="/products?category=ui-kits" className="category-card">
            <div className="category-icon">🎨</div> {/* Placeholder icon */}
            <h3>UI Kits</h3>
            <p>Beautifully designed UI elements to speed up design.</p>
          </Link>
        </div>
      </section>

      {/* Optional: Section for featured products or new arrivals */}
      {/* <section className="featured-products">
        <h2>New Arrivals</h2>
        <ProductList limit={4} /> // Example: Show 4 products
      </section> */}

      <section className="why-choose-us">
        <h2>Why TelaioDev?</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">💎</div> {/* Placeholder icon */}
            <h3>Exclusive Quality</h3>
            <p>Every asset is originally created and curated for the highest standard.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🚀</div> {/* Placeholder icon */}
            <h3>Boost Productivity</h3>
            <p>Save time and effort with ready-to-use professional assets.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">💡</div> {/* Placeholder icon */}
            <h3>Creative Freedom</h3>
            <p>Flexible assets that can be easily customized for your unique vision.</p>
          </div>
        </div>
      </section>

      {/* Section for the pricing card from original App.js, if it's meant for the homepage */}
      {/* This should be componentized, but for now, let's assume the CSS from App.css applies if the structure is similar */}
      <section className="app-embedded-pricing-section"> {/* Use the class from App.css */}
        <div className="app-embedded-pricing-card-grid"> {/* Use the class from App.css */}
          <div className="app-embedded-pricing-left-panel"> {/* Use the class from App.css */}
            <h2>Every type of asset,</h2>
            <h2>for any type of project.</h2>
            <p>With our full AI stack, generate images, videos, music, and more — all included in your subscription.*</p>
            <p className="disclaimer">*Not available on Enterprise Plans.</p>
          </div>
          <div className="app-embedded-pricing-right-panel"> {/* Use the class from App.css */}
            <div className="app-embedded-price-header">Desde</div>
            <div className="app-embedded-price-tag">14,50 €<span className="app-embedded-price-period">/mes</span></div>
            <div className="app-embedded-features-list">
              <div className="app-embedded-feature-item">
                <span className="app-embedded-feature-icon">↓</span>
                <span>Descargas ilimitadas</span>
              </div>
              <div className="app-embedded-feature-item">
                <span className="app-embedded-feature-icon">⊙</span>
                <span>22+ millones de recursos premium</span>
              </div>
              <div className="app-embedded-feature-item">
                <span className="app-embedded-feature-icon">✦</span>
                <span>Pila completa de herramientas de IA</span>
              </div>
              <div className="app-embedded-feature-item">
                <span className="app-embedded-feature-icon">✓</span>
                <span>Licencia comercial de por vida</span>
              </div>
            </div>
            <button className="app-embedded-cta-button">Obtén descargas ilimitadas</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default HomePage;
