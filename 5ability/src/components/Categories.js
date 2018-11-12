import React from 'react'

const Categories = () =>{
    return(
        <div className= "fl-ns">
            <div className="fit-collapsable">
                <label for= "collapsible-footer-group-1">
                    <h4> Categories </h4>
                </label>
            </div>
           <div className="">
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
        </div>
    )
}

export default Categories