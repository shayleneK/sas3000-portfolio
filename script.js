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

    const observerOptions = {
        root: null, // Default is the viewport
        rootMargin: '0px',
        threshold: 1 // Trigger when 10% of the target is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Target is visible');
                // Trigger all progress bars
                progressBars.forEach(bar => {
                    const key = bar.id;
                    console.log(key);
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

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observer.observe(target);
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
  