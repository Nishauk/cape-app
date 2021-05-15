import React from 'react';

function Contact() {
    return (
        
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 form1">
                                    <h5>Contact Form</h5>
                                    <hr/>
                                    <div className="form-group">
                                        <label>Name</label>&emsp;
                                        <input type="text" placeholder="Enter your Full"></input>
                                    </div><br/>
                                    <div className="form-group">
                                        <label>Mobile Numer</label>&emsp;
                                        <input type="number" placeholder="Enter mobile number"></input>
                                    </div><br/>
                                    <div className="form-group">
                                        <label>E-Mail</label>&emsp;
                                        <input type="email" placeholder="example@mail.com"></input>
                                    </div><br/>
                                    <button className="btn btn-primary">Submit</button>
                                </div>

                                <div className="col-md-6">
                                    <address>
                                        <h5>Contact Us</h5><hr/>
                                    <p>xx/xx xxx street,<br/>
                                    yyy road, yyy Avenue,<br/>
                                    zzz city, zzz State,<br/>
                                    Pin 6@@@@@</p>
                                    </address>
                                    <p> 
                                     Phone: +91-9xxxxxxx9<br/>
                                     E-mail: Example@mail.com
                                    </p>
                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            <br/>
            </section>
       
    );
}

export default Contact;