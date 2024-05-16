const videoWalkingList = [
  "resource_info_gif/bird7_1.gif",
  "resource_info_gif/camel1_1.gif",
  "resource_info_gif/crab1_2.gif",
  "resource_info_gif/elephant1_4.gif",
  "resource_info_gif/mouse1_3.gif",
  "resource_info_gif/walk1_4.gif",
  "resource_info_gif/walk2_6.gif"
];

let videoWalkingLast = -1;

var videoWalkingPlayer = document.getElementById('movingImage');
let videoWalkingRandom = getRandomItem(videoWalkingLast, videoWalkingList.length);
videoWalkingLast = videoWalkingRandom;
let videoWalkingSelected = videoWalkingList[videoWalkingRandom];
videoWalkingPlayer.src = videoWalkingSelected;

// 이미지 초기 위치 설정
let position = -2000; // 시작 위치

// 이미지 이동 관련 변수 및 함수
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
            position = -videoWalkingPlayer.width;
            videoWalkingPlayer.style.left = position + 'px';
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
  "resource_info_gif/dinosaur1_1.gif",
  "resource_info_gif/dinosaur1_1.gif"
];

let videoWalkingLast2 = -1;

var videoWalkingPlayer2 = document.getElementById('movingImage2');
let videoWalkingRandom2 = getRandomItem(videoWalkingLast2, videoWalkingList2.length);
videoWalkingLast2 = videoWalkingRandom2;
let videoWalkingSelected2 = videoWalkingList2[videoWalkingRandom2];
videoWalkingPlayer2.src = videoWalkingSelected2;

// 이미지 초기 위치 설정
let position2 = window.innerWidth; 

// 이미지 이동 관련 변수 및 함수
let isMoving2 = true; // 움직임 상태를 나타내는 변수
let startTime2 = 0; // 시작 시간 저장

function moveImage2(timestamp2) {
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
            position2 = -videoWalkingPlayer2.width;
            videoWalkingPlayer2.style.right = position2 + 'px';
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
        requestAnimationFrame(moveImage2);
    }
}

// 최초 애니메이션 호출
startTime2 = performance.now();
moveImage2(startTime2);




// =====================================================
let infoClicked = false;

function info() {
  if (!infoClicked) {
    document.getElementById("infoContents").style.display = 'block';
  
    setTimeout(function() {
      document.getElementById("infoContents").style.opacity = '1';
    }, 300);

    document.getElementById("ani-container").style.display = 'block';
    document.getElementById("ani-container2").style.display = 'block';
    document.getElementById("videoPlayer").style.transform = 'translate(-50%, -50%) rotateY(20deg) translateZ(-50vh)';
    document.getElementById("radioRandomBtn").style.transform = 'translate(-50%, 60px) rotateY(20deg) translateZ(-50vh)';
    document.getElementById("exceptBtn").style.transform = 'translate(-50%, 60px) rotateY(20deg) translateZ(-50vh)';
    document.getElementById("exceptBtn").style.cursor = 'alias';
  

    // requestAnimationFrame(moveImage);
    // requestAnimationFrame(moveImage2);

    infoClicked = true; 

  } else {
    document.getElementById("infoContents").style.display = 'none';

    setTimeout(function() {
      document.getElementById("infoContents").style.opacity = '0';
    }, 300);

    document.getElementById("ani-container").style.display = 'none';
    document.getElementById("ani-container2").style.display = 'none';
    document.getElementById("videoPlayer").style.transform = 'translate(-50%, -50%) rotateY(0deg) translateZ(0vh)';
    document.getElementById("radioRandomBtn").style.transform = 'translate(-50%, 60px) rotateY(0deg) translateZ(0vh)';
    document.getElementById("exceptBtn").style.transform = 'translate(-50%, 60px) rotateY(0deg) translateZ(0vh)';
    document.getElementById("exceptBtn").style.cursor = 'help';

    infoClicked = false; 
  }
}
