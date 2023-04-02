import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
                  <CheckCircleIcon className="h-5 w-5 text-blue-700" /><span className='text-lg ml-2'>{feature}</span>
        </div>
    );
};

export default Feature;