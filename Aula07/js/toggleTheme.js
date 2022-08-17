export const toggleTheme = () => {
    const body = document.body;
    const h1 = document.querySelector('h1');
    const item = document.querySelectorAll('.item');
    const itemText = document.querySelectorAll('.item h2, p');
    const toggleText = document.querySelector('.toggle p');
    const toggleInitialText = 'Dark Mode';

    body.classList.toggle('body-dark-mode');

    h1.classList.toggle('h1-dark-mode');

    item.forEach(e => e.classList.toggle('item-dark-mode'));

    itemText.forEach(e => e.classList.toggle('itemText-dark-mode'));

    toggleText.textContent.toLowerCase().includes(toggleInitialText.toLowerCase()) ? toggleText.textContent = 'Light Mode' : toggleText.textContent = toggleInitialText;
};