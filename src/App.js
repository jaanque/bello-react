import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';


import './App.css'; // Main App specific styles (should be minimal)
import Navbar from './components/Layout/Navbar'; // Navbar component
import Footer from './components/Layout/Footer'; // Footer component
import HomePage from './components/Home/HomePage'; // HomePage component
import ProductsPage from './pages/ProductsPage'; // ProductsPage component
import LoginPage from './pages/LoginPage'; // LoginPage component
import SignUpPage from './pages/SignUpPage'; // SignUpPage component
import CheckoutPage from './pages/CheckoutPage'; // Import CheckoutPage
// import ProductDetailPage from './pages/ProductDetailPage'; // Example for later
// import UserDashboardPage from './pages/UserDashboardPage'; // Example for later
import ProtectedRoute from './components/ProtectedRoute'; // If you have protected routes
import './App.css';

function App() {
  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f0f0f0">
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-router-content-area">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              {/* <Route path="/products/:productId" element={<ProductDetailPage />} /> */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                }
              />
              {/* <Route path="/dashboard" element={<ProtectedRoute><UserDashboardPage /></ProtectedRoute>} /> */}
              {/* Add other routes here: About, Contact, etc. */}
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SkeletonTheme>
  );
}

export default App;