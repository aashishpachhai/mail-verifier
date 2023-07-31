
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Ujjwal } from './component/Ujjwal'
function App() {
 


  return (
    <>

  <BrowserRouter>
  <Routes>
    <Route path='/token' element={<Ujjwal/>}></Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
