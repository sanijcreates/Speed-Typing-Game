import React, {useEffect, useState} from 'react'

function App() {

  const [formData, setFormData] = useState({
    textArea : ""
  })
  const [timeRemaining, setTimeRemaining] = useState(5)

  useEffect(() => {
    if (timeRemaining > 0) {
    setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1)
    }, 1000) }
  }, [timeRemaining])


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
  countWords();
 
  return (
    <div className="App">
        <h1>Some title</h1>
        <textarea
          onChange = {handleChange}
          name = "textArea"
        />
        <h4>Time Remaining: {timeRemaining}</h4>
        <button>Start the game</button>
        <h1>Word Count: {countWords()}</h1>
    </div>
  );
}

export default App;
