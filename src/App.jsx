import { Route,Routes,BrowserRouter} from 'react-router-dom'

import First from './pages/First'
import Contact from './pages/Contact'
import Form from './pages/form'
import About from './pages/About'
function App() {
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
