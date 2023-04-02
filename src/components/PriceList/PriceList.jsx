import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {

    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])


    return (
        <div>
            <h1 className='text-5xl bg-purple-300 text-blue-900 font-bold text-center p-2'>Awesome affordable Prices</h1>

            <div className='grid grid-cols-3 gap- mx-20'>
                {
                    prices.map(price => <PriceCard
                        price={price}
                        key={price.id}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;