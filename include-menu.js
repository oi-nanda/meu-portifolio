document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/menu.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("menu-placeholder").innerHTML = data;
      });
  });