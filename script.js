// Floating hearts
const heartsContainer = document.getElementById('hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerText = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (15 + Math.random() * 30) + 'px';
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Generate hearts continuously
setInterval(createHeart, 500);

// Optional: click effect confetti hearts
document.body.addEventListener('click', (e) => {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerText = '💗';
        heart.style.left = e.clientX + Math.random() * 50 - 25 + 'px';
        heart.style.top = e.clientY + Math.random() * 50 - 25 + 'px';
        heart.style.fontSize = (15 + Math.random() * 20) + 'px';
        heart.style.animationDuration = (2 + Math.random() * 2) + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
});
