import React from 'react';
import ProductList from '../components/Products/ProductList'; // Adjust path as needed
import './ProductsPage.css'; // We'll create this CSS file next

const ProductsPage = () => {
  // You can add filtering, sorting, pagination state and logic here later
  return (
    <div className="products-page">
      <header className="products-page-header">
        <h1>Our Digital Assets</h1>
        <p>Browse through our collection of handcrafted animations, templates, and components.</p>
      </header>

      {/* Placeholder for Filters and Sorting Controls */}
      {/*
      <div className="products-controls">
        <div className="filters">
          <select name="category">
            <option value="">All Categories</option>
            <option value="animations">Animations</option>
            <option value="templates">Templates</option>
            <option value="react-components">React Components</option>
          </select>
        </div>
        <div className="sorting">
          <select name="sort-by">
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      */}

      <main className="products-page-content">
        <ProductList /> {/* This will show all products by default */}
      </main>
    </div>
  );
};

export default ProductsPage;
