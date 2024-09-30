import Calc from './components/Calculator'
import Quote from './components/Quote'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Calc />} />
      <Route path='/quote' element={<Quote />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
    </>
  )
}

export default App
