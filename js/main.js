$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    // var typed = new Typed(".typing", {
    //     strings: ["Developer", "Designer", ""],
    //     typeSpeed: 50,
    //     backSpeed: 60,
    //     loop: true
    // });

    var typed = new Typed(".typing", {
        strings: [" Web Developer", "Open Source Contributor", "Cloud Computing Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Open Source Contributor", "Freelancer", "AI Enthusiast", "Front End Enthusiast", "UI Designer", "Photographer", "Cloud Computing Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});







// function validate() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let subject = document.getElementById("subject").value;
//     // let phone= document.getElementById("phone").value;
//     // let message= document.getElementById("message").value;


//     let error_message = document.getElementById("error_message");

//     error_message.style.padding = "10px";

//     let text;
//     if (name.length < 1) {
//         text = "Please Enter valid Name";
//         error_message.innerHTML = text;
//         return false;
//     }
//     if (subject.length < 10) {
//         text = "Please Enter Correct Subject";
//         error_message.innerHTML = text;
//         return false;
//     }
//     // if(isNaN(phone) || phone.length != 10){
//     //   text = "Please Enter valid Phone Number";
//     //   error_message.innerHTML = text;
//     //   return false;
//     // }
//     if (email.indexOf("@") == -1 || email.length < 6) {
//         text = "Please Enter valid Email";
//         error_message.innerHTML = text;
//         return false;
//     }
//     // if(message.length <= 140){
//     //   text = "Please Enter More Than 140 Characters";
//     //   error_message.innerHTML = text;
//     //   return false;
//     // }
//     alert("Form Submitted Successfully!");
//     return true;
// }