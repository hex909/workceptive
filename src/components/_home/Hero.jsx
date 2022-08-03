import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";

function Hero({ data, purify }) {
  const heroImageContainer = useRef(null);
  let tl = gsap.timeline();
  let to;

  let moveForce = 30; // max popup movement in pixels 30
  let rotateForce = 20; // max popup rotation in deg 20

  function animateImage() {
    tl.to(
      heroImageContainer.current,
      {
        clipPath: " polygon(100% 0, 0 0, 0 100%, 100% 100%)",
        duration: 2,
        ease: "power3.out",
      },
      "+=.5"
    );
  }

  useLayoutEffect(() => {
    // let sectionHero = document.querySelector("html");
    // function imageMoveAnimation(e) {
    //   let docX = sectionHero.clientWidth;
    //   let docY = sectionHero.clientHeight;

    //   let moveX = ((e.pageX - docX / 2) / (docX / 2)) * -moveForce;
    //   let moveY = ((e.pageY - docY / 2) / (docY / 2)) * -moveForce;

    //   let rotateY = (e.pageX / docX) * rotateForce * 2 - rotateForce;
    //   let rotateX = -((e.pageY / docY) * rotateForce * 2 - rotateForce);

    //   gsap.to(heroImageContainer.current, {
    //     top: moveY,
    //     left: moveX,
    //     rotateX: rotateX,
    //     rotateY: rotateY,
    //     ease: "elastic.out(1, 0.3)",
    //   });
    // }

    // sectionHero.addEventListener("mousemove", imageMoveAnimation);
    to = gsap.to(".hero__one h1, .hero__one p", {
      opacity: 1,
      x: 0,
      stagger: 0.5,
      duration: 1,
    });

    return () => {
      // sectionHero.removeEventListener("mousemove", imageMoveAnimation);
      to.kill();
    };
  }, []);

  return (
    <article className="hero">
      <section className="hero__one">
        <div className="container">
          <h1
            dangerouslySetInnerHTML={purify(data.Right.Heading)}
            style={{ opacity: 0, transform: "translateX(-50px)" }}
          ></h1>
          <p
            dangerouslySetInnerHTML={purify(data.Right.Details)}
            style={{ opacity: 0, transform: "translateX(-50px)" }}
          ></p>
        </div>
      </section>
      <section className="hero__two" ref={heroImageContainer}>
        <img
          className="image"
          src={data.Right.Backgroundimage}
          onLoad={animateImage}
          alt=""
        />
      </section>
    </article>
  );
}

export default Hero;
