import React from 'react';
function Education() {
    return ( 
        <div className='container mt-8 p-5'>
            <div className='row p-1'>
                <div className='col p-5'>
                    <img src='/media/education.svg' style={{width:"70%"}}/>
                </div>
                <div className='col p-5'>
                    <h1 className='fs-2xl pb-5'>Free and open market education</h1>
                    <div className='pb-10 ' >
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='#' style={{ textDecoration: "none" }}>Versity <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div>
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='#' style={{ textDecoration: "none" }}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;