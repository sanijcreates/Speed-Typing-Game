import React, {useEffect, useState, useRef} from 'react'

function App() {
  const STARTING_TIME = 5;
  const [formData, setFormData] = useState({
    textArea : ""
  })
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [start, setStart] = useState(false)
  const [words, setWords] = useState(0)
  
  const inputRef = useRef(null)

  useEffect(() => {
    if (timeRemaining > 0 && start) {
    setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1)
    }, 1000)} else if (timeRemaining === 0) {
        setStart(false)
        setWords(countWords())
    } 
  }, [timeRemaining, start])


  function handleChange(event) {
    setFormData({...formData, [event.target.name] : event.target.value})
    
  }
  //function that counts the number of words in the textarea
  function countWords() {
    //.split(" ") splits the string into an array of words. 
    const arr = formData.textArea.split(" ")
    return arr.filter(word => word != "").length;
  }
  function startChange(event) {
    setStart(prevData => !prevData)
    setTimeRemaining(STARTING_TIME)
    setFormData({textArea : ""})

    inputRef.current.disabled = false
    //only having the code below doesn't work. becuase react runs the code asyncronously. what that means is, while running the setStart.., it will also run the code bwlow. so the code bwlow
    //is runnnig while the textarea is disabled. 
    inputRef.current.focus()
  }
 
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
