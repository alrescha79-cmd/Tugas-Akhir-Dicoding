
// hamburger menu
const menu = document.querySelector('.menu input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', () => {
    nav.classList.toggle('popup');
    console.log('clicked');
} );

// quotes 
const quoteText = document.querySelector('.quote1');
quoteBtn = document.querySelector('.buttons  button');
authorName = document.querySelector('.name');
speechBtn = document.querySelector('.speech');
copyBtn = document.querySelector('.copy');
synth = speechSynthesis;

// random quotes from open api
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
}

// tombol suara
speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

// tombol copy
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

// tombol quote baru
quoteBtn.addEventListener("click", randomQuote);
