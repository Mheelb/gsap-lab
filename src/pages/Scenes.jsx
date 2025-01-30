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
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

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
    }, [currentIndex]);

    return (
        <div className="carousel">
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