import React, { Component } from 'react';
import './style.css';

export class Contacts extends Component {
  render() {
    return (
        <div className="padding" id="contacts">
            <div className="container contact-info">
                <div className="row">
                    <div className="text-center contacts-header"><h3>Our contacts</h3></div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-3 fa-icons">
                        <a href="mailto: info@thetopshelfllc.com" className="fa fa-4x fa-envelope"><h4>info@thetopshelfllc.com</h4></a>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-3 fa-icons">
                        <a href="tel:1-240-475-3267" className="fa fa-4x fa-phone"><h4>+1(240)475-3267</h4></a>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-3 fa-icons">
                        <a href="https://goo.gl/maps/9Ugzx4b4Tr8vHgJL7" className="fa fa-4x fa-globe"><h4>Bethesda, MD, USA</h4></a>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-3 fa-icons">
                        <a href="https://www.facebook.com/groups/199205560662461/" className="fab fa-4x fa-facebook"><h4>Our facebook</h4></a>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Contacts
