import { useEffect, useRef } from 'react';
import Logo from './Logo.jsx'
import { gsap } from "gsap-trial";
import { useNavigate, useLocation } from 'react-router-dom';
import { pageOut } from '../../utils/animations';

function Navbar () {

    const { pathname } = useLocation();
    const naviguate = useNavigate();
    const sceneRef = useRef(null);
    const aboutRef = useRef(null);

    const navAnim = () => {
        gsap.fromTo(".nav",
            {
                opacity: 0, y: -100
            },
            {
                opacity: 1, y: 0, duration: 1, ease: "power2.out",
            }
        )
    }

    const handleClick = (href) => (event) => {
        event.preventDefault();
        
        if (pathname !== href) {
            pageOut(href);
        }
    }

    useEffect(() => {
        navAnim();
    }, []);

    return (
        <div className="nav">
            <Logo />
            <ul>
              <li><a onClick={handleClick("/scenes")} ref={sceneRef} >nos scènes</a></li>
              <li><a onClick={handleClick('/about')} ref={aboutRef}>À propos</a></li>
            </ul>
        </div>
    )
}

export default Navbar;