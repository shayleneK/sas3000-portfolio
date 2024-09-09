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
    const navbar = document.getElementById('navbar');
    const skills = document.querySelector(".skills");
    const progressBars = document.querySelectorAll('.my-progress-bar');
    const main = document.getElementById('welcome');
    const nav = document.getElementById('nav-bar');
    var welcome1 = false;

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
                console.log("nosteen");

                console.log(entry);
                    if(document.getElementById("welcome-1").innerHTML != "HELLO WORLD, I'M") {
                        typeWriter("welcome-1", "HELLO WORLD, I'M");
                        typeWriter("welcome-2", "SHAY KINTANAR");
                    } 
                    navbar.classList.add("navbar-expand-md");
            }else {
                navbar.classList.remove("navbar-expand-md");
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
        "'promise' minigame",
        "ILabs",
        "Concert Management",
        "Fetal Health Classification",
        "Royal Farm Reservation Website"
    ]

    var links = [
        "https://drive.google.com/drive/u/1/search?q=dvap",
        "https://github.com/fifthnoelle/APDEV-Website",
        "https://github.com/shayleneK/-CCINFOM-Concert-Management-System",
        "https://colab.research.google.com/drive/1w5xNHNAes3oVD_nNunwubbbw1ODW0BFS?authuser=1#scrollTo=4-Yuyqo2vDKl",
        "https://cssweng-grp-11.onrender.com/"
    ]

    var images = [
        "images/drive.png",
        "images/github.png",
        "images/github.png",
        "images/drive.png"
    ]

    var descriptions = [
        "A mini story game highlighting personal reflections on love and commitment. This game was made through GameMaker Studio 2.",
        "ILabs, a laboratory reservation system with both client and laboratory technician views that handles the creation and management of laboratory reservations.",
        "A concert management system allowing the operation of concert venues, concert, and tickets. A project eperimenting the functions and implementation of the SQL database.",
        "A classification task that uses machine learning algorithms to classify the health of a fetus according to 2126 records of features taken from cardiotocogram exams.",
        "A resort reservation website designed to display the accomodations, offers, and rooms of the resort. In this project, I was mainly assigned to the Interfaces of the web application."
    ]

    var projectTags = [
        ["GameMaker 2", "GML"],
        ["HTML", "CSS", "MongoDB", "Ajax", "NodeJS", "Express"],
        ["HTML", "JSP", "SQL", "Java"],
        ["Python"],
        ["HTML", "CSS", "hBS"]
    ]

    $('.projects-slick').on('afterChange', function(event, slick, currentSlide){
        var tags = projectTags[currentSlide];

        $('.project-title').text(texts[currentSlide]);
        $('#project-link img').attr("src", images[currentSlide]);
        $('#project-link a').attr("href", links[currentSlide]);
        $('#project-description').text(descriptions[currentSlide]);

        $('#project-tags').text("");
        for (let tag of tags) {
            $('#project-tags').append("<span class='project-tag'>" + tag + '</span>');
        }
    });
    
    $('.my-progress-bar').hover(function() {
        const key = $(this).attr('id');
        $(this).css("color", "#fff");
        $(this).text(progress[key]);
    }, function(){
        $(this).text("");
        $(this).css("color", "#C45E72");
      });
});
