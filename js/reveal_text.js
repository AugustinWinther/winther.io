// Reveal functions for skill. It's really bad cause of CSP sompliance.
// Have not found a way to have one single general function without braking CSP compliance :/
function revealProg() {
  var text = document.getElementById("prog");
  var btn = document.getElementById("prog-btn");
  
  if (text.className == "hidden" || text.className == "hide"){
      text.className = "reveal";
  } else {
      text.className = "hide";
      setTimeout(function(){
          text.className = "hidden";;
      }, 500);
  }
  
  if (btn.innerHTML == "Les mer"){
      btn.innerHTML = "Les mindre";
  } else if (btn.innerHTML == "Les mindre") {
      btn.innerHTML = "Les mer";
  } else if (btn.innerHTML == "Read more") {
    btn.innerHTML = "Read less";
  } else if (btn.innerHTML == "Read less") {
    btn.innerHTML = "Read more";
  }
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('prog-btn')
    .addEventListener('click', revealProg);
});

function revealWeb() {
  var text = document.getElementById("web");
  var btn = document.getElementById("web-btn");

  if (text.className == "hidden" || text.className == "hide"){
      text.className = "reveal";
  } else {
      text.className = "hide";
      setTimeout(function(){
          text.className = "hidden";;
      }, 500);
  }
  
  if (btn.innerHTML == "Les mer"){
    btn.innerHTML = "Les mindre";
  } else if (btn.innerHTML == "Les mindre") {
      btn.innerHTML = "Les mer";
  } else if (btn.innerHTML == "Read more") {
    btn.innerHTML = "Read less";
  } else if (btn.innerHTML == "Read less") {
    btn.innerHTML = "Read more";
  }
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('web-btn')
    .addEventListener('click', revealWeb);
});

function revealGfx() {
  var text = document.getElementById("gfx");
  var btn = document.getElementById("gfx-btn");
  
  if (text.className == "hidden" || text.className == "hide"){
      text.className = "reveal";
  } else {
      text.className = "hide";
      setTimeout(function(){
          text.className = "hidden";;
      }, 500);
  }
  
  if (btn.innerHTML == "Les mer"){
    btn.innerHTML = "Les mindre";
  } else if (btn.innerHTML == "Les mindre") {
      btn.innerHTML = "Les mer";
  } else if (btn.innerHTML == "Read more") {
    btn.innerHTML = "Read less";
  } else if (btn.innerHTML == "Read less") {
    btn.innerHTML = "Read more";
  }
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('gfx-btn')
    .addEventListener('click', revealGfx);
});

function revealNet() {
  var text = document.getElementById("net");
  var btn = document.getElementById("net-btn");
  
  if (text.className == "hidden" || text.className == "hide"){
      text.className = "reveal";
  } else {
      text.className = "hide";
      setTimeout(function(){
          text.className = "hidden";;
      }, 500);
  }
  
  if (btn.innerHTML == "Les mer"){
    btn.innerHTML = "Les mindre";
  } else if (btn.innerHTML == "Les mindre") {
      btn.innerHTML = "Les mer";
  } else if (btn.innerHTML == "Read more") {
    btn.innerHTML = "Read less";
  } else if (btn.innerHTML == "Read less") {
    btn.innerHTML = "Read more";
  }
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('net-btn')
    .addEventListener('click', revealNet);
});

function revealSci() {
  var text = document.getElementById("sci");
  var btn = document.getElementById("sci-btn");
  
  if (text.className == "hidden" || text.className == "hide"){
      text.className = "reveal";
  } else {
      text.className = "hide";
      setTimeout(function(){
          text.className = "hidden";;
      }, 500);
  }
  
  if (btn.innerHTML == "Les mer"){
    btn.innerHTML = "Les mindre";
  } else if (btn.innerHTML == "Les mindre") {
      btn.innerHTML = "Les mer";
  } else if (btn.innerHTML == "Read more") {
    btn.innerHTML = "Read less";
  } else if (btn.innerHTML == "Read less") {
    btn.innerHTML = "Read more";
  }
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sci-btn')
    .addEventListener('click', revealSci);
});