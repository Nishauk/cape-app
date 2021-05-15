import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <Slider/>
            <h2 className="heading">Lorem Ipsum</h2>
            <div className= "container-fluid">
                <div className = "row">
                    <div className="col-md-12">
                        <p className="homep">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>                    
                    </div>
                    

                </div>
            </div>

            <div className="container">
                &emsp;
            </div>

            <div className="container-fluid">
                <div className="row hrow">

                    <div className="col-md-3 col-sm-12 sec">
                        <h4 className="heading">About</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. . .
                            <Link to="/about">Read More</Link>
                        </p>
                    </div>
                        
                    <div className="col-md-3 col-sm-12  sec">
                        <h4 className="heading">Service</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. . .
                            <Link to="/service">Read More</Link>
                        </p>
                    </div>

                    <div className="col-md-3 col-sm-12  sec">
                        <h4 className="heading">Blog</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. . .
                            <Link to="/blog">Read More</Link>
                        </p>
                    </div>

                        
                    
                </div>
            </div>
        </div>
        
    );
}

export default Home;