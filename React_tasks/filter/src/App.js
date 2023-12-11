import './App.css';
import React from 'react';
import Filter from './Filter.js';


const wordsToSort = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate']

function App(){
    
    return(
      <div className = "container">
        <Filter wordsTosort={wordsToSort} />
      </div>
    )
  }
  export default App;



