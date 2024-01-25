import './style.css'

import { gsap } from 'gsap'


gsap.config({ nullTargetWarn: false });

function createHomeHero() {
  const DOM = {
    heading1: document.querySelector(".word1"),
    heading2: document.querySelector(".word2"),
    heading3: document.querySelector(".word3"),
  
  };

  const selector = {
    animate: gsap.utils.selector(DOM.heading1),
    can: gsap.utils.selector(DOM.heading2),
    heal: gsap.utils.selector(DOM.heading3)

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

  function letter4_5() {
    const tl = gsap.timeline({ defaults: defaults });
    const topChars = selector.can(
      ".c> div:first-of-type, .a2> div:first-of-type"
    );
    const bottomChars = selector.can(
      ".c> div:last-of-type, .a2> div:last-of-type"
    );

    tl.fromTo(
      bottomChars,
      { yPercent: 100 },
      {
        keyframes: {
          yPercent: [100, 0, 100, 0],
          ease: "power1.out",
        },
        duration: 3,
        stagger: 0.4,
      }
    );

    tl.fromTo(
      topChars,
      {
        yPercent: -100,
      },
      {
        keyframes: {
          yPercent: [-100, -100, 20, -100],
          ease: "power1.out",
        },
        duration: 3,
        stagger: 0.4,
      },
      "<"
    );

    return tl;
  }

  function letter6() {
    const char = selector.can(".n > div");
    return gsap.from(char, {
      rotationY: -180,
      duration: 1,
      scale: 0,
    });
  }


  function letter7() {
    const tl = gsap.timeline({ defaults: defaults });
    const wrap = selector.heal(".h > div");
    const char = selector.heal(".h > div > div");

    tl.set(wrap, { transformOrigin: "50% 100%" });
    tl.from(char, { yPercent: 100 });
    tl.from(
      wrap,
      { rotationX: -180, ease: "back.out(1.7)", duration: 1.2 },
      "-=.6"
    );

    return tl;
  }

  function letter8() {
    const char = selector.heal(".e > div > div");
    return gsap.from(char, {
      yPercent: -100,
      ease: "back.out(1.6)",
      duration: 1,
    });
  }

  function letter9() {
    const tl = gsap.timeline({ defaults: defaults });
    const char = selector.heal(".a3 div");

    tl.from(char, { xPercent: -100 });

    return tl;
  }

  function letter10() {
    const tl = gsap.timeline({ defaults: defaults });
    const char = selector.heal(".l div div");

    tl.from(
      char,
      {
        autoAlpha: 0,
        rotationZ: -120,
        duration: 2,
        ease: "elastic.out(1, 0.4)",
      },
      "<.6"
    );

    return tl;
  }

  function createTimeline() {
    const tl = gsap.timeline({
      id: "hero",
      defaults: defaults,
    });

    tl.set([DOM.heading1, DOM.heading2, DOM.heading3], { autoAlpha: 1 });

    tl.add(letter1());
    tl.add(letter2(), 0.3);
    tl.add(letter3(), 1.1);
    tl.add(letter4_5(), 1.1);
    tl.add(letter6(), 1.1);
    tl.add(letter7(), 1.1);
    tl.add(letter8(), 1.1);
    tl.add(letter9(), 1.1);
    tl.add(letter10(), 1.1);
  }

  return {
    createTimeline,
  };
}


document.addEventListener("DOMContentLoaded", () => {
  const homeHero = createHomeHero();
  homeHero.createTimeline();


 
});