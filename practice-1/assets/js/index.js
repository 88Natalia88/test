
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
const imgInput = document.querySelector('.form__custom-input');
const closeBtn = document.getElementById('close');
const body = document.body;
const customSelect = document.querySelector('.form__autocomplete');
const btnSelect = document.querySelector('.form__btn');
const btnSelectImg = document.querySelector('.form__arrow');
const items = document.querySelectorAll('.form__item');

//кастомный селект
btnSelect.addEventListener('click', ()=>{
    if(customSelect.style.display === 'block'){
        btnSelectImg.style.transform = 'rotate(0deg)';
        customSelect.style.display = 'none';
    } else{   
        btnSelectImg.style.transform = 'rotate(180deg)';
        customSelect.style.display = 'block';
    }
});

items.forEach((item) =>{
    item.addEventListener('click', ()=>{
        selectForm.value = item.textContent;
    })
});

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
    body.classList.toggle('locked');
});

//закрываем модальное окно
const btnNo = document.querySelector('.button-no');
btnNo.addEventListener("click", function(){
    closeModal();
});

// Закрытие модального окна при клике вне него
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});


function closeModal() {
    modal.style.display = "none";

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
}

//добавление маскированного ввода телефона
tel.addEventListener('focus', addMaskNumber);

function addMaskNumber() {
    //tel.placeholder = '+7 (___) ___-__-__';
    if (tel.value === '') {
        tel.value = '+7';
    }
    tel.addEventListener('input', () => {
        const phone = tel.value.replace(/\D/g, '');
        let formattedPhone = '';
        
        if (phone.length > 0) {
            formattedPhone += '+' + phone.substring(0, 1) + ' ';
        }
    
        if (phone.length > 1) {
            formattedPhone += phone.substring(1, 4);
        }

        if (phone.length > 4) {
            formattedPhone += ' ' + phone.substring(4, 7);
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
        if (event.key === 'Backspace') {
            let currentValue = tel.value;
            tel.value = currentValue.slice(0, -1);
        }
    });
};


//валидация

btnYes.addEventListener("click", submitForm);


function submitForm(e){
    console.log('click');
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
        error.innerHTML = "<span class='form__error-required'>&#8727;</span> Название организации";
        formValid = false;
    }

    let regTel = /^\+?\d{1,}\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/; //регулярное выражение для корректного номера телефона
    if(telAdd === '' && i === 1){
        error.innerHTML = "<span class='form__error-required'>&#8727;</span> Телефон";
        formValid = false;
    } else if (telAdd !== '' && i === 1 && !regTel.test(telAdd)) {
        error.innerHTML = "<span class='form__error-required'>&#8727;</span> Телефон";
        formValid = false;
    }

    let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //регулярное выражение для проверки корректного email
    if(emailAdd === '' && i === 2){
        error.innerHTML = "<span class='form__error-required'>&#8727;</span> E-mail";
        formValid = false;
    } else if (emailAdd !== '' && i === 2 && !regEmail.test(emailAdd)){
        error.innerHTML = "<span class='form__error-required'>&#8727;</span> Введите корректный e-mail";
        formValid = false;
    }

    let regPhoto = /\.(jpeg|jpg|png)$/i; //регулярное выражение для проверки формата добавленного фото
    if(imgAdd === '' && i === 3){
        error.innerHTML = "<span class='form__error-required'>&#8727;</span> Логотип (jpeg, png)";
    } else if (imgAdd !== '' && i === 3 && !regPhoto.test(imgAdd)){
        error.innerHTML = "<span class='form__error-required'>&#8727;</span> Добавьте логотип формата jpeg или png";
    }

    if(selectFormAdd === '' && i === 4){
        error.innerHTML = "<span class='form__error-required'>&#8727;</span> Направление";
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