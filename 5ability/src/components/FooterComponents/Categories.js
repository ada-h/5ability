import React from 'react'

const Categories = () =>{
    return(
        <div className= "fl-ns col-lg-3 tl">
                <label>
                    <h5> Categories </h5>
                </label>        
               <ul>
                    <li className= "list"><a href='#' className= "link mid-gray">Graphics & Design </a></li>
                    <li className= "list"><a href='#' className= "link mid-gray">Digital Marketing</a></li>
                    <li className= "list"><a href='#' className= "link mid-gray">Writing & Translation</a></li>
                    <li className= "list"><a href='#' className= "link mid-gray">Video & Animation</a></li>
                    <li className= "list"><a href='#' className= "link mid-gray">Music & Audio</a></li>
                    <li className= "list"><a href='#' className= "link mid-gray"> Programming & Tech</a></li>
                    <li className= "list"><a href='#' className= "link mid-gray">Business</a></li>
                    <li className= "list"><a href='#' className= "link mid-gray">Fun & Lifestyle</a></li>
                    <li className= "list"><a href='#' className= "link mid-gray" >Sitemap</a></li>
               </ul>
        </div>
    )
}

export default Categories