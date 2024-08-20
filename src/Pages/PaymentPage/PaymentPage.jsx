import React, { useState } from "react";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [amount, setAmount] = useState(500); // Example amount

  const handlePayment = () => {
    // Payment processing logic
    alert(`Payment of $${amount} successful!`);
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>Amount: ${amount}</p>
      <form onSubmit={handlePayment}>
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Card Holder Name" required />
        <input type="text" placeholder="Expiry Date" required />
        <input type="text" placeholder="CVV" required />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;
