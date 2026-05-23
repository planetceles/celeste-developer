// VIEW COUNTER

let views = localStorage.getItem("views");

if(!views){
  views = 0;
}

views++;

localStorage.setItem("views", views);

document.getElementById("viewCount").innerText = views;


// THEME TOGGLE

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){

    toggleBtn.innerHTML =
      '<i class="fa-solid fa-sun"></i>';

  } else {

    toggleBtn.innerHTML =
      '<i class="fa-solid fa-moon"></i>';

  }

});


// AUTO LIGHT MODE DETECTION

if(window.matchMedia('(prefers-color-scheme: light)').matches){

  document.body.classList.add("light-mode");

}


// SHARE BUTTON

const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {

  if(navigator.share){

    try{

      await navigator.share({

        title:"Mande Digital Card",
        text:"Connect with me here!",
        url:window.location.href

      });

    } catch(error){

      console.log(error);

    }

  } else {

    alert("Sharing not supported.");

  }

});


// COPY USERNAME

function copyInstagram(){

  navigator.clipboard.writeText("@yourhandle");

  alert("Instagram username copied!");

}


// LIVE CLOCK

function updateClock(){

  const now = new Date();

  document.getElementById("clock")
    .innerText = now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();


// ONLINE / OFFLINE STATUS

const statusText =
  document.getElementById("statusText");

const statusDot =
  document.getElementById("statusDot");

function updateStatus(){

  if(navigator.onLine){

    statusText.innerText = "Online";

    statusDot.style.background = "lime";

  } else {

    statusText.innerText = "Offline";

    statusDot.style.background = "red";

  }

}

window.addEventListener("online", updateStatus);

window.addEventListener("offline", updateStatus);

updateStatus();


// MUSIC PLAYER

const music =
  document.getElementById("bgMusic");

const musicBtn =
  document.getElementById("musicToggle");

let playing = false;

musicBtn.addEventListener("click", () => {

  if(!playing){

    music.play();

    musicBtn.innerText = "Pause Music";

    playing = true;

  } else {

    music.pause();

    musicBtn.innerText = "Play Music";

    playing = false;

  }

});


// CONTACT FORM

const form =
  document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  alert("Message sent successfully!");

  form.reset();

});


// SERVICE WORKER

if("serviceWorker" in navigator){

  navigator.serviceWorker
    .register("sw.js")
    .then(()=>{

      console.log(
        "Service Worker Registered"
      );

    });

}
