import React from 'react'
import Sidenav from './Sidenav'

const Sidenavloop = ({data}) =>{
    const Sidenavtree = data.map((describe, i) =>{
        return <Sidenav key= {i} description = {data[i].description}/>
    })

    return (
        <div>
            <ul className = 'sidenav'>
            {Sidenavtree}
            </ul>
        </div>
    )
}
 export default Sidenavloop