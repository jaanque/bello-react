import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="App">
      {/* Contenido principal */}
      <div className="main-content">
        <div className="pricing-container">
          <div className="pricing-card">
            <div className="pricing-left">
              <h2>Every type of asset,</h2>
              <h2>for any type of project.</h2>
              <p>With our full AI stack, generate images, videos, music, and more — all included in your subscription.*</p>
              <p className="disclaimer">*Not available on Enterprise Plans.</p>
            </div>
            <div className="pricing-right">
              <div className="pricing-details">
                <div className="price-header">Desde</div>
                <div className="price">14,50 €<span className="price-period">/mes</span></div>
                <div className="features">
                  <div className="feature">
                    <span className="feature-icon">↓</span>
                    <span>Descargas ilimitadas</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">⊙</span>
                    <span>22+ millones de recursos premium</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✦</span>
                    <span>Pila completa de herramientas de IA</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <span>Licencia comercial de por vida</span>
                  </div>
                </div>
                <button className="cta-button">Obtén descargas ilimitadas</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú flotante */}
      <nav className="floating-menu">
        <div className="menu-container">
          {/* Logo */}
          <div className="logo">
            <span className="logo-text">TelaioDev</span>
          </div>
          
          {/* Items del menú */}
          <div className="menu-items">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
                title={item.label}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Botón Submit */}
          <button className="submit-button">
            Submit your template
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;