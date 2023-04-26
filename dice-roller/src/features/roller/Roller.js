import React from 'react'
import { useSelector } from "react-redux"

import { Dice } from './Dice'
import { Prev } from './Prev'

import './roller.css'

export const Die = () => {

  const roll = useSelector(state => state.dieRolls.roll)
  const prev = useSelector(state => state.dieRolls.prev)

  const dieTypes = [4, 6, 8, 10, 12, 20]

  let rollResult = "result"
  if (roll === 1) rollResult += '--fail'
  if (roll === 20) rollResult += '--crit'

  return (
    <section className='main-content'>
      <aside>
        <h2>Rolls:</h2>
        {prev.length ? <Prev prevRolls={prev} /> : 'Roll it!' }
      </aside>
      <section className='die-selector'>
        <p className={rollResult}>{roll}</p>
        <section>{dieTypes.map((die, i) => {
          return <Dice key={i} die={die} />
        })}</section>
      </section>
    </section>
  )
}
