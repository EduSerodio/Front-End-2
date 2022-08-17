import { felines } from '../data/felines.js';

export default felines.forEach(e => {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    container.appendChild(card);
    card.classList.add('item');
    card.innerHTML = `
    <img src="${e.imageURL}" />
    <h2>${e.title}</h2>
    <p>${e.desc}</p>
    <div class="newImg">
    <input type="text" id="url-new-img" placeholder="Digite a URL da nova imagem">
    <button>Alterar Imagem</button>
    </div>
    `;
});