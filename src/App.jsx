import { Route,Routes,BrowserRouter} from 'react-router-dom'

import First from './pages/First'
import Contact from './pages/Contact'
import Form from './pages/form'
import About from './pages/About'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Projects from './pages/Projects'
function App() {
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
