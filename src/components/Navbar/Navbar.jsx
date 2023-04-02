import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Contract',
            path: '/contract'
        },
        {
            id: 4,
            name: 'Inventory',
            path: '/inventory'
        },
    ];


    return (
        <nav className='bg-purple-900 py-3 '>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                {/* <span>{open === true ? 'open' : 'close' }</span> */}


                <span className=''>{open === true ? <XMarkIcon className="h-6 w-6 text-slate-950" /> : <Bars3Icon className="h-6 w-6 text-slate-950" /> }
                </span>
                
                
            </div>


            <ul className={`md:flex absolute md:static duration-300 text-white bg-purple-900 w-[100vw] ps-48 md:ps-4 ${open ? 'top-8' : '-top-36'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;