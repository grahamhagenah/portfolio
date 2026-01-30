let mosaicWrapper, thirdItem, firstItem, secondItem
let thirdPosition = -100
let firstPosition = -100
let secondPosition = 50
let scrollTarget = 0
let scrollCurrent = 0
let isTicking = false

// Width: 1360, pos: -450
// Width 1920, pos: -200
//as screen size goes up, x pos decreases 
// 

document.addEventListener('DOMContentLoaded', function() {
  initThemeToggle()

  mosaicWrapper = document.querySelector('.mosaic-wrapper')
  if (!mosaicWrapper) {
    return
  }

  scrollTarget = window.scrollY
  scrollCurrent = window.scrollY

  firstItem = document.getElementsByClassName('mosaic-item')[0]
  secondItem = document.getElementsByClassName('mosaic-item')[1]
  thirdItem = document.getElementsByClassName('mosaic-item')[2]

  // Initialize starting location and scale
  updatePositions(scrollCurrent)

  window.addEventListener("resize", function() {
    updatePositions(scrollCurrent)
  })

  window.addEventListener("scroll", function() {
    scrollTarget = window.scrollY
    requestTick()
  })
})



// Takes an initial starting position and animates to 0
function calculatePosition(startingPosition, scrollY) {
  let scrollOffset = scrollY / 5
  let newPostion

  if (startingPosition < 0) {
    newPostion = startingPosition + scrollOffset
    return (newPostion >= 0) ? 0 : newPostion
  }
  newPostion = startingPosition - scrollOffset
  return (newPostion <= 0) ? 0 : newPostion
}

function fadeInElement(element) {
  // Set the initial opacity to 0 (fully transparent)
  element.style.opacity = 0;

  // Apply a CSS transition to smoothly animate the opacity change over 1 second
  element.style.transition = "opacity 1s ease-in-out";

  // Use a setTimeout to ensure that the opacity change happens after the transition is set
  setTimeout(function() {
    // Set the opacity to 1 (fully visible) to trigger the fade-in effect
    element.style.opacity = 1;
  }, 10); // Delay the opacity change slightly to allow the transition to take effect
}

function calculateTranslationValue() {
  let windowWidth = window.innerWidth
  // Formula for calculating the correct X offset
  let translateX = (5/14) * (windowWidth) - 880
  return translateX
}

function updatePositions(scrollY) {
  const mosaicPosition = calculateTranslationValue()
  const scrollOffset = scrollY / -10

  mosaicWrapper.style.transform = `translateX(${mosaicPosition + scrollOffset}px)`
  firstItem.style.transform = `translateY(${calculatePosition(firstPosition, scrollY)}px)`
  secondItem.style.transform = `translateY(${calculatePosition(secondPosition, scrollY)}px)`
  thirdItem.style.transform = `translateY(${calculatePosition(thirdPosition, scrollY)}px)`
}

function requestTick() {
  if (isTicking) {
    return
  }
  isTicking = true
  window.requestAnimationFrame(function() {
    isTicking = false
    scrollCurrent += (scrollTarget - scrollCurrent) * 0.12
    updatePositions(scrollCurrent)
    if (Math.abs(scrollTarget - scrollCurrent) > 0.5) {
      requestTick()
    }
  })
}

function initThemeToggle() {
  const toggleButton = document.querySelector('[data-theme-toggle]')
  if (!toggleButton) {
    return
  }

  const storedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light')

  setTheme(initialTheme, toggleButton)

  toggleButton.addEventListener('click', function() {
    const nextTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme, toggleButton, true)
    localStorage.setItem('theme', nextTheme)
  })
}

function setTheme(theme, toggleButton, shouldAnimate = false) {
  document.body.setAttribute('data-theme', theme)
  toggleButton.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false')

  if (shouldAnimate) {
    document.body.classList.add('theme-transition')
    window.setTimeout(function() {
      document.body.classList.remove('theme-transition')
    }, 600)
  }
}
