import React from 'react'
import landingImages from '../data/landingimages'
import Landing from './Landing'

const LandingAnime = () => {
   const image = landingImages.map ((image, i) => {
       return <Landing key = {i} id= {landingImages[i].id} image = {landingImages[i].image}/>
   })
   return (
       <div>
           {image}
       </div>
   )
}

export default LandingAnime