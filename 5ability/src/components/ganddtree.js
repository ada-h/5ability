import React from 'react'
import graphics from '../data/graphics'
import GraphicsandDesign from './graphics&design';
import Videoanime from '../data/videoandanime';

const GandDtree = () =>{
    const Graphicstree = data.map((pictures, i) =>{
        return <GraphicsandDesign key = {i} image= {graphics[i].image} description = {graphics[i].description}/>
    })
           
    return (
        <div>
            {Graphicstree}
        </div>
    )
   
}
export default GandDtree