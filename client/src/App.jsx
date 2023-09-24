import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './componets/Signup';
import Login from  './componets/Login';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <div>
           <BrowserRouter>
                <Routes>
                    <Route path='/register' element={<Signup />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
           </BrowserRouter>

      </div>
  )
}

export default App;
