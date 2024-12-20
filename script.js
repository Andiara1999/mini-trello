const board = document.getElementById('board');
const addListButton = document.getElementById('addList');

// Função para criar uma nova lista
function createList() {
  const list = document.createElement('div');
  list.className = 'list';

  const listTitle = document.createElement('h3');
  listTitle.textContent = 'Nova Lista';
  list.appendChild(listTitle);

  const addCardButton = document.createElement('button');
  addCardButton.className = 'add-card';
  addCardButton.textContent = 'Adicionar Cartão';
  list.appendChild(addCardButton);

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';
  list.appendChild(cardContainer);

  // Evento para adicionar um cartão à lista
  addCardButton.addEventListener('click', () => createCard(cardContainer));

  // Tornar a lista arrastável
  cardContainer.addEventListener('dragover', (e) => e.preventDefault());
  cardContainer.addEventListener('drop', (e) => dropCard(e, cardContainer));

  board.appendChild(list);
}

// Função para criar um novo cartão
function createCard(container) {
  const cardText = prompt('Digite o nome do cartão:');
  if (!cardText) return;

  const card = document.createElement('div');
  card.className = 'card';
  card.textContent = cardText;
  card.draggable = true;

  // Eventos para arrastar cartões
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);

  container.appendChild(card);
}

// Arrastar cartões
let draggedCard = null;

function dragStart(e) {
  draggedCard = e.target;
  setTimeout(() => e.target.style.display = 'none', 0);
}

function dragEnd(e) {
  setTimeout(() => (e.target.style.display = 'block'), 0);
  draggedCard = null;
}

// Soltar cartão em outro contêiner
function dropCard(e, container) {
  if (draggedCard) {
    container.appendChild(draggedCard);
  }
}

// Evento para adicionar listas
addListButton.addEventListener('click', createList);
