import React from 'react'

const LandingImage = () =>{
    const BackgroundImage = {
        backgroundImage: `url(https://fiverr-res.cloudinary.com/w_iw_div_1.5,q_100,f_auto/general_assets/pro_experience/assets/images/f1/lp_banner_desktop.jpg)`,
    }
    return(
        <div className="explorePro" style= {BackgroundImage}>
            <h2>Fiverr Pro</h2>
            <p>
                Work With Top Quality, Hand-Picked Professionals, Trusted By The World’s Leading Brands.
            </p>
        </div>
    )
} 

export default LandingImage