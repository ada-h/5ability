import React from 'react'
import GraphicsandDesign from '../graphics&design';



const GandDtree = ({data}) =>{
    const Graphicstree = data.map((pictures, i) =>{
        return <GraphicsandDesign key = {i} image= {data[i].image}
                description = {data[i].description}/>
    })
    
    return (
        <div>
            {Graphicstree}
        </div>
    )
   
}
export default GandDtree