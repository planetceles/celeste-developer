// VIEW COUNTER

let views = localStorage.getItem("views");

if (!views) {
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
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }

});


// SHARE BUTTON

const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {

  if(navigator.share){

    try{

      await navigator.share({
        title: "Mande Digital Card",
        text: "Connect with me here!",
        url: window.location.href
      });

    } catch(error){
      console.log(error);
    }

  } else {

    alert("Sharing not supported on this device.");

  }

});
