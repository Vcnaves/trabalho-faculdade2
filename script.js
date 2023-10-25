// Função para rolar até o elemento desejado
function scrollToElement(elementSelector) {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Função para atualizar a largura da linha com base na posição do usuário
function updateLinePosition() {
  const title = document.querySelector('.titulo-fixado');
  const titleLine = document.querySelector('#linha'); // Corrigi o seletor para a linha
  const nextSection = document.querySelector('section'); // Selecione a próxima seção (ajuste o seletor conforme necessário)

  if (title && titleLine && nextSection) {
    const titleBottom = title.getBoundingClientRect().bottom;
    const nextSectionTop = nextSection.getBoundingClientRect().top;

    const lineWidth = titleBottom >= nextSectionTop ? 0 : nextSectionTop - titleBottom;

    titleLine.style.width = `${lineWidth}px`;
  }
}

// Adicione um evento de rolagem para chamar a função de atualização
window.addEventListener('scroll', updateLinePosition);

// Chame a função de atualização quando a página for carregada
window.addEventListener('load', updateLinePosition);

// Event listeners para rolar até as seções
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');

link1.addEventListener('click', () => {
  scrollToElement('.titulo-fixado');
});

link2.addEventListener('click', () => {
  scrollToElement('.titulo-fixado2'); // Atualizado o seletor da classe
});

link3.addEventListener('click', () => {
  scrollToElement('.titulo-fixado3'); // Atualizado o seletor da classe
});

link4.addEventListener('click', () => {
  scrollToElement('.titulo-fixado4'); // Atualizado o seletor da classe
});

// Animação de título
const title = document.querySelector('.animated-title');
title.addEventListener('mouseover', () => {
  title.style.transform = 'scale(1.1)';
});
title.addEventListener('mouseout', () => {
  title.style.transform = 'scale(1)';
});

// Animação da lista de títulos
const titleList = document.querySelector('.animated-list');
titleList.addEventListener('mouseover', () => {
  titleList.style.transform = 'translateY(-5px)';
  titleList.style.opacity = 0.7;
});
titleList.addEventListener('mouseout', () => {
  titleList.style.transform = 'translateY(0)';
  titleList.style.opacity = 1;
});

// Animação do coração
const heart = document.querySelector('#heart');
heart.addEventListener('mouseover', () => {
  heart.style.color = '#ff3366';
  heart.style.transform = 'scale(1.2)';
});
heart.addEventListener('mouseout', () => {
  heart.style.color = '#ff3355';
  heart.style.transform = 'scale(1)';
});

// Animação da lista de nomes
const nameList = document.querySelector('.creative-team');
nameList.addEventListener('mouseover', () => {
  nameList.style.transform = 'translateY(-5px)';
  nameList.style.opacity = 0.7;
});
nameList.addEventListener('mouseout', () => {
  nameList.style.transform = 'translateY(0)';
  nameList.style.opacity = 1;
});

