import React, { Component } from 'react';
import { connect } from 'react-redux'

import { appActions } from './core/app'

// import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }
  

  componentDidMount() {
  }

  goTo(link) {
    console.log("prop: ", this.props)
    this.props.router.push(link)
  }

  render() {
    console.log(this.props.router.location)
    return (
      <div className="App">

        <div className="w3-top">
            <ul>
              {/* <li><a href="https://runestone2019-team01.herokuapp.com/" style={{textDecoration: "none"}}><span className="glyphicon glyphicon-home"></span> Home</a></li> */}
              <li><a onClick={() => this.goTo('/')} className={this.props.router.location.pathname === '/'? 'active': ''} style={{textDecoration: "none"}}>Streamer</a></li>
              <li><a onClick={() => this.goTo('/camera')}  className={this.props.router.location.pathname === '/camera'? 'active': ''} style={{textDecoration: "none"}}>Client</a></li>
              <li className="navbar-right"><a href="https://github.com/Haubir/Team1-GSDP" style={{textDecoration: "none"}}><span className="glyphicon glyphicon-book"></span> Repository</a></li>
            </ul>
          </div>

          <div className="jumbotron text-center">
            <div className="container">
              <a href="/" className="lang-logo">
                {/* <img src="http://localhost:3000/images/lang-logo.png"/> */}
              </a>
              <h1>Live Video Stream - Client</h1>
              <p>Welcome to the Runestone Robot application! On this page you can see the video.</p>
            </div>
          </div>

          <div className="container">
            <div className="alert alert-info text-center" role="alert">
              To see our code, head to the <a href="https://github.com/Haubir/Team1-GSDP" className="alert-link">Team1-GSDP</a> repository.
            </div>
            <hr/>

            <center>
            {/* <img src=""/> */}
            </center>

            <br/>

          </div>
          {this.props.children}
          <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
              <h1 className="w3-margin w3-xlarge">Team members:</h1>
              <h1 className="w3-margin w3-xlarge">Billy Clerc, Công Thành Bùi, Haubir Mariwani, Huy Pham, Krishnamurthy Gajapathy, Tu Pham</h1>
          </div>
            
          <footer className="w3-container w3-padding-64 w3-center w3-opacity">
          <p>Original template provided by <a href="https://www.heroku.com/" target="_blank">Heroku</a> and <a href="https://www.w3schools.com/" target="_blank">w3schools.com</a></p>
          <p>Livestream over server credit to https://github.com/alexcambose/webcam-base64-streaming.git</p>
          </footer>
          
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.app.message
  }
}

const mapDispatchToProps = {
  test: appActions.test,
  connectToServer: appActions.connectToServer,
  command: appActions.command
}

App = connect (
	mapStateToProps,
	mapDispatchToProps
) ( App )

export default App;
