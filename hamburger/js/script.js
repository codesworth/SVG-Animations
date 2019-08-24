const hmaburger = document.querySelector(".hamburger");

const lineOne = hmaburger.querySelector(".line-one");
const lineTwo = hmaburger.querySelector(".line-two");
const lineThree = hmaburger.querySelector(".line-three");
const lines = [lineOne, lineTwo, lineThree];
const tlm = new TimelineMax({});

const toggleMenu = new TimelineMax({ paused: true, reversed: true });

hmaburger.addEventListener("mouseenter", _ => {
  if (hmaburger.classList.contains("js-x")) {
    return;
  }
  tlm.staggerTo(
    lines,
    0.25,
    {
      scaleX: 1.5,
      repeat: 1,
      yoyo: true,
      ease: Power2.easeInOut,
      svgOrigin: "50, 50"
    },
    0.15
  );
});

toggleMenu
  .to(lineTwo, 0.125, { scaleX: 0 })
  .to(
    lineOne,
    0.25,
    {
      //rotation: 45,
      transformOrigin: "50% 50%",
      y: "8",
      ease: Power2.easeInOut
    },
    "slide"
  )
  .to(
    lineThree,
    0.25,
    {
      //rotation: -45,
      transformOrigin: "50% 50%",
      y: "-8",
      ease: Power2.easeInOut
    },
    "slide"
  )
  .to(hmaburger, 0.5, { rotation: 360, ease: Power4.easeInOut })
  .to(lineOne, 0.25, { rotation: 45, ease: Power2.easeInOut }, "cross")
  .to(lineThree, 0.25, { rotation: -45, ease: Power2.easeInOut }, "cross");

hmaburger.addEventListener("click", _ => {
  console.log("Hello World");
  hmaburger.classList.toggle("js-x");
  toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
});
