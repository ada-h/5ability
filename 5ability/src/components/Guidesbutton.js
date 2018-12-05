import React from 'react'
import {Link} from 'react-router-dom';

const Guidesbutton = () =>{
    return (
        <Link to ='/pages/guides'>
            <button className="see-more btn br2-ns">
                See More Guides
            </button>
        </Link>
 
    )
}

export default Guidesbutton