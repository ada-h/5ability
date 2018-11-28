import React, { Component } from 'react';
import './Css/App.css';
import Marketplace from './Loops/Marketplace';
import 'tachyons';
import MarketHeader from './Headers/MarketHeader';
import Banner from './Banner';
import Professionals from './professionals';
import Guides from './Guides';
import Footer from './FooterComponents/Footer'
import Mainnav from './Mainnav'
import Landing from './Landing'
import Slider from './Slider'
import Guidesbutton from './Guidesbutton';

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
          <Guidesbutton/>
          <Banner/>
          <Slider/> 
          <Footer/>
        </div>  
    );
  }
}

export default App;
