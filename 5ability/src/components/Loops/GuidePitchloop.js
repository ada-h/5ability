import React from 'react'
import GuidesData from '../../data/guides'
import GuidePitch from '../GuidePitch'

const GuidePitchloop = () => {
    const Guide = GuidesData.map((data, i) =>{
        return <GuidePitch key = {i} image = {GuidesData[i].image} title = {GuidesData[i].Title}/>
    })
    return (
        <div className = 'row gallery'>
            {Guide}
        </div>
    )
}
export default GuidePitchloop