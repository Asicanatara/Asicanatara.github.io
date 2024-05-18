// Get the button and the popup box elements
var popupBtn = document.getElementById("popupBtn");
var popupBox = document.getElementById("popupBox");
var closeBtn = document.getElementById("closeBtn");

// Show the popup box when the button is clicked
popupBtn.onclick = function() {
    popupBox.style.display = "block";
}

// Hide the popup box when the close button is clicked
closeBtn.onclick = function() {
    popupBox.style.display = "none";
}

// Hide the popup box when clicking outside of the popup content
window.onclick = function(event) {
    if (event.target == popupBox) {
        popupBox.style.display = "none";
    }
}
