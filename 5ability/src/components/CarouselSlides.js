import React, {Component} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel';

class CarouselSlides extends Component{
  
    render(){
        return(
            <Carousel>
                <div>                   
                    <strong> {this.props.heading}</strong>
                    <abbr> {this.props.quote}</abbr>
                    <small> {this.props.author}</small>
                    <img src = {this.props.image}/>
                </div>
            </Carousel>
        )
    }
} 

export default  CarouselSlides;