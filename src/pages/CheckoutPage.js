import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useAuth } from '../contexts/AuthContext'; // Assuming you have user context
import { supabase } from '../config/supabaseClient'; // For backend communication
import './CheckoutPage.css'; // We'll create this CSS file

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51RdwEePqyGhvg2hvASKn3jEKmNgYcj6cHCJI4VeYTXNMmUZR8rOuve2gnKiIPQRlszEqDF6hNFDrjNGEC5uIvTX7006lmKGmEu'); // Replace with your actual publishable key

const CheckoutForm = ({ clientSecret, items, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth(); // Get user details if needed for the order

  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: user?.user_metadata?.full_name || '', // Pre-fill if available
    email: user?.email || '', // Pre-fill if available
    // Add more fields if needed, e.g., address
  });

  const handleBillingDetailsChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !clientSecret) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      setError("Stripe.js has not loaded yet. Please wait a moment and try again.");
      return;
    }
    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingDetails, // Pass billing details
    });

    if (paymentMethodError) {
        setError(paymentMethodError.message);
        setProcessing(false);
        return;
    }

    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret, // The client secret from your server
      {
        payment_method: paymentMethod.id,
      }
    );

    if (confirmError) {
      setError(confirmError.message);
      setProcessing(false);
    } else if (paymentIntent.status === 'succeeded') {
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      // Here, you would typically:
      // 1. Save the order in your Supabase database (correlate with user ID, items, paymentIntent ID)
      // 2. Clear the user's cart
      // 3. Redirect to an order confirmation page
      console.log('Payment Succeeded:', paymentIntent);
      alert('Payment Successful! Thank you for your purchase.');
      // Example: saveOrderToSupabase(user.id, items, paymentIntent.id, amount);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    },
    hidePostalCode: true, // Set to false if you need postal code for CVC checks
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form-fields">
      <h4>Billing Details</h4>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={billingDetails.name}
          onChange={handleBillingDetailsChange}
          required
          placeholder="Jane Doe"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={billingDetails.email}
          onChange={handleBillingDetailsChange}
          required
          placeholder="jane.doe@example.com"
        />
      </div>
      {/* Add address fields if needed */}

      <h4>Payment Information</h4>
      <div className="form-group">
        <label htmlFor="card-element">Credit or debit card</label>
        <CardElement id="card-element" options={cardElementOptions} />
      </div>

      {error && <div className="card-error" role="alert">{error}</div>}
      {succeeded && <div className="payment-success">Payment successful!</div>}

      <button type="submit" disabled={!stripe || processing || succeeded} className="submit-payment-btn">
        {processing ? "Processing..." : `Pay $${(amount / 100).toFixed(2)}`}
      </button>
    </form>
  );
};


const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState('');
  // These would come from your cart state management (e.g., Context, Redux, Zustand)
  const [cartItems, setCartItems] = useState([
    { id: 'prod_test123', name: 'Awesome Animation Pack', price: 2999, quantity: 1 },
    { id: 'template_abc456', name: 'Professional Website Template', price: 4999, quantity: 1 },
  ]);
  const [loadingSecret, setLoadingSecret] = useState(true);
  const [error, setError] = useState(null);

  const calculateOrderAmount = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const orderAmount = calculateOrderAmount(cartItems);


  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    // This should be done on your server! Do not expose your Stripe secret key in the frontend.
    // This is a simplified example. In a real app, you'd call your Supabase Edge Function here.
    const createPaymentIntent = async () => {
      setLoadingSecret(true);
      setError(null);
      try {
        // Replace with your actual Supabase Edge Function call
        // const { data, error: funcError } = await supabase.functions.invoke('create-payment-intent', {
        //   body: { amount: orderAmount, currency: 'usd' }, // or 'eur', etc.
        // });
        // if (funcError) throw funcError;
        // setClientSecret(data.clientSecret);

        // --- TEMPORARY MOCK for client secret fetching ---
        // In a real app, this fetch would be to your backend (Supabase Edge Function)
        // which then calls Stripe's API with your secret key.
        console.log("Attempting to create payment intent with amount:", orderAmount);
        if (orderAmount <= 0) {
            setError("Cart is empty or amount is invalid.");
            setLoadingSecret(false);
            return;
        }
        const response = await fetch('/.netlify/functions/create-payment-intent', { // Or your Supabase function URL
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: orderAmount, currency: 'usd' }), // Send amount in cents
        });
        const data = await response.json();
        if (data.error) {
            throw new Error(data.error);
        }
        setClientSecret(data.clientSecret);
        // --- END TEMPORARY MOCK ---

      } catch (err) {
        console.error("Error creating payment intent:", err);
        setError(err.message || "Failed to initialize payment. Please try again.");
      } finally {
        setLoadingSecret(false);
      }
    };
    if (orderAmount > 0) {
        createPaymentIntent();
    } else {
        setError("Your cart is empty.");
        setLoadingSecret(false);
    }
  }, [cartItems]); // Re-create if cartItems (and thus amount) changes

  if (cartItems.length === 0 && !loadingSecret) {
    return (
      <div className="checkout-page-container">
        <h2>Checkout</h2>
        <p>Your cart is currently empty. <a href="/products">Continue shopping</a>.</p>
      </div>
    );
  }

  return (
    <div className="checkout-page-container">
      <h2>Checkout</h2>
      {error && <div className="checkout-error" role="alert">{error}</div>}
      {loadingSecret && <div className="checkout-loading">Initializing payment...</div>}

      {!loadingSecret && clientSecret && (
        <div className="checkout-content">
          <div className="order-summary">
            <h3>Order Summary</h3>
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity / 100).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="order-total">
              <strong>Total: ${(orderAmount / 100).toFixed(2)}</strong>
            </div>
          </div>

          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm clientSecret={clientSecret} items={cartItems} amount={orderAmount} />
          </Elements>
        </div>
      )}
       {!loadingSecret && !clientSecret && !error && cartItems.length > 0 && (
        <div className="checkout-loading">Preparing your order... If this persists, please refresh.</div>
      )}
    </div>
  );
};

export default CheckoutPage;
