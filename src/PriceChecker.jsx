import React, { useState, useEffect } from 'react';
import './App.css';
import ProductDetails from './ProductDetails';
import BillingDetails from './BillingDetails';

function PriceChecker() {
    useEffect(() => {
        document.title = 'Price Checker';
    }, []);

    const [productData, setProductData] = useState(null);

    return (
        <div className="price-checker">
            <h1>Price Checker</h1>
            <ProductDetails onCalculate={setProductData} onReset={() => setProductData(null)} />
            {productData && <BillingDetails data={productData} />}
        </div>
    );
}

export default PriceChecker;    