//Este script me permite detectar el click en los links
//y aplicar las clases necesarias
//para deslizar el indicador

const list = document.querySelectorAll('.item');
function activeLink(){
    list.forEach((item)=>item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item)=>item.addEventListener('click', activeLink));