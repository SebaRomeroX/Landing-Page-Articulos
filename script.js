document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animated-element");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.9) {   // Espera al 90% del elemento
          entry.target.classList.add('animated');
        } 
      });
    }, {
      threshold: 0.9
    });
  
    elements.forEach(element => observer.observe(element)); // Repetir para todos
  });
  