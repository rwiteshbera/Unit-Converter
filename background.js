document.getElementById("mode").onclick = function () {
  if (colormode.textContent == "Dark") {
    document.getElementById("container").style.backgroundColor = "black";
    document.getElementById("mode").innerText = "Light";
    document.getElementById("mode").style.backgroundColor = "white";
    document.getElementById("mode").style.color = "black";
    document.getElementById("heading").style.color = "white";
    document.getElementById("developer").style.color = "white";
    document.getElementById("github").src = "icon/github-darkmode.png";
  } else if (colormode.textContent == "Light") {
    document.getElementById("container").style.backgroundColor = "white";
    document.getElementById("mode").innerText = "Dark";
    document.getElementById("mode").style.backgroundColor = "black";
    document.getElementById("mode").style.color = "white";
    document.getElementById("heading").style.color = "black";
    document.getElementById("developer").style.color = "black";
    document.getElementById("github").src = "icon/github.png";
  }
};

function BACKGROUND() {
  var imgs = [
    "background-1.jpeg",
    "background-2.jpeg",
    "background-3.jpeg",
    "background-4.jpeg",
    "background-5.jpeg",
    "background-6.jpeg",
    "background-7.jpeg",
    "background-8.jpeg",
    "background-9.jpeg",
    "background-10.jpeg",
    "background-11.jpeg",
    "background-12.jpeg",
    "background-13.jpeg",
    "background-14.jpeg",
    "background-15.jpeg",
  ];

  var i = Math.floor(Math.random() * imgs.length);
  var imagePath = "'img/" + imgs[i] + "'";
  document.body.style.backgroundImage = `url(${imagePath})`;

  //Icon Sources
  github.setAttribute("src", "icon/github.png");
  linkedin.setAttribute("src", "icon/linkedin.png");
}

window.onload = BACKGROUND();
