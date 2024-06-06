var progress ={
    HTML: "85%",
    CSS: "75%",
    C: "80%",
    Java: "60%",
    Python: "70%",
    SQL: "60%",
    MongoDB : "75%",
    NodeJs : "70%",
    Express : "65%"
}

document.addEventListener("DOMContentLoaded", function() {
    const target = document.getElementById('target');
    const skills = document.querySelector(".skills");
    const progressBars = document.querySelectorAll('.progress-bar');
    const main = document.getElementById('welcome');
    const nav = document.getElementById('nav-bar');

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
            } else {
                console.log('Target is not visible');
                // Optionally reset all progress bars
                progressBars.forEach(bar => {
                    bar.style.width = '0%';
                });
            }
        });
    };

    const observerCallback2 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Main is visible');
                    nav.classList.remove('hidden');
            } else {
                console.log('Main is not visible');
                // Optionally reset all progress bars
                    nav.classList.add('hidden');

            }    
        });
    };

    

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observer2 = new IntersectionObserver(observerCallback2, observerOptions2);


    observer.observe(target);

    observer2.observe(main);
});

jQuery(function(){
    $('.projects-slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true
    });
  });
  