//кастомную кнопку "выберите файл" связываем с input type="file"
document.querySelector(".form__img-castomBtn").addEventListener("click", function(){
    document.querySelector("input[type='file']").click();
});
//откраваем модальное окно
const modal = document.querySelector(".modal");
const button = document.querySelector(".button");
const btnMain = document.getElementById("btn-main");


btnMain.addEventListener("click", function(){
    modal.style.display = 'block';
    button.style.display = "none";
});
//закрываем модальное окно
const btnNo = document.querySelector('.button-no');
btnNo.addEventListener("click", function(){
    modal.style.display = "none";
    button.style.display = "block";
});
//валидация
const text = document.getElementById('text');
const tel = document.getElementById("tel");
const email = document.getElementById("email");
const img = document.getElementById('img');
const ru = document.getElementById("ru");
const vk = document.getElementById("vk");
const ok = document.getElementById('ok');
const instagram = document.getElementById('instagram');
const facebook = document.getElementById('facebook');
const youtube = document.getElementById('youtube');
const boss= document.getElementById('boss');

const btnYes = document.getElementById("button-yes");

btnYes.addEventListener("click", submitForm);

const sel = document.getElementById('select');
function submitForm(){
    let textAdd = text.value;
    console.log(textAdd)
    let item = sel.options;
    console.log(item)
}
