import React from 'react';

const PriceCard = (props) => {
    const {id, type, price, features, duration, availability} = props.price;
    return (
        <div>
            <h2>
                <span className='text-purple-700 text-5xl font-extrabold'>{price}</span> 
                <span className='text-2xl'>/mon</span> 
            </h2>
            <h3 className='text-2xl font-bold'>{type}</h3>
        </div>
    );
};

export default PriceCard;