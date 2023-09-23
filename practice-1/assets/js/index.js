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
//переменные всех инпутов
let errors = document.querySelectorAll(".form__error");
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
const selectForm = document.getElementById('select');
const btnYes = document.getElementById("button-yes");

btnYes.addEventListener("click", submitForm);


function submitForm(){
    //данные введенные в инпутах
    let textAdd = text.value;
    let telAdd = tel.value;
    let emailAdd = email.value;
    let imgAdd = img.value;
    let ruAdd = ru.value;
    let vkAdd = vk.value;
    let okAdd = ok.value;
    let instagramAdd = instagram.value;
    let facebookAdd = facebook.value;
    let youtubeAdd = youtube.value;
    let bossAdd = boss.value;
    let selectFormAdd = selectForm.value;

errors.forEach((error, i) => {
    error.innerHTML = '';

    if(textAdd === '' && i === 0){
        error.innerHTML = "* Введите наименование организации";
    }
    let regTel = /^\+?\d{1,}\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/;
    if(telAdd === '' && i === 1){
        error.innerHTML = "* Введите номер телефона";
    } else if (telAdd !== '' && i === 1 && !regTel.test(telAdd)) {
        error.innerHTML = "* Введите корректный номер телефона";
    }

    let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailAdd === '' && i === 2){
        error.innerHTML = "* Введите ваш E-mail";
    } else if (emailAdd !== '' && i === 2 && !regEmail.test(emailAdd)){
        error.innerHTML = "* Введите корректный e-mail";
    }

    let regPhoto = /\.(jpeg|jpg|png)$/i;
    if(imgAdd === '' && i === 3){
        error.innerHTML = "* Логотип (jpeg, png)";
    } else if (imgAdd !== '' && i === 3 && !regPhoto.test(imgAdd)){
        error.innerHTML = "* Добавьте логотип формата jpeg или png";
    }

    if(selectFormAdd === '' && i === 4){
        error.innerHTML = "* Выберите направление";
    }
})


    console.log(textAdd)
    let item = sel.options;
    console.log(item)
}
