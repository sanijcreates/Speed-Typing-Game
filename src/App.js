import React, {useEffect, useState, useRef} from 'react'
import useLogic from './useLogic';

function App() {
  const [inputRef, formData, timeRemaining, start, handleChange, startChange, words, time, timeChange, endChange] = useLogic()
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
        {start ? null: <div>
          <label>Set Time:
          <input name="time" value={time.time} onChange = {timeChange} type='number' className='button'/>
          </label>
        </div>}
        <h4>Time Remaining: {timeRemaining}</h4>
        {start ? <button onClick={endChange}>End game</button>: <button onClick = {startChange} disabled = {start}>Start the game</button>}

        <h1>Word Count: {words == null ? 0 : words}</h1>
    </div>
  );
}

export default App;
