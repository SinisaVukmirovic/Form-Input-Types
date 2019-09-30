document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".form-input").forEach(function(input) {
        input.addEventListener("input", function() {
            // using reg exp to replace form input error class with nothing
            input.className = input.className.replace(/form-input-error ?/, "");
        });
    });
});