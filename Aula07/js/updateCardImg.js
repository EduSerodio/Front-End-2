
const item = document.querySelectorAll('.item');

export default item.forEach(e => {
    const btn = e.children[3].children[1];
    const img = e.children[0];
    btn.addEventListener('click', () => {
        const newImg = e.children[3].children[0].value;
        img.setAttribute('src', newImg)
    });
});