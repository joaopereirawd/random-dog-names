import React, { Component } from 'react';
import MaledogComponent from './components/male-component';
import FemaledogComponent from './components/female-component';
import './css/app.css';



class App extends Component {

  constructor() {
    super()
    this.state = { 
      initGenre: 'male'
    }
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick() {
    //console.log(this.state.initGenre);
    if (this.state.initGenre == 'male') {
      this.setState({
        initGenre: 'female'
      });
    } else {
      this.setState({
        initGenre: 'male'
      });
    }
  } 
  
  render() {
    if (this.state.initGenre != 'male') {
      return (
        <div className="App">

          <div className={`dogComponent ${this.state.initGenre}`} >
                <div className="dc-image"></div>
                <FemaledogComponent />
          </div>
          <div className="genre-switch">
            <button className="male-btn" onClick={this.handleClick}>My dog is Male</button>
          </div>
        </div>
      );      
    } else {
      return (
        <div className="App">

          <div className={`dogComponent ${this.state.initGenre}`} >
            
            <MaledogComponent />
          </div>
          <div className="genre-switch">
            <button className="female-btn" onClick={this.handleClick}>My dog is Female</button>
          </div>
        </div>
      ); 
    }

  }
}

export default App;

