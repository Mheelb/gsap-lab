import { useEffect } from "react";
import "../css/Scenes.css";
import { MotionPathPlugin } from "gsap-trial/MotionPathPlugin";
import { Observer } from "gsap-trial/Observer";
import gsap from "gsap-trial";

function Scenes() {

    let moonTimeline

    const moonIn = () => {
        moonTimeline = gsap.timeline()
            .fromTo(".moon",
                {
                    y: -200
                },
                {
                    y: 0, duration: 2
                })
            .to(".moon", {
                y:10,
                repeat: -1,
                duration: 2,
                yoyo: true,
            });
    };

    const ETAnimation = () => {
        gsap.to(".ET", {
            duration: 10,
            repeat: -1,
            delay: 10,
            motionPath: {
                path: [
                    { x: 0, y: 0 },
                    { x: -400, y: -10 },
                    { x: -900, y: 600 },
                ],
                curviness: 1.5,
                autoRotate: true
            },
            ease: "power1.inOut"
        });
    };

    const parallax = (e) => {
        document.querySelectorAll('.bg').forEach((move) => {
            var moving_value = move.getAttribute('data-value');
            var x = (e.clientX * moving_value) / 250;
            var y = (e.clientY * moving_value) / 250;
            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    };

    const moonUp = () => {
        gsap.to(".moon", {
            y: -600,
            duration: 3,
            onStart: () => {
                moonTimeline.pause();
            }
        });
    };
    const moonDown = () => {
        gsap.to(".moon", {
            y: 0,
            duration: 2,
            onComplete: () => {
                moonTimeline.resume();
            }
        });
    };

    useEffect(() => {
        gsap.registerPlugin(MotionPathPlugin, Observer);
        moonIn();
        ETAnimation();

        document.addEventListener('mousemove', parallax);
        Observer.create({
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => moonUp(),
            onUp: () => moonDown(),
            tolerance: 30,
            preventDefault: true
        });
    
    }, []);

    return (


        <div className="scenes">
            <img className="bg" src="src/assets/clouds.png" data-value="1"/>
            <img className="moon" src="src/assets/moon.png" data-value="1"/>
            <img className="ET" src="src/assets/ET.png"/>
        </div>
    )
}

export default Scenes;