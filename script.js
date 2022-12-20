const getPaleta = document.getElementById('Paleta');
const getButton = document.getElementById('button-random-color');

const createHeader = () => {
  const createHeaders = document.createElement('header');
  getPaleta.appendChild(createHeaders);
  createHeaders.id = 'header';
};

const createH1 = () => {
  const criaH1 = document.createElement('h1');
  criaH1.id = 'title';
  criaH1.innerHTML = 'Paleta de Cores';
  const getHeader = document.querySelector('header');
  getHeader.appendChild(criaH1);
};

const generatePalette = () => {
  for (let i = 0; i < 4; i += 1) {
    const criaPalette = document.getElementById('color-palette');
    const criaDiv = document.createElement('div');
    criaPalette.appendChild(criaDiv);
    criaDiv.className = 'color';
    criaDiv.style.border = 'solid 1px black';
    criaDiv.style.width = '30px';
    criaDiv.style.height = '30px';
  }
};

function createPalette() {
  const createDiv = document.createElement('div');
  createDiv.id = 'color-palette';
  getPaleta.appendChild(createDiv);
  createDiv.style.display = 'flex';
  createDiv.style.justifyContent = 'center';
  createDiv.style.gap = '18px';
}

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

const pintarPaleta = () => {
  const arrayColor = ['black'];
  const getColor = document.querySelectorAll('.color');
  for (let i = 1; i < getColor.length; i += 1) {
    const generateColor = randomColor();
    getColor[i].style.backgroundColor = generateColor;
    arrayColor.push(generateColor);
  }
  getColor[0].style.backgroundColor = 'black';
  localStorage.setItem('colorPalette', JSON.stringify(arrayColor));
};

getButton.addEventListener('click', pintarPaleta);

function pegarCorPaleta() {
  const domCores = document.querySelectorAll('.color');
  const coresSalvas = localStorage.getItem('colorPalette');
  const arrayCores = JSON.parse(coresSalvas);
  for (let i = 0; i < domCores.length; i += 1) {
    domCores[i].style.backgroundColor = arrayCores[i];
  }
}
function generatePixel() {
  const quadroPixel = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const criandoLinha = document.createElement('div');
    criandoLinha.className = 'line';
    for (let x = 0; x < 5; x += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      criandoLinha.appendChild(pixel);
    }
    quadroPixel.appendChild(criandoLinha);
  }
}

function inicialColorSelected() {
  document.querySelectorAll('.color')[0].classList.add('selected');
}

function selecionarCor(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}

function pegarCor() {
  const classColor = document.querySelectorAll('.color');
  for (let index = 0; index < classColor.length; index += 1) {
    classColor[index].addEventListener('click', selecionarCor);
  }
}

function carregarPag() {
  if (localStorage.getItem('colorPalette') === null) {
    createHeader();
    createH1();
    createPalette();
    generatePalette();
    pintarPaleta();
    generatePixel();
    pegarCor();
  } else {
    createHeader();
    createH1();
    createPalette();
    generatePalette();
    pegarCorPaleta();
    generatePixel();
    pegarCor();
  }
  inicialColorSelected();
}
// execut functions //
window.onload = () => carregarPag();
