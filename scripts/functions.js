function scrollToBottom() {
    let bottom = document.getElementById('second-section');
    bottom.scrollIntoView({behavior: "smooth"});
  }

function toggleStyleSheet() {
    let curr = document.getElementById("mainStyleSheet").getAttribute("href");
    if (curr === "styles/style1.css") {
      document.getElementById("mainStyleSheet").setAttribute("href", "styles/style2.css");
      localStorage.setItem("stylesheet", "styles/style2.css");
    }
    else {
      document.getElementById("mainStyleSheet").setAttribute("href", "styles/style1.css");
      localStorage.setItem("stylesheet", "styles/style1.css");
    }
}

window.onload = function() {
    let savedStyle = localStorage.getItem("stylesheet");
    let currHTML = document.getElementById("mainStyleSheet");
    if (savedStyle) {
      currHTML.setAttribute("href", savedStyle);
    }
    else {
      currHTML.setAttribute("href", "styles/style1.css")
    }
}