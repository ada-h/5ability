import React from 'react'
import Buyer from '../Buyer'
import BuyerData from '../../data/buyerdata'

const BuyerLoop = () =>{
   const Buyermap = BuyerData.map((details, i) =>{
       return <Buyer key={i} image = {BuyerData[i].image} testimony = {BuyerData[i].testimony} abbr ={BuyerData[i].abbr}/>
   })

   return(
       <div>
           {Buyermap}
       </div>
   )
}

export default BuyerLoop