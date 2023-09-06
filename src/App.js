import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ListOfNames from './components/ListOfNames'

function App() {
  return (
    <body className="App-header">
    <motion.div 
    initial={{ x: -1000 }}
    animate={{ x: 0 }}
    className="App">
        <ListOfNames/>
        <TextInput/>
        <motion.img
        src={logo} className="App-logo" alt="logo"/>
        </motion.div>
      </body>
    
  )
}



function TextInput() {
  const [inputText, setInputText] = useState('')
  const [displayText, setDisplayText] = useState('')

  const handleChange = (e) => {
    setInputText(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setDisplayText(inputText)
    setInputText('')
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter Name : Email"
        className="input"
      />
      <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="submit" className='submitButton'>
        Submit
      </motion.button>
      {displayText ? <motion.p initial={{opacity: 0}} animate={{opacity: 1}} className='output'>{displayText}</motion.p> : null}
    </form>
  )
}
export default App