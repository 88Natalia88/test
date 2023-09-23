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
    let formValid = true;

errors.forEach((error, i) => {
    error.innerHTML = '';

    if(textAdd === '' && i === 0){
        error.innerHTML = "* Введите наименование организации";
    }

    let regTel = /^\+?\d{1,}\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/; //регулярное выражение для корректного номера телефона
    if(telAdd === '' && i === 1){
        error.innerHTML = "* Введите номер телефона";
    } else if (telAdd !== '' && i === 1 && !regTel.test(telAdd)) {
        error.innerHTML = "* Введите корректный номер телефона";
    }

    let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //регулярное выражение для проверки корректного email
    if(emailAdd === '' && i === 2){
        error.innerHTML = "* Введите ваш E-mail";
    } else if (emailAdd !== '' && i === 2 && !regEmail.test(emailAdd)){
        error.innerHTML = "* Введите корректный e-mail";
    }

    let regPhoto = /\.(jpeg|jpg|png)$/i; //регулярное выражение для проверки формата добавленного фото
    if(imgAdd === '' && i === 3){
        error.innerHTML = "* Логотип (jpeg, png)";
    } else if (imgAdd !== '' && i === 3 && !regPhoto.test(imgAdd)){
        error.innerHTML = "* Добавьте логотип формата jpeg или png";
    }

    if(selectFormAdd === '' && i === 4){
        error.innerHTML = "* Выберите направление";
    }

    let regUrl = /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //регулярное выражение для корректного ввода сайта
    if(ruAdd === '' && i === 5){
        error.innerHTML = "* Введите ссылку";
    } else if (ruAdd !== '' && i === 5 && !regUrl.test(ruAdd)){
        error.innerHTML = "* Введите корректную ссылку";
    }

    let regSocial = /(vk\.com|ok\.ru|facebook\.com|instagram\.com|youtube\.com)/i; //регулярное выражение для корректного ввода социальных сетей
    if(vkAdd === '' && i === 6){
        error.innerHTML = "* Введите ссылку";
    } else if (vkAdd !== '' && i === 6 && !regSocial.test(vkAdd)){
        error.innerHTML = "* Введите корректную ссылку";
    }

    if(okAdd === '' && i === 7){
        error.innerHTML = "* Введите ссылку";
    } else if (okAdd !== '' && i === 7 && !regSocial.test(okAdd)){
        error.innerHTML = "* Введите корректную ссылку";
    }

    if(instagramAdd === '' && i === 8){
        error.innerHTML = "* Введите ссылку";
    } else if (instagramAdd !== '' && i === 8 && !regSocial.test(instagramAdd)){
        error.innerHTML = "* Введите корректную ссылку";
    }

    if(facebookAdd === '' && i === 9){
        error.innerHTML = "* Введите ссылку";
    } else if (facebookAdd !== '' && i === 9 && !regSocial.test(facebookAdd)){
        error.innerHTML = "* Введите корректную ссылку";
    }

    if(youtubeAdd === '' && i === 10){
        error.innerHTML = "* Введите ссылку";
    } else if (youtubeAdd !== '' && i === 10 && !regSocial.test(youtubeAdd)){
        error.innerHTML = "* Введите корректную ссылку";
    }

    if(bossAdd === '' && i === 11){
        error.innerHTML = "* Введите ФИО руководителя";
    }

    if (error.innerHTML !== '') {
        formValid = false;
    }

})

if (formValid) {
    // Очистить все инпуты и отправка данных формы
    text.value = '';
    tel.value = '';
    email.value = '';
    img.value = '';
    ru.value = '';
    vk.value = '';
    ok.value = '';
    instagram.value = '';
    facebook.value = '';
    youtube.value = '';
    boss.value = '';
    selectForm.value = '';
}

}
