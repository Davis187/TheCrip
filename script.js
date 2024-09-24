// Hol die Modal-Elemente und Links
var impressumModal = document.getElementById("impressumModal");
var termsModal = document.getElementById("termsModal");

var impressumLink = document.getElementById("impressumLink");
var termsLink = document.getElementById("termsLink");

// Hol die Schließen-Buttons
var closeButtons = document.getElementsByClassName("close");

// Wenn der Nutzer auf den Impressum-Link klickt, öffne das Impressum-Modal
impressumLink.onclick = function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    impressumModal.style.display = "block";
}

// Wenn der Nutzer auf den Terms of Service-Link klickt, öffne das Terms-Modal
termsLink.onclick = function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    termsModal.style.display = "block";
}

// Schließe das Modal, wenn der Nutzer auf einen der Schließen-Buttons klickt
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        this.parentElement.parentElement.style.display = "none";
    }
}

// Wenn der Nutzer irgendwo außerhalb des Modals klickt, schließe das Modal
window.onclick = function(event) {
    if (event.target == impressumModal) {
        impressumModal.style.display = "none";
    }
    if (event.target == termsModal) {
        termsModal.style.display = "none";
    }
}