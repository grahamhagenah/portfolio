let mosaicWrapper
let thirdItem
let thirdPosition = -300
let firstPosition = -250

document.addEventListener('DOMContentLoaded', function() {

  mosaicWrapper = document.querySelector('.mosaic-wrapper')
  firstItem = document.getElementsByClassName('mosaic-item')[0]
  thirdItem = document.getElementsByClassName('mosaic-item')[2]

  // Initialize starting location and scale
  thirdItem.style.transform = `translateY(${thirdPosition}px)`
  firstItem.style.transform = `translateY(${firstPosition}px)`

  // Scroll event listener to handle the home page animation
  window.addEventListener("scroll", function() {

    // Calculate scroll, slow it down + reverse direction
    let scrollOffset =  window.scrollY / -8 

    mosaicWrapper.style.transform = `translateX(${scrollOffset}px)` 

    let newThirdPosition = thirdPosition + window.scrollY
    let newFirstPosition = firstPosition + window.scrollY

    calculatePosition(firstPosition, firstItem)
    calculatePosition(thirdPosition, thirdItem)
  })

  function calculatePosition(startingPosition, item) {
    let newPostion = startingPosition + window.scrollY
    return (newPostion >= 0) ? item.style.transform = "translateY(0)" : item.style.transform = `translateY(${newPostion}px)`
  }

})