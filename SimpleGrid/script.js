var tl = gsap.timeline();
console.log(tl)
tl.from('.left h2', {
    opacity: 0.4,
    duration: 1,
    x: '-40px'
})
.from('.left p', {
    opacity: 0.4,
    duration: 1,
    x: '-20px',
    delay: '-1'
})
.from('.left button', {
    opacity: 0.4,
    duration: 1,
    x: '-10px',
    delay: '-1'
})