function scrollToBottom() {
    let bottom = document.getElementById('second-section');
    bottom.scrollIntoView({behavior: "smooth"});
  }

function toggleStyleSheet() {
  // let resumeDownload = document.getElementById("download-icon");
  // resumeDownload.src = "resources/download-white.svg";
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
    let homeIcon = document.getElementById("transition-btn");
    let homeImage = document.getElementById("main-photo");
    if (sty === 1) {
      homeIcon.src = "resources/info-circle-fill.svg";
      homeImage.src = "resources/casual-pic.jpg";
      resumeDownload.src = "resources/download-white.svg";
    }
    else {
      homeIcon.src = "resources/info-circle-solid.svg";
      homeImage.src = "resources/Professional_HeadShot.jpg";
      resumeDownload.src = "resources/download.png";
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