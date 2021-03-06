//==============Jquery Effects will only operate once the document has completely loaded .=======================
$(document).ready(function () {

  //Function shows each of these paragraphs consecutively after the .bio element appears
  $(".bio").show(function () {
    $("#firstText").show(1000);
    $("#secondText").delay(2000).show(1000); //delayed by 2 seconds 
    $("#thirdText").delay(4000).show(1000); //delayed by 4 seconds
  });

  //function shows the two columns when the .skills section is covered over
  $("div.skills").hover(function () {
    $(".col-sm-2").show(1000);
    $(".col-sm-10").delay(1000).fadeIn(2000);
  });

  //Function hide the sticky menu when the user hovers over the footer section 
  $("footer").hover(function () {
    $("#contact-menu").hide(1000);
  }, function () {
    $("#contact-menu").show(1000); //function to show the sticky menu when user doesn't hovers over the footer
  });

  //when the element is hovered over the .contact element will appear after 1,7seconds
  $(".box2").hover(function () {
    $(".contact").delay(1700).show(1000);
  });

  /*drop down menu through the the slideToggle effect that runs at 1 
  second each time the contents slide down and up.*/
  $("div.accordion").click(function () {
    $(this).closest(".col-sm").find(".aContent").slideToggle(1000);
  });
});



/* ===============================================The Sticky Menu======================================= */
window.onscroll = function () {
  stickyMenu() //when the page is scrolled the stickyMenu function is called
};


let menu = document.getElementById("contact-menu"); //html element stored in menu variable
let menuTop = menu
  .offsetTop; //offsetTop used to get the distance of the outer border of #contact-menu 


function stickyMenu() {
  /* if the number of pixels that the page has scrolled along the vertical axis is greater or 
  equal to the the menuTop then the sticky class will be allocated to the menu html element */
  if (window.pageYOffset >= menuTop) {
    menu.classList.add("sticky")
  } else {
    menu.classList.remove(
      "sticky");
  } //Classlist used & allocated the add/remove methods to add/remove the sticky class to the menu element
}



/* ===========================================Typing Effect Function==================================== */
//variable t, text and speed storing the number 0, the text to be printed out and the speed respectively
let t = 0;
let text = 'Thank you for visiting my portfolio. Please see my contact details and let us keep in touch.';
let speed = 100;

//first I check if the value of t is less than the length of the text variable
//then the #typeEffect div element is has each character appended to it from the text variable
//then the typingEffect function will be delayed by 0,1 seconds every time it prints a letter
function typingEffect() {
  if (t < text.length) {
    document.getElementById("typeEffect").innerHTML += text.charAt(t); //charAt gets character of specific index (t)
    t++; //each value of t will have 1 added to it as long as the if statement is true
    setTimeout(typingEffect, speed);
  }
}