// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll("img[data-src]");
  
  const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
  };
  
  const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
    };
  };
  
  if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImages(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, imgOptions);
    
    images.forEach(img => imgObserver.observe(img));
  }
});

// Add expand functionality for text sections
document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('active');
        this.textContent = content.classList.contains('active') ? 'Read Less' : 'Read More';
    });
});
