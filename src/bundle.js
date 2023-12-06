let mosaicWrapper
let thirdItem
let thirdPosition = -100
let firstPosition = -100
let secondPosition = 50

document.addEventListener('DOMContentLoaded', function() {

  mosaicWrapper = document.querySelector('.mosaic-wrapper')
  firstItem = document.getElementsByClassName('mosaic-item')[0]
  secondItem = document.getElementsByClassName('mosaic-item')[1]
  thirdItem = document.getElementsByClassName('mosaic-item')[2]

  // Initialize starting location and scale
  firstItem.style.transform = `translateY(${firstPosition}px)`
  secondItem.style.transform = `translateY(${secondPosition}px)`
  thirdItem.style.transform = `translateY(${thirdPosition}px)`
  
  window.addEventListener("scroll", function() {

    // Calculate scroll, slow it down + reverse direction
    let scrollOffset =  window.scrollY / -10

    mosaicWrapper.style.transform = `translateX(${scrollOffset}px)` 

    calculatePosition(firstPosition, firstItem)
    calculatePosition(secondPosition, secondItem)
    calculatePosition(thirdPosition, thirdItem)
  })

  // Resets zoom level on screen resize
  window.addEventListener('resize', function() {
    document.body.style.zoom = 1;
  });
})



// Takes an initial starting position and animates to 0
function calculatePosition(startingPosition, item) {

  let scrollOffset =  window.scrollY / 5
  let newPostion

  if(startingPosition < 0) {
    newPostion = startingPosition + scrollOffset
    return (newPostion >= 0) ? item.style.transform = "translateY(0)" : item.style.transform = `translateY(${newPostion}px)`
  }
  else {
    newPostion = startingPosition - scrollOffset
    return (newPostion <= 0) ? item.style.transform = "translateY(0)" : item.style.transform = `translateY(${newPostion}px)`
  }

 
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
