import React from 'react'

const Prolanding = () =>{
    const BackgroundImage = {
        backgroundPosition: 'center',
        height: 440,
        backgroundImage: `url(https://fiverr-res.cloudinary.com/w_iw_div_2,q_100,f_auto/general_assets/pro_experience/assets/images/f1/desktop_main_banner.jpg)`
    }
    return(
        <div style= {BackgroundImage}>
            <h2 className = "landingh2"> 5ability Pro</h2>
            <p className = 'handPicked'> Top quality, hand-picked professionals, trusted by the world’s biggest brands</p>
            <p className ='link'> Learn More > </p>
        </div>
    )
}
export default Prolanding