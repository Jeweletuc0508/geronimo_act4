function BillingDetails({ data }) {
    return (
        <div className="billing-details">
            <h2>Billing Details</h2>
            <p>Product Name: {data.productName}</p>
            <p>Quantity: {data.quantity}</p>
            
            <p>Total Price: {data.total}</p>
        </div>
    );
}

export default BillingDetails;