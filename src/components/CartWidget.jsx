import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div>
            <FaShoppingCart /> <span className="badge bg-secondary">3</span>
        </div>
    );
}

export default CartWidget;
