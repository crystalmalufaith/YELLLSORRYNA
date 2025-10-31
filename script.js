// Auto-play music on page load
const bgMusic = document.getElementById('bgMusic');

// Function to play music (handles browser autoplay restrictions)
function playMusic() {
  bgMusic.play().catch(e => {
    console.log('Autoplay prevented, user interaction required');
  });
}

// Try to play music immediately
playMusic();

// Also try on first user interaction
document.addEventListener('click', () => {
  playMusic();
}, { once: true });

//  Open envelope on click and reveal buttons after
const envelope = document.getElementById('envelope');
const overlay = document.querySelector('.overlay-buttons');
const card = document.querySelector('.card');
const clickInstruction = document.getElementById('clickInstruction');

envelope.addEventListener("click", () => {
  if (!envelope.classList.contains("open")) {
    envelope.classList.add("open");
    card.style.animation = "slipOutInside 1s forwards";

    // Hide the click instruction
    clickInstruction.style.display = "none";

    // 🟨 Show the buttons after the card animation finishes (1 second delay)
    setTimeout(() => {
      overlay.style.display = "flex";
    }, 1000);
  }
});

const messages = [
  "You'll forgive me, right?",
  "Please?",
  "Maybe reconsider?",
  "Just click yes :("
];

// Button logic
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const funnyText = document.getElementById('funnyText');

let noClickCount = 0;

noBtn.addEventListener('click', () => {
  if (noClickCount < messages.length) {
    funnyText.textContent = messages[noClickCount];
    funnyText.style.display = 'block';
  }
  noClickCount++;

  // Grow Yes button each time
  yesBtn.style.transform = `scale(${1 + noClickCount * 0.5})`;

  // Push No button lower
  noBtn.style.transform = `translateY(${noClickCount * 20}px)`;

  // After 4 clicks, Yes button takes over the page
  if (noClickCount >= 4) {
    yesBtn.classList.add('fullscreen');
    noBtn.classList.add('offscreen');
    funnyText.style.display = 'none';
    document.body.style.overflow = 'visible';
    document.body.style.height = '200vh';
  }
});

const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

yesBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
  location.reload();
});
