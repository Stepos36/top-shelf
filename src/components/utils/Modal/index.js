import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './style.css'


class CountryModal extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            USA => {this.props.country}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Delivery of individual parcels from US to {this.props.country}</h4>
            <p>
                {this.props.text}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
export default CountryModal