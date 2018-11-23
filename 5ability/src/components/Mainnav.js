import React, {Component} from 'react'
import './Mainnav.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Mainnav extends Component{
    render() {
      return (
  
        <nav className="navbar navbar-fixed-top show hidden-xs hidden-sm">
          {/* Desktop nav*/}
          <div className="container-fluid">
            <div className="topbar">
              <div className="navbar-header">
                <a className="navbar-brand" href="#"><b>5</b>ability</a>
              </div>
              <div className="navbar-right">
                <ul className="nav navbar-nav">
                  <li><Link to ='/start_selling'> Become a Seller</Link></li>
                  <li><a href="#">Sign In</a></li>               
                </ul>  
                <button data-toggle="modal" className="join btn" data-target="#myModal">
                  Join
                </button> 
                {/* Modal */}
                <div className="modal fade" id="myModal" role="dialog">
                  <div className="modal-dialog">    
                    {/* Modal content*/}
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">×</button>
                        <h4 className="modal-title"> Join 5ability</h4>
                      </div>
                      <div className="modal-body text-center">
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
              </div></div></div></nav>
      );
    }
  };

export default Mainnav