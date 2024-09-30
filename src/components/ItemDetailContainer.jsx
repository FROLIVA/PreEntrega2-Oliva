import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const products = [
    { id: '1', name: 'Nike Air Max', price: 100, description: 'Las mejores zapatillas Nike', image: '/images/NikeAirMax.jpeg' },
    { id: '2', name: 'Puma Suede', price: 90, description: 'Estilo clásico de Puma', image: '/images/PumaSuede.jpeg' },
    { id: '3', name: 'Adidas UltraBoost', price: 120, description: 'Comodidad insuperable de Adidas', image: '/images/AdidasUltraBost.webp' },
    { id: '4', name: 'New Balance 574', price: 110, description: 'El clásico de New Balance', image: '/images/NewBalance.jpeg' }
];

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(products.find(p => p.id === id));
    }, [id]);

    if (!product) return <p>Cargando...</p>;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} className="img-fluid" alt={product.name} />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
