import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { rollDie, reset } from './dieSlice'

export const Die = () => {

  const roll = useSelector(state => state.dieRolls.roll)
  const dispatch = useDispatch()
  const [die, setDie] = useState(20)

  const dieTypes = [4, 6, 8, 10, 12, 20]

  return (
    <section>
      <p>{roll}</p>
      <button onClick={() => dispatch(rollDie(die))}>ROLL</button>
      <button onClick={() => dispatch(reset())}>RESET</button>

      <input type="dropdown" value={dieTypes}></input>
    </section>
  )
}
