
const darkModeBtn=document.getElementById("darkModeBtn");
const wholeCard=document.querySelector(".whole_card");

if(localStorage.getItem("darkMode")=="enabled"){
    wholeCard.classList.add("dark-mode");
    darkModeBtn.textContent="☀️ Light Mode";
    darkModeBtn.style.backgroundColor="white";
    darkModeBtn.style.color="black";
   
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



const messageBtn = document.querySelector(".subscribe button:last-of-type"); // "Message" button
const popup = document.getElementById("messagePopup");
const closePopup = document.getElementById("closePopup");
const sendMessage = document.getElementById("sendMessage");
const messageInput = document.getElementById("messageInput");

// Show pop-up when "Message" button is clicked
messageBtn.addEventListener("click", () => {
    popup.style.display = "flex"; // Show the pop-up
});

// Close pop-up when "Close" button is clicked
closePopup.addEventListener("click", () => {
    popup.style.display = "none"; // Hide the pop-up
});

// Send message (For now, just an alert – you can add backend later)
sendMessage.addEventListener("click", () => {
    if (messageInput.value.trim() === "") {
        alert("Please type a message first!");
        return;
    }
    alert(`Message sent: "${messageInput.value}"`);
    messageInput.value = ""; // Clear input field
    popup.style.display = "none"; // Close pop-up
});

// Close pop-up if user clicks outside the box
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

const subscribeBtn = document.querySelector(".subscribe button");

// Check if the user is already subscribed (from local storage)
if (localStorage.getItem("subscribed") === "true") {
    subscribeBtn.textContent = "Unsubscribe";
    subscribeBtn.style.backgroundColor = "red";
}

// When the user clicks the button, toggle subscribe state
subscribeBtn.addEventListener("click", () => {
    if (subscribeBtn.textContent === "Subscribe") {
        subscribeBtn.textContent = "Unsubscribe";
        subscribeBtn.style.backgroundColor = "red";
        localStorage.setItem("subscribed", "true"); // Save state
    } else {
        subscribeBtn.textContent = "Subscribe";
        subscribeBtn.style.backgroundColor = "rgb(4, 69, 247)";
        localStorage.setItem("subscribed", "false"); // Save state
    }
});
