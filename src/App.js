import React, {useEffect, useState} from 'react'

function App() {

  const [formData, setFormData] = useState({
    textArea : ""
  })
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (timeRemaining > 0 && start) {
    setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1)
    }, 1000)} else if (timeRemaining === 0) {
        setStart(false)
    } 
  }, [timeRemaining, start])


  function handleChange(event) {
    setFormData({...formData, [event.target.name] : event.target.value})
    console.log(formData)
  }
  //function that counts the number of words in the textarea
  function countWords() {
    //.split(" ") splits the string into an array of words. 
    const arr = formData.textArea.split(" ")
    return arr.filter(word => word != "").length;
  }
  function startChange() {
    setStart(prevData => !prevData)
  }
 
  return (
    <div className="App">
        <h1>Some title</h1>
        <textarea
          onChange = {handleChange}
          name = "textArea"
        />
        <h4>Time Remaining: {timeRemaining}</h4>
        <button onClick = {() => startChange()}>Start the game</button>
        <h1>Word Count: {countWords()}</h1>
    </div>
  );
}

export default App;
