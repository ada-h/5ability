import React from 'react'
import Sidenav from '../Sidenav'

const Sidenavloop = ({data, heading}) =>{
    const Sidenavtree = data.map((describe, i) =>{
        return <Sidenav key= {i} description = {data[i].description}/>
    })

    return (
        <div>
            <b className = 'listheading'> {heading.heading}</b>
            <ul className = 'sidenav'>
            {Sidenavtree}
            </ul>
        </div>
    )
}
 export default Sidenavloop