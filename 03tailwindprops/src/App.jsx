import React, { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App(){
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Arpita",
    age: 20
  }
  let newArr = [1,2,3]
  return (
    <>
    <h1 className="bg-green-400 text-black p-4 rounded-xl text-2xl">
        Tailwind test
      </h1>
      <Card username="ChaiAurCode" btnText="Coffee"/>
      <Card username="Sharma" btnText="Toffee"/>
    </>
  )
}

export default App
