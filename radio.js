let previousRow = null;
let currentPlayer = null;

const radioRandomBtnImg = document.getElementById('radioRandomBtnImg');

const radioPlayerElements = document.querySelectorAll('[id^="radioPlayer"]');
const radioPlayers = Array.from(radioPlayerElements);

const buttonElements = document.querySelectorAll('[id^="row"]');
const buttons = Array.from(buttonElements);

var dropdown = document.getElementById("dropdownStation");
var button = document.getElementById("playStop");

const videoList = [
  { src: "resource_gif/bird2_1.gif", fav: "resource_favicon/bird2_1.png" },
  { src: "resource_gif/bird2_2.gif", fav: "resource_favicon/bird2_2.png" },
  { src: "resource_gif/bird2_3.gif", fav: "resource_favicon/bird2_3.png" },
  { src: "resource_gif/bird2_4.gif", fav: "resource_favicon/bird2_4.png" },
  { src: "resource_gif/bird2_5.gif", fav: "resource_favicon/bird2_5.png" },
  { src: "resource_gif/bird2_6.gif", fav: "resource_favicon/bird2_6.png" },
  { src: "resource_gif/bird7_1.gif", fav: "resource_favicon/bird7_1.png" },
  { src: "resource_gif/bird7_2.gif", fav: "resource_favicon/bird7_2.png" },
  { src: "resource_gif/bird7_3.gif", fav: "resource_favicon/bird7_3.png" },
  { src: "resource_gif/bird7_4.gif", fav: "resource_favicon/bird7_4.png" },
  { src: "resource_gif/camel1_1.gif", fav: "resource_favicon/camel1_1.png" },
  { src: "resource_gif/camel1_2.gif", fav: "resource_favicon/camel1_2.png" },
  { src: "resource_gif/camel1_3.gif", fav: "resource_favicon/camel1_3.png" },
  { src: "resource_gif/cat2_1.gif", fav: "resource_favicon/cat2_1.png" },
  { src: "resource_gif/cat2_2.gif", fav: "resource_favicon/cat2_2.png" },
  { src: "resource_gif/cat2_3.gif", fav: "resource_favicon/cat2_3.png" },
  { src: "resource_gif/cat2_4.gif", fav: "resource_favicon/cat2_4.png" },
  { src: "resource_gif/cat2_5.gif", fav: "resource_favicon/cat2_5.png" },
  { src: "resource_gif/crab1_1.gif", fav: "resource_favicon/crab1_1.png" },
  { src: "resource_gif/crab1_2.gif", fav: "resource_favicon/crab1_2.png" },
  { src: "resource_gif/crab1_3.gif", fav: "resource_favicon/crab1_3.png" },
  { src: "resource_gif/crab1_4.gif", fav: "resource_favicon/crab1_4.png" },
  { src: "resource_gif/crab2_1.gif", fav: "resource_favicon/crab2_1.png" },
  { src: "resource_gif/crab2_2.gif", fav: "resource_favicon/crab2_2.png" },
  { src: "resource_gif/crab2_3.gif", fav: "resource_favicon/crab2_3.png" },
  { src: "resource_gif/crab2_4.gif", fav: "resource_favicon/crab2_4.png" },
  { src: "resource_gif/dance1_1.gif", fav: "resource_favicon/dance1_1.png" },
  { src: "resource_gif/dance2_1.gif", fav: "resource_favicon/dance2_1.png" },
  { src: "resource_gif/dance2_2.gif", fav: "resource_favicon/dance2_2.png" },
  { src: "resource_gif/dance2_3.gif", fav: "resource_favicon/dance2_3.png" },
  { src: "resource_gif/dance5_1.gif", fav: "resource_favicon/dance5_1.png" },
  { src: "resource_gif/deer2_1.gif", fav: "resource_favicon/deer2_1.png" },
  { src: "resource_gif/deer2_2.gif", fav: "resource_favicon/deer2_2.png" },
  { src: "resource_gif/deer2_3.gif", fav: "resource_favicon/deer2_3.png" },
  { src: "resource_gif/dinosaur1_1.gif", fav: "resource_favicon/dinosaur1_1.png" },
  { src: "resource_gif/dinosaur1_2.gif", fav: "resource_favicon/dinosaur1_2.png" },
  { src: "resource_gif/dinosaur1_3.gif", fav: "resource_favicon/dinosaur1_3.png" },
  { src: "resource_gif/dinosaur1_4.gif", fav: "resource_favicon/dinosaur1_4.png" },
  { src: "resource_gif/dragon1_1.gif", fav: "resource_favicon/dragon1_1.png" },
  { src: "resource_gif/dragon1_2.gif", fav: "resource_favicon/dragon1_2.png" },
  { src: "resource_gif/dragon1_3.gif", fav: "resource_favicon/dragon1_3.png" },
  { src: "resource_gif/dragon1_4.gif", fav: "resource_favicon/dragon1_4.png" },
  { src: "resource_gif/dragon1_5.gif", fav: "resource_favicon/dragon1_5.png" },
  { src: "resource_gif/dragon1_6.gif", fav: "resource_favicon/dragon1_6.png" },
  { src: "resource_gif/elephant1_1.gif", fav: "resource_favicon/elephant1_1.png" },
  { src: "resource_gif/elephant1_2.gif", fav: "resource_favicon/elephant1_2.png" },
  { src: "resource_gif/elephant1_3.gif", fav: "resource_favicon/elephant1_3.png" },
  { src: "resource_gif/elephant1_4.gif", fav: "resource_favicon/elephant1_4.png" },
  { src: "resource_gif/fish1_1.gif", fav: "resource_favicon/fish1_1.png" },
  { src: "resource_gif/fish1_2.gif", fav: "resource_favicon/fish1_2.png" },
  { src: "resource_gif/fish1_3.gif", fav: "resource_favicon/fish1_3.png" },
  { src: "resource_gif/fish1_4.gif", fav: "resource_favicon/fish1_4.png" },
  { src: "resource_gif/guitar1_1.gif", fav: "resource_favicon/guitar1_1.png" },
  { src: "resource_gif/guitar1_2.gif", fav: "resource_favicon/guitar1_2.png" },
  { src: "resource_gif/guitar1_3.gif", fav: "resource_favicon/guitar1_3.png" },
  { src: "resource_gif/guitar1_4.gif", fav: "resource_favicon/guitar1_4.png" },
  { src: "resource_gif/mouse1_1.gif", fav: "resource_favicon/mouse1_1.png" },
  { src: "resource_gif/mouse1_2.gif", fav: "resource_favicon/mouse1_2.png" },
  { src: "resource_gif/mouse1_3.gif", fav: "resource_favicon/mouse1_3.png" },
  { src: "resource_gif/mouse1_4.gif", fav: "resource_favicon/mouse1_4.png" },
  { src: "resource_gif/walk1_1.gif", fav: "resource_favicon/walk1_1.png" },
  { src: "resource_gif/walk1_2.gif", fav: "resource_favicon/walk1_2.png" },
  { src: "resource_gif/walk1_3.gif", fav: "resource_favicon/walk1_3.png" },
  { src: "resource_gif/walk1_4.gif", fav: "resource_favicon/walk1_4.png" },
  { src: "resource_gif/walk2_1.gif", fav: "resource_favicon/walk2_1.png" },
  { src: "resource_gif/walk2_2.gif", fav: "resource_favicon/walk2_2.png" },
  { src: "resource_gif/walk2_3.gif", fav: "resource_favicon/walk2_3.png" },
  { src: "resource_gif/walk2_4.gif", fav: "resource_favicon/walk2_4.png" },
  { src: "resource_gif/walk2_5.gif", fav: "resource_favicon/walk2_5.png" },
  { src: "resource_gif/walk2_6.gif", fav: "resource_favicon/walk2_6.png" }
];


let videoLast = -1;

var videoPlayer = document.getElementById('videoPlayer');
var videoRandom = getRandomItem(videoLast, videoList.length);
videoLast = videoRandom;
var videoSelected = videoList[videoRandom];
videoPlayer.src = videoSelected.src;

const favicon = document.getElementById("favicon");
favicon.setAttribute("href", videoSelected.fav);


function onAudioLoading(currentRow) {
  buttons.forEach(row => {
    row.style.color = 'white';
    row.classList.remove('blinking');
  });
  currentRow.style.color = 'gray';
  currentRow.classList.add('blinking');
  document.getElementById("radioStationText").style.color = 'gray';
  // document.getElementById("radioStationText").classList.add('blinking');
  button.innerText = "–";
  radioRandomBtnImg.classList.add('radioRandomBtnLoading');
}

function onAudioPlaying(currentRow) {
  buttons.forEach(row => {
    row.style.color = 'white';
    row.classList.remove('blinking');
  });
  // setTimeout(function() {
  //   dropdown.style.display = "none";
  // }, 300);
  if (window.innerWidth <= 600) {
    dropdown.style.display = "none";
  }
  currentRow.style.color = 'yellow';
  currentRow.classList.remove('blinking');
  document.getElementById("radioStationText").style.color = 'yellow';
  document.getElementById("radioStationText").classList.remove('blinking');
  button.innerText = "■";
  radioRandomBtnImg.classList.remove('radioRandomBtnLoading');
  
  var videoPlayer = document.getElementById('videoPlayer');
  var videoRandom = getRandomItem(videoLast, videoList.length);
  videoLast = videoRandom;
  var videoSelected = videoList[videoRandom];
  videoPlayer.src = videoSelected.src;

  const favicon = document.getElementById("favicon");
  favicon.setAttribute("href", videoSelected.fav);
}

function radioPlay(index, text, url) {
  const currentRow = buttons[index];

  if (currentRow && currentRow !== previousRow) {

    radioPlayers.forEach(player => player.pause());
    currentPlayer = radioPlayers[index];
    currentPlayer.src = url;
    currentPlayer.load();
    currentPlayer.play();

    currentPlayer.addEventListener('loadstart', () => onAudioLoading(currentRow));
    currentPlayer.addEventListener('playing', () => onAudioPlaying(currentRow));

    previousRow = currentRow;
  } else {
    if (currentPlayer) {
      if (currentPlayer.paused) {
        currentPlayer.load();
        currentPlayer.play(); // Resume playback if paused
        currentPlayer.addEventListener('loadstart', () => onAudioLoading(currentRow));
        currentPlayer.addEventListener('playing', () => onAudioPlaying(currentRow));
        
      } else {
        currentPlayer.pause(); // Pause playback if playing
        currentRow.style.color = 'white';
        currentRow.classList.remove('blinking');
        radioRandomBtnImg.classList.remove('radioRandomBtnLoading');
      }
    }
  }



  
  document.getElementById("radioStationText").innerText = text;

  // var dropdown = document.getElementById("dropdownStation");
  // dropdown.style.display = "none";


  randomVideo = random(videos);
  randomVideo.size(gridSize, gridSize/2);
  colorMode(HSB, 100);
  randomVideo.volume(0);
  randomVideo.loop();
  randomC1 = random(colors);
  randomC2 = random(colors);
  randomC3 = random(colors);

  redraw();
}




function radioRandomPlay() {
  // Get a random index within the range of available radio stations
  var randomIndex = Math.floor(Math.random() * buttons.length);
  // Get the button corresponding to the random index and trigger its click event
  buttons[randomIndex].click();
}

function randomImage() {
  var videoPlayer = document.getElementById('videoPlayer');
  var videoRandom = getRandomItem(videoLast, videoList.length);
  videoLast = videoRandom;
  var videoSelected = videoList[videoRandom];
  videoPlayer.src = videoSelected.src;
}

// 중복 선택을 방지하기 위한 함수
function getRandomItem(itemLast, listLength) {
  let itemRandom;
  do {
    itemRandom = Math.floor(Math.random() * listLength);
  } while (itemRandom === itemLast);

  return itemRandom;
}



function openDropdown(){
  
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}




function playStop() {

  if (currentPlayer === null) {
    currentPlayer = radioPlayers[0];
    currentPlayer.src = 'https://ice7.securenetsystems.net/KCSM2';
    currentPlayer.load();
    currentPlayer.play();
    button.innerText = "■";
  } else {
    // If currentPlayer is playing (not paused), pause it
    if (!currentPlayer.paused && !currentPlayer.ended) {
      currentPlayer.pause();
      button.innerText = "▶";
    } else {
      // If currentPlayer is paused or ended, resume playback
      currentPlayer.load();
      currentPlayer.play();
      button.innerText = "■";
    }
  }
}




// Responsive ------------------------------------------------

function responsive() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    responsive_Tablet()
  } else { // PC: 601px ~
    responsive_PC()
  }
}

function responsive_Tablet() {
  document.getElementById("playStop").style.display = "inline-block";
  document.getElementById("radioStationText").style.display = "inline-block";
  document.getElementById("dropdownStation").style.display = "none";
}

function responsive_PC() {
  document.getElementById("playStop").style.display = "none";
  document.getElementById("radioStationText").style.display = "none";
  document.getElementById("dropdownStation").style.display = "block";
}


// Responsive: Window Resize ------------------------------------------------

window.onresize = function(event) {
  responsive();
};
