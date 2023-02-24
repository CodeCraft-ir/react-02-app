import React from 'react';

function Navbar(props) {
    const {CountersLength} = props
    return (
        <nav className='text-2xl font-extrabold p-5 bg-gray-100'>
            Navbar
            <span className='bg-gray-400 rounded-full text-lg text-white ml-3 px-4 py-2 text-center '>{CountersLength}</span>
        </nav>
    );
}

export default Navbar;