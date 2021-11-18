import { Home } from './pages/Home'
import { Community } from './pages/Community'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/community' element={<Community/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
