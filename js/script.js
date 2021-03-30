gsap.timeline({
  scrollTrigger: {
    trigger: "section.box1",
    start: "center center",
    end: "bottom top",
    markers: true,
    scrub: true,
    pin: true
  }
})
.from("section.box1 h2.text1", { x : innerWidth * 1 })
.from("section.box1 h2.text2", { x : innerWidth * -1 })
.from("section.box1 h2.text3", { x : innerWidth * 1 })
.from("section.box1 img", { y : innerHeight * 1, rotate : 360 })

gsap.timeline({
  scrollTrigger: {
    trigger: "section.box2",
    start: "center center",
    end: "bottom top",
    markers: true,
    scrub: true,
    pin: true
  }
})
.from("section.box2", { opacity : 0 })
.from("section.box2 h2.text4", { y : innerHeight * 1 })
.from("section.box2 h2.text5", { x : innerWidth * -1 })
.from("section.box2 h2.text6", { y : innerHeight * 1 })
