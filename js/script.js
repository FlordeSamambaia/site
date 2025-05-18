
const sections = [
  {
    title: 'Sobre o grupo',
    image: '',
    fileName:'sobre.html'
  },
  {
    title: 'Integrantes',
    image: '',
    fileName:'integrantes.html'
  },
  {
    title: 'Trajetória',
    image: '',
    fileName: 'trajetoria.html'
  },
  // {
  //   title: 'Show',
  //   image: '',
  //   fileName: 'show.html'
  // },
  {
    title: 'Clipping',
    image: '',
    fileName: 'clipping.html'
  },
  // {
  //   title: 'Galeria',
  //   image: '',
  //   fileName: 'galeria.html'
  // },
  {
    title: 'Entrevista',
    image: '',
    fileName: 'entrevista.html'
  },
  {
    title: 'Contato',
    image: '',
    fileName: 'contato.html'
  }
];

// Renderiza as sessões do site
async function renderSections() {
  for (const section of sections) {
    try {
      const response = await fetch('./content/' + section.fileName);
      const html = await response.text();

      const nav = document.getElementById('nav');
      const a = document.createElement('a');
      a.href = '#' + section.fileName;
      a.innerHTML = section.title;
      nav.append(a);

      const contentDiv = document.getElementById('content');
      const sectionHTML = document.createElement('section');
      sectionHTML.id = section.fileName;
      sectionHTML.classList = 'section';
      sectionHTML.innerHTML = html;
      contentDiv.append(sectionHTML);
    } catch (err) {
      console.error(`Erro ao carregar ${section.fileName}:`, err);
    }
  }
}

// Executa a função assíncrona
renderSections();

// Abre a imagem da galeria
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lightbox.style.display = 'flex';
}
