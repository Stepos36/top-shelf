import React, { Component } from 'react'

export class GeorgiaInfo extends Component {
  render() {
    return (
      <div>
        <p>Parcels from the USA to Georgia are delivered to the nearest postal office or by courier service to the recipients` address.</p>
        <table className="table table-bordered">
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
			<td>Georgia (Tbilisi)</td>
			<td>$2.79</td>
			<td>$5.00</td>
			<td>To the address</td>
			<td>1 week</td>
		</tr>
		<tr>
			<td>Georgia (other regions)</td>
			<td>$2.79</td>
			<td>$10.00</td>
			<td>To the address</td>
			<td>1-2 week</td>
		</tr>
	</tbody>
</table>
<ul>
	<li>Minimum chargeable weight - 12 lbs (5 kg).</li>
	<li>Maximum weight of a parcel - 66 lbs (30 kg)</li>
	<li>Maximum customs value – 150$</li>
	<li>All parcels are insured for 60$ free of charge. Optionally the customer can insure the full value of the parcel, which cost 3% of the additional insured value.</li>
</ul>
{/* <p>Also FREE of charge such services:</p>
<ul>
	<li>photo of incoming packages,</li>
	<li>weighing of incoming parcels;</li>
	<li>automatic invoicing,</li>
	<li>payment of invoices through your account (cabinet),<br/>
		Prices for additional services are indicated by option</li>
</ul> */}
<p>To calculate the cost of shipping to another country use special form on our site or contact our managers in any comfortable way.</p>
      </div>
    )
  }
}

export default GeorgiaInfo
