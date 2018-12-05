import React, {Component} from 'react'
import FirstAnime from '../data/firstanime'
import Images from './Images'



class Landing extends Component {

  constructor(){
    super();
      this.state = {
        data : FirstAnime,
        currentImage: 0,
      }
  }

  componentWillMount(){
    setInterval(this.toggleSlide.bind(this), 3000)
  }
  toggleSlide (){
    let currentImage = (this.state.currentImage + 1) % this.state.data.length;
    this.setState({currentImage});
  }
    render() {
      let currentImage = this.state.currentImage
      let images = this.state.data[currentImage]
      return (
        <header className="desktopHeader">
          <div className="row desktop-header">
           <Images key={currentImage} image={images.image} name= {images.name} 
            profession = {images.Profession}/>
            <div className="header-text">
              <h1>Don't Just Dream, Do</h1>
              <p> Freelance services. On demand.</p>
              <div>
                <i className="fa fa-btn-play">See for yourself</i>
              </div>
            </div>
          </div>
        </header>
      );
    }
  };
export default Landing