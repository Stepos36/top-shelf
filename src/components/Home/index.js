import React, { Component } from 'react';
import './style.css';
import scrollToComponent from 'react-scroll-to-component';
import Media from 'react-media';

export class Home extends Component {
  render() {
    return (
        <div id="home">
            <div className="landing-text">
                <h1 className="massive">TOP SHELF LLC</h1>
                <h3>On Time, On Task, On the Move</h3>
                <div className="explore"><a href="#about-us-block" className="btn btn-secondary btn-lg js-scroll-trigger" onClick={() => scrollToComponent(this.About, { offset: 700, align: 'top', duration: 1500})}>What do we offer</a></div>
            </div>
            <Media query="(max-width: 425px)">
          {matches =>
            matches ? (
              <video playsInline muted loop id="video1" autoPlay>
                <source src={process.env.PUBLIC_URL+"/video/container-video2.mp4"} type="video/mp4"/>
              </video>
            ) : (
              <video muted loop id="video1" autoPlay>
                <source src={process.env.PUBLIC_URL+"/video/container-ship1.mp4"} type="video/mp4"/>
              </video>
            )
          }
          </Media>
            <section className='about' ref={(section) => { this.About = section; }}></section>
        </div>
    )
  }
}

export default Home
