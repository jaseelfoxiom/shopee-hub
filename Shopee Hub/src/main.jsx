import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './services/Context.jsx';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     <AuthProvider>
    <BrowserRouter>
        <App />
        <ToastContainer/>
      </BrowserRouter>
      </AuthProvider>
  </React.StrictMode>,
)
