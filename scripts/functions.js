function scrollToBottom() {
    let bottom = document.getElementById('second-section');
    bottom.scrollIntoView({behavior: "smooth"});
  }

function toggleStyleSheet() {
    let curr = document.getElementById("mainStyleSheet").getAttribute("href");
    let sty;
    if (curr === "styles/style1.css") {
      document.getElementById("mainStyleSheet").setAttribute("href", "styles/style2.css");
      localStorage.setItem("stylesheet", "styles/style2.css");
      sty = 1
    }
    else {
      document.getElementById("mainStyleSheet").setAttribute("href", "styles/style1.css");
      localStorage.setItem("stylesheet", "styles/style1.css");
      sty = 0
    }
    // sty = 1 is dark and sty = 0 is light
    let homeImage = document.getElementById("main-photo");
    if (sty === 1) {
      homeImage.src = "resources/casual-pic.jpg";
    }
    else {
      homeImage.src = "resources/Professional_HeadShot.jpg";
    }
}

window.onload = function() {
    let savedStyle = localStorage.getItem("stylesheet");
    let currHTML = document.getElementById("mainStyleSheet");
    let currPortrait = document.getElementById("main-photo");

    if (savedStyle) {
      currHTML.setAttribute("href", savedStyle);
      if (savedStyle === "styles/style1.css") {
        currPortrait.src = "resources/Professional_HeadShot.jpg";
      }
      else {
        currPortrait.src = "resources/casual-pic.jpg";
      }
    }
    else {
      currHTML.setAttribute("href", "styles/style1.css")
      currPortrait.src = "resources/Professional_HeadShot.jpg";
    }
}