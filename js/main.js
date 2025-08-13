const select = document.querySelector('#select');
const enviar = document.querySelector('#enviar');
const resultado = document.querySelector('#emojiGallery');
const limpar = document.querySelector("#limpar");

enviar.addEventListener('click', function(){
    const span = document.createElement('span');

        span.textContent = select.options[select.selectedIndex].text;

        resultado.appendChild(span);
        span.classList.add('emoji');
})

limpar.addEventListener('click', function(){
    resultado.innerHTML = "";
})