
import './App.css';
import { Routes } from 'react-router-dom';
import Footer from './Components/Footer';

import HomePage from './Pages/HomePage';

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      {/*<Footer />*/}
      
    </>
  )
}

export default App
