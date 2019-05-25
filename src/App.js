import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Forbidden from './components/Forbidden';
import Home from './components/Home';
import Pricing from './components/Pricing';
import scrollToComponent from 'react-scroll-to-component';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'

class App extends React.Component {

  render() {
  return (
    <div className="App">
        <Navbar collapseOnSelect expand="lg" fixed="top">
          <a href="#home" className="navbar-brand" onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1500})}><img className="navbar-brand-image" src={process.env.PUBLIC_URL+"/images/logo.png"}/>TOP SHELF LLC</a> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-link js-scroll-trigger" href="#home" onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1500})}>Home</Nav.Link>
              <Nav.Link className="nav-link js-scroll-trigger" href="#about-us-block" onClick={() => scrollToComponent(this.About, { offset: -70, align: 'top', duration: 1500})}>About us</Nav.Link>
              <Nav.Link className="nav-link js-scroll-trigger" href="#pricing" onClick={() => scrollToComponent(this.Pricing, { offset: -110, align: 'top', duration: 1500})}>Pricing</Nav.Link>
              <Nav.Link className="nav-link js-scroll-trigger" href="#contacts" onClick={() => scrollToComponent(this.Contacts, { offset: 0, align: 'top', duration: 1500})}>Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <section className='home' ref={(section) => { this.Home = section; }}><Home /></section>
        <section className='about' ref={(section) => { this.About = section; }}><About/></section>
        <section className='pricing' ref={(section) => { this.Pricing = section; }}><Pricing/></section>
        <section className='forbidden' ref={(section) => { this.Forbidden = section; }}><Forbidden/></section>
        <section className='contacts' ref={(section) => { this.Contacts = section; }}><Contacts/></section>
    </div>
  );
}
}
export default App;

