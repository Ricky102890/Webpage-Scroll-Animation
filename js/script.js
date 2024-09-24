// Variables
const sections = document.querySelectorAll("section");
const currentHeight = document.querySelector(".current-height");
const current = document.querySelector(".current");
// Functions

// Events

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let secOffset = sec.offsetTop - 200;
        let secHeight = sec.offsetHeight;

        if (top < secOffset + secHeight) {
            sec.classList.add("show-animate");

        }
        else {
            sec.classList.remove("show-animate");
        }
        currentHeight.innerHTML = `Current Window Height: ${window.scrollY}, Div Height: ${secHeight}, Div OffsetHeight: ${secOffset}`;

    })
}