import React from 'react';

export default function Pricing() {
    return (
        <div className="text-wrap top-30 left-20">
            <h3
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    padding: '10px',
                    paddingBottom: '20px',
                    fontSize: '25px',
                    fontFamily: 'Times, serif',
                    fontWeight: 'bold',
                    textWrap: 'wrap',
                }}
            >
                Pricing
            </h3>
            <h5
                style={{
                    position: 'absolute',
                    top: '80px',
                    left: '20px',
                    fontFamily: 'Times, serif',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    padding: '20px',
                }}
            >
                Set a price for your course
            </h5>
            <p
                style={{
                    position: 'absolute',
                    top: '120px',
                    left: '20px',
                    fontFamily: 'Times, serif',
                    textAlign: 'left',
                    padding: '20px',
                }}
            >
                Please select the currency and the price tier for your course. If you’d like to offer your course for free, it must have a total video length of less than 2 hours. Also, courses with practice tests cannot be free.
            </p>
            <div style={{ margin: '20px', position: 'absolute', top: '200px', left: '20px' }}>
                <label style={{

                    padding: '10px',
                    margin: '20px',
                    fontSize: '1rem',
                    fontFamily: 'Times, serif',
                    fontWeight: 'bold',


                }} htmlFor="currency">USD</label>
                <br />
                <select id="currency" style={{ border: '0.4px solid black', padding: '10px', marginLeft: '10px' }}>
                    {/* Add options for currencies */}
                    <option value="aud">AUD</option>
                    <option value="brl">BRL</option>
                    <option value="cad">CAD</option>
                    <option value="clp">CLP</option>
                    <option value="cop">COP</option>
                    <option value="egp">EGP</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                    <option value="idr">IDR</option>
                    <option value="ils">ILS</option>
                    <option value="inr">INR</option>
                    <option value="jpy">JPY</option>
                    <option value="krw">KRW</option>
                    <option value="mxn">MXN</option>
                    <option value="myr">MYR</option>
                    <option value="ngn">NGN</option>
                    <option value="nok">NOK</option>
                    <option value="pen">PEN</option>
                    <option value="php">PHP</option>
                    <option value="pln">PLN</option>
                    <option value="ron">RON</option>
                    <option value="rub">RUB</option>
                    <option value="sgd">SGD</option>
                    <option value="thb">THB</option>
                    <option value="try">TRY</option>
                    <option value="twd">TWD</option>
                    <option value="usd">USD</option>
                    <option value="vnd">VND</option>
                    <option value="zar">ZAR</option>

                </select>
            </div>
            <div style={{ margin: '20px', marginLeft: '5px', position: 'absolute', top: '200px', left: '200px' }}>
                <label style={{

                    padding: '10px',
                    margin: '20px',
                    fontSize: '1rem',
                    fontFamily: 'Times, serif',
                    fontWeight: 'bold',


                }} htmlFor="pricingTier">Pricing Tier</label>
                <br />

                <select id="pricingTier" style={{ border: '0.4px solid black', padding: '10px', marginLeft: '10px' }}>
                    {/* Add options for pricing tiers */}
                    <option value="">Select</option>
                    <option value="0">Free</option>
                    <option value="19.99">$19.99 (tier 1)</option>
                    <option value="22.99">$22.99 (tier 2)</option>
                    <option value="24.99">$24.99 (tier 3)</option>
                    <option value="27.99">$27.99 (tier 4)</option>
                    <option value="29.99">$29.99 (tier 5)</option>
                    <option value="34.99">$34.99 (tier 6)</option>
                    <option value="39.99">$39.99 (tier 7)</option>
                    <option value="44.99">$44.99 (tier 8)</option>
                    <option value="49.99">$49.99 (tier 9)</option>
                    <option value="54.99">$54.99 (tier 10)</option>
                    <option value="59.99">$59.99 (tier 11)</option>
                    <option value="64.99">$64.99 (tier 12)</option>
                    <option value="69.99">$69.99 (tier 13)</option>
                    <option value="74.99">$74.99 (tier 14)</option>
                    <option value="79.99">$79.99 (tier 15)</option>
                    <option value="84.99">$84.99 (tier 16)</option>
                    <option value="89.99">$89.99 (tier 17)</option>
                    <option value="94.99">$94.99 (tier 18)</option>
                    <option value="99.99">$99.99 (tier 19)</option>
                    <option value="109.99">$109.99 (tier 20)</option>
                    <option value="119.99">$119.99 (tier 21)</option>
                    <option value="124.99">$124.99 (tier 22)</option>
                    <option value="129.99">$129.99 (tier 23)</option>
                    <option value="139.99">$139.99 (tier 24)</option>
                    <option value="149.99">$149.99 (tier 25)</option>
                    <option value="159.99">$159.99 (tier 26)</option>
                    <option value="174.99">$174.99 (tier 27)</option>
                    <option value="189.99">$189.99(tier 28)</option>
                    <option value="199.99">$199.99(tier 29)</option>

                </select>
            </div>
        </div>
    );
}