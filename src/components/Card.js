import React from 'react';

const Card = ({product}) => {
    return (
        <div>
            <h3>{product.title}</h3>
            <h5>{product.price}€</h5>
            <p>{product.description}</p>
        </div>
    );
};

export default Card;