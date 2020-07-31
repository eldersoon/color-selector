let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');
let imgBg = document.querySelector('#imgBg');

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexInput.value = color;
    imgBg.style.backgroundColor = color;
});