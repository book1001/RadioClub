let constrain = 200;
let mouseOverContainer = document.getElementById("video3Darea");
let videoPlayer1 = document.getElementById("videoPlayer");
let videoPlayer2 = document.getElementById("cavas-area");

function transforms1(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "rotateY(20deg)"
    + "rotateY("+ calcY +"deg)"
    + "translate(-50%, -50%)"
    + "translateZ(-50vh)";
};

function transformElement(el, xyEl) {
  el.style.transform  = transforms1.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position1 = xy.concat([videoPlayer1]);
  let position2 = xy.concat([videoPlayer2]);

  window.requestAnimationFrame(function(){
    transformElement(videoPlayer1, position1);
    transformElement(videoPlayer2, position2);
  });
};
