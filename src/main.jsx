
//CSS imports
import './index.css';
// Library imports
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

//Components imports
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>
    
);
