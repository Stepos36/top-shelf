import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'

export class About extends Component {
  render() {
    return (
    <div className="padding mission" id="about-us-block">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 text-center about-us">
                    <h2>About us</h2>
                    <p className="lead">At TOP SHELF LLC, we believe in providing the best customer service. After spending over a decade in the hospitality industry we have learned to listen diligently to our customers and own their problems. We thrive to provide exceptional services and aim to exceed your expectations. We take pride in what we do and are happy to share our success with you!
                    </p>
                    <p className="lead"> We thrive to provide exceptional services and aim to exceed your expectations. We take pride in what we do and are happy to share our success with you! 
                    </p>
                </div>
                <div className="col-sm-6 text-center">
                    <Carousel id="carousel-pics" className="carousel slide" data-ride="carousel">
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL+"/images/package1.jpg"}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>Parcel Delivery</h5>
                            <p>From any location to the door step of your Loved Ones</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL+"/images/package2.jpg"}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h5>Home Pick Up</h5>
                            <p>Enjoy the convenience of scheduling a pickup for your package at any time</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL+"/images/package3.jpeg"}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h5>Cargo </h5>
                            <p>- cars delivery to Europe & Central Asia<br/>
                                - new and used auto parts <br/>
                                - commercial packages</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
        </div>
    )
  }
}

export default About
