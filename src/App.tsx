
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'



import { ThemeProvider } from './components/ThemContext'
import MainDisplay from './components/MainDisplay'
import IntroPage from './components/IntroPage'

function App() {
  

  return (
    <ThemeProvider>
      <BrowserRouter>
      <Routes >
        <Route path='' element={<IntroPage/>}/>
        <Route path='display' element={<MainDisplay/>}/>
      </Routes>
      </BrowserRouter>
      
    </ThemeProvider>
  )
}

export default App
