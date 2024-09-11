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

    let homeIcon = document.getElementById("transition-btn");
    let homeImage = document.getElementById("main-photo");
    if (sty === 1) {
      homeIcon.src = "resources/info-circle-fill.svg";
      homeImage.src = "resources/casual-pic.jpg";
      localStorage.setItem("info-btn", "resources/info-circle-fill.svg")
      localStorage.setItem("pfp", "resources/casual-pic.jpg")
    }
    else {
      homeIcon.src = "resources/info-circle-solid.svg";
      homeImage.src = "resources/Professional_HeadShot.jpg";
      localStorage.setItem("info-btn", "resources/info-circle-solid.svg")
      localStorage.setItem("pfp", "resources/Professional_HeadShot.jpg")
    }
    
    
}

window.onload = function() {
    let savedStyle = localStorage.getItem("stylesheet");
    let currHTML = document.getElementById("mainStyleSheet");
    let currInfoBtn = document.getElementById("transition-btn");
    let currPortrait = document.getElementById("main-photo");

    if (savedStyle) {
      currHTML.setAttribute("href", savedStyle);
      if (savedStyle === "styles/style1.css") {
        currInfoBtn.src = "resources/info-circle-solid.svg";
        currPortrait.src = "resources/Professional_HeadShot.jpg";
      }
      else {
        currInfoBtn.src = "resources/info-circle-fill.svg";
        currPortrait.src = "resources/casual-pic.jpg";
      }
    }
    else {
      currHTML.setAttribute("href", "styles/style1.css")
      currInfoBtn.src = "resources/info-circle-solid.svg";
      currPortrait.src = "resources/Professional_HeadShot.jpg";
    }
}