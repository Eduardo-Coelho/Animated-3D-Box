$(".ContactUs, .About_Us, .Our_Products, .Subscribe").hide();

document.addEventListener("keyup", event);

function hideAll() {
  $(" .Home, .ContactUs, .About_Us, .Our_Products, .Subscribe, .info").fadeOut(1000);

}

let techBox = document.querySelector(".rec-prism");


function Home() {
  techBox.style.transform = "none";



  hideAll();
  $(".Home").fadeIn(500);
  $("body").removeClass();
  $("body").toggleClass("changeBackground1");
  $(".location").html(`<h1> The Start </h1>`);
}


function About_Us() {
  techBox.style.transform = "rotateY( -90deg)";

  hideAll();
  $(".About_Us").fadeIn(500);
  $("body").removeClass();
  $("body").toggleClass("changeBackground");

  $(".location").html(`<h1> Tech Trending Topics </h1>`);

}

function Our_Products() {
  techBox.style.transform = "rotateY( -180deg)";

  hideAll();
  $(".Our_Products").fadeIn(500);
  $("body").removeClass();
  $("body").toggleClass("changeBackground2");

  $(".location").html(`<h1> Recommendation's </h1>`);

}


function Subscribe() {
  techBox.style.transform = "rotateX( -90deg)";

  hideAll();
  $(".Subscribe").fadeIn(500);
  $("body").removeClass();
  $("body").toggleClass("changeBackground3");

  $(".location").html(`<h1> Catalog </h1>`);

}

function ContactUs() {
  techBox.style.transform = "rotateY( 90deg)";

  hideAll();
  $(".ContactUs").fadeIn(500);
  $("body").removeClass();
  $("body").toggleClass("changeBackground4");
  $(".location").html(`<h1> Tect News </h1>`);

}

let count = 0;

function event(event) {

  if (event.keyCode === 39 || event.keyCode === 37) {

    console.log(count);

    if (event.keyCode === 39) {
      // ArrowRight
      count++;
    } else if (event.keyCode === 37) {
      // ArrowLeft
      if (count > 0) {
        count--;
      } else {
        count = 5;
      }

    }

    if (count === 1) {
      About_Us()
    } else if (count === 2) {
      Our_Products()
    } else if (count === 3) {
      Subscribe()
    } else if (count === 4) {
      ContactUs()
    } else if (count === 5) {
      Home()
      count = 0;
    }


  }

}