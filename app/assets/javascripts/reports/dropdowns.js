"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var breed1 = document.getElementById("breed-1");
    var breed2 = document.getElementById("breed-2");
    var color1 = document.getElementById("color-1");
    var color2 = document.getElementById("color-2");
    var color3 = document.getElementById("color-3");
    breed1.addEventListener("change", function () {
        if (breed1.value !== "Choose one") {
            breed2.classList.remove("hidden");
        }
        else {
            breed2.classList.add("hidden");
            breed2.value = null;
        }
    });
    color1.addEventListener("change", function () {
        if (color1.value !== "Choose one") {
            color2.classList.remove("hidden");
        }
        else {
            color2.classList.add("hidden");
            color2.value = null;
        }
    });
    color2.addEventListener("change", function () {
        if (color2.value !== "Choose one") {
            color3.classList.remove("hidden");
        }
        else {
            color3.classList.add("hidden");
            color3.value = null;
        }
    });
});
