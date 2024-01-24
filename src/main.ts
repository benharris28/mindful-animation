import './style.css'

import { gsap } from 'gsap'


gsap.config({ nullTargetWarn: false });

function createHomeHero() {
  const DOM = {
    heading1: document.querySelector(".word1"),
  
  };

  const selector = {
    animate: gsap.utils.selector(DOM.heading1),

  };

  const defaults = {
    ease: "power3.out",
    duration: 0.8,
  };


  function letter1() {
    const tl = gsap.timeline({ defaults: defaults });
    const wrap = selector.animate(".a > div");
    const char = selector.animate(".a > div > div");

    tl.set(wrap, { transformOrigin: "50% 100%" });
    tl.from(char, { yPercent: 100 });
    tl.from(
      wrap,
      { rotationX: -180, ease: "back.out(1.7)", duration: 1.2 },
      "-=.6"
    );

    return tl;
  }

  function letter2() {
    const tl = gsap.timeline({ defaults: defaults });
    const circles = selector.animate(".hero__flair-circles");
    const circlesSvg = selector.animate(".hero__flair-circles svg");
    const windmill = selector.animate(".hero__flair-windmill");
    const wrap = selector.animate(".o > .clip > div");
    const chars = selector.animate(".o > .clip > div > div");

    tl.set(chars[1], { autoAlpha: 1 });
    tl.set(circles, { autoAlpha: 1, yPercent: 100 });
    tl.from(circlesSvg, { scale: 0, ease: "back.out(1.5)" });
    tl.to(circles, {
      yPercent: -200,
      autoAlpha: 0,
      duration: 1.7,
      ease: "power4.out",
    });
    tl.from(wrap, { yPercent: 100, duration: 0.5 }, "<");
    tl.from(
      windmill,
      {
        x: () => {
          return window.innerWidth / -2;
        },
        rotationZ: -360,
        duration: 1.2,
      },
      "<"
    );

    tl.from(chars[0], { rotationY: -180, duration: 0.4 }, "+=.5");
    tl.to(chars[1], { rotationY: 180, duration: 0.4 }, "<");
    tl.to(
      windmill,
      {
        rotationZ: 90,
        duration: 0.4,
        repeat: -1,
        repeatDelay: 1,
      },
      "<"
    );

    return tl;
  }

  function letter3() {
    const char = selector.animate(".u > div");
    return gsap.from(char, {
      yPercent: -100,
      ease: "back.out(1.6)",
      duration: 1,
    });
  }

  function createTimeline() {
    const tl = gsap.timeline({
      id: "hero",
      defaults: defaults,
    });

    tl.set([DOM.heading1], { autoAlpha: 1 });

    tl.add(letter1());
    tl.add(letter2(), 0.3);
    tl.add(letter3(), 1.1);
  }

  return {
    createTimeline,
  };
}


document.addEventListener("DOMContentLoaded", () => {
  const homeHero = createHomeHero();
  homeHero.createTimeline();


 
});