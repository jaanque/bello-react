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
        <h1>Mi Aplicación</h1>
        <div className="content-grid">
          <p>
            Bienvenido a la aplicación con menú flotante. El menú se encuentra en la parte superior
            con un diseño limpio y minimalista.
          </p>
          <div className="cards-container">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="card">
                <h3>Sección {item}</h3>
                <p>
                  Contenido de ejemplo para mostrar cómo se ve la página con el menú flotante.
                </p>
              </div>
            ))}
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