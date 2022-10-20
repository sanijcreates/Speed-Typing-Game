import React, {useState, useEffect, useRef} from "react"

function useLogic() {
  const STARTING_TIME = 6;
  const [formData, setFormData] = useState({
    textArea : ""
  })
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [start, setStart] = useState(false)
  const [words, setWords] = useState(0)
  
  const inputRef = useRef(null) 

  function handleChange(event) {
    setFormData({...formData, [event.target.name] : event.target.value})
    
  }
  //function that counts the number of words in the textarea
  function countWords() {
    //.split(" ") splits the string into an array of words. 
    const arr = formData.textArea.split(" ")
    return arr.filter(word => word != "").length;
  }
  function startChange() {
    setStart(prevData => !prevData)
    setTimeRemaining(STARTING_TIME)
    setFormData({textArea : ""})

    inputRef.current.disabled = false
    //only having the code below doesn't work. becuase react runs the code asyncronously. what that means is, while running the setStart.., it will also run the code bwlow. so the code bwlow
    //is runnnig while the textarea is disabled. 
    inputRef.current.focus()
  }
  useEffect(() => {
    if (timeRemaining > 0 && start) {
    setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1)
    }, 1000)} else if (timeRemaining === 0) {
        setStart(false)
        setWords(countWords())
    } 
  }, [timeRemaining, start])

  return [inputRef, formData, timeRemaining, start, handleChange, startChange, words]
}

export default useLogic