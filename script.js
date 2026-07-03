let menu=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navebar.classList.remove('active');
}

var typed = new Typed('.multiple-text', {
      strings: ['Web Developer', 'Photographer', 'Videographer','Content Creator'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });


const chatbot = document.querySelector(".chatbot");
const chatBtn = document.getElementById("chat-btn");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("user-input");
const chatBody = document.getElementById("chat-body");

chatBtn.onclick = () => {

    chatbot.style.display = "flex";

}

closeChat.onclick = () => {

    chatbot.style.display = "none";

}

sendBtn.onclick = sendMessage;

input.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

function sendMessage(){

    let text = input.value.trim();

    if(text==="") return;

    chatBody.innerHTML += `
        <div class="user-message">${text}</div>
    `;

    input.value="";

    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(()=>{

        let reply = getReply(text);

        chatBody.innerHTML += `
            <div class="bot-message">${reply}</div>
        `;

        chatBody.scrollTop = chatBody.scrollHeight;

    },700);

}

function getReply(msg){

    msg = msg.toLowerCase();

    if(msg.includes("hello") || msg.includes("hi"))
        return "Hello 👋 Nice to meet you.";

    if(msg.includes("name"))
        return "My owner is a professional Photographer & Web Developer.";

    if(msg.includes("service"))
        return "Photography, Videography and Web Development.";

    if(msg.includes("contact"))
        return "You can contact me through the Contact section of this website.";

    if(msg.includes("price"))
        return "Please send a message through the contact form for pricing.";

    return "Sorry, I don't understand. Please ask another question.";
}

