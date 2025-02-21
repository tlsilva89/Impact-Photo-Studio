// Seleciona todas as imagens da galeria
const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Função para abrir o modal e exibir a imagem clicada
function openModal(index) {
  modal.style.display = 'block';
  modalImg.src = images[index].src;
  currentIndex = index;
}

// Função para fechar o modal
function closeModal() {
  modal.style.display = 'none';
}

// Função para navegar para a imagem anterior
function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}

// Função para navegar para a próxima imagem
function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
}

// Adiciona eventos de clique às imagens da galeria
images.forEach((img, index) => {
  img.addEventListener('click', () => openModal(index));
});

// Adiciona eventos de clique aos botões de navegação
closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Fecha o modal se o usuário clicar fora da imagem
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Navegação com teclado
document.addEventListener('keydown', (event) => {
  if (modal.style.display === 'block') {
    if (event.key === 'ArrowLeft') {
      showPrev();
    } else if (event.key === 'ArrowRight') {
      showNext();
    } else if (event.key === 'Escape') {
      closeModal();
    }
  }
});