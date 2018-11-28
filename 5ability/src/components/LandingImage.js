import React from 'react'
import landingImage from './Css/LandingImage.css'
import Probutton from './Probutton'
const LandingImage = () =>{
    const BackgroundImage = {
        backgroundImage: `url(https://fiverr-res.cloudinary.com/w_iw_div_1.5,q_100,f_auto/general_assets/pro_experience/assets/images/f1/lp_banner_desktop.jpg)`,
    }
    return(
        <div className="explorePro" style= {BackgroundImage}>
            <div className = "col-lg-6 prolanding">
                <h2 className = "landingh2"><b>5</b>ability Pro</h2>
                <p className = 'handPicked'>
                    Work With Top Quality, Hand-Picked Professionals, Trusted By The World’s 
                    Leading Brands.
                </p>
                <div className = 'proB'>
                    <Probutton/>
                </div>
               
            </div>

        </div>
    )
} 

export default LandingImage