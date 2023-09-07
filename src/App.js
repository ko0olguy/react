import './App.css'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ListOfNames from './components/ListOfNames'
import { path, svgVariants, pathVariants } from './components/SVG'

function App() {
  return (
    <body className="App-header">
    <motion.div 
    initial={{ x: -10000 }}
    animate={{ x: 0 }}
    transition={{  duration: 1, type: 'tween' }}
    className="App">
        <ListOfNames/>
        <TextInput/>
        <motion.svg className='App-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" variants={svgVariants} initial='hidden' animate='visible'><g fill="#61DAFB">
          <motion.path d={path} variants={pathVariants}/>
          <circle cx="420.9" cy="296.5" r="45.7"/><motion.path d="M520.5 78.1z" variants={pathVariants}/></g></motion.svg>
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