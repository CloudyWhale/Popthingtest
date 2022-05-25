function openWindow() {
  var element = document.getElementById("container");
  element.classList.add("open");
  element.style.transform = "scale(1)";
  setTimeout(function(){
    element.classList.remove("open");
}, 1000);
}

function closeWindow() {
  var element = document.getElementById("container");
  element.classList.add("close");
  element.style.transform = "scale(0)";
  setTimeout(function(){
    element.classList.remove("close");
}, 1000);
}
