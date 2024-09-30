import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const products = [
    { id: '1', name: 'Nike Air Max', price: "100", category: 'nike', image: '/images/NikeAirMax.jpeg' },
    { id: '2', name: 'Puma Suede', price: "90", category: 'puma', image: '/images/PumaSuede.jpeg' },
    { id: '3', name: 'Adidas UltraBoost', price: "120", category: 'adiddas', image: '/images/AdidasUltraBost.webp' },
    { id: '4', name: 'New Balance 574', price: "110", category: 'new-balance', image: '/images/NewBalance.jpeg' }
];

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            setFilteredProducts(products.filter(product => product.category === categoryId));
        } else {
            setFilteredProducts(products);
        }
    }, [categoryId]);

    return (
        <div className="container my-5">
            <h2>{greeting}</h2>
            <div className="row">
                {filteredProducts.map(product => (
                    <div className="col-md-4" key={product.id}>
                        <Item id={product.id} name={product.name} price={product.price} image={product.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;


