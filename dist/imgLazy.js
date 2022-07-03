document.addEventListener("DOMContentLoaded", function () {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"))
  let active = false
  const lazyLoad = function () {
    if (active === false) {
      active = true
      setTimeout(() => {
        lazyImages = lazyImages.map((LazyImage) => {
          if (LazyImage.getBoundingClientRect().top <= window.innerHeight && window.getComputedStyle(LazyImage).display !== "none") {
            LazyImage.src = LazyImage.dataset.src
            LazyImage.classList.remove("lazy")
            return null
          } else return LazyImage
        }).filter(image => image)
        if (!lazyImages.length) {
          document.removeEventListener("scroll", lazyLoad)
        } else active = false
      }, 200)
    }
  }
  document.addEventListener("scroll", lazyLoad)
});