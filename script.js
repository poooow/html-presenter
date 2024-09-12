let currentSlide = 1

// Set initial slide
if (!window.location.hash) window.location.hash = '#slide1'
else currentSlide = parseInt(window.location.hash.replace(/^#slide/, ""))

const slides = document.querySelectorAll(".slide")
const prev = document.getElementById("controls-prev")
const next = document.getElementById("controls-next")
const progress = document.getElementById("controls-progress")

// Navigation
window.addEventListener('hashchange', function () {
  currentSlide = parseInt(window.location.hash.replace(/^#slide/, ""))
  updateControls()
})

function updateControls() {
  prev.href = `#slide${currentSlide > 1 ? currentSlide - 1 : currentSlide}`
  next.href = `#slide${currentSlide < slides.length ? currentSlide + 1 : currentSlide}`
  progress.innerText = `${currentSlide} / ${slides.length}`
}
updateControls()

// Navigation with arrow keys
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (key === "ArrowLeft") window.location.hash = `#slide${currentSlide > 1 ? currentSlide - 1 : currentSlide}`
  if (key === "ArrowRight") window.location.hash = `#slide${currentSlide < slides.length ? currentSlide + 1 : currentSlide}`
})

// Show controls while mouse moves
const controls = document.getElementById("controls")
let timeout = null
document.addEventListener("mousemove", function () {
  // Refresh timer on every mouse move
  if (timeout) clearTimeout(timeout)

  timeout = setTimeout(function () {
    controls.classList.remove("show")
  }, 500)

  controls.classList.add("show")
})
