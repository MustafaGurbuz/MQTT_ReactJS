import React, { Component } from 'react';
import './App.css';
import LineBar from './component/lineBar';
import PieDoughnot from './component/pieDougnut';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="containerOne">
          <LineBar />
        </div>
        <div className="containerTwo">
          <PieDoughnot />
        </div>

      </div>
    );
  }
}

export default App;