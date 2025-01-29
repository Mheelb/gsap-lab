import { useEffect, useRef } from 'react';
import Logo from './Logo.jsx'
import { gsap } from "gsap-trial";
import { useNavigate } from 'react-router-dom';

function Navbar () {

    const naviguate = useNavigate();
    const sceneRef = useRef(null);
    const aboutRef = useRef(null);

    const goToScene = () => {
        naviguate('/scenes');
    }

    const goToAbout = () => {
        naviguate('/about');
    }

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

    useEffect(() => {
        navAnim();

        const sceneElement = sceneRef.current;
        const aboutElement = aboutRef.current;

        sceneElement.addEventListener("click", goToScene);
        aboutElement.addEventListener("click", goToAbout);
    }, []);

    return (
        <div className="nav">
            <Logo />
            <ul>
              <li><a ref={sceneRef}>nos scènes</a></li>
              <li><a ref={aboutRef}>À propos</a></li>
            </ul>
        </div>
    )
}

export default Navbar;