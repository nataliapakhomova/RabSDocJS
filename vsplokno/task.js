window.onload = function() {
    var modalMain = document.getElementById("modal_main");
    var modalSuccess = document.getElementById("modal_success");
    var showSuccess = document.querySelector(".show-success");
    var modalClose = document.getElementsByClassName("modal__close");

    modalMain.classList.add("modal_active");

    Array.from(modalClose).forEach(function(element) {
        element.addEventListener("click", function() {
            element.closest(".modal").classList.remove("modal_active");
        });
    });
	
    showSuccess.addEventListener("click", function() {
        modalSuccess.classList.add("modal_active");
    });
}