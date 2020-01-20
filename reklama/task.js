function rotateAd() {
    var rotators = document.getElementsByClassName("rotator");

    Array.from(rotators).forEach(function(element) {
        var curActive = element.querySelector(".rotator__case_active");
        setTimeout(function tick() {
            var activeRotator = element.querySelector(".rotator__case_active");
            var nextRotator = activeRotator.nextElementSibling;
            if (nextRotator === null) {
                nextRotator = element.querySelector(".rotator__case");
            }

            activeRotator.classList.remove("rotator__case_active");
            nextRotator.classList.add("rotator__case_active");
            nextRotator.style.color = nextRotator.getAttribute("data-color");

            setTimeout(tick, nextRotator.getAttribute("data-speed"));
        }, curActive.getAttribute("data-speed"));
    });
}

rotateAd();