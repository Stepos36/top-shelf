import React, { Component } from 'react'

export class CentralAsiaInfo extends Component {
  render() {
    return (
      <div>
        <p>Parcels from the USA to the Central Asia countries are delivered to the nearest postal office or by courier service to the recipients` address.</p>
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
        {/* <tr>
			<td>Azerbaijan, Tajikistan</td>
			<td>$3.69</td>
			<td>$35.00</td>
			<td>postal office</td>
			<td>2-4 weeks</td>
		</tr> */}
		<tr>
			<td>Kazakhstan</td>
			<td>$3.69</td>
			<td>$20.00</td>
			<td>courier delivery</td>
			<td>2-3 weeks</td>
		</tr>
		<tr>
			<td>Kyrgyzstan</td>
			<td>$3.69</td>
			<td>$25.00</td>
			<td>courier delivery</td>
			<td>2-4 weeks</td>
		</tr>
		<tr>
			<td>Kyrgyzstan Bishkek</td>
			<td>$3.69</td>
			<td>$5.00</td>
			<td>courier delivery</td>
			<td>2-4 weeks</td>
		</tr>
		<tr>
			<td>Uzbekistan</td>
			<td>$2.79</td>
			<td>$15.00</td>
			<td>courier deliveryа</td>
			<td>2-3 weeks</td>
		</tr>
		<tr>
			<td>Uzbekistan Tashkent</td>
			<td>$2.79</td>
			<td>$10.00</td>
			<td>courier deliveryа</td>
			<td>2 weeks</td>
		</tr>
	</tbody>
</table>
<ul>
	<li>Minimum chargeable weight - 10 lb (4.5 kg)</li>
	<li>Maximum weight of a parcel - 66 lbs (30 kg)</li>
	<li>Maximum weight of a parcel to Tajikistan - 44 lbs (20 kg)</li>
	<li>Maximum weight of a parcel to Uzbekistan - 66 lbs (30 kg)</li>
	<li>Maximum customs value&nbsp; to Kyrgyzstan – 200 Euro, to Kazakhstan – 500 Euro and Uzbekistan – 1000$ per month.</li>
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
<p>To calculate the cost of shipping to another country use special form on our site or contact our managers in any convinient way.</p>
      </div>
    )
  }
}

export default CentralAsiaInfo
