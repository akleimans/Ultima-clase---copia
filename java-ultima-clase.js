document.addEventListener("DOMContentLoaded", function() {
    const popupImage = document.getElementById("popup-image");
    const popup = document.getElementById("popup");
    const closePopupButton = document.getElementById("close-popup");
    const popupForm = document.getElementById("popup-form");
  
    popupImage.addEventListener("click", function() {
      popup.style.display = "block";
    });
  
    closePopupButton.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    popupForm.addEventListener("submit", function(event) {
      event.preventDefault();
      showConfirmation();
    });
  
    function showConfirmation() {
      const dishName = document.getElementById("dish").value;
      alert("¡Pedido en camino de " + dishName + "!");
      popup.style.display = "none";
      clearForm();
    }
  
    function clearForm() {
      popupForm.reset();
    }
  });
  