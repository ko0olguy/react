import './App.css'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ListOfNames from './components/ListOfNames'
import SVG from './components/SVG'
import sendEmailValidationRequest from './Functions/email-validation'

const variants = {
  initial: 
  { x: -10000 },
  animate: {
    x: 0,
    transition: {
      duration: 1,
      type: 'tween'
    }
  }
}

function App() {
  return (
    <body className="App-header">
    <motion.div 
    variants={variants} 
    initial='initial'
    animate='animate'
    className="App">
        <ListOfNames/>
        <TextInput/>
        <SVG/>
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
    sendEmailValidationRequest(email)
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
      <motion.button 
        type="submit"
        className='submit-button'
        >
        Submit
      </motion.button>
      {submitted && email && name && (
    <motion.p className='name-email' initial={{ opacity: 0 }} animate={animation ? {opacity: 0} : {opacity: 1}} transition={{ duration: 0.5 }}>
      {name} : {email}
    </motion.p>)}
    </form>
    
  )
}
export default App