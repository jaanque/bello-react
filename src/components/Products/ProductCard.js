import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'; // Import Skeleton
import 'react-loading-skeleton/dist/skeleton.css'; // Import Skeleton CSS
import './ProductCard.css';

const ProductCard = ({ product, loading }) => {
  if (loading) {
    return (
      <div className="product-card">
        <div className="skeleton-image-container">
          <Skeleton height="100%" />
        </div>
        <div className="product-info">
          <Skeleton width="80%" height={20} style={{ marginBottom: '0.5rem' }} />
          <Skeleton count={2} height={15} style={{ marginBottom: '0.25rem' }} />
          <Skeleton width="50%" height={24} style={{ marginTop: '0.5rem', marginBottom: '1rem' }} />
          <Skeleton height={40} />
        </div>
      </div>
    );
  }

  if (!product) {
    return null; // Or some placeholder for an error/empty state
  }

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-link">
        <div className="product-image-container">
          {product.image_url ? (
            <img src={product.image_url} alt={product.name} className="product-image" />
          ) : (
            <div className="product-image-placeholder">No Image</div>
          )}
        </div>
      </Link>
      <div className="product-info">
        <h3 className="product-title">
          <Link to={`/products/${product.id}`}>{product.name || 'Unnamed Product'}</Link>
        </h3>
        <p className="product-description">
          {product.description
            ? product.description.substring(0, 100) + (product.description.length > 100 ? '...' : '')
            : 'No description available.'}
        </p>
        <p className="product-price">
          {product.price ? `$${parseFloat(product.price).toFixed(2)}` : 'Price not set'}
        </p>
        <button className="add-to-cart-btn">
          Add to Cart
        </button>
        {/* Or Link to product page: <Link to={`/products/${product.id}`} className="add-to-cart-btn">View Details</Link> */}
      </div>
    </div>
  );
};

export default ProductCard;
