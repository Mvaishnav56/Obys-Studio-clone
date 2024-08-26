var tl = gsap.timeline();
tl.from(".line h1", {
  y: +100,
  stagger: 0.5,
});

tl.from(".line1-1 h5,.line1-1 h6,.line h2",{
  opacity: 0,
  onStart: function () {
    var h5 = document.querySelector(".line1-1 h5");
    var count = 1;
    setInterval(() => {
      if (count < 100) {
        h5.textContent = count++;
      } else {
        h5.textContent = count;
      }
    }, 40);
  },
});


tl.to(".loader", {
  opacity: 0,
  display:"none",
  delay: 4,
  duration: 0.5,
});

tl.from(".page1",{
    y:1200,
    opacity:0,
    duration:1,
})