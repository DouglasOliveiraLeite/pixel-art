const getPaleta = document.getElementById('Paleta');

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
  }
};

function createPalette() {
  const createDiv = document.createElement('div');
  createDiv.id = 'color-palette';
  getPaleta.appendChild(createDiv);
}

// execut functions //
window.onload = () => {
  createHeader();
  createH1();
  createPalette();
  generatePalette();
};
