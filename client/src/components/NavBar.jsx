import React from 'react';
import '../index.css';

const Navbar = ({brand}) => {
    return ( 
       <nav >
            <div className="container">
                <a href='#!' className='navbar-brand'>{brand}</a>
            </div>
       </nav>
     );
}
export default Navbar;