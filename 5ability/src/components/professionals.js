import React from 'react'
import './Css/professionals.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Professionals = () => {
    return (
        <div className="explore mb3-ns pa2 vh-30-ns w-100 row">
            <div className= "col-lg-offset-1 col-lg-5">
                <h2 className="explore-pro pt4-ns"> Top Quality, Hand-Picked Professionals</h2>
                <p className="pro"> Fiverr Pro. Trusted by leading brands.</p>
                <button className="pro-btn btn br2-ns">
                   <Link to ='/pro/about'> Explore Pro </Link> 
                </button>
            </div>
            <div className= "col-lg-6 picture">
                <img className=" img-responsive" alt= "Top Quality, Hand-picked Professionals" src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/homepage/assets/f6/desktop_hp_explore_all_pro.jpg"/>
            </div>
        </div>
    );
};
             
export default Professionals