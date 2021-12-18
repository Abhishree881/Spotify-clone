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
const head_1 = document.getElementById("header-1");
const head_2 = document.getElementById("header-2");
const head_3 = document.getElementById("header-3");
const head_4 = document.getElementById("header-4");
const head_5 = document.getElementById("header-5");
const head_6 = document.getElementById("header-6");
const head_7 = document.getElementById("header-7");
const head_8 = document.getElementById("header-8");
const head_9 = document.getElementById("header-9");
const head_10 = document.getElementById("header-10");
const queue = document.getElementById('queue');
const musicContainer = document.getElementById('bottom');
const playBtn = document.getElementById('playsong');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const cover = document.getElementById('playImg');
const playlist = document.getElementById('playlist');
const song_name = document.getElementById("songname");
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const currTime = document.getElementById('currTime');
const durTime = document.getElementById('durTime');
const vol = document.getElementById('volume');
const vol_div = document.getElementById('voldiv');
// Song titles
const songs = ['On My Way','Perfect','The Spectre','Faded','Darkside','Castle on the Hill','Shape of You','Thinking out Loud','Embarcadero','Piano Concerto','Something Just Like This','Struggler'];

//-----------------------------------------------------------
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
                            <img src="images/play.png" class="topi002">
                        </div>`
    row.appendChild(newDiv);
    count++;
    if (count<2)
    {
        createTopNew(row);
    }
}
//-----------------------------------------------------------------
function createNew(row)
{
    const newDiv = document.createElement('div');
    newDiv.classList.add('container')
    newDiv.innerHTML = `<div class="image">
                        <span class="img1">
                            <img src="https://rfmsomnii.com/wp-content/uploads/2020/02/Optimized-AW_AVIATION_11-CLEAN.jpg" class="i001">
                        </span>
                        <span class="img2">
                            <img src="images/play.png" class="i002" >
                        </span>
                        </div>
                        <div class="artist">
                            Alan Walker
                        </div>`
    row.appendChild(newDiv);
    count++;
    if (count<4)
    {
        createNew(row);
    }
}
// --------------------------------------------------
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
//------------------------------------------------------

function PlaylistNew()
{   
    for(let i=0;i<songs.length;i++)
    {
        const newDiv = document.createElement('div');
        newDiv.classList.add('songItem')
        newDiv.innerHTML = `<span class="plyimg1">
                                <img src="images/Faded.jpg" class="plyimg">
                            </span>
                            <span class="playlistsong">Struggler</span>
                            <span class="plyimg2">
                                <img src="images/play.png" class="plybtn" >
                            </span>`
        queue.appendChild(newDiv);
    }
}

PlaylistNew();

playlist.addEventListener('click',function(){
    queue.style = "display : flex; flex-direction: column;";
    row_3.style = "display : none;"
    row_4.style = "display : none;"
    row_5.style = "display : none;"
    row_6.style = "display : none;"
    row_7.style = "display : none;"
    row_8.style = "display : none;"
    row_9.style = "display : none;"
    row_10.style = "display : none;"
    // head_3.style = "display : none;"
    head_4.style = "display : none;"
    head_5.style = "display : none;"
    head_6.style = "display : none;"
    head_7.style = "display : none;"
    head_8.style = "display : none;"
    head_9.style = "display : none;"
    head_10.style = "display : none;"
});

//----------------------------------------------------------------------------------
// Song Ids 
const Id1 = [];
var k=0;
for(let i=1;i<=10;i++)
{
    for(let j=1;j<=4;j++)
    {
        Id1[k]=`imgbtn${i}${j}`;
        k++;
    }
}

// Buttons
const btns = [];
var k=0;
for(let i=1;i<=10;i++)
{
    for(let j=1;j<=4;j++)
    {
        btns[k]=`btn${i}${j}`;
        k++;
    }
}

// playlsitsong Ids
const Id2 = [];
for(let i=0;i<songs.length;i++)
{
    Id2[i]=`playlistbtn${i}`;
}

// playlist bttns
const listbtns = [];
for(let i=0;i<songs.length;i++)
{
    listbtns[i]=`listbtn${i}`;
}

//----------------------------------------------------------------------
// Changing the tiles
for(let i=0;i<4;i++)
{
    row_1.childNodes[i].setAttribute("id",Id1[i]);
    row_1.children[i].children[0].children[0].children[0].setAttribute("src",`images/${songs[i]}.jpg`);
    row_1.children[i].children[1].innerHTML = songs[i];
    //-----------------------------------------------------------------
    row_2.childNodes[i].setAttribute("id",Id1[i+4]);
    row_2.children[i].children[0].children[0].children[0].setAttribute("src",`images/${songs[i+4]}.jpg`);
    row_2.children[i].children[1].innerHTML = songs[i+4];
    //-----------------------------------------------------------------
    row_3.childNodes[i].setAttribute("id",Id1[i+8]);
    row_3.children[i].children[0].children[0].children[0].setAttribute("src",`images/${songs[i+8]}.jpg`);
    row_3.children[i].children[1].innerHTML = songs[i+8];
    //-----------------------------------------------------------------
    row_4.childNodes[i].setAttribute("id",Id1[i+12]);
    row_4.children[i].children[0].children[0].children[0].setAttribute("src",`images/${songs[i]}.jpg`);
    row_4.children[i].children[1].innerHTML = songs[i];
    //-----------------------------------------------------------------
    row_5.childNodes[i].setAttribute("id",Id1[i+16]);
    row_5.children[i].children[0].children[0].children[0].setAttribute("src",`images/${songs[i+4]}.jpg`);
    row_5.children[i].children[1].innerHTML = songs[i+4];
    //-----------------------------------------------------------------
    row_6.childNodes[i].setAttribute("id",Id1[i+20]);
    row_6.children[i].children[0].children[0].children[0].setAttribute("src",`images/${songs[i+8]}.jpg`);
    row_6.children[i].children[1].innerHTML = songs[i+8];
    //-----------------------------------------------------------------
    row_7.childNodes[i].setAttribute("id",Id1[i+24]);
    row_7.children[i].children[0].children[0].children[0].setAttribute("src",`images/${songs[i]}.jpg`);
    row_7.children[i].children[1].innerHTML = songs[i];
    //-----------------------------------------------------------------
    row_8.childNodes[i].setAttribute("id",Id1[i+28]);
    row_8.children[i].children[0].children[0].children[0].setAttribute("src",`images/${songs[i+4]}.jpg`);
    row_8.children[i].children[1].innerHTML = songs[i+4];
    //-----------------------------------------------------------------
    row_9.childNodes[i].setAttribute("id",Id1[i+32]);
    row_9.children[i].children[0].children[0].children[0].setAttribute("src",`images/${songs[i+8]}.jpg`);
    row_9.children[i].children[1].innerHTML = songs[i+8];
    //-----------------------------------------------------------------
    row_10.childNodes[i].setAttribute("id",Id1[i+36]);
    row_10.children[i].children[0].children[0].children[0].setAttribute("src",`images/${songs[i]}.jpg`);
    row_10.children[i].children[1].innerHTML = songs[i];
}
//--------------------------------------------------------------
// changing the queue
for(let i=0;i<songs.length;i++)
{
    queue.childNodes[i].setAttribute("id",Id2[i]);
    queue.childNodes[i].children[0].children[0].setAttribute("src",`/images/${songs[i]}.jpg`);
    queue.childNodes[i].children[1].innerHTML = songs[i];
}

//----------------------------------------------------------------

cover.style = "opacity: 0;";
song_name.style = "opacity: 0;";
vol_div.style = "opacity: 0;";

//----------------------------------------------------------------
for(let i = 0;i<songs.length;i++)
{
    listbtns[i] = document.getElementById(Id2[i]);
    listbtns[i].addEventListener('click',() => {
        audio.src = `music/${songs[i]}.mp3`;
        cover.src = `images/${songs[i]}.jpg`;
        song_name.innerHTML = songs[i];
        playSong();
    })
}

//----------------------------------------------------------------

for(let i = 0;i<40;i++)
{
    btns[i] = document.getElementById(Id1[i]);
    btns[i].addEventListener('click',() => {
        audio.src = `music/${songs[i%12]}.mp3`;
        cover.src = `images/${songs[i%12]}.jpg`;
        song_name.innerHTML = songs[i%12];
        playSong();
    })
}

loadSong(0);

function loadSong(song) {
    audio.src = `music/${songs[song]}.mp3`;
    cover.src = `images/${songs[song]}.jpg`;
    song_name.innerHTML = songs[song];
}

function playSong(song) {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    cover.style = "opacity: 1;";
    song_name.style = "opacity: 1;";
    vol_div.style = "opacity: 1;";

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function prevSong() {
    var src = audio.getAttribute('src');
    var a=0;

    for(let i=0;i<songs.length;i++)
    {
        if(src==`music/${songs[i]}.mp3`)
        {
            a=i;
        }
    }

    a--;

    if (a < 0) {
            a = songs.length - 1;
    }

    loadSong(a);
  
    playSong();
}

function nextSong() {
    var src = audio.getAttribute('src');
    var a=0;

    for(let i=0;i<songs.length;i++)
    {
        if(src==`music/${songs[i]}.mp3`)
        {
            a=i;
        }
    }

    a++;

    if (a > songs.length - 1) {
             a = 0;
    }

    loadSong(a);

    playSong();
}

//------------------------------------------------------------------------
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

//set time counter
function DurTime (e) {
	  const {duration,currentTime} = e.srcElement;
	  var sec;
	  var sec_d;

	  // define minutes currentTime
	  let min = (currentTime==null)? 0:
	  Math.floor(currentTime/60);
	  min = min <10 ? '0'+min:min;

	  // define seconds currentTime
	  function get_sec (x) {
		    if(Math.floor(x) >= 60){
			
			  for (var i = 1; i<=60; i++){
				    if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					      sec = Math.floor(x) - (60*i);
					      sec = sec <10 ? '0'+sec:sec;
				    }
			  }
		    }else{
		 	      sec = Math.floor(x);
		 	      sec = sec <10 ? '0'+sec:sec;
		    }
	  } 

	  get_sec (currentTime,sec);

	  // change currentTime DOM
	  currTime.innerHTML = min +':'+ sec;

	  // define minutes duration
	  let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	  min_d = min_d <10 ? '0'+min_d:min_d;


	  function get_sec_d (x) {
		    if(Math.floor(x) >= 60){
			
			  for (var i = 1; i<=60; i++){
				    if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					      sec_d = Math.floor(x) - (60*i);
					      sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				    }
			  }
		  }else{
		 	    sec_d = (isNaN(duration) === true)? '0':
		 	    Math.floor(x);
		 	    sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		  }
	  } 

	  // define seconds duration
	
	  get_sec_d (duration);

	  // change duration DOM
	  durTime.innerHTML = min_d +':'+ sec_d;
		
};
//----------------------------------------------------------------------------
// Play button controls
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
});

//  Click on prev button 
prevBtn.addEventListener('click', prevSong);

// Click on next button
nextBtn.addEventListener('click', nextSong);

// Update timeline
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);

vol.addEventListener('change',function(e){
  audio.volume = e.currentTarget.value/100;
});

