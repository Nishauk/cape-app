import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <>
            <div className="footer">
                <div className="container-fluid">
                    <div className = "row">
                        <div className="col-md-6 ql">
                            <h4 className="qlhead"> Quick Links</h4>
                            <ul>
                                <li>
                                <Link to ='/service'>Service</Link>
                                </li>
                                <li>
                                <Link to ='/blog'>Blog</Link>
                                </li>
                                <li>
                                <Link to ='/contact'>Contact us</Link>
                                </li>
                            </ul>                           
                        </div>

                        <div className="col-md-6">
                            <h4>React Us</h4>
                            <p>xx/xx xxx street,<br/>
                            yyy road, yyy Avenue,<br/>
                            zzz city, zzz State,<br/>
                            Pin 6@@@@@</p>
                            
                        </div>
                        <hr/>

                        <div className="footer-bottom text-center">
                            <p>&copy;{new Date().getFullYear()} CAPE Electrics | All Rights Reserved</p> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default  Footer;