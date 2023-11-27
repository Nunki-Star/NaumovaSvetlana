import './App.css';
import React, { useState, useRef } from 'react';


const Filter = ({ wordsTosort }) => {
  let inputField = useRef(null);
  let checkBox = useRef(null);
  let [arrayToSort, sortArr] = useState(wordsTosort)
  let [input, setInput] = useState('')
  let [checked, setChecked] = useState(false)

  const sortedWords = () => {
    let input = inputField.current.value.toLowerCase();
    let checked = checkBox.current.checked;
    let myArray = [...wordsTosort].filter((word) => word.indexOf(input) !== -1);
    sortArr(checked ? [...myArray].sort() : myArray);
  }
  
  const onChange = () => {
    sortedWords();
    setInput(inputField.current.value.toLowerCase());
  }

  const checkbox = () => {
    sortedWords();
    setChecked(checkBox.current.checked);
  }

  const resetButton = () => {
    setInput('');
    setChecked(false);
    sortArr(wordsTosort);
  }

  return (
    <div className="to_filter">
      <input type="checkbox" ref={checkBox} checked={checked} onChange={checkbox} />
      <input type="text" ref={inputField} value={input} onChange={onChange} />
      <button onClick={resetButton}>
        сброс
      </button>
      <div className='filtered'>
        {arrayToSort.map((i) => <p key={i}>{i}</p>)}
      </div>
    </div>
  );
}

export default Filter;