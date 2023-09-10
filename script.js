function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0
    );
}

function handleScroll() {
    const containerBackground = document.querySelector(".container-background");
    
    if (isInViewport(containerBackground)) {
        containerBackground.classList.add("aparecer");
        window.removeEventListener("scroll", handleScroll);
    }
}
window.addEventListener("scroll", handleScroll);

