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
  const getColor = document.querySelectorAll('.color');
  for (let i = 0; i < getColor.length; i += 1) {
    if (i === 0) {
      getColor[i].style.backgroundColor = 'black';
    } else {
      getColor[i].style.backgroundColor = randomColor();
    }
  }
};

getButton.addEventListener('click', pintarPaleta);

// execut functions //
window.onload = () => {
  createHeader();
  createH1();
  createPalette();
  generatePalette();
  pintarPaleta();
};
