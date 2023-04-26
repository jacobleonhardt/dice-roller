import React from 'react'

export const Prev = ({ prevRolls }) => {

  return (
    <>
      {prevRolls.map((roll, i) => {
        let rollResult = "result"
        if (roll === 1) rollResult += '--fail'
        if (roll === 20) rollResult += '--crit'

        return <span key={i} className={rollResult}>{roll}</span>
      })}
    </>
  )
}
