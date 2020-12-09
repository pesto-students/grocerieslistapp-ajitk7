

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
 function viewMyCart() {
     let  modal = document.getElementById("myCart");
     displayUserCart();
  modal.style.display = "block";
 
}

// When the user clicks on <span> (x), close the modal
 function closeMyCart() {
     let  modal = document.getElementById("myCart");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    let  modal = document.getElementById("myCart");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}