document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("suggestionForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted successfully!");
    });
});
