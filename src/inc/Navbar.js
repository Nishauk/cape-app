import React from 'react';

import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbg">
            <div class="container-fluid">
                
                <Link to ='/' className="navbar-brand">CAPE</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    
                    <Link to ='/' className="nav-link active">Home</Link>
                    </li>

                    <li class="nav-item">
                    
                    <Link to ='/about' className="nav-link active">About</Link>
                    </li>

                    <li class="nav-item">
                    
                    <Link to ='/service' className="nav-link active">Service</Link>
                    </li>

                    <li class="nav-item">
                    
                    <Link to ='/blog' className="nav-link active">Blog</Link>
                    </li>

                    <li class="nav-item">
                    
                    <Link to ='/contact' className="nav-link active">Contact</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
