import React from 'react'
import Howitworks from '../../data/howitworks'
import Howitworksbanner from '../Howitworksbanner'

const Howitworksloop = () =>{
    const Banner = Howitworks.map((details, i) => {
       return <Howitworksbanner key = {i} image = {Howitworks[i].images} 
        how = {Howitworks[i].how} title= {Howitworks[i].title} className = {Howitworks[i].className}/>
    })

    return (
        <div className ='row'>
            {Banner}
        </div>
    )
}

export default Howitworksloop