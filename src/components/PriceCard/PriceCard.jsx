import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = (props) => {
    const {id, type, price, features, duration, availability} = props.price;
    return (
        <div className='bg-indigo-200  p-10 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold'>{price}</span> 
                <span className='text-2xl'>/mon</span> 
            </h2>
            <h3 className='text-2xl font-bold text-center my-4'>{type}</h3>

            <p className='font-bold underline text-xl'>Features:</p>
            {
                features.map((feature, index) => <Feature
                                    key={index}
                                    feature = {feature}

                ></Feature>)
            }
            <button className='w-full bg-blue-700 py-2 px-3 rounded mt-auto hover:bg-blue-900'>See More</button>
        </div>
    );
};

export default PriceCard;