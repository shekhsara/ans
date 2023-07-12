new VenoBox({
    selector: '.my-video-links',
});




// $('.event_slider').slick(
//     {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         centerMode: true,
//         centerPadding: '0',
//          arrows:false,

//          asNavFor: '.text_slider'
//     }
  
// );

$('.text_slider').slick(
    {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.event_slider',

        arrows:true,
        nextArrow: '<i class="fa-solid fa-chevron-right right"></i>' ,
        
    prevArrow:'<img src="images/logo.png"  alt="" class="left">',
 
    }
  
);



    
$('.event_slider').slick({
    slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
         arrows:false,

         asNavFor: '.text_slider',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
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
                  




// $('.text_slider').slick(
//     {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         asNavFor: '.event_slider',

//         arrows:true,
//         nextArrow: '<i class="fa-solid fa-chevron-right right"></i>' ,
//         prevArrow: '<i class="fa-solid fa-chevron-left left"></i>',
 
//     }
  
// );




$('.text_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
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















// Set the date we're counting down to
var countDownDate = new Date("July 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// =========================counterup js-===========================///
$('.counter').counterUp();
// ==========================================venobox image js-===================



new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});





// ================review part start-========================
$('.full_detail').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: 'true',
    prevArrow:'<img src="images/logo.png"  alt="" class="left_1">',
    nextArrow:'<i class="fa-solid fa-play right_1"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
    slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
    slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});