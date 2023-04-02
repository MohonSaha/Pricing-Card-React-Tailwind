import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 text-xl hover:bg-purple-500 px-4 py-1 rounded'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;