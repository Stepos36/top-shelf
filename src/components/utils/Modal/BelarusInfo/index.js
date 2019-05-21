import React, { Component } from 'react';

export class BelarusInfo  extends Component {
  render() {
    return (
      <div>
        <p>Parcels from the USA to Belarus are delivered to the nearest postal office or by courier service to the recipients` address.</p>
        <table class="table table-bordered">
	        <thead>
            	<tr>
            		<td className="text-center font-weight-bold" rowspan="2">Country</td>
            		<td className="text-center font-weight-bold" colspan="4">Sea</td>
            	</tr>
            	<tr>
            		<td>Price/lb</td>
            		<td colspan="2">Delivery</td>
            		<td>Time</td>
            	</tr>
            </thead>
            <tbody>
            	<tr>
            		<td>Belarus</td>
            		<td>$1.49</td>
            		<td>$20.00</td>
            		<td>To the address</td>
            		<td>8-10 weeks</td>
            	</tr>
            </tbody>
        </table>
        <br/>
        <table class="table table-bordered">
	        <thead>
            	<tr>
            		<td className="text-center font-weight-bold" rowspan="2">Country</td>
            		<td className="text-center font-weight-bold" colspan="4">Air</td>
            	</tr>
            	<tr>
            		<td>Price/lb</td>
            		<td colspan="2">Delivery</td>
            		<td>Time</td>
            	</tr>
            </thead>
            <tbody>
            	<tr>
            		<td>Belarus</td>
            		<td>$2.89</td>
            		<td>$20.00</td>
            		<td>Postal office</td>
            		<td>3-4 weeks</td>
            	</tr>
            </tbody>
        </table>
<ul>
	<li>Minimum chargeable weight is 10 lb, maximum – 22 lb.</li>
	<li>Recommended parcel value should not exceed 22 Euro.&nbsp;</li>
	<li>All parcels are insured for 60$ free of charge. Optionally the customer can insure the full value of the parcel, which cost 3% of the additional insured value.</li>
	<li>Storage of your parcels in our warehouse up to 45 days is FREE of charge.</li>
	<li>Attention! All devices with Lithium batteries (tablets, cellphones, laptops, etc.) are forbidden for delivery.</li>
</ul>
<p>Also FREE of charge such services:</p>
<ul>
	<li>photo of incoming packages,</li>
	<li>weighing of incoming parcels;</li>
	<li>automatic invoicing,</li>
	<li>payment of invoices through your account (cabinet),<br/>
		Prices for additional services are indicated by option</li>
</ul>
<p>To calculate the cost of shipping to another country use special form on our site or contact our managers in any convenient way.</p>

      </div>
    )
  }
}

export default BelarusInfo 
