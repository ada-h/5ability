import React from 'react'
import Sidenav from './Sidenav'
import graphics from '../data/graphics'

const Sidenavloop = () =>{
    const Sidenavtree = graphics.map((describe, i) =>{
        return <Sidenav key= {i} description = {graphics[i].description}/>
    })

    return (
        <div>
            {Sidenavtree}
        </div>
    )
}
 export default Sidenavloop