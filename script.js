var progress = {
    HTML: "85%",
    CSS: "75%",
    C: "80%",
    Java: "60%",
    Python: "70%",
    SQL: "60%",
    MongoDB: "75%",
    NodeJs: "70%",
    Express: "65%"
}

document.addEventListener("DOMContentLoaded", function () {
    const target = document.getElementById('target');
    const skills = document.querySelector(".skills");
    const progressBars = document.querySelectorAll('.my-progress-bar');
    const main = document.getElementById('welcome');
    const nav = document.getElementById('nav-bar');

    function typeWriter(elemID, txt) {    
        var i = 0;
        var speed = 50;
    
        function type() {
            if (i < txt.length) {
                document.getElementById(elemID).innerHTML += txt.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
    
        type();

    }

    const observerOptions = {
        root: null, // Default is the viewport
        rootMargin: '0px',
        threshold: 1 // Trigger when 10% of the target is visible
    };

    const observerOptions2 = {
        root: null, // Default is the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the target is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Target is visible');
                // Trigger all progress bars
                progressBars.forEach(bar => {
                    const key = bar.id;
                    bar.style.width = progress[key];
                });
            }
        });
    };

    const observerCallback2 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("should be typing");
                typeWriter("welcome-1", "HELLO WORLD, I'M");
                typeWriter("welcome-2", "SHAY KINTANAR");
            }
        });
    };



    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observer2 = new IntersectionObserver(observerCallback2, observerOptions2);


    observer.observe(target);

    observer2.observe(main);
});

jQuery(function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    $('.projects-slick').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.left'),
        nextArrow: $('.right'),
        dots: false,
        infinite: true
        
    });

    var texts = [
        "GameMaker",
        "Lab Reservation System",
        "SQL Database",
        "Classification Task"
    ]

    var images = [
        "images/drive.png",
        "images/github.png",
        "images/github.png",
        "images/drive.png"
    ]

    $('.projects-slider').on('afterChange', function(event, slick, currentSlide){
        $('.project-title').text(texts[currentSlide]);
        $('#project-link').attr("src", images[currentSlide]);
    });
    
    $('.my-progress-bar').hover(function() {
        const key = $(this).attr('id');
        $(this).css("background-color", "#dabbda");
        $(this).text(progress[key]);
        console.log(progress[key]);
    }, function(){
        $(this).css("background-color", "#A488A4");
        $(this).text("");
      });
});
