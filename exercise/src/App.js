import React from 'react'
import Course from './components/Course'

const AvailableProducts = () => {
  return (
    <form>
      <input type = "file"></input>

    </form>
  )
}

const App = ({courses}) =>
  <div>
    <AvailableProducts/>
  </div>

export default App