const slides = document.querySelectorAll(".slide")
const prevButton = document.getElementById("controls-prev")
const nextButton = document.getElementById("controls-next")
const progress = document.getElementById("controls-progress")

// Set initial slide
if (!window.location.hash) window.location.hash = '#slide1'
let currentSlide = parseInt(window.location.hash.replace(/^#slide/, ""))
changeSlide(currentSlide)

// Navigation with buttons
prevButton.addEventListener("click", function (event) {
  event.preventDefault()
  changeSlide("prev")
})

nextButton.addEventListener("click", function (event) {
  event.preventDefault()
  changeSlide("next")
})

// Navigation with arrow keys
document.addEventListener('keydown', function (event) {
  event.preventDefault()
  const key = event.key;
  if (key === "ArrowLeft") changeSlide("prev")
  if (key === "ArrowRight") changeSlide("next")
})

function changeSlide(direction) {
  if (direction === "next" && currentSlide < slides.length) currentSlide++
  if (direction === "prev" && currentSlide > 1) currentSlide--

  slides[currentSlide - 1].scrollIntoView({ behavior: "smooth" })
  history.replaceState({}, '', `#slide${currentSlide}`);
  progress.innerText = `${currentSlide} / ${slides.length}`
}

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
