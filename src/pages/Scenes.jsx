import { useEffect, useRef } from "react";
import "../css/Scenes.css";
import { MotionPathPlugin } from "gsap-trial/MotionPathPlugin";
import { Observer } from "gsap-trial/Observer";
import gsap from "gsap-trial";

function Scenes() {

    let moonTimeline
    let moonIndex = useRef(0);
    let animating = useRef(false);

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
                delay: 1,
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
        if (animating.current) return;
        animating.current = true;

        if (moonIndex.current === 0) {
            gsap.to(".moon", {
                y: -600,
                duration: 2,
                onStart: () => {
                    moonTimeline.pause();
                },
                onComplete: () => {
                    animating.current = false;
                }
            });
            moonIndex.current = 1;
        } else if (moonIndex.current === 1) {
            gsap.fromTo(".moon", {
                y: 1000,
            }, {
                y: 0,
                duration: 3,
                onComplete: () => {
                    moonTimeline.play();
                    animating.current = false;
                }
            });
            moonIndex.current = 0;
        } else if (moonIndex.current === -1) {
            gsap.to(".moon", {
                y: 0,
                duration: 3,
                onComplete: () => {
                    moonTimeline.play();
                    animating.current = false;
                }
            });
            moonIndex.current = 0;
        }
    };

    const moonDown = () => {
        if (animating.current) return;
        animating.current = true;

        if (moonIndex.current === 0) {
            gsap.to(".moon", {
                y: 1000,
                duration: 3,
                onStart: () => {
                    moonTimeline.pause();
                },
                onComplete: () => {
                    animating.current = false;
                }
            });
            moonIndex.current = -1;
        } else if (moonIndex.current === 1) {
            gsap.to(".moon", {
                y: 0,
                duration: 2,
                onComplete: () => {
                    moonTimeline.play();
                    animating.current = false;
                }
            });
            moonIndex.current = 0;
        } else if (moonIndex.current === -1) {
            gsap.fromTo(".moon", {
                y: -600,
            }, {
                y: 0,
                duration: 2,
                onComplete: () => {
                    moonTimeline.play();
                    animating.current = false;
                }
            });
            moonIndex.current = 0;
        }
    };

    useEffect(() => {
        gsap.registerPlugin(MotionPathPlugin, Observer);
        moonIn();
        ETAnimation();

        Observer.create({
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => !animating.current && moonUp(),
            onUp: () => !animating.current && moonDown(),
            tolerance: 30,
            preventDefault: true
        });
    
        return () => {
            document.removeEventListener('mousemove', parallax);
        };
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