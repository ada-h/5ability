import React, { Component } from 'react';
import './App.css';
import Marketplace from './Marketplace';
import 'tachyons';
import MarketHeader from './MarketHeader';
import Banner from './Banner';
import Professionals from './professionals';
import Guides from './Guides';
import Footer from './Footer'
import Mainnav from './Mainnav'
import Landing from './Landing'
import Slider from './Slider'
import LandingImage from './LandingImage';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Mainnav/>
          <Landing/>
          <MarketHeader/>
          <Marketplace/>
          <Professionals/>
          <Guides/>
          <Banner/>
          <Slider/> 
          <Footer/>
        </div>  
    );
  }
}

export default App;
