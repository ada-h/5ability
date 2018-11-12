import React from 'react'
import CarouselSlides from './CarouselSlides'
import Carouseldata from '../data/carouseldata'

const Carousel = () =>{
  const CarouselLoop = Carouseldata.map((data,i) =>{
      return <CarouselSlides key = {i} heading = {Carouseldata[i].heading} quote = {Carouseldata[i].quote} 
      author = {Carouseldata[i].author} image ={Carouseldata[i].image}/>
  })

  return (
      <div className= 'carouselContainer'> 
        {CarouselLoop}
      </div>
  )
}

export default Carousel