import React from 'react'
import  Pitchcommunity from '../Pitchcommunity'

const PitchCommunityloop = ({data}) =>{
    const PitchedCommunity = data.map((details, i) =>{
        return <Pitchcommunity key = {i} image = {data[i].image} name = {data[i].name} pitch = { data[i].pitch}
        starting = {data[i].starting} star = {data[i].star} />
    })

    return(
        <div>
            {PitchedCommunity}
        </div>
        
    )
}
export default PitchCommunityloop