import { useEffect, useRef } from "react";
import gsap from "gsap-trial";

function Forest() {

    const randomX = () => {
        return Math.floor(Math.random() * 450);
    };

    const randomY = () => {
        return Math.floor(Math.random() * 90) - 40;
    }

    const eyesBlink = (x, y) => {
        gsap.timeline()
            .set(".red-eyes", {xPercent: x, yPercent: y})
            .to(".red-eyes", {duration: 0.5, delay: 1, opacity: 1})
            .to(".red-eyes", {duration: 0.1, delay: 2, opacity: 0})
            .to(".red-eyes", {duration: 0.1, opacity: 1})
            .to(".red-eyes", {duration: 0.1, delay: 2, opacity: 0})
            .to(".red-eyes", {duration: 0.1, opacity: 1})
            .to(".red-eyes", {duration: 0.1, delay: 0.1, opacity: 0})
            .to(".red-eyes", {duration: 0.1, opacity: 1})
            .to(".red-eyes", {duration: 0.5, delay: 3, opacity: 0})
    };

    useEffect(() => {
        eyesBlink(randomX(), randomY());
        setInterval(() => {
            eyesBlink(randomX(), randomY());
        }, 50000);
    }, []);

    return (
        <div className="scenes">
            <img className="bg" src="src/assets/forest.jpg" data-value="1"/>
            <img className="red-eyes" src="src/assets/red-eyes.png" data-value="1"/>
        </div>
    )
}

export default Forest;