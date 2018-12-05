import React, {Component} from 'react'
import './Css//Slider.css'
import Slide from './Slide'
import LeftArrow from './LeftArrows'
import RightArrow from './RightArrows'
import Carouseldata from '../data/carouseldata'

class Slider extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: Carouseldata,
            currentIndex:0, 
            translateValue:0,
        }

    }

    componentWillMount(){
        setInterval(this.toggleSlide.bind(this), 2000);
    }

    toggleSlide(){
        let currentIndex = (this.state.currentIndex + 1) % this.state.data.length;
         this.setState({currentIndex});
    }

    goToPrev(){
        let currentIndex = this.state.currentIndex - 1 < 0 ? this.state.data.length - 1 : this.state.currentIndex - 1;
        this.setState({ currentIndex});
    }

   goToNext(){
    let currentIndex = this.state.currentIndex + 1;
        this.setState({currentIndex});
    }

    render(){
        let currentIndex = this.state.currentIndex;
        let details = this.state.data[currentIndex];
        console.log(this.state);
        const style = {
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
        }
        return(
            <div className = 'slider' style = {style}>
                <LeftArrow goToPrev = {this.goToPrev.bind(this)}/>
                <div className = "slider-wrapper"  style={style} >
                        <Slide key = {currentIndex} heading={details.heading}
                        quote = {details.quote} author = {details.author}
                        image = {details.image}
                        />
                </div>      
                <RightArrow goToNext = {this.goToNext.bind(this)}/>
            </div>
        )
        
    }


}
export default Slider
