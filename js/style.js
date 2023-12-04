document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion_items");

    accordionItems.forEach(function (item) {
        const button = item.querySelector(".accordion_button");

        button.addEventListener("click", function () {
            item.classList.toggle("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const rotateButton = document.getElementsByClassName("accordion_items");
    const rotatingElement = document.getElementsByClassName("rotate_img");

    rotateButton.addEventListener("click", function () {
        rotatingElement.style.transform = "rotate(45deg)";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("burgerIcon");
    const burgerMenu = document.getElementById("burgerMenu");

    burgerIcon.addEventListener("click", function () {
        burgerMenu.classList.toggle("active");
        burgerIcon.classList.toggle('cross');
    });

});

gsap.to("#animated-object", {
    opacity: 0,
    scale: 1.1,
    duration: 2,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
});