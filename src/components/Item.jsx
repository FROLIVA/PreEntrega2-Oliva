import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, image }) => {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">${price}</p>
                <Link to={`/item/${id}`} className="btn btn-primary">Ver detalles</Link>
            </div>
        </div>
    );
}

export default Item;
