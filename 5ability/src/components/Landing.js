import React, {Component} from 'react'



class Landing extends Component {

  constructor(){
    super();

  }
    render() {
      return (
        <header className="container-fluid header desktopHeader">
          <div className="row desktop-header">
            <img className="img-responsive" src="images/desktop_head" />
            <div className="header-text text-right">
              <h1>Don't Just Dream, Do</h1>
              <p> Freelance services. On demand.</p>
              <form className="navbar-form">
                <div className="input-group">
                  <input type="text" className="form-control" style={{height: 45}} placeholder="What service are you looking for?" />
                  <div className="input-group-btn">
                    <button className="btn btn-lg btn-success" type="submit" value="search">
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <div className="video-play">
                <a href="#"><i className="fa fa-btn-play">See for yourself</i></a>
              </div>
            </div>
          </div>
        </header>
      );
    }
  };
export default Landing