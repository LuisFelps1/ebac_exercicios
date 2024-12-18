document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const eventDetails = document.querySelector(".event-details");
    const ctaButton = document.querySelector(".cta a");

    function adjustLayout() {
        const width = window.innerWidth;

        if (width <= 768) {
            header.style.padding = "1.5rem 1rem";
            eventDetails.style.margin = "1rem 0";
            ctaButton.style.padding = "0.6rem 1.2rem";
            ctaButton.style.fontSize = "1rem";
        } else {
            header.style.padding = "2rem 1rem";
            eventDetails.style.margin = "2rem 0";
            ctaButton.style.padding = "0.8rem 1.5rem";
            ctaButton.style.fontSize = "1.2rem";
        }
    }

    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});
