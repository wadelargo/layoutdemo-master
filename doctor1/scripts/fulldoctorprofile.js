const education = document.getElementById("edu");
education.addEventListener("click", function () {
  const eduDiv = document.getElementById("education");
  const full = document.getElementById("summary");
  const targetLink = document.getElementById("target_link");
  eduDiv.style.display = "block";
  full.style.display = "none";
  targetLink.style.display = "none";
});
const experience = document.getElementById("exp");
experience.addEventListener("click", function () {
  const expDiv = document.getElementById("experience");
  const full = document.getElementById("summary");
  const targetLink = document.getElementById("target_link");
  expDiv.style.display = "block";
  full.style.display = "none";
  targetLink.style.display = "none";
});
const honour = document.getElementById("hnr");
honour.addEventListener("click", function () {
  const hnrDiv = document.getElementById("hounor");
  const full = document.getElementById("summary");
  const targetLink = document.getElementById("target_link");
  hnrDiv.style.display = "block";
  full.style.display = "none";
  targetLink.style.display = "none";
});
const membership = document.getElementById("mem");
membership.addEventListener("click", function () {
  const memDiv = document.getElementById("membership");
  const full = document.getElementById("summary");
  const targetLink = document.getElementById("target_link");
  memDiv.style.display = "block";
  full.style.display = "none";
  targetLink.style.display = "none";
});
const achieve = document.getElementById("acc");
achieve.addEventListener("click", function () {
  const accDiv = document.getElementById("accomplishments");
  const full = document.getElementById("summary");
  const targetLink = document.getElementById("target_link");
  accDiv.style.display = "block";
  full.style.display = "none";
  targetLink.style.display = "none";
});
const more = document.getElementById("more");
more.addEventListener("click", function () {
  const moreDiv = document.getElementById("about");
  const full = document.getElementById("summary");
  const targetLink = document.getElementById("target_link");
  const head = document.getElementById("about_head");
  moreDiv.style.display = "block";
  full.style.display = "none";
  targetLink.style.display = "none";
});

// Code for images popup @anjudewangan

let deg = 0;
function rotatePicture1() {
  const direction = document.getElementById("picture1");
  deg = direction === "left" ? deg - 90 : deg + 90;
  $("#picture1").css({
    "-webkit-transform": "rotate(" + deg + "deg)",
    "-moz-transform": "rotate(" + deg + "deg)",
    transform: "rotate(" + deg + "deg)",
  });
}
function rotatePicture2() {
  const direction = document.getElementById("picture2");
  deg = direction === "left" ? deg - 90 : deg + 90;
  $("#picture2").css({
    "-webkit-transform": "rotate(" + deg + "deg)",
    "-moz-transform": "rotate(" + deg + "deg)",
    transform: "rotate(" + deg + "deg)",
  });
}
function rotatePicture3() {
  const direction = document.getElementById("picture3");
  deg = direction === "left" ? deg - 90 : deg + 90;
  $("#picture3").css({
    "-webkit-transform": "rotate(" + deg + "deg)",
    "-moz-transform": "rotate(" + deg + "deg)",
    transform: "rotate(" + deg + "deg)",
  });
}
function rotatePicture4() {
  const direction = document.getElementById("picture4");
  deg = direction === "left" ? deg - 90 : deg + 90;
  $("#picture4").css({
    "-webkit-transform": "rotate(" + deg + "deg)",
    "-moz-transform": "rotate(" + deg + "deg)",
    transform: "rotate(" + deg + "deg)",
  });
}
function rotatePicture5() {
  const direction = document.getElementById("picture5");
  deg = direction === "left" ? deg - 90 : deg + 90;
  $("#picture5").css({
    "-webkit-transform": "rotate(" + deg + "deg)",
    "-moz-transform": "rotate(" + deg + "deg)",
    transform: "rotate(" + deg + "deg)",
  });
}
function rotatePicture6() {
  const direction = document.getElementById("picture6");
  deg = direction === "left" ? deg - 90 : deg + 90;
  $("#picture6").css({
    "-webkit-transform": "rotate(" + deg + "deg)",
    "-moz-transform": "rotate(" + deg + "deg)",
    transform: "rotate(" + deg + "deg)",
  });
}
function rotatePicture7() {
  const direction = document.getElementById("picture7");
  deg = direction === "left" ? deg - 90 : deg + 90;
  $("#picture7").css({
    "-webkit-transform": "rotate(" + deg + "deg)",
    "-moz-transform": "rotate(" + deg + "deg)",
    transform: "rotate(" + deg + "deg)",
  });
}

function zoomInPicture1() {
  const myImg = document.getElementById("picture1");
  const currWidth = myImg.clientWidth;
  if (currWidth == 600)
    return false;
  else {
    myImg.style.width = (currWidth + 100) + "px";
  }
}

function zoomOutPicture1() {
  const myImg = document.getElementById("picture1");
  const currWidth = myImg.clientWidth;
  if (currWidth == 100) return false;
  else {
    myImg.style.width = (currWidth - 100) + "px";
  }
}

function zoomInPicture2() {
  const myImg = document.getElementById("picture2");
  const currWidth = myImg.clientWidth;
  if (currWidth == 600)
    return false;
  else {
    myImg.style.width = (currWidth + 100) + "px";
  }
}

function zoomOutPicture2() {
  const myImg = document.getElementById("picture2");
  const currWidth = myImg.clientWidth;
  if (currWidth == 100) return false;
  else {
    myImg.style.width = (currWidth - 100) + "px";
  }
}

function zoomInPicture3() {
  const myImg = document.getElementById("picture3");
  const currWidth = myImg.clientWidth;
  if (currWidth == 600)
    return false;
  else {
    myImg.style.width = (currWidth + 100) + "px";
  }
}

function zoomOutPicture3() {
  const myImg = document.getElementById("picture3");
  const currWidth = myImg.clientWidth;
  if (currWidth == 100) return false;
  else {
    myImg.style.width = (currWidth - 100) + "px";
  }
}

function zoomInPicture4() {
  const myImg = document.getElementById("picture4");
  const currWidth = myImg.clientWidth;
  if (currWidth == 600)
    return false;
  else {
    myImg.style.width = (currWidth + 100) + "px";
  }
}

function zoomOutPicture4() {
  const myImg = document.getElementById("picture4");
  const currWidth = myImg.clientWidth;
  if (currWidth == 100) return false;
  else {
    myImg.style.width = (currWidth - 100) + "px";
  }
}

function zoomInPicture5() {
  const myImg = document.getElementById("picture5");
  const currWidth = myImg.clientWidth;
  if (currWidth == 600)
    return false;
  else {
    myImg.style.width = (currWidth + 100) + "px";
  }
}

function zoomOutPicture5() {
  const myImg = document.getElementById("picture5");
  const currWidth = myImg.clientWidth;
  if (currWidth == 100) return false;
  else {
    myImg.style.width = (currWidth - 100) + "px";
  }
}

function zoomInPicture6() {
  const myImg = document.getElementById("picture6");
  const currWidth = myImg.clientWidth;
  if (currWidth == 600)
    return false;
  else {
    myImg.style.width = (currWidth + 100) + "px";
  }
}

function zoomOutPicture6() {
  const myImg = document.getElementById("picture6");
  const currWidth = myImg.clientWidth;
  if (currWidth == 100) return false;
  else {
    myImg.style.width = (currWidth - 100) + "px";
  }
}

function zoomInPicture7() {
  const myImg = document.getElementById("picture7");
  const currWidth = myImg.clientWidth;
  if (currWidth == 600)
    return false;
  else {
    myImg.style.width = (currWidth + 100) + "px";
  }
}

function zoomOutPicture7() {
  const myImg = document.getElementById("picture7");
  const currWidth = myImg.clientWidth;
  if (currWidth == 100) return false;
  else {
    myImg.style.width = (currWidth - 100) + "px";
  }
}

function openFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
// Code for images popup @anjudewangan

