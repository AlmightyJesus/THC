



document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -0.004}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
		`,
  });
});

// const jar = document.querySelector(".layer-2");

// jar.addEventListener("mousemove", (e) => {
//   Object.assign(jar.documentElement, {
//     style: `
// 		--move-x: ${(e.clientX - window.innerWidth / 2) * -0.000}deg;
// 		--move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
// 		`,
//   });
// });

// const parallax_el = document.querySelectorAll('.parallax')

//      let xValue = 0, yValue = 0;

//      window.addEventListener("mousemove", (e)=>{

//       xValue = e.clientX - window.innerWidth/2;
//       yValue = e.clientY - window.innerHeight/2;

//       parallax_el.forEach((el)=>{
//         let speedx = el.dataset.speedx
//         let speedy = el.dataset.speedy
//         el.style.transform = ` translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
//       })

//      })

$(".slider").each(function () {
  var $this = $(this);
  var $group = $this.find(".slide_group");
  var $slides = $this.find(".slide");
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;

  function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(":animated") || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass("active");
    bulletArray[newIndex].addClass("active");

    if (newIndex > currentIndex) {
      slideLeft = "100%";
      animateLeft = "-100%";
    } else {
      slideLeft = "-100%";
      animateLeft = "100%";
    }

    $slides.eq(newIndex).css({
      display: "block",
      left: slideLeft,
    });
    $group.animate(
      {
        left: animateLeft,
      },
      function () {
        $slides.eq(currentIndex).css({
          display: "none",
        });
        $slides.eq(newIndex).css({
          left: 0,
        });
        $group.css({
          left: 0,
        });
        currentIndex = newIndex;
      }
    );
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (currentIndex < $slides.length - 1) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 3000);
  }

  $(".next_btn").on("click", function () {
    if (currentIndex < $slides.length - 1) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  $(".previous_btn").on("click", function () {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  $.each($slides, function (index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass("active");
    }
    $button
      .on("click", function () {
        move(index);
      })
      .appendTo(".slide_buttons");
    bulletArray.push($button);
  });

  advance();
});

// const fs = require('fs');

// const btnmail = document.querySelector('#subemail');
// btnmail.addEventListener("click", saveEmail());
//   function saveEmail() {
//       console.log("saved");
//       const email = document.getElementById('email').value;
//       const data = { email };
//       const jsonData = JSON.stringify(data, null, 2);

//       fs.writeFile('email.json', jsonData, (err) => {
//           if (err) {
//               console.error(err);
//               return;
//           }
//           console.log('Email saved to email.json');
//       });
//   }

//

$(document).ready(function () {
  // Function to change the nav-bar on scroll
  $(window).scroll(function () {
    $(window).scrollTop() >= 600
      ? ($(".fixed-nav-bar").addClass("scrolled"),
        $(".the-bass").addClass("scrolled"))
      : ($(".fixed-nav-bar").removeClass("scrolled"),
        $(".the-bass").removeClass("scrolled"));
  });

  // Drop Down Function
  $("#menuButton").on("change", function () {
    console.log("Change event triggered");
    $("#menuButton").is(":checked")
      ? $(".the-bass").addClass("dropped")
      : ($(".the-bass").removeClass("dropped"),
        $(".drop-down-container").removeClass("dropped"));
  });
});



window.addEventListener("scroll", function () {
  $(".the-bass").removeClass("dropped"),
  $(".drop-down-container").removeClass("dropped");
  $("#menuButton").prop("checked", false);
  
    
    
});



