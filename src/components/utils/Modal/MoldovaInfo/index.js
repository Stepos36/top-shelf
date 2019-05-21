import React, { Component } from 'react'

export class MoldovaInfo extends Component {
  render() {
    return (
      <div>
        <p>Parcels from the USA to Moldova are delivered to the nearest to you postal office or by courier service to the recipients` address.</p>
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
        			<td>Moldova</td>
        			<td>$1.49</td>
        			<td>$20.00</td>
        			<td>To the address</td>
        			<td>8-10 weeks</td>
        		</tr>
        	</tbody>
        </table>
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
        			<td>Moldova</td>
        			<td>$2.89</td>
        			<td>$20.00</td>
        			<td>postal office</td>
        			<td>3-4 weeks</td>
        		</tr>
        	</tbody>
        </table>
        <ul>
        	<li>Minimum chargeable weight of sea parcels -12 lb (5 kg) and 10 lb for air parcels</li>
        	<li>Maximum weight of a sea parcel - 66 lb (30 kg) and 44lb (20 kg) of an air parcel</li>
        	<li>Maximum customs value – 200$</li>
        	<li>All parcels are insured for 60$ free of charge. Optionally the customer can insure the full value of the parcel, which cost 3% of the additional insured value.</li>
        	<li>Storage of your parcels in our warehouse up to 45 days is FREE of charge.</li>
        </ul>
        <p>Also FREE of charge such services:</p>
        <ul>
        	<li>photo of incoming packages,</li>
        	<li>weighing of incoming parcels;</li>
        	<li>automatic invoicing,</li>
        	<li>payment of invoices through your account (cabinet),<br/>
        		Prices for additional services are indicated by option</li>
        </ul>
        <p>Attention! All devices with Lithium batteries (tablets, cellphones, laptops, etc.) are forbidden for delivery.</p>
        <p>To calculate the cost of shipping to another country use special form on our site or contact our managers in any convinient way.</p>
      </div>
    )
  }
}

export default MoldovaInfo
