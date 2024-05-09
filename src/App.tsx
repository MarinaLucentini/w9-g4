

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MyNav from './component/MyNav'
import Homepage from './component/Homepage'

function App() {


  return (
    <>
      <BrowserRouter>
      <MyNav/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
