

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MyNav from './component/MyNav'
import Homepage from './component/Homepage'
import ArticleDetails from './component/ArticleDetails'

function App() {
  


  return (
    <>
      <BrowserRouter>
      <MyNav/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path = '/singlearticle/:id' element ={<ArticleDetails/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
