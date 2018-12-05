import React from 'react'
import {Link} from 'react-router-dom'

const ProSeller = () => {
    return(
        <div className ="row proseller">
            <div className = 'col-lg- 6'>
                <h4>  Want To Become A Pro Seller?</h4>    
                <p> 5ability Pro helps you take your talent to the next level. </p>       
            </div>       
            <div className = 'col-lg-6 prosellerbutton'>
                <Link to = '/questionpro.com/'>
                    <button type= 'button' className ='probutton'>Apply To Pro</button>  
                </Link>  
            </div>
           
          
        </div>
    )
}

export default ProSeller