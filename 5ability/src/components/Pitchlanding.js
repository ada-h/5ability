import React from 'react'

const Pitchlanding = () => {
    const BackgroundImage = {
        backgroundImage:`url("https://fiverr-res.cloudinary.com/image/upload/w_600,f_auto/v1/pro_headers/Articles_and_Blog_Posts")`,
        backgroundSize: 'cover',
        height: 400,
        backgroundRepeat: 'no-repeat',
    }
    return(
        <div style = {BackgroundImage}>
            <h3 className = "landingh2"> 5ability Pro</h3>
            <p className = 'handPicked'> Top Quality Verified Professionals</p>
            <h4 className = 'handPicked'>Upgrade your Article & Blog Posts with Pro writers</h4>
   
        </div>
    )
}

export default Pitchlanding