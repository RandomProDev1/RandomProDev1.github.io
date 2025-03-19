
const darkModeBtn=document.getElementById("darkModeBtn");
const wholeCard=document.querySelector(".whole_card");

if(localStorage.getItem("darkMode")=="enabled"){
    wholeCard.classList.add("dark-mode");
    darkModeBtn.textContent="☀️ Light Mode";
   
}

darkModeBtn.addEventListener("click",()=>{
    wholeCard.classList.toggle("dark-mode");

if(wholeCard.classList.contains("dark-mode")){
    localStorage.setItem("darkMode","enabled");
    darkModeBtn.textContent="☀️ Light Mode"
    darkModeBtn.style.backgroundColor="white";
    darkModeBtn.style.color="black";
}else{
    localStorage.setItem("darkMode","disabled");
    darkModeBtn.textContent="🌙 Dark Mode";
    darkModeBtn.style.backgroundColor="black";
    darkModeBtn.style.color="white";

}});


const profilePic = document.querySelector(".profile-pic img");

profilePic.addEventListener("mouseenter", () => {
    profilePic.style.transform = "rotate(5deg) scale(1.1)";
    profilePic.style.transition = "0.3s ease-in-out";
});

profilePic.addEventListener("mouseleave", () => {
    profilePic.style.transform = "rotate(0deg) scale(1)";
});

function animateNumber(element,start,end,duration){
    let range=end-start;
    let current=start;
    let increment=end>start?1:-1;
    let stepTime=Math.abs(Math.floor(duration/range));

    let timer=setInterval(()=>{
        current+=increment;
        element.textContent=current+"k";
        if (current==end){
            clearInterval(timer);
        }
    },stepTime)
}

const likes = document.querySelector(".analytics .data:nth-child(1) .number");
const comments = document.querySelector(".analytics .data:nth-child(2) .number");
const shares = document.querySelector(".analytics .data:nth-child(3) .number");

window.addEventListener("load", () => {
    animateNumber(likes, 0, 60, 1000);
    animateNumber(comments, 0, 40, 1200);
    animateNumber(shares, 0, 16, 800);
});

// Fix for buttons and profile pic animation getting stuck on mobile
function resetAnimation(element) {
    element.style.transform = "none";
}

// Profile Picture Click Animation Fix
profilePic.addEventListener("click", () => {
    profilePic.style.transform = "rotate(5deg) scale(1.1)";
    setTimeout(() => resetAnimation(profilePic), 200); // Reset after 200ms
});

// Function to reset animation
function resetAnimation(element) {
    element.style.transform = "none";
}

// Fix for profile picture getting stuck
profilePic.addEventListener("click", () => {
    profilePic.style.transform = "rotate(5deg) scale(1.1)";
    setTimeout(() => resetAnimation(profilePic), 200);
});

// Select all buttons with class "subscribe"
const subscribeButtons = document.querySelectorAll(".subscribe");

// Apply animation fix to each button
subscribeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.9)";
        setTimeout(() => resetAnimation(button), 200);
    });
});

