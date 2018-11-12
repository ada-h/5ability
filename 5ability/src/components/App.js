import React, { Component } from 'react';
import './App.css';
import Marketplace from './Marketplace';
import 'tachyons';
import MarketHeader from './MarketHeader';
import Banner from './Banner';
import Professionals from './professionals';
import Guides from './Guides';
import Footer from './Footer'


class App extends Component {

  render() {
    return (
        <div className="App">
          <MarketHeader/>
          <Marketplace/>
          <Professionals/>
          <Guides/>
          <Banner/>
          <Footer/>

        </div>  
    );
  }
}

export default App;
