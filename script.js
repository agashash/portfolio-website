      let currentSlideIndex = 0;
      const slideInterval = 3000; // 3 seconds
      const slides = document.querySelectorAll('.slide');
      const totalSlides = slides.length;
      
      function showSlide(index) {
          if (index >= totalSlides) {
              currentSlideIndex = 0;
          } else if (index < 0) {
              currentSlideIndex = totalSlides - 1;
          } else {
              currentSlideIndex = index;
          }
      
          const offset = -currentSlideIndex * 100;
          document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
      }
      
      function changeSlide(direction) {
          showSlide(currentSlideIndex + direction);
      }
      
      function autoSlide() {
          showSlide(currentSlideIndex + 1);
      }
      
      // Initialize slideshow
      showSlide(currentSlideIndex);
      setInterval(autoSlide, slideInterval);