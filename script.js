const showImageBtn = document.getElementById('showImageBtn');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeImageBtn = document.getElementById('closeImageBtn');

// Mostrar a imagem em tela cheia
showImageBtn.addEventListener('click', () => {
    fullscreenImage.classList.remove('hidden');
});

// Fechar a imagem
closeImageBtn.addEventListener('click', () => {
    fullscreenImage.classList.add('hidden');
});

// Fechar a imagem ao clicar fora dela
fullscreenImage.addEventListener('click', (event) => {
    if (event.target === fullscreenImage) {
        fullscreenImage.classList.add('hidden');
    }
});


const numberElement = document.getElementById('number');

function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - 100); // Largura da tela
    const y = Math.random() * (window.innerHeight - 50); // Altura da tela
    return { x, y };
}

setInterval(() => {
    const { x, y } = getRandomPosition(); // Posição aleatória
    numberElement.style.transform = `translate(${x}px, ${y}px)`; // Move o número
}, 1000); // Muda a posição a cada segundo
