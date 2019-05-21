import React, { Component } from 'react';
import './style.css';
import CountryModal from '../utils/Modal';
import RussiaInfo from '../utils/Modal/RussiaInfo';
import UkraineInfo from '../utils/Modal/UkraineInfo';
import MoldovaInfo from '../utils/Modal/MoldovaInfo';
import GeorgiaInfo from '../utils/Modal/GeorgiaInfo';
import EuropeanUnionInfo from '../utils/Modal/EuropeanUnionInfo';
import CentralAsiaInfo from '../utils/Modal/CentralAsiaInfo';
import BelarusInfo from '../utils/Modal/BelarusInfo';

export class Pricing extends Component {
    constructor(...args) {
        super(...args);
     
        this.state = {
            country: '',
            info: '',
            modalShow: false,
              countries: [
            {   name: 'Ukraine' ,
                image: process.env.PUBLIC_URL+'/images/ukraine.jpeg',
                info: [<UkraineInfo/>]
            },
            {   name: 'Russia' ,
                image: process.env.PUBLIC_URL+'/images/russia.jpg',
                info: [<RussiaInfo/>]
            },
            {
                name: 'Belarus' ,
                image: process.env.PUBLIC_URL+'/images/belarus.png',
                info: [<BelarusInfo/>]
            },
            {   name: 'Moldova' ,
                image: process.env.PUBLIC_URL+'/images/moldova.jpg',
                info: [<MoldovaInfo/>]
            },
            {   name: 'Georgia' ,
                image: process.env.PUBLIC_URL+'/images/georgia.png',
                info: [<GeorgiaInfo/>]
            },
            {   name: 'European Union' ,
                image: process.env.PUBLIC_URL+'/images/european_union.jpg',
                info: [<EuropeanUnionInfo/>]
            },
            {   name: 'Central Asia' ,
                image: process.env.PUBLIC_URL+'/images/central_asia.jpg',
                info: [<CentralAsiaInfo/>]
            }
          ]
        };
      }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
        <div>
            <div className="fixed" id="pricing">
                <div className="floatIn">We deliver to</div>
                <div className="pricing-block pricing text-center">
                    {this.state.countries.map(country => (
                        <div className="card country-card view overlay zoom" onClick={() => this.setState({ modalShow: true, country: country.name, info: country.info })} >
                                    <div className="card-body">
                                        <img className="img-fluid" src={country.image}/>
                                        <div className="project-name mask flex-center rgba-black-strong">
                                            <h3 className="text-truncate">{country.name}</h3>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                    <p className="text-center">Click on desired region icon to view rates</p>
                </div>
            </div>
            <CountryModal
            country = {this.state.country}
            text = {this.state.info}
            show={this.state.modalShow}
            onHide={modalClose}
            />
        </div>
    )
  }
}

export default Pricing
