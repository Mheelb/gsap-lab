import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/index.css'
import App from './pages/App.jsx'
import About from './pages/About.jsx'
import NavBar from './components/navBar/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <NavBar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
</Router>
)
