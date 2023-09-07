import React, { useState } from 'react'
import { motion } from 'framer-motion'

function ListOfNames() {
    const [data, setData] = useState([
        { id: 1, name: "Kevin", age: 35 },
        { id: 2, name: "Kyle", age: 35 },
])

return (
    <div className='ages'>
    <ul>
        {data.map(({ id, name, age }) => (
        <motion.li
            key={id}
            className="names"
            initial={{ x: 200 }}
            animate={{ x: -20 }}
            whileHover={{ scale: 1.1 }}
        >
            {name} : {age}
        </motion.li>
        ))}
    </ul>
    <div className='button'>
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
            const updatedData = data.map(item => ({ ...item, age: item.age + 1 }))
            setData(updatedData)
        }}
        className='increase'>
        Increment
    </motion.button>
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
            const updatedData = data.map(item => ({ ...item, age: item.age - 1 }))
            setData(updatedData)
        }}
        className='decrease'>
        Decrement
    </motion.button>
    </div>
    </div>
)
}

export default ListOfNames