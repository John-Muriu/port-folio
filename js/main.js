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
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer"],
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

function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    // let phone= document.getElementById("phone").value;
    // let message= document.getElementById("message").value;


    let error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    let text;
    if (name.length < 1) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
    // if(isNaN(phone) || phone.length != 10){
    //   text = "Please Enter valid Phone Number";
    //   error_message.innerHTML = text;
    //   return false;
    // }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    // if(message.length <= 140){
    //   text = "Please Enter More Than 140 Characters";
    //   error_message.innerHTML = text;
    //   return false;
    // }
    alert("Form Submitted Successfully!");
    return true;
}







//     if (name.length<1){
//         document.getElementById('field name').innerHTML="Please enter your Name";
//         status=false;
//     }else{
//         document.getElementById('field name').innerHTM="password correct";
//         status=true;
// }}

// function validateEmail(){
//     let x= document.myform.email.value;
//     let atposition=x.indexOf("@");
//     var dotposition = x.lastIndexOf(".");
//     if(atposition <1 || dotposition<atposition +2 || dotposition+2>=x.length){  
//         alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
//         return false;
// }};




// ParticlesJS Config.
// particlesJS("particles-js", {
//     "particles": {
//         "number": {
//             "value": 80,
//             "density": {
//                 "enable": true,
//                 "value_area": 700
//             }
//         },
//         "color": {
//             "value": "#ffffff"
//         },
//         "shape": {
//             "type": "circle",
//             "stroke": {
//                 "width": 0,
//                 "color": "#000000"
//             },
//             "polygon": {
//                 "nb_sides": 5
//             },
//         },
//         "opacity": {
//             "value": 0.5,
//             "random": false,
//             "anim": {
//                 "enable": false,
//                 "speed": 0.1,
//                 "opacity_min": 0.1,
//                 "sync": false
//             }
//         },
//         "size": {
//             "value": 3,
//             "random": true,
//             "anim": {
//                 "enable": false,
//                 "speed": 10,
//                 "size_min": 0.1,
//                 "sync": false
//             }
//         },
//         "line_linked": {
//             "enable": true,
//             "distance": 150,
//             "color": "#ffffff",
//             "opacity": 0.4,
//             "width": 1
//         },
//         "move": {
//             "enable": true,
//             "speed": 2,
//             "direction": "none",
//             "random": false,
//             "straight": false,
//             "out_mode": "out",
//             "bounce": false,
//             "attract": {
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 1200
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//             "onhover": {
//                 "enable": true,
//                 "mode": "grab"
//             },
//             "onclick": {
//                 "enable": true,
//                 "mode": "push"
//             },
//             "resize": true
//         },
//         "modes": {
//             "grab": {
//                 "distance": 140,
//                 "line_linked": {
//                     "opacity": 1
//                 }
//             },
//             "bubble": {
//                 "distance": 400,
//                 "size": 40,
//                 "duration": 2,
//                 "opacity": 8,
//                 "speed": 3
//             },
//             "repulse": {
//                 "distance": 200,
//                 "duration": 0.4
//             },
//             "push": {
//                 "particles_nb": 4
//             },
//             "remove": {
//                 "particles_nb": 2
//             }
//         }
//     },
//     "retina_detect": true
// });