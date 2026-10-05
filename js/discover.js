const discoverGallery = document.getElementById("discoverGallery");
const discoverPrev = document.getElementById("discoverPrev");
const discoverNext = document.getElementById("discoverNext");

if (discoverGallery && discoverPrev && discoverNext) {

    discoverNext.addEventListener("click", () => {
        discoverGallery.scrollBy({ left: 220, behavior: "smooth" });
    });

    discoverPrev.addEventListener("click", () => {
        discoverGallery.scrollBy({ left: -220, behavior: "smooth" });
    });

}