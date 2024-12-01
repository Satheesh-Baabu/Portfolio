import { Route,Routes,BrowserRouter} from 'react-router-dom'
import Admin from './pages/Admin'
import AdminFeedback from './pages/AdminFeedback'
import First from './pages/First'
import Navbar from './Components/Navbar'

function App() {
  
  
  return (
    <>
      <BrowserRouter>
      
      <Navbar />
        <Routes>
          <Route path="/" element={<First/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path='/admin/feedback' element={<AdminFeedback/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
