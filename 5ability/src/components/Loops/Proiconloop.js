import React from 'react'
import Proforthat from '../../data/proforthat'
import Proicons from '../Proicons'

const Proiconloop = () => {
    const Proiconlinks = Proforthat.map((icons, i) => {
        return <Proicons key = {i} icon = {Proforthat[i].image} label = {Proforthat[i].label} 
            id = {Proforthat[i].id}/>
    })

    return (
        <div>
            {Proiconlinks}
        </div>
    )
}

export default Proiconloop