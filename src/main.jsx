
//CSS imports
import './index.css';
import store from './Redux/store.js';

import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>
  </Provider>    
);
