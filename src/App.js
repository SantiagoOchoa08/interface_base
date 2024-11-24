import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import Purchase from './pages/purchase/Purchase';
import '../src/styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <div className='main-screen' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='main' element={<Main />}/>
          <Route path='purchase' element={<Purchase />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
