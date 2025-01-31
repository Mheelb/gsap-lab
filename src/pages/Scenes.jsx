import Forest from "../components/scenes/Forest";
import Moon from "../components/scenes/Moon";
import { Observer } from "gsap-trial/Observer";
import gsap from "gsap-trial";

import "../css/scenes.css";
import { useEffect, useRef, useState } from "react";

function Scenes() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scenesContainer = useRef(null);
    const animating = useRef(false);
    const audioForestRef = useRef(null);
    const audioWolfRef = useRef(null);
    const audioBushRef = useRef(null);

    function showSlide(index) {
        if (animating.current) return;
        animating.current = true;
        const slides = document.querySelectorAll('.scene');
        let newIndex = index;

        if (index >= slides.length) {
            newIndex = 0;
        } else if (index < 0) {
            newIndex = slides.length - 1;
        }

        const currentSlide = slides[currentIndex];
        const nextSlide = slides[newIndex];

        gsap.timeline({
            onComplete: () => {
                setCurrentIndex(newIndex);
                animating.current = false;
            }
        })
        .to(currentSlide, { opacity: 0, duration: 0.5 })
        .to(nextSlide, { opacity: 1, duration: 0.5 }, "-=0.5");
    };

    function nextSlide() {
        showSlide(currentIndex + 1);
        audio();
    };

    function prevSlide() {
        showSlide(currentIndex - 1);
        audio();
    };

    function audio() {
        if (currentIndex === 0) {
            fadeInAudio();
        } else {
            fadeOutAudio();
        }
    };

    function fadeInAudio() {
        audioForestRef.current.play();
        setInterval(() => {
            audioWolfRef.current.play();
        }, 30000);
        setInterval(() => {
            audioBushRef.current.play();
        }, 25000);
        gsap.to(audioForestRef.current, { volume: 1, duration: 1 });
        gsap.to(audioWolfRef.current, { volume: 1, duration: 1 });
        gsap.to(audioBushRef.current, { volume: 1, duration: 1 });
    };

    function fadeOutAudio() {
        gsap.to(audioForestRef.current, { volume: 0, duration: 1 });
        gsap.to(audioWolfRef.current, { volume: 0, duration: 1 });
        gsap.to(audioBushRef.current, { volume: 0, duration: 1 });
    };

    useEffect(() => {
        gsap.registerPlugin(Observer);
        showSlide(currentIndex);

        Observer.create({
            type: "wheel,touch,pointer",
            onLeft: () => !animating.current && prevSlide(),
            onRight: () => !animating.current && nextSlide(),
            tolerance: 30,
            preventDefault: true
        });
    }, []);

    return (
        <div className="carousel">
            <audio ref={audioForestRef} src="src/assets/mp3/forest-ambiance.mp3" loop />
            <audio ref={audioWolfRef} src="src/assets/mp3/wolf.mp3" />
            <audio ref={audioBushRef} src="src/assets/mp3/bush.mp3" />
            <div ref={scenesContainer} className="scenes-container">
                <div className="scene active">
                    <Moon />
                </div>
                <div className="scene">
                    <Forest />
                </div>
            </div>
            <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
            <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default Scenes;