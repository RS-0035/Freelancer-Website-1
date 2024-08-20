import React, { useState } from 'react';

const Payment = () => {
    const [amount, setAmount] = useState(1500); // Example amount

    const handlePayment = () => {
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

export default Payment;
