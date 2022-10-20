import React, {useEffect, useState, useRef} from 'react'
import useLogic from './useLogic';

function App() {
  const [inputRef, formData, timeRemaining, start, handleChange, startChange, words] = useLogic()
  return (
    <div className="App">
        <h1>Some title</h1>
        <textarea
          value={formData.textArea}
          onChange = {handleChange}
          name = "textArea"
          disabled = {!start}
          ref = {inputRef}

        />
        <h4>Time Remaining: {timeRemaining}</h4>
        <button onClick = {startChange} disabled = {start}>Start the game</button>
        <h1>Word Count: {words == null ? 0 : words}</h1>
    </div>
  );
}

export default App;
