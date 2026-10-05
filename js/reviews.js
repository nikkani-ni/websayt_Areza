const track = document.getElementById("reviewsTrack");
const prevBtn = document.getElementById("reviewsPrev");
const nextBtn = document.getElementById("reviewsNext");

if (track && prevBtn && nextBtn) {

    function cardWidth() {
        const card = track.querySelector(".review-card");
        return card.offsetWidth + 14;
    }

    nextBtn.addEventListener("click", function () {
        const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;

        if (atEnd) {
            track.scrollTo({ left: 0, behavior: "smooth" }); 
        } else {
            track.scrollBy({ left: cardWidth(), behavior: "smooth" });
        }
    });

    prevBtn.addEventListener("click", function () {
        if (track.scrollLeft <= 4) {
            track.scrollTo({ left: track.scrollWidth, behavior: "smooth" }); 
        } else {
            track.scrollBy({ left: -cardWidth(), behavior: "smooth" });
        }
    });
}