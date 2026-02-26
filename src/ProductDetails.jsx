import { useState } from 'react';

export default function ProductDetails({ onCalculate, onReset }) {
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unitPrice, setUnitPrice] = useState('');

    const handleCalculate = () => {
        const qty = parseFloat(quantity);
        const price = parseFloat(unitPrice);
        if (productName && !isNaN(qty) && !isNaN(price)) {
            const total = qty * price;
            onCalculate({ productName, quantity: qty, unitPrice: price, total });
        }
    };

    const handleReset = () => {
        setProductName('');
        setQuantity('');
        onReset();
    };

    return (
        <div className="product-details">
            <h2>Product Details</h2>
            <label>
                Product Name:
                <input type="text" value={productName} onChange={e => setProductName(e.target.value)} />
            </label>
            <label>
                Quantity:
                <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
            </label>
            <label>
                Unit Price:
                <input type="number" value={unitPrice} onChange={e => setUnitPrice(e.target.value)} />
            </label>
            <button onClick={handleCalculate}>Calculate</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}   