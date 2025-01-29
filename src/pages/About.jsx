import "../css/About.css";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { useEffect, useRef } from "react";

function About() {

  const vertical = useRef(null);
  const horizontal = useRef(null);
  const colLeft = useRef(null);

  const titleAnim = () => {
    const timeline = gsap.timeline({paused: true})
      .fromTo(colLeft.current, {y: 0}, {y: "170vh", duration: 1})
    ScrollTrigger.create({
      animation: timeline,
      trigger: vertical.current,
      start: "top top",
      end: "bottom center",
      scrub: true
    })
    ScrollTrigger.update();
  }

  const boxAnim = () => {
    let boxItems = gsap.utils.toArray(".horizontal__item");
    gsap.to(boxItems, {
      xPercent: -100 * (boxItems.length - 1),
      ease: "sine.out",
      scrollTrigger: {
        trigger: horizontal.current,
        pin: true,
        scrub: 5,
        snap: 1 / (boxItems.length - 1),
        end: () => "+=" + horizontal.current.offsetWidth
      }
    })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7
    });
    titleAnim();
    boxAnim();
  });

  return (
    
    <section id="about" className="about">
      <div ref={vertical} className="vertical">
        <div className="about__content">
          <div ref={colLeft} className="col col_left"> 
            <h2 className="about__title">À propos de scenium</h2>
          </div>
          <div className="col col_right">
            <div className="about__text">
              <h3 className="about__text__title">Scenium</h3>
              <p className="about__text__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis dui eros, ut molestie magna vestibulum ac. Sed at interdum enim. Nulla luctus dapibus odio interdum vulputate. Aenean eleifend, est et faucibus accumsan, sem massa dapibus turpis, ullamcorper faucibus nibh risus sit amet lorem. Nulla dictum nisl odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur cursus est id mauris ornare, quis sagittis tortor maximus. Nam congue odio id rutrum maximus. Mauris rhoncus ornare leo et feugiat. Etiam velit ligula, rhoncus sed ullamcorper non, convallis sed risus. Morbi in elit cursus, interdum felis a, sagittis leo. Duis in nulla sed velit bibendum tristique sed nec erat. Quisque tincidunt magna consequat urna posuere, at rutrum arcu porta</p>
            </div>
            <div className="about__text">
              <h3 className="about__text__title">Scenium</h3>
              <p className="about__text__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis dui eros, ut molestie magna vestibulum ac. Sed at interdum enim. Nulla luctus dapibus odio interdum vulputate. Aenean eleifend, est et faucibus accumsan, sem massa dapibus turpis, ullamcorper faucibus nibh risus sit amet lorem. Nulla dictum nisl odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur cursus est id mauris ornare, quis sagittis tortor maximus. Nam congue odio id rutrum maximus. Mauris rhoncus ornare leo et feugiat. Etiam velit ligula, rhoncus sed ullamcorper non, convallis sed risus. Morbi in elit cursus, interdum felis a, sagittis leo. Duis in nulla sed velit bibendum tristique sed nec erat. Quisque tincidunt magna consequat urna posuere, at rutrum arcu porta</p>
            </div>
            <div className="about__text">
              <h3 className="about__text__title">Scenium</h3>
              <p className="about__text__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis dui eros, ut molestie magna vestibulum ac. Sed at interdum enim. Nulla luctus dapibus odio interdum vulputate. Aenean eleifend, est et faucibus accumsan, sem massa dapibus turpis, ullamcorper faucibus nibh risus sit amet lorem. Nulla dictum nisl odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur cursus est id mauris ornare, quis sagittis tortor maximus. Nam congue odio id rutrum maximus. Mauris rhoncus ornare leo et feugiat. Etiam velit ligula, rhoncus sed ullamcorper non, convallis sed risus. Morbi in elit cursus, interdum felis a, sagittis leo. Duis in nulla sed velit bibendum tristique sed nec erat. Quisque tincidunt magna consequat urna posuere, at rutrum arcu porta</p>
            </div>
            <div className="about__text">
              <h3 className="about__text__title">Scenium</h3>
              <p className="about__text__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis dui eros, ut molestie magna vestibulum ac. Sed at interdum enim. Nulla luctus dapibus odio interdum vulputate. Aenean eleifend, est et faucibus accumsan, sem massa dapibus turpis, ullamcorper faucibus nibh risus sit amet lorem. Nulla dictum nisl odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur cursus est id mauris ornare, quis sagittis tortor maximus. Nam congue odio id rutrum maximus. Mauris rhoncus ornare leo et feugiat. Etiam velit ligula, rhoncus sed ullamcorper non, convallis sed risus. Morbi in elit cursus, interdum felis a, sagittis leo. Duis in nulla sed velit bibendum tristique sed nec erat. Quisque tincidunt magna consequat urna posuere, at rutrum arcu porta</p>
            </div>
          </div>
        </div>
      </div>
      <div ref={horizontal} className="horizontal">
        <div className="container">
          <div className="horizontal__content">
            <div className="horizontal__item">
              <div className="horizontal__box">1</div>
            </div>
            <div className="horizontal__item">
              <div className="horizontal__box">2</div>
            </div>
            <div className="horizontal__item">
              <div className="horizontal__box">3</div>
            </div>
            <div className="horizontal__item">
              <div className="horizontal__box">4</div>
            </div>
            <div className="horizontal__item">
              <div className="horizontal__box">5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;