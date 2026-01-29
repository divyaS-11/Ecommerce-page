var sidenav = document.querySelector(".sidenavbar")

function shownavbar()
{
     sidenav.style.left="0"
}
function closenavbar()
{
     sidenav.style.left = "-100%"
}

var search = document.getElementById("search");
var products = document.querySelectorAll(".productbox");

search.addEventListener("keyup", function (event) {
  var enteredproduct = event.target.value.toUpperCase();

  for (let i = 0; i < products.length; i++) {
    var productname = products[i].querySelector("p").textContent.toUpperCase();

    if (productname.indexOf(enteredproduct) < 0) {
      products[i].style.display = "none";
    } else {
      products[i].style.display = "block";
    }
  }
});
