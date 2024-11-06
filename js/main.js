const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
    const content = item.querySelector(".accordion-content");
    const header = item.querySelector(".accordion-header");
    const toggleButton = item.querySelector(".toggle-icon");
    header.addEventListener("click", ()=> {
        content.classList.toggle("active");
        if (content.classList.contains("active")) {
            toggleButton.innerHTML= "-"
        } else {
            toggleButton.innerHTML = "+"
        }
    })
});