import React, { Component } from 'react';
import Media from 'react-media';

export class Ukraine_info extends Component {
  render() {
    return (
      <div>
          <Media query="(max-width: 425px)">
          {matches =>
            matches ? (
                <div>
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td className="text-center font-weight-bold" rowspan="2">Region</td>
                            <td className="text-center font-weight-bold" colspan="3">Sea</td>
                        </tr>
                        <tr>
                            <td>Price/lb</td>
                            <td>Delivery</td>
                            <td>Time</td>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Western Ukraine and Kiev</td>
                                <td>$0.99</td>
                                <td>$10.00</td>
                                <td>4-6 weeks</td>
                            </tr>
                            <tr>
                                <td>Another regions</td>
                                <td>$0.99</td>
                                <td>$15.00</td>
                                <td>4-6 weeks</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td className="text-center font-weight-bold" rowspan="2">Region</td>
                            <td className="text-center font-weight-bold" colspan="3">Air</td>
                        </tr>
                        <tr>
                            <td>Price/lb</td>
                            <td>Delivery</td>
                            <td>Time</td>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Western Ukraine and Kiev</td>
                                <td>$2.89</td>
                                <td>$10.00</td>
                                <td>5-10 working days</td>
                            </tr>
                            <tr>
                                <td>Another regions</td>
                                <td>$2.89</td>
                                <td>$15.00</td>
                                <td>5-10 working days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <td className="text-center font-weight-bold" rowspan="2">Region</td>
                        <td className="text-center font-weight-bold" colspan="3">Sea</td>
                        <td className="text-center font-weight-bold" colspan="3">Air</td>
                    </tr>
                    <tr>
                        <td>Price/lb</td>
                        <td>Delivery</td>
                        <td>Time</td>
                        <td>Price/lb</td>
                        <td>Delivery</td>
                        <td>Time</td>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Western Ukraine and Kiev</td>
                            <td>$0.99</td>
                            <td>$10.00</td>
                            <td>4-6 weeks</td>
                            <td>$2.89</td>
                            <td>$10.00</td>
                            <td>5-10 working days</td>
                        </tr>
                        <tr>
                            <td>Another regions</td>
                            <td>$0.99</td>
                            <td>$15.00</td>
                            <td>4-6 weeks</td>
                            <td>$2.89</td>
                            <td>$15.00</td>
                            <td>5-10 working days</td>
                        </tr>
                    </tbody>
                </table>
            )
          }
          </Media>
        <p>Minimum price for transporting parcels up to 5 lbs by air - $ 25.</p>
        <p>Price for transporting parcels from 5 lbs to 10 lbs by air -&nbsp; is charged as for 10 lbs.</p>
        <p>Minimum chargeable weight for transporting parcels by sea - 12 lbs.</p>
        <p>Maximum value of goods one may ship to a recipient in Ukraine without having to pay customs duties is 150 EUR.</p>
        <p>All parcels are insured for 60$ free of charge.&nbsp;</p>
        <p>Optionally the customer can insure the full value of the parcel, wich cost 2.5% of the additional insured value.<br/>
	        To calculate the cost of shipping to another country use special form on our site or contact our managers in any comfortable way.</p>
      </div>
    )
  }
}

export default Ukraine_info
