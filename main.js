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
                            <img src="play.png" class="i002">
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

const musicContainer = document.getElementById('bottom');
const playBtn = document.getElementById('playsong');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');

// Song titles
const songs = ['Faded','On My Way','Darkside','The Spectre'];

// Keep track of song
let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  audio.src = `music/${song}.mp3`;
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

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });
