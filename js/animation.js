document.addEventListener("DOMContentLoaded", () => {
  var tl = gsap.timeline();

  tl.from(".menu-1", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out",
  })
    .from(
      ".menu-2",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".menu-3",
      {
        duration: 1,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".menu-4",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".menu-5",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".container-item div",
      {
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: { each: 0.2 },
        ease: "power3.out",
      },
      "-=0.9"
    )
    .from(
      ".container-item img",
      {
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: { each: 0.2 },
        ease: "power3.out",
      },
      "-=0.9"
    )
    .from(
      ".bg-hero",
      {
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: { each: 0.2 },
        ease: "power3.out",
      },
      "-=0.2"
    );

  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#works div", {
    duration: 1,
    y: 200,
    opacity: 0,
    stagger: { each: 0.2 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#works",
    },
  });

  gsap.from("#section-02 div", {
    duration: 7,
    y: 300,
    opacity: 0,
    stagger: { each: 0.2 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#section-02",
    },
  });


});