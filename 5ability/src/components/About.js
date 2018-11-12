import React from 'react'

const About = () =>{
    return (
        <div className= "fl-ns">
            <div class="fit-collapsable">
                <label for= "collapsible-footer-group-2">
                    <h4> About </h4>
                </label>
            </div>
            <div class="articles">
                <ul>
                    <li className= "list"><a href='' className= "link mid-gray">Careers </a></li>
                    <li className= "list"><a href='' className= "link mid-gray"> Press & News</a></li>
                    <li className= "list"><a href='' className= "link mid-gray"> Partnerships</a></li>
                    <li className= "list"><a href='' className= "link mid-gray"> Privacy Policy</a></li>
                    <li className= "list"><a href='' className= "link mid-gray"> Terms of Service</a></li>
                    <li className= "list"><a href='' className= "link mid-gray">Intellectual Property Claim</a></li>
                </ul>
            </div>
        </div>
    )
}
export default About