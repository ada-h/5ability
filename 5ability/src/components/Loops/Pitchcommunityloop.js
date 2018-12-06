import React from 'react'
import  Pitchcommunity from '../Pitchcommunity'

const PitchCommunityloop = ({data}) =>{
    const PitchedCommunity = data.map((details, i) =>{
        return <Pitchcommunity key = {i} image = {data[i].image} name = {data[i].name} pitch = { data[i].pitch}
        starting = {data[i].starting} star = {data[i].star} />
    })
    const coverDiv = {
        margin: 35,
     }

    return(
        <div className ='row' style = {coverDiv}>
            {PitchedCommunity}
        </div>
        
    )
}
export default PitchCommunityloop