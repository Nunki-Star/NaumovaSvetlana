import './App.css';
import React from 'react';
import { withRainbowFrame } from './hoc/withRainbowFrame.jsx'
import DoubleButton from './DoubleButton.jsx'

class App extends React.Component {

  render() {
      let colors = ['deeppink', 'deepskyblue', 'deeppink', "deepskyblue", 'deeppink'];

      let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

      return (
          <div className="App">
              <DoubleButton caption1="однажды" caption2="пору" cbPressed={num => alert(num)} >в студёную зимнюю</DoubleButton>
              <br />
              <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={num => alert(num)}>вышел, был сильный</FramedDoubleButton>
          </div>

      );
  }
}

export default App;


