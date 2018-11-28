import React from 'react'
import Proiconloop from './Loops/Proiconloop'
import Proiconheader from './Headers/Proiconheader'
import Viewmoreservicebutton from './Viewmoreservicebutton'

const Prothat = () => {

    const BackgroundImage ={
        backgroundImage  : `url(https://fiverr-res.cloudinary.com/w_iw_div_1.5,q_auto,f_auto/general_assets/pro_experience/assets/images/f2/3-image_SC.jpg)`
    } 
    return (
        <div className = 'explorePro' style = {BackgroundImage}>
           <Proiconheader/>
            <Proiconloop/>
            <Viewmoreservicebutton/>
        </div>
    )
}

export default Prothat;