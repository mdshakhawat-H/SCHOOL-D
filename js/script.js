
// ES6 Class
// constructor is a method that runs when the object is instantiated from the class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;  
    }
     // instead of creating a prototpe method, we would just create a method within the class - a method called type
     // everything within the type method is going to be exactly the same thing

    type() {
    // Current index of word
    // We use the modulus operator to get the total length of the words
    const current = this.wordIndex % this.words.length;
    // console.log(current);
    
    // Get full text of current word
    const fullTxt = this.words[current];
    // console.log(fullTxt);
    
    // Check to see if it's in the deleting state
    if(this.isDeleting) {
       // Remove a character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
       } else {
       // Add a character
           this.txt = fullTxt.substring(0, this.txt.length + 1);
       }
    
    // Every half a second output what is in the .txt
    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    
    // Initial Type Speed
    let typeSpeed = 300;
    if(this.isDeleting) {
       typeSpeed /= 2;
       }
    // Check to see if the word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
       typeSpeed = this.wait;
        // Set isDeleting to true
        this.isDeleting = true;
       } else if(this.isDeleting && this.txt === '') {
        // Set isDeleting back to false
           this.isDeleting = false;
        // Move to the next word
           this.wordIndex++;
        // Pause before start typing again
           typeSpeed = 500;
       }
    
    
    // Run it at a certain pace
    setTimeout(() => this.type(), typeSpeed);
    
    }
}



// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Initialize the app in the init function
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait')
    // Initialize the TypeWriter
    new TypeWriter(txtElement, words, wait);
}

// ========== OUR COURSE PART START =========
$('.OC_slider').slick({
    infinite: true,
    speed: 300,
    prevArrow: '<i class="fa-solid fa-left-long slick-prev"></i>',
    nextArrow: '<i class="fa-solid fa-right-long slick-next"></i>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// ========== OUR COURSE PART ENDED =========
// ========== TEACHERS PART START =========
$('.teacher_s').slick({
  infinite: true,
  speed: 300,
  prevArrow: '<i class="fa-solid fa-left-long slick-prev"></i>',
  nextArrow: '<i class="fa-solid fa-right-long slick-next"></i>',
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ========== TEACHERS PART ENDED =========
// ========== TESTIMONIAL PART START =========
$('.ptest_slider').slick({
  infinite: true,
  speed: 300,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
// ========== TESTIMONIAL PART ENDED =========
