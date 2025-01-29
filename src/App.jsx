import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './css/index.css'
import App from './pages/Home.jsx'
import About from './pages/About.jsx'
import NavBar from './components/navBar/NavBar.jsx'
import Template from './template.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Template>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <NavBar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  </Template>
</Router>
)
