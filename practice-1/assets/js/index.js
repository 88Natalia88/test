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
const imgPreview = document.getElementById('form__img-preview');
const imgInput = document.querySelector('.form__img-input');
const closeBtn = document.getElementById('close');

//кастомную кнопку "выберите файл" связываем с input type="file"
document.querySelector(".form__img-castomBtn").addEventListener("click", function(){
    img.click();
});

//добавляем на инпут обработчик изменения
img.onchange = function(){
    //console.log(img)
    getImageData();
}

//функциия загрузки файла
function getImageData(){
    let files = img.files[0];
    console.log(files)
    if(files){
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.onload = function(){
            imgPreview.src = this.result;
            imgInput.style.display = "none";
            imgPreview.style.display = 'block';
        }
    }
}

//удаление фото
closeBtn.addEventListener('click', () => {
    imgPreview.src = '';
    imgInput.style.display = "block";
    img.value = '';
    imgPreview.style.display = 'none';

})

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

    // Очистка полей формы
    text.value = '';
    tel.value = '';
    email.value = '';
    ru.value = '';
    vk.value = '';
    ok.value = '';
    instagram.value = '';
    facebook.value = '';
    youtube.value = '';
    boss.value = '';
    selectForm.value = '';

    // Очистка сообщений об ошибках
    errors.forEach((error) => {
        error.innerHTML = '';
    });
    if(imgPreview){
        imgPreview.src = '';
        imgInput.style.display = "block";
        img.value = '';
        imgPreview.style.display = 'none';
    }
});

//добавление маскированного ввода телефона
tel.addEventListener('focus', addMaskNumber);

function addMaskNumber() {
    tel.placeholder = '+7 (___) ___-__-__';

    tel.addEventListener('input', () => {
        const phone = tel.value.replace(/\D/g, '');
        let formattedPhone = '';
        
        
        if (phone.length > 0) {
            formattedPhone += '+' + phone.substring(0, 1) + '(';
        }
    
        if (phone.length > 1) {
            formattedPhone += phone.substring(1, 4);
        }

        if (phone.length > 4) {
            formattedPhone += ')' + phone.substring(4, 7);
        }

        if (phone.length > 7) {
            formattedPhone += '-' + phone.substring(7, 9);
        }
        
        if (phone.length > 9) {
            formattedPhone += '-' + phone.substring(9, 11);
        }
        tel.value = formattedPhone;
    });

    tel.addEventListener('keyup', (event) => {
        const phoneAdd = tel.value;
        if (phoneAdd === '+7(' && event.key === 'Backspace') {
            tel.value = '';
        }
    });
}

//валидация

btnYes.addEventListener("click", submitForm);


function submitForm(e){

    e.preventDefault();
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
        formValid = false;
    }

    let regTel = /^\+?\d{1,}\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/; //регулярное выражение для корректного номера телефона
    if(telAdd === '' && i === 1){
        error.innerHTML = "* Введите номер телефона";
        formValid = false;
    } else if (telAdd !== '' && i === 1 && !regTel.test(telAdd)) {
        error.innerHTML = "* Введите корректный номер телефона";
        formValid = false;
    }

    let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //регулярное выражение для проверки корректного email
    if(emailAdd === '' && i === 2){
        error.innerHTML = "* Введите ваш E-mail";
        formValid = false;
    } else if (emailAdd !== '' && i === 2 && !regEmail.test(emailAdd)){
        error.innerHTML = "* Введите корректный e-mail";
        formValid = false;
    }

    let regPhoto = /\.(jpeg|jpg|png)$/i; //регулярное выражение для проверки формата добавленного фото
    if(imgAdd === '' && i === 3){
        error.innerHTML = "* Логотип (jpeg, png)";
    } else if (imgAdd !== '' && i === 3 && !regPhoto.test(imgAdd)){
        error.innerHTML = "* Добавьте логотип формата jpeg или png";
    }

    if(selectFormAdd === '' && i === 4){
        error.innerHTML = "* Выберите направление";
        formValid = false;
    }

    if(ruAdd === '' || vkAdd === '' || okAdd === '' || instagramAdd === '' || facebookAdd === '' || youtubeAdd === '' || bossAdd === ''){
        formValid = false;
    }

})
if(!formValid){
    console.log("Заполните все поля");
}

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