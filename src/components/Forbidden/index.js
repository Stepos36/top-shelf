import React, { Component } from 'react';
import { MDBBtn, MDBCollapse } from "mdbreact";
import './style.css';
import scrollToComponent from 'react-scroll-to-component';

export class Forbidden extends Component {
    state = {
        collapseID: ""
      }
      
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
        setTimeout(() => {
            scrollToComponent(this.Forbidden, { offset: -200, align: 'top', duration: 300}) 
        }, 200); 
      }
  render() {
    return (
        <div className="padding lists" id="forbidden-section">
            <div className="container">
            <div className='text-center'><a href="#forbidden-section" className="btn-lg js-scroll-trigger forb_button"><MDBBtn onClick={this.toggleCollapse("forbidden-text")} style={{ marginBottom: "1rem" }} className="forbidden-items text-center">
                    Forbidden items
                    </MDBBtn></a></div>
                    <section className='forbidden' ref={(section) => { this.Forbidden = section; }}>
                        <MDBCollapse id="forbidden-text" isOpen={this.state.collapseID}>
                            <div className='row'>
                                <div className="col-lg-6 font-weight-bold">
                                    <h4>Forbidden for sending in parcels</h4>
                                    <p>The following items are firmly prohibited from shipment, and will not be sent through our services for air gift parcels services ONLY. Any of these items being sent may result prosecution, heavy fines and imprisonment:</p>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                                Aerosol cans / sprays (perfumes, varnishes, deodorants, etc) 
                                        </li>
                                        <li>
                                                Dangerous items (swords, knives, weapons, explosives, fireworks, radioactive materials, deactivated or replica weapons and ammunition)
                                        </li>
                                        <li>
                                                Car parts (engines, generators, gearboxes or any part containing or having contained oil/petroleum, unless flushed through, gas amortization, airbags, accumulators, etc)
                                        </li>
                                        <li>
                                                Fire extinguishers, life jackets
                                        </li>
                                        <li>
                                                Electric appliances with batteries
                                        </li>
                                        <li>
                                                Corrosives and flammables (paint, adhesives, chemicals, flammable resins, solvents, liquids, compressed air, items containing any gases, alcohols, lacquers acids)
                                        </li>
                                        <li>
                                                Household goods containing flammable or corrosive liquids, such as oven or drain cleaners
                                        </li>
                                        <li>
                                                Human or animal remains
                                        </li>
                                        <li>
                                                Live animals
                                        </li>
                                        <li>
                                                Magnets or items containing ferromagnetic material
                                        </li>
                                        <li>
                                                Money or negotiable items e.g. stocks and bonds
                                        </li>
                                        <li>
                                                Passports, birth certificates
                                        </li>
                                        <li>
                                                Prescribed drugs, medication
                                        </li>
                                        <li>
                                                Tobacco and tobacco products
                                        </li>
                                        <li>
                                                Wet or lithium batteries (not including dry cell)
                                        </li>
                                        <li>
                                                Animal skins, furs, any animal parts, ivory and ivory products
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </MDBCollapse>
                    </section>
            </div>
        </div>

    )
  }
}

export default Forbidden
