var songIndex=1;
var masterPlay = document.getElementById('masterPlay');
var myProgressBar=document.getElementById('myProgressBar');
var audioElement = new Audio('songs/1.mp3');
var gif=document.getElementById('gif');
var masterSongName=document.getElementById('masterSongName');
var songItems=Array.from(document.getElementsByClassName('songItem'));
songs=[
    {songName:"Embarcadero", filepath:"songs/1.mp3",coverPath:"covers/cover1.png"},
    {songName:"Piano Concerto", filepath:"songs/2.mp3",coverPath:"covers/cover2.jfif"},
    {songName:"Struggler", filepath:"songs/3.mp3",coverPath:"covers/cover3.jpg"},
    {songName:"Something just like this", filepath:"songs/4.mp3",coverPath:"covers/cover4.png"},
    {songName:"Tagger", filepath:"songs/5.mp3",coverPath:"covers/cover5.jpg"},
    {songName:"Embarcadero", filepath:"songs/6.mp3",coverPath:"covers/cover6.png"},
    {songName:"Piano Concerto", filepath:"songs/7.mp3",coverPath:"covers/cover7.jfif"},
    {songName:"Struggler", filepath:"songs/8.mp3",coverPath:"covers/cover8.jpg"},
    {songName:"Something just like this", filepath:"songs/9.mp3",coverPath:"covers/cover9.png"},
    {songName:"Tagger", filepath:"songs/10.mp3",coverPath:"covers/cover10.jpg"},
    {songName:"Embarcadero", filepath:"songs/11.mp3",coverPath:"covers/cover11.png"},
    {songName:"Piano Concerto", filepath:"songs/12.mp3",coverPath:"covers/cover12.jfif"},
    {songName:"Struggler", filepath:"songs/13.mp3",coverPath:"covers/cover13.jpg"},
    {songName:"Something just like this", filepath:"songs/14.mp3",coverPath:"covers/cover14.png"},
    {songName:"Tagger", filepath:"songs/15.mp3",coverPath:"covers/cover15.jpg"},
]
songItems.forEach((element,i) =>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//Play or Pause
// var x = new Audio('1.mp3');
// function playAudio() {
//   x.play();
// }

// function pauseAudio() {
//   x.pause();
// }
// function playAudio() {
    //Event listener by Harry
// masterPlay.addEventListener("click", () => {
//     if ((audioElement.paused) || (audioElement.currentTime <= 0)) {
//         // console.log("Audio func called");
//         audioElement.play();
//     }
// })
masterPlay.addEventListener("click",playPause);
function playPause()
{
    if ((audioElement.paused) || (audioElement.currentTime <= 0)) {
        // console.log("Audio func called");
        audioElement.play();
        masterSongName.innerText=songs[songIndex-1].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
}
audioElement.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
    var progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    console.log(progress);
})
myProgressBar.addEventListener('change',() =>
audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
)
// function makeAllPlays()
// {
//     Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>
//     {
//     element.classList.add("fa-play-circle")
//     })
// }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
element.addEventListener("click",(e) =>
{
console.log(e.target);
// makeAllPlays();
songIndex=parseInt(e.target.id);
console.log(songIndex);
// e.target.classList.remove("fa-play-circle");
// e.target.classList.add("fa-pause-circle");
audioElement.src=`songs/${songIndex}.mp3`;
audioElement.currentTime=0;
audioElement.play();
masterSongName.innerText=songs[songIndex-1].songName;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
gif.style.opacity=1;
})
)

document.getElementById("next").addEventListener("click",() =>{
    if(songIndex==5)
    {
        songIndex=1;
    }
    else
    {
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex-1].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})
document.getElementById("previous").addEventListener("click",() =>{
    if(songIndex==1)
    {
        songIndex=5;
    }
    else
    {
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex-1].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})

// Coding for scrolling
// var list=document.getElementById("list");
// var upArrow=document.getElementById("upArrow");
// var downArrow=document.getElementById("downArrow");
// var x=0;
// upArrow.onclick= function() {
//     x=x-300;
//     list.style.top=x+"px";
// }
// downArrow.onclick= function() {
//     x=x+300;
//     list.style.top=x+"px";
// }
document.getElementsByTagName('nav')[0].style.backgroundColor = "blue";