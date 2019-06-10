const body = document.getElementById("body"), 
      start = document.getElementById("button-start"), 
      textcont = document.getElementById("text-container"), 
      infocont = document.getElementById("info-container"), 
      background = document.getElementById("bg"), 
      header = document.getElementsByClassName("bexadasm")[0], 
      r1 = document.getElementsByClassName("r1")[0], 
      r2 = document.getElementsByClassName("r2")[0], 
      r3 = document.getElementsByClassName("r3")[0];

start.onclick = function() {
    start.style.animation = "fade-out 333ms";
    background.style.animation = "fade-in 1.5s";
    header.style.animation = "color-fade 1.5s";
    window.setTimeout(function() {
        start.style.display = "none";
        textcont.style.animation = "fade-out 333ms";
        body.style.animation = "changebg 1s";
    }, 333);
    window.setTimeout(function() {
        textcont.style.display = "none";
        infocont.style.animation = "fade-out 333ms";
    }, 666);
    window.setTimeout(function() {
        infocont.style.display = "none";
        body.style.background = "black";
    }, 1000);
    window.setTimeout(function() {
        background.style.opacity = "1";
        header.style.color = "rgb(75, 204, 0)";
    }, 1500);
};

r1.onclick = function() {
    window.location.href = "first/index.html";
}

r2.onclick = function() {
    window.location.href = "second/index.html";
}

r3.onclick = function() {
    window.location.href = "third/index.html";
}