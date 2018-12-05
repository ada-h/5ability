import React from 'react'
import {Link} from 'react-router-dom'

const ProButton = () => {
    return(
        <Link to ='/pro'>
            <button className ="prolabel">
                Explore Pro Services
            </button>
        </Link>

    )
}
export default ProButton