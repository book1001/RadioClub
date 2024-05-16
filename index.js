const videoWalkingList = [
  "resource_info_gif/bird7_1.gif",
  "resource_info_gif/camel1_1.gif",
  "resource_info_gif/crab1_2.gif",
  "resource_info_gif/elephant1_4.gif",
  "resource_info_gif/mouse1_3.gif",
  "resource_info_gif/walk1_4.gif",
  "resource_info_gif/walk2_6.gif",
  "resource_info_gif/cat2_4.gif",
  "resource_info_gif/dinosaur1_1_F.gif",
  "resource_info_gif/crab2_2_4_F.gif",
];

let videoWalkingLast = -1;

var videoWalkingPlayer = document.getElementById('movingImage');
let videoWalkingRandom = getRandomItem(videoWalkingLast, videoWalkingList.length);
videoWalkingLast = videoWalkingRandom;
let videoWalkingSelected = videoWalkingList[videoWalkingRandom];
videoWalkingPlayer.src = videoWalkingSelected;

let position = -2000; // 시작 위치
let isMoving = true; // 움직임 상태를 나타내는 변수
let startTime = 0; // 시작 시간 저장

function moveImage(timestamp) {
    const timeElapsed = timestamp - startTime;

    // 이미지 이동
    if (isMoving) {
        // 화면 오른쪽 끝까지 도달하면
        if (position >= window.innerWidth) {
            // 새로운 이미지 랜덤으로 선택
            videoWalkingRandom = getRandomItem(videoWalkingLast, videoWalkingList.length);
            videoWalkingLast = videoWalkingRandom;
            videoWalkingSelected = videoWalkingList[videoWalkingRandom];
            videoWalkingPlayer.src = videoWalkingSelected;

            // 이미지 초기 위치 설정
            // position = -videoWalkingPlayer.width;
            position = -2000;
            videoWalkingPlayer.style.left = position + 'px';
  
            // 다음 함수 호출: moveImageBackward
            requestAnimationFrame(moveImageBackward);
            isMoving = false;
            return;
        } else {
            // 0.2초 동안 80px씩 오른쪽으로 이동
            if (timeElapsed >= 250) {
                position += 80;
                videoWalkingPlayer.style.left = position + 'px';

                startTime = timestamp;
            }
        }
    }

    // 계속해서 애니메이션을 실행
    if (isMoving) {
        requestAnimationFrame(moveImage);
    }
}

// 최초 애니메이션 호출
startTime = performance.now();
moveImage(startTime);



// =====================================================

const videoWalkingList2 = [
  "resource_info_gif/bird7_1_F.gif",
  "resource_info_gif/camel1_1_F.gif",
  "resource_info_gif/elephant1_4_F.gif",
  "resource_info_gif/mouse1_3_F.gif",
  "resource_info_gif/walk1_4_F.gif",
  "resource_info_gif/walk2_6_F.gif",
  "resource_info_gif/cat2_4_F.gif",
  "resource_info_gif/fish1_4_1_F.gif",
  "resource_info_gif/dinosaur1_1.gif",
  "resource_info_gif/crab2_2_4.gif",
];

let videoWalkingLast2 = -1;

var videoWalkingPlayer2 = document.getElementById('movingImage2');
let videoWalkingRandom2 = getRandomItem(videoWalkingLast2, videoWalkingList2.length);
videoWalkingLast2 = videoWalkingRandom2;
let videoWalkingSelected2 = videoWalkingList2[videoWalkingRandom2];
videoWalkingPlayer2.src = videoWalkingSelected2;

let position2 = -2000; // 시작 위치
// let position2 = window.innerWidth; 
let isMoving2 = true; // 움직임 상태를 나타내는 변수
let startTime2 = 0; // 시작 시간 저장

function moveImageBackward(timestamp2) {
    const timeElapsed2 = timestamp2 - startTime2;

    // 이미지 이동
    if (isMoving2) {
        // 화면 오른쪽 끝까지 도달하면
        if (position2 >= window.innerWidth) {
            // 새로운 이미지 랜덤으로 선택
            videoWalkingRandom2 = getRandomItem(videoWalkingLast2, videoWalkingList2.length);
            videoWalkingLast2 = videoWalkingRandom2;
            videoWalkingSelected2 = videoWalkingList2[videoWalkingRandom2];
            videoWalkingPlayer2.src = videoWalkingSelected2;

            // 이미지 초기 위치 설정
            position2 = -2000;
            // position2 = -videoWalkingPlayer2.width;
            videoWalkingPlayer2.style.right = position2 + 'px';

            // 다음 함수 호출: moveImage
            requestAnimationFrame(moveImage);
            isMoving = true;
            return;
        } else {
            // 0.2초 동안 80px씩 오른쪽으로 이동
            if (timeElapsed2 >= 250) {
                position2 += 80;
                videoWalkingPlayer2.style.right = position2 + 'px';
                startTime2 = timestamp2;
            }
        }
    }

    // 계속해서 애니메이션을 실행
    if (isMoving2) {
        requestAnimationFrame(moveImageBackward);
    }
}

// 최초 애니메이션 호출
// startTime2 = performance.now();
// moveImageBackward(startTime2);




// =====================================================


function info() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    info_Tablet()
  } else { // PC: 601px ~
    info_PC()
  }
}

function infoImage() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    radioRandomPlay()
  } else { // PC: 601px ~
    info_PC()
  }
}

let infoClicked = false;
let infoMenu = document.getElementById("infoMenu");

function info_Tablet() {
  if (!infoClicked) {

    infoMenu.textContent = "◀◀ Back to Radio";

    document.getElementById("infoContents").style.display = 'block';
  
    setTimeout(function() {
      document.getElementById("infoContents").style.opacity = '1';
    }, 300);

    document.getElementById("ani-container").style.opacity = '1';
    document.getElementById("ani-container2").style.opacity = '1';
    document.getElementById("videoPlayer").style.transition = 'transform 0.3s';
    document.getElementById("cavas-area").style.transition = 'transform 1s';
    document.getElementById("radioRandomBtn").style.bottom = '0';
    document.getElementById("exceptBtn").style.cursor = 'alias';

    infoClicked = true; 

  } else {

    infoMenu.textContent = "Communal Radio Club";
    document.getElementById("infoContents").style.display = 'none';

    setTimeout(function() {
      document.getElementById("infoContents").style.opacity = '0';
    }, 300);

    document.getElementById("ani-container").style.opacity = '0';
    document.getElementById("ani-container2").style.opacity = '0';
    document.getElementById("videoPlayer").style.transition = 'transform 0.3s';
    document.getElementById("cavas-area").style.transition = 'transform 1s';
    document.getElementById("cavas-area").style.zIndex = '5';
    document.getElementById("radioRandomBtn").style.bottom = '0';
    document.getElementById("exceptBtn").style.transform = 'translate(-50%, 60px) rotateY(0deg) translateZ(0vh)';
    document.getElementById("exceptBtn").style.cursor = 'help';

    infoClicked = false; 
  }
}

function info_PC() {
  if (!infoClicked) {

    let constrain = 250;
    let constrain2 = 100;
    let mouseOverContainer = document.body;
    let videoPlayer3D = document.getElementById("videoPlayer");
    let radioRandomBtn3D = document.getElementById("radioRandomBtn");

    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = (y - box.y - (box.height / 2)) / constrain; // 방향 반대로 수정
      let calcY = -(x - box.x - (box.width / 2)) / constrain; // 방향 반대로 수정

      // let calcX = -(y - box.y - (box.height / 2)) / constrain;
      // let calcY = (x - box.x - (box.width / 2)) / constrain;
      
      return "perspective(100px)"
       + "scale(0.7)"
       + "rotateX("+ calcX +"deg)"
       + "rotateY("+ calcY +"deg)";
    };

    function transformElement(el, xyEl) {
      el.style.transition  = "transform 0.1s";
      el.style.transform  = transforms.apply(null, xyEl);
    }

    function transforms2(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = (y - box.y - (box.height / 2)) / constrain2; // 방향 반대로 수정
      let calcY = -(x - box.x - (box.width / 2)) / constrain2; // 방향 반대로 수정

      return "perspective(100px)"
       + "rotateX("+ calcX +"deg)"
       + "rotateY("+ calcY +"deg)"
       + "translateY(50%)";
    };

    function transformElement2(el, xyEl) {
      el.style.transform  = transforms2.apply(null, xyEl);
    }
    
    mouseOverContainer.onmousemove = function(e) {
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([videoPlayer3D]);
      let position2 = xy.concat([radioRandomBtn3D]);

      window.requestAnimationFrame(function(){
        transformElement(videoPlayer3D, position);
        transformElement2(radioRandomBtn3D, position2);
      });
    };


    infoMenu.textContent = "Communal Radio Club";
    document.getElementById("infoContents").style.display = 'block';
  
    setTimeout(function() {
      document.getElementById("infoContents").style.opacity = '1';
    }, 300);

    document.getElementById("ani-container").style.opacity = '1';
    document.getElementById("ani-container2").style.opacity = '1';

    document.getElementById("videoPlayer").style.transition = 'transform 0.5s';
    document.getElementById("videoPlayer").style.transform = 'scale(0.7)';

    document.getElementById("cavas-area").style.transition = 'transform 1s';
    document.getElementById("cavas-area").style.transform = 'translate(-50%, -50%) scale(0.7)';
    document.getElementById("cavas-area").style.zIndex = '1';

    document.getElementById("radioRandomBtn").style.bottom = '0';
    document.getElementById("radioRandomBtn").style.transform = 'translate(0, 60px) rotateY(0deg) translateZ(0vh)';

    document.getElementById("exceptBtn").style.cursor = 'alias';

    // requestAnimationFrame(moveImage);
    // requestAnimationFrame(moveImage2);

    infoClicked = true; 

  } else {


    let mouseOverContainer = document.body;
    let videoPlayer3D = document.getElementById("videoPlayer");

    function transforms(x, y, el) {
      
      return "perspective(0)"
       + "scale(1)"
       + "rotateX(0deg)"
       + "rotateY(0deg)";
    };

    function transformElement(el, xyEl) {
      el.style.transform  = transforms.apply(null, xyEl);
    }

    mouseOverContainer.onmousemove = function(e) {
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([videoPlayer3D]);

      window.requestAnimationFrame(function(){
        transformElement(videoPlayer3D, position);
      });
    };


    infoMenu.textContent = "Communal Radio Club";
    document.getElementById("infoContents").style.display = 'none';

    setTimeout(function() {
      document.getElementById("infoContents").style.opacity = '0';
    }, 300);

    document.getElementById("ani-container").style.opacity = '0';
    document.getElementById("ani-container2").style.opacity = '0';
  
    document.getElementById("videoPlayer").style.transition = 'transform 0.3s';
    document.getElementById("videoPlayer").style.transform = 'scale(1)';
    
    document.getElementById("cavas-area").style.transition = 'transform 1s';
    document.getElementById("cavas-area").style.transform = 'translate(-50%, -50%) scale(1)';
    document.getElementById("cavas-area").style.zIndex = '5';
    
    document.getElementById("radioRandomBtn").style.bottom = '0';
    document.getElementById("radioRandomBtn").style.transform = 'translate(0, 60px) rotateY(0deg) translateZ(0vh)';
    document.getElementById("exceptBtn").style.transform = 'translate(-50%, 60px) rotateY(0deg) translateZ(0vh)';

    document.getElementById("exceptBtn").style.cursor = 'help';
    
    infoClicked = false; 
  }
}



// Responsive: Window Resize ------------------------------------------------

window.onresize = function(event) {
  // info();
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px

  } else { // PC: 601px ~
    infoMenu.textContent = "Communal Radio Club";
    document.getElementById("dropdownStation").style.display = 'block';
  }
};
