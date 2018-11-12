import React from 'react';
import OfferedService from './OfferedService';
import icons from '../data/icons';

const MarketPlace = () =>{
    const marketProducts = icons.map ((service, i) => {
        return <OfferedService key={i} image={icons[i].image} description = {icons[i].description} 
            label = {icons[i].label} id= {icons[i].id} detail= {icons[i].detail}/>
    })

    return (
        <div>
            {marketProducts}
        </div>
    );
}

export default MarketPlace;
