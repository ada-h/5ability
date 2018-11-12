import React from 'react'

const Guides = () =>{

    return(
        <div className = 'dib tc w-100 fl mb3-ns'>
            <div> 
                <h2> 5ability Guides</h2>
                <p className=""> How to use Fiverr to build and grow your business</p>       
            </div>

            <div className = "mr3-ns pa4 fl w-30-ns">
                <img alt = ""  src= "https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/homepage/assets/f6/desktop_guides_create_a_website.jpg"/>
                <div>
                    <h3>Create A Website</h3>
                    <p>Building a stunning website from A to Z</p>
                </div>
            </div>

            <div className= "mr3-ns pa4 fl w-30-ns">
                <img alt = ""  src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/homepage/assets/f6/desktop_guides_work_on_digital_marketing.jpg"/>
                <div>
                    <h3>Grow with digital marketing</h3>
                    <p>Promoting your business online </p>            
                </div>
            </div>

            <div className= "mr3-ns pa4 fl w-30-ns">
                <img  alt = "" src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/homepage/assets/f6/desktop_guides_build_a_strong_brand.jpg"/>
                <div >
                    <h3>Build a Strong Brand</h3>
                    <p>Differentiating yourself from the competition</p>           
                </div>
            </div>

            <div>
                <button className="see-more btn br2-ns">
                    See More Guides
                </button>
            </div>
        </div>
    )
}

export default Guides