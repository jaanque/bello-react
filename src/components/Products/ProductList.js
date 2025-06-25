import React, { useState, useEffect } from 'react';
import { supabase } from '../../config/supabaseClient'; // Adjust path as needed
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ limit }) => { // 'limit' prop to control number of products shown
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        let query = supabase.from('products').select('*');
        if (limit) {
          query = query.limit(limit);
        }
        // Add ordering if desired, e.g., .order('created_at', { ascending: false })

        const { data, error: supabaseError } = await query;

        if (supabaseError) {
          throw supabaseError;
        }
        setProducts(data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message || 'Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit]);

  if (error) {
    return <div className="product-list-error">Error: {error}</div>;
  }

  // Display skeleton loaders based on the limit or a default number
  const skeletonCount = limit || 8; // Show 8 skeletons if no limit for a full page

  return (
    <div className="product-list-container">
      {loading ? (
        <div className="product-grid">
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <ProductCard key={`skeleton-${index}`} loading={true} />
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="no-products-found">No products found.</div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} loading={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
