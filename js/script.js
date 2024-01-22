document.getElementById("copyLink").addEventListener("click", function(event) {
    event.preventDefault();
    navigator.clipboard.writeText("crsnkntn@gmail.com").then(function() {
        alert("My email was copied to your clipboard!");
    }).catch(function(error) {
        alert("Error copying text: " + error);
    });
});
