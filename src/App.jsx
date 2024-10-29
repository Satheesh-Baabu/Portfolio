import { Route,Routes,BrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Form from './pages/form'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
