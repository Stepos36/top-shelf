import React, { Component } from 'react'

export class EuropeanUnionInfo extends Component {
  render() {
    return (
      <div>
        <p>Parcels from the USA to the European Union countries are delivered to the nearest postal office or by courier service to the recipients` address.</p>
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
        			<td>Austria, Bulgaria, Hungary, Latvia, Nederland, Slovenia, Romania, Sweden</td>
        			<td>$1.49</td>
        			<td>$20.00</td>
        			<td>To the address</td>
        			<td>4-8 weeks</td>
        		</tr>
        		<tr>
        			<td>Belgium, Denmark, Finland, France, Germany, Greece, Italy, Ireland, Portugal, Spain, United Kingdom</td>
        			<td>-</td>
        			<td>-</td>
        			<td>-</td>
        			<td>-</td>
        		</tr>
        		<tr>
        			<td>Croatia</td>
        			<td>-</td>
        			<td>-</td>
        			<td>-</td>
        			<td>-</td>
        		</tr>
        		<tr>
        			<td>Czech Republic</td>
        			<td>$1.49</td>
        			<td>$10.00</td>
        			<td>To the address</td>
        			<td>6-7 weeks</td>
        		</tr>
        		<tr>
        			<td>Lithuania, Estonia</td>
        			<td>$1.49</td>
        			<td>$20.00</td>
        			<td>To the address</td>
        			<td>6-7 weeks</td>
        		</tr>
        		<tr>
        			<td>Poland</td>
        			<td>$0.89</td>
        			<td>$12.00</td>
        			<td>To the address</td>
        			<td>5-8 weeks</td>
        		</tr>
        		<tr>
        			<td>Slovak Republic</td>
        			<td>$1.29</td>
        			<td>$10</td>
        			<td>To the address</td>
        			<td>6-7 weeks</td>
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
        			<td>Austria, Bulgaria, Hungary, Latvia, Nederland, Slovenia, Romania, Sweden</td>
        			<td>$2.89</td>
        			<td>$20.00</td>
        			<td>To the address</td>
        			<td>2-4 weeks</td>
        		</tr>
        		<tr>
        			<td>Belgium, Denmark, Finland, France, Germany, Greece, Italy, Ireland, Portugal, Spain, United Kingdom</td>
        			<td>$2.89</td>
        			<td>$20.00</td>
        			<td>To the address</td>
        			<td>2-4 weeks</td>
        		</tr>
        		<tr>
        			<td>Croatia</td>
        			<td>$2.89</td>
        			<td>$35.00</td>
        			<td>To the address/ postal office</td>
        			<td>2-4 weeks</td>
        		</tr>
        		<tr>
        			<td>Czech Republic</td>
        			<td>$2.89</td>
        			<td>$20.00</td>
        			<td>To the address</td>
        			<td>3-4 weeks</td>
        		</tr>
        		<tr>
        			<td>Lithuania, Estonia</td>
        			<td>$2.89</td>
        			<td>$20.00</td>
        			<td>To the address</td>
        			<td>2-3 weeks</td>
        		</tr>
        		<tr>
        			<td>Poland</td>
        			<td>$2.89</td>
        			<td>$10.00</td>
        			<td>To the address</td>
        			<td>1-3 weeks</td>
        		</tr>
        		<tr>
        			<td>Slovak Republic</td>
        			<td>$2.89</td>
        			<td>$20.00</td>
        			<td>To the address</td>
        			<td>3-4 weeks</td>
        		</tr>
        	</tbody>
        </table>
<ul>
	<li>Maximum weight - 66 lbs (60 kg)</li>
	<li>Maximum customs value – 45$</li>
	<li>Minimum chargeable weight by air- 10 lbs (4.5 kg)</li>
	<li>Minimum chargeable weight by sea - 20 lbs (9 kg)</li>
	<li>Maximum weight for parcel to Slovenia shipped by sea - 100 lb (45 kg)</li>
	<li>The cost of a parcel to Poland weight up to 5 lb (2.3 kg) - $25</li>
	<li>All parcels are insured for 60$ free of charge</li>
	<li>Storage of your parcels in our warehouse up to 45 days is FREE of charge</li>
</ul>
<p>Also FREE of charge such services:</p>
<ul>
	<li>photo of incoming packages,</li>
	<li>weighing of incoming parcels,</li>
	<li>automatic invoicing,</li>
	<li>payment of invoices through your account (cabinet),<br/>
		Prices for additional services are indicated by option</li>
</ul>
<p>To calculate the cost of shipping to another country use special form on our site or contact our managers in any comfortable way.</p>
      </div>
    )
  }
}

export default EuropeanUnionInfo
