import React from 'react'
import { useHealthPoints } from './HealthPoints.hooks'
import { Container, PointsWrapper, Description, Points, HealthBar, HealthControllers } from './HealthPoints.style'

export const HealthPoints = ({ healthpoints }) => {
  const {
    currentHealth,
    removeOnePoint,
    removeTenPoints,
    addOnePoint,
    addTenPoints
  } = useHealthPoints({ healthpoints })

  return (
    <Container>
      <PointsWrapper>
        <Description>Pontos de Vida</Description>
        <Points>
          <span>{currentHealth}</span>
          <span>{` / ${healthpoints}`}</span>
        </Points>
      </PointsWrapper>
      <HealthBar value={currentHealth} max={healthpoints} />
      <HealthControllers>
        <button onClick={removeTenPoints}>-10</button>
        <button onClick={removeOnePoint}>-1</button>
        <button>set</button>
        <button onClick={addOnePoint}>+1</button>
        <button onClick={addTenPoints}>+10</button>
      </HealthControllers>
    </Container>
  )
}