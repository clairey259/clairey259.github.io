/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function handleMenuAnimation() {
  var x = document.getElementById("mobileLinks");
  if (x.classList.contains("nav__mobile--hidden")) {
    x.classList.remove("nav__mobile--hidden");
    x.classList.add("nav__mobile--visible");
  } else {
    x.classList.add("nav__mobile--hidden");
    x.classList.remove("nav__mobile--visible");
  }
}

const handleNotAvailable = () => {
  alert("Sorry a preview is not available at this time")
}