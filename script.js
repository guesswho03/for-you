document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    paragraphs.forEach(p => observer.observe(p));
});
