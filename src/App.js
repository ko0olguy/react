import './App.css'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ListOfNames from './components/ListOfNames'
import { path, svgVariants, pathVariants } from './components/SVG'

// const apiKey = '2dcc090fe80e4ee2aea4b91893081810'
// const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey
// const sendEmailValidationRequest = async (email) => {
//   try {
//       const response = await fetch(apiURL + '&email=' + email)
//       const data = await response.json()
//       const isValidSMTP = data.is_smtp_valid.value
//       console.log(data)
//       if (isValidSMTP) {
//         return true
//       } else {
//         return false
//       }
//   } catch (error) {
//       return false
//   }
// }

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
  const [email, setEmail] = useState('') 
  const [name, setName] = useState('') 
  const [submitted, setSubmitted] = useState(false)
  const [animation, setAnimation] = useState(false) // New state variable

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // sendEmailValidationRequest(email)
    // Do something with email and name if needed
    setSubmitted(true)  // Set submitted to true when the button is pressed
    setAnimation(false)
    setTimeout(() => {
      setAnimation(true)
    }, 3000)
    
  }

  return (
    <form onSubmit={handleSubmit} className='onSub'>
      <label htmlFor="email" className='email-label'>Email</label>
      <input
        type="email"
        id="email"
        value={email}
        className='email-input'
        onChange={handleEmailChange}
        placeholder="Enter Email"
      />
      <label htmlFor="name" className='name-label'>Name</label>
      <input
        type="name"
        id="name"
        value={name}
        className='name-input'
        placeholder="Enter Name"
        onChange={handleNameChange}
      />
      <button 
        type="submit"
        className='submit-button'>
        Submit
      </button>
      {submitted && email && name && (
    <motion.p className='name-email' initial={{ opacity: 0 }} animate={animation ? {opacity: 0} : {opacity: 1}} transition={{ duration: 0.5 }}>
      {name} : {email}
    </motion.p>)}
    </form>
    
  )
}
export default App