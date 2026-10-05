const items = document.querySelectorAll(".exp-item");

function toggleItem(item) {
    const wasOpen = item.classList.contains("open");

    items.forEach(function (i) {
        i.classList.remove("open");
        i.setAttribute("aria-expanded", "false");
    });

    if (!wasOpen) {
        item.classList.add("open");
        item.setAttribute("aria-expanded", "true");
    }
}

items.forEach(function (item) {
    item.addEventListener("click", function () {
        toggleItem(item);
    });

    item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleItem(item);
        }
    });
});