import { useEffect } from 'react';
import '../css/App.css'
import SplineDesign from '../components/spline.jsx'
import NavBar from '../components/navBar/NavBar.jsx'
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";


function App() {

  const titleAnim = () => {
    gsap.timeline().fromTo(".word",
        {
            opacity: 0, y: 100
        },
        {
            opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.33, delay: 0.7
        }
    ).to(".word", {
        textShadow: "0px 0px 5px rgba(255, 255, 255, 0.8), 0px 0px 10px rgba(255, 255, 255, 0.6), 0px 0px 15px rgba(255, 255, 255, 0.4), 0px 0px 20px rgba(255, 255, 255, 0.2)",
        duration: 0.5,
        stagger: 0.3,
        delay: 0.5,
        repeat: -1,
        yoyo: true,
    })
  }
  const titleScroll = () => {
    gsap.to(".hero", {
        scale: 0,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom 50%",
            scrub: 0.5,
        }
    })
  }

  const splineScroll = () => {
      gsap.fromTo("#spline",
          {
              x: "100%",
              opacity: 0
          },
          {
              x: "0%",
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                  trigger: "#spline",
                  start: "top 80%",
                  end: "top top",
                  scrub: 1,
              }
          }
      )
  }
  
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7
    });
    titleAnim();
    titleScroll();
    splineScroll();
  }, []);

  return (
    <>
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"></script>
          <div className="hero">
            <span className="word">Créez&nbsp;</span>
            <span className="word">des&nbsp;</span>
            <span className="word">souvenirs</span>
            <span className="word">,&nbsp;</span>
            <span className="word">vivez&nbsp;</span>
            <span className="word">des&nbsp;</span>
            <span className="word">scènes&nbsp;</span>
          </div>
          <div id="spline">
            <SplineDesign />
          </div>
    </>
  )
}

export default App
