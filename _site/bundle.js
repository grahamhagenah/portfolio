document.addEventListener('DOMContentLoaded', function() {
  // Your function code here
  handleScroll();
  console.log("hello")
});


// Function to handle scroll event
function handleScroll() {
  const mosaicWrapper = document.querySelector('.mosaic-wrapper');
  
  // Calculate the amount of scroll
  const scrollOffset =  window.scrollY / -8;
  
  // Apply the transformation (translateX) based on scroll offset
  mosaicWrapper.style.transform = `translateX(${scrollOffset}px)`;
}

// Add a scroll event listener to call the handleScroll function
window.addEventListener('scroll', handleScroll);

console.log(scrollOffset)