(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    function burgerMenu() {
        const burger = document.querySelector(".menu-header__burger-menu");
        const menu = document.querySelector(".menu-header__list");
        const body = document.querySelector("body");
        burger.addEventListener("click", (() => {
            if (!menu.classList.contains("active")) {
                menu.classList.add("active");
                burger.classList.add("active-burger");
                body.classList.add("locked");
            } else {
                menu.classList.remove("active");
                burger.classList.remove("active-burger");
                body.classList.remove("locked");
            }
        }));
        window.addEventListener("resize", (() => {
            if (window.innerWidth > 767.98) {
                menu.classList.remove("active");
                burger.classList.remove("active-burger");
                body.classList.remove("locked");
            }
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = false;
    isWebp();
    burgerMenu();
})();