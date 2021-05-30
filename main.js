function openMenuBurger() {
  console.log("openMenuBurger");
  document.getElementById("menuBurger").style.display = "none";
  document.getElementById("menuClose").style.display = "block";
  var x = document.getElementsByClassName("navbar__menuGroup")[1];
  x.classList.toggle("navbar__menuGroup--active");
}
function closeMenuBurger() {
  console.log("closeMenuBurger");
  document.getElementById("menuBurger").style.display = "block";
  document.getElementById("menuClose").style.display = "none";
  var x = document.getElementsByClassName("navbar__menuGroup")[1];
  x.classList.toggle("navbar__menuGroup--active");
}
