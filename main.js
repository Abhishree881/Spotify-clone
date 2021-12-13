var count=0;
const top_row_1 = document.getElementById("toprow-1");
const top_row_2 = document.getElementById("toprow-2");
const row_1 = document.getElementById("row-1");
const row_2 = document.getElementById("row-2");
const row_3 = document.getElementById("row-3");
const row_4 = document.getElementById("row-4");
const row_5 = document.getElementById("row-5");
const row_6 = document.getElementById("row-6");
const row_7 = document.getElementById("row-7");
const row_8 = document.getElementById("row-8");
const row_9 = document.getElementById("row-9");
const row_10 = document.getElementById("row-10");

function createTopNew(row)
{
    const newDiv = document.createElement('div');
    newDiv.classList.add('topcontainer')
    newDiv.innerHTML = `<div class="topimg1">
                            <img src="images/Faded.jpg" class="topi001">
                        </div>
                        <div class="top artist">
                            Alan Walker
                        </div>
                        <div class="topimg2">
                            <img src="play.png" class="topi002">
                        </div>`
    row.appendChild(newDiv);
    count++;
    if (count<2)
    {
        createTopNew(row);
    }
}
function createNew(row)
{
    const newDiv = document.createElement('div');
    newDiv.classList.add('container')
    newDiv.innerHTML = `<div class="image">
                        <span class="img1">
                            <img src="https://rfmsomnii.com/wp-content/uploads/2020/02/Optimized-AW_AVIATION_11-CLEAN.jpg" class="i001">
                        </span>
                        <span class="img2">
                            <img src="play.png" class="i002" >
                        </span>
                    </div>
                    <div class="artist">
                        Alan Walker
                    </div>
                    <div class="other">
                        tag 1,tag2,tag3
                    </div>`
    row.appendChild(newDiv);
    count++;
    if (count<4)
    {
        createNew(row);
    }
}
createTopNew(top_row_1);
count=0;
createTopNew(top_row_2);
count=0;
createNew(row_1);
count=0;
createNew(row_2);
count=0;
createNew(row_3);
count=0;
createNew(row_4);
count=0;
createNew(row_5);
count=0;
createNew(row_6);
count=0;
createNew(row_7);
count=0;
createNew(row_8);
count=0;
createNew(row_9);
count=0;
createNew(row_10);

const Ids = ['imgbtn11','imgbtn12','imgbtn13','imgbtn14'];
for(let i=0;i<4;i++)
{
  row_1.childNodes[i].setAttribute("id",Ids[i]);
}



const musicContainer = document.getElementById('bottom');
const playBtn = document.getElementById('playsong');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const cover = document.getElementById('playImg');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');
const btns = ["btn11","btn12","btn13","btn14"]
for(let i = 0;i<4;i++)
{
  btns[i] = document.getElementById(Ids[i]);
  btns[i].addEventListener('click',() => {
    playSong();
})
}


// Song titles
const songs = ['Faded','On My Way','Darkside','The Spectre'];

// Keep track of song
let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

function prevSong() {
    songIndex--;
  
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }
  
  function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }
  function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
  
  // Set progress bar
  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
  }
  
//   //get duration & currentTime for Time of song
//   function DurTime (e) {
//       const {duration,currentTime} = e.srcElement;
//       var sec;
//       var sec_d;
  
//       // define minutes currentTime
//       let min = (currentTime==null)? 0:
//        Math.floor(currentTime/60);
//        min = min <10 ? '0'+min:min;
  
//       // define seconds currentTime
//       function get_sec (x) {
//           if(Math.floor(x) >= 60){
              
//               for (var i = 1; i<=60; i++){
//                   if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
//                       sec = Math.floor(x) - (60*i);
//                       sec = sec <10 ? '0'+sec:sec;
//                   }
//               }
//           }else{
//                sec = Math.floor(x);
//                sec = sec <10 ? '0'+sec:sec;
//            }
//       } 
  
//       get_sec (currentTime,sec);
  
//       // change currentTime DOM
//       currTime.innerHTML = min +':'+ sec;
  
//       // define minutes duration
//       let min_d = (isNaN(duration) === true)? '0':
//           Math.floor(duration/60);
//        min_d = min_d <10 ? '0'+min_d:min_d;
  
  
//        function get_sec_d (x) {
//           if(Math.floor(x) >= 60){
              
//               for (var i = 1; i<=60; i++){
//                   if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
//                       sec_d = Math.floor(x) - (60*i);
//                       sec_d = sec_d <10 ? '0'+sec_d:sec_d;
//                   }
//               }
//           }else{
//                sec_d = (isNaN(duration) === true)? '0':
//                Math.floor(x);
//                sec_d = sec_d <10 ? '0'+sec_d:sec_d;
//            }
//       } 
  
//       // define seconds duration
      
//       get_sec_d (duration);
  
//       // change duration DOM
//       durTime.innerHTML = min_d +':'+ sec_d;
          
//   };

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });
  
  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);
  audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);