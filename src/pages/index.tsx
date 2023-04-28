import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, {FormEvent, useState}  from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [state, setState] = useState('')
  const [number, setNumber] = useState(0)
  const [visible, setVisible] = useState(false)

  function checkNumber(e:FormEvent){
    e.preventDefault()
    if ( number > 0) {
      setState('positiv')
    }
    if ( number < 0) {
      setState('negativ')
    }
    if ( number == 0) {
      setState('noll')
    }
    setVisible(true)

  }
  return (
    <main>
      <div>
      <form onSubmit={checkNumber} id="character-counter">
      <input onChange={(e)=>setNumber((e.target.value)as any)} placeholder="Write a number... "/> 
        <button id="btnCheck">Check number</button>
      </form>
        {visible ?
        <div>
        <h4>Your number is <span>{state}</span></h4>
        <button onClick={()=>setVisible(false)}>Close result</button>
        </div> :null}

      </div>
    </main>
  )
}
