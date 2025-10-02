musics = [ // your music itemes 
    { name  : "Skyfall" ,
      cover : "cover/skyfall.jpg",
      audio : new Audio ("./audio/skyfall.mp3")

    },
    { name  : "Him&I" ,
      cover : "cover/him&i.jpg",
      audio : new Audio ("./audio/him&I.mp3")

    },
    { name  : "Broken Angel" ,
      cover : "cover/brokenAngel.webp",
      audio : new Audio ("./audio/broken_angel.mp3")

    },
    { name  : "Set Fire To The Rain " ,
      cover : "cover/setfire.jpg",
      audio : new Audio ("./audio/setfire.mp3")

    }

]
// Accesses
musicName = document.querySelector("#music-name");
range =  document.querySelector("#music-time");
musicCover = document.querySelector("#music-cover");
preBtn = document.querySelector("#pre-btn");
nextBtn = document.querySelector("#next-btn");
playBtn = document.querySelector("#play-btn");

currentMusic = 0;
let audio = musics[currentMusic].audio

musicCover.src = musics[currentMusic].cover

musicName.innerText = musics[currentMusic].name

audio.addEventListener("canplay",()=>{
  range.max = audio.duration

})

audio.addEventListener("timeupdate",()=>{
  range.value = audio.currentTime

} )

range.addEventListener("input", ()=>{
  audio.currentTime = range.value

})

playBtn.addEventListener("click",()=>{
  if(audio.paused){
    audio.play()
    musicCover.style.animationPlayState = "running"
    playBtn.classList.replace("fa-play", "fa-pause")



  }else{
    audio.pause()
    musicCover.style.animationPlayState = "paused"
    playBtn.classList.replace("fa-pause","fa-play")
  }
})

nextBtn.addEventListener("click", ()=>{
  changeMusic("next")

})

preBtn.addEventListener("click", ()=>{
  changeMusic("pre")

})

function changeMusic(state){

  audio.pause()
  audio.currentTime = 0
  musicCover.style.animationPlayState = "paused"
  playBtn.classList.replace("fa-pause","fa-play")
  if(state=="next"){
    if (currentMusic == musics.length-1)
        currentMusic  = 0
    else currentMusic+=1


  }else{
    if(currentMusic == 0) 
        currentMusic  = musics.length-1
    else currentMusic -=1
    

  

  }
  
  
  audio = musics[currentMusic].audio
  musicCover.src = musics[currentMusic].cover
  musicName.innerText = musics[currentMusic].name

  audio.addEventListener("canplay",()=>{
  range.max = audio.duration

})

  audio.addEventListener("timeupdate",()=>{
  range.value = audio.currentTime

} )

  audio.play()
  musicCover.style.animationPlayState = "running"
  playBtn.classList.replace("fa-play", "fa-pause")

}


