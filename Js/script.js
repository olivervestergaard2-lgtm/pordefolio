document.addEventListener("DOMContentLoaded", () => {

    const skoleElements = document.querySelectorAll(
        ".semester-heading, .projekt, .projekt-sektion, .projekt-refleksion"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("scroll-vis");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    skoleElements.forEach(element => {

        element.classList.add("scroll-animation");

        observer.observe(element);

    });

});