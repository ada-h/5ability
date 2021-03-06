import React, {Component} from 'react'
import './Css/Mainnav.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { isMobile} from "react-device-detect";

class Mainnav extends Component{

  constructor(){
    super()
    this.state = {
      isTop: 0,
    }

  }

  componentDidMount (){
    document.addEventListener('scroll', () =>{
      let isTop = window.scrollY < 700;
      if (isTop !== this.state.isTop){
        this.setState({isTop})
      }
    })
  }


    render() {
      const Transparent = {
        backgroundColor : 'Transparent',
      }
      const White = {
        backgroundColor:'white',
      }
      return (

        <nav className="navbar navbar-fixed-top"
         style = {this.state.isTop == 700 ? White : Transparent}>
          {/* Desktop nav*/}

            <div className="topbar">   
                <a className="navbar-brand" href="#"><b>5</b>ability</a>
                  <div className="navbar-right">
                    <ul className="nav">
                      <li><Link to ='/start_selling'> Become a Seller</Link></li>
                      <li data-toggle="modal" data-target="#myModal" ><a href="#">Sign In</a></li>   
                      <li> 
                        <button data-toggle="modal" className="join btn" data-target="#myModal">
                          Join 
                        </button>  
                      </li>            
                    </ul>  
                 <div className="modal fade" id="myModal" role="dialog">
                  <div className="modal-dialog">    
                    {/* Modal content*/}
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">×</button>
                      </div>
                      <div className="modal-body">
                        <button type="button" className="btn btn-lg btn-primary"> Continue with Facebook</button><br /><br />
                        <button type="button" className="btn btn-lg btn-default"> Continue with Google</button>
                          <hr />
                          <p className="text-center">	or</p>
                          <form>
                            <input type="text" className="form-control" style={{height: 45}} placeholder="Enter your email" /><br />
                            <button type="button" className="btn btn-lg  btn-sucess"> Continue</button><br /><br />
                            <h5> By Joining I agree to receive emails from 5ability</h5><br /><br />
                            Already a member? <a href="#"> Sign in</a>
                          </form>
                      </div>
                    </div>     
                  </div>
                  </div>
                </div>
              </div>
           
        </nav>
      );
    }
  };

export default Mainnav