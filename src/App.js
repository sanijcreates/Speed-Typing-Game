import React, {useState} from 'react'

function App() {

  const [formData, setFormData] = useState({
    textArea : ""
  })

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
        <h4>Time running: </h4>
        <button>Start the game</button>
        <h1>Word Count: {countWords()}</h1>
    </div>
  );
}

export default App;
