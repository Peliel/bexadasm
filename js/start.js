const body = document.getElementById("body"), 
      start = document.getElementById("button-start"), 
      textcont = document.getElementById("text-container"), 
      infocont = document.getElementById("info-container"), 
      background = document.getElementById("bg"), 
      header = document.getElementsByClassName("bexadasm")[0], 
      r1 = document.getElementsByClassName("r1")[0], 
      r2 = document.getElementsByClassName("r2")[0], 
      r3 = document.getElementsByClassName("r3")[0], 
      h_B = document.getElementsByClassName("B")[0], 
      h_e = document.getElementsByClassName("e")[0], 
      h_x = document.getElementsByClassName("x")[0], 
      h_a1 = document.getElementsByClassName("a1")[0], 
      h_d = document.getElementsByClassName("d")[0], 
      h_a2 = document.getElementsByClassName("a2")[0], 
      h_s = document.getElementsByClassName("s")[0], 
      h_m = document.getElementsByClassName("m")[0];

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

    window.setTimeout(function() {
        h_B.style.fontFamily = "Courier, monospace";
        h_B.style.fontSize = "60px";
        window.setTimeout(function() {
            h_e.style.fontFamily = "Courier, monospace";
            h_e.style.fontSize = "60px";
            window.setTimeout(function() {
                h_x.style.fontFamily = "Courier, monospace";
                h_x.style.fontSize = "60px";
                window.setTimeout(function() {
                    h_a1.style.fontFamily = "Courier, monospace";
                    h_a1.style.fontSize = "60px";
                    window.setTimeout(function() {
                        h_d.style.fontFamily = "Courier, monospace";
                        h_d.style.fontSize = "60px";
                        window.setTimeout(function() {
                            h_a2.style.fontFamily = "Courier, monospace";
                            h_a2.style.fontSize = "60px";
                            window.setTimeout(function() {
                                h_s.style.fontFamily = "Courier, monospace";
                                h_s.style.fontSize = "60px";
                                window.setTimeout(function() {
                                    h_m.style.fontFamily = "Courier, monospace";
                                    h_m.style.fontSize = "60px";
                                }, 150);
                            }, 150);
                        }, 150);
                    }, 150);
                }, 150);
            }, 150);
        }, 150);
    }, 150);
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