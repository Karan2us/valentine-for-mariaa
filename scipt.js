let slideIndex = 0;
showSlides();

// Function to show slides
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Button functionality
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const miniGame = document.getElementById('miniGame');
const gameArea = document.getElementById('gameArea');
const backButton = document.getElementById('backButton');

yesButton.addEventListener('click', () => {
    response.textContent = "Yay! You've made me the happiest person, Maria! 🌟";
});

noButton.addEventListener('click', () => {
    // Hide slideshow and show mini-game
    document.querySelector('.slideshow-container').classList.add('hidden');
    miniGame.classList.remove('hidden');
    startMiniGame();
});

backButton.addEventListener('click', () => {
    // Hide mini-game and show slideshow
    miniGame.classList.add('hidden');
    document.querySelector('.slideshow-container').classList.remove('hidden');
});

// Mini-Game Logic
function startMiniGame() {
    let score = 0;

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = ${Math.random() * 90}%;
        heart.style.top = ${Math.random() * 90}%;
        heart.addEventListener('click', () => {
            score++;
            heart.remove();
        });
        gameArea.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000); // Hearts disappear after 3 seconds
    }

    // Create hearts every second
    const heartInterval = setInterval(createHeart, 1000);

    // End game after 10 seconds
    setTimeout(() => {
        clearInterval(heartInterval);
        alert(Game Over! You caught ${score} hearts! ❤️);
        gameArea.innerHTML = ''; // Clear game area
    }, 10000);
}
