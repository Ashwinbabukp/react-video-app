import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Videopage from './pages/Videopage';
import Landing from './pages/Landing'

function App() {
  return (
    <>
      <Header/> 
      <div className="container m-5">
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Videopage/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
