import React from 'react';
import Hero from './Hero';
import OpenAccount from "../OpenAccount";
import Brokerage from './Brokerage';
function PricingPage() {
    return ( 
        <>
            <Hero/>
            <OpenAccount/>
            <div className='border-top mx-auto  my-12' style={{width:"80%" , borderColor:"#e4d9d9"}}></div>
            <Brokerage/>
        </>
     );
}

export default PricingPage;