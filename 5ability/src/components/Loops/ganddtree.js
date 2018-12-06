import React from 'react'
import GraphicsandDesign from '../graphics&design';
import graphics from '../../data/graphics'



const GandDtree = ({data}) =>{
    const Graphicstree = data.map((pictures, i) =>{
        return <GraphicsandDesign key = {i} image= {data[i].image}
                description = {data[i].description}/>
    })
    
    const GraphicId = graphics.map((unique, i)=>{
        return <GraphicsandDesign key = {i} id = {graphics[i].id} />
    })
    
    return (
        <div>
            {Graphicstree}
            {GraphicId}
        </div>
    )
   
}
export default GandDtree