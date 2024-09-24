// Variables
const sections = document.querySelectorAll("section");
// Functions

// Events
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let secOffset = sec.offsetTop - 250;
        let secHeight = sec.offsetHeight;

        if (top < secOffset + secHeight) {
            sec.classList.add("show-animate");
        }
        else {
            sec.classList.remove("show-animate");
        }
    })
}