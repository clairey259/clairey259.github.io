/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("mobileLinks");
  if (x.classList.contains("nav__mobile--hidden")) {
    x.classList.remove("nav__mobile--hidden");
    x.classList.add("nav__mobile--visible");
  } else {
    x.classList.add("nav__mobile--hidden");
    x.classList.remove("nav__mobile--visible");
  }
}
