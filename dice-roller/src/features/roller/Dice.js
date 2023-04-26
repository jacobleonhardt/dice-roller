import React from 'react'
import { useDispatch } from "react-redux"
import { rollDie } from './dieSlice'

export const Dice = ({ die }) => {

  const dispatch = useDispatch()
  const dieRoll = Math.floor((Math.random() * die) + 1)

  return (
    <button onClick={() => dispatch(rollDie(dieRoll))}>d{die}</button>
  )
}
