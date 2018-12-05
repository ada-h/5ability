import React from 'react'

const Gigsworth = () =>{
    return(
        <div className= 'row bottom'>
            <div className ='col-lg-3 gigdiv'>
              <h3 clasName = 'gigh3'>  A Gig is Bought Every </h3> 
                <p className ='quantity'> 5 SEC</p> 
            </div>

            <div className ='col-lg-3 gigdiv'>
                <h3 clasName = 'gigh3'> Projects Completed </h3>
                <p className ='quantity'>25M</p> 
            </div>

            <div className ='col-lg-3 gigdiv'>
                <h3 clasName = 'gigh3'>Price Range</h3>
                <p className ='quantity'> $5 - $10K</p> 
            </div>
        </div>
    )
}

export default Gigsworth