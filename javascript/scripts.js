/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
/*
function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
*/
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


$('.dropdown-trigger').dropdown({coverTrigger: false});


$('#spnTop').on("click",function(){
  $('html,body').animate({ scrollTop: 0 }, 'slow', function () {});
  }); 
  

$(".reg-form").validate({
  rules: {
    mint_is_best: {
      equalTo: "#password"
    },
      },
      //For custom messages
      messages: {
          mint_is_best:{
              equalTo: "Um, ew, wrong. Pick again."
          },
      },
      errorElement : 'div',
      errorPlacement: function(error, element) {
        console.log("help")
        var placement = $(element).data('error');
        if (placement) {
          $(placement).append(error)
        } else {
          error.insertAfter(element);
        }
  }
});