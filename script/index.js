
const main = document.querySelector("main");

let api = new Api("gelik_alex");

// Заполняем карточки //

const updCards = (data)=> {
  main.innerHTML = "";
  data.forEach((cat)=> {
    if (cat.id) {
      let card = `<div class="${
        cat.favourite ? "card like" : "card"
      }" id=${cat.id} style="background-image:
  url(${cat.img_link || "Demo-cat-Img.png"})">
  <span></span>
  </div>`;
      main.innerHTML += card;
     }
  });
  let cards = document.querySelectorAll(".card");
  for (let i = 0, cnt = cards.length; i < cnt; i++) {
    const width = cards[i].offsetWidth;
    cards[i].style.height = `${width * 0.6}px`;
  }
};
let catsData = localStorage.getItem("cats");
catsData = catsData ? JSON.parse(catsData) : [];
const getCats = function (api, store) {
  if (!store.length) {
    api
      .getCats()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "ok") {
          localStorage.setItem("cats", JSON.stringify(data.data));
          catsData = [...data.data];
          updCards(data.data);
        }
      });
  } else {
    updCards(store);
  }
};
getCats(api, catsData);

// Появление карточки для добавление кота и закрытие //

const addBtn = document.querySelector("#add")

const popupForm = document.querySelector("#popup-form")

const closePopupForm = document.querySelector(".popup-close")

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (popupForm.classList !== "active") {
    popupForm.classList.add("active");
    popupForm.parentNode.classList.add("active");
  }
});

closePopupForm.addEventListener("click", () => {
    popupForm.classList.remove("active");
    popupForm.parentNode.classList.remove("active");
  
});

// Создание экземплярв класса //


let form = document.querySelector("form");

form.img_link.addEventListener("change", (event) =>{
  form.firstElementChild.style.backgroundImage = `url(${event.target.value})`
});
form.img_link.addEventListener("input", (event) =>{
  form.firstElementChild.style.backgroundImage = `url(${event.target.value})`
});


 form.addEventListener("submit", (event) => {
   event.preventDefault();
   let body = {};
   const { elements } = form; // Достаем элементы у формы
   for (let el of elements) {
     let { name } = el; // Достаем имя у элементов
     if (name) {
       let { type, checked, value } = el; // Достаем тип , значение и поставлен ли чексбокс
       let isCheckbox = (type) => ["checkbox"].includes(type); // Проверка есть ли тип чексбокса
       body[name] = isCheckbox(type) ? checked : value;
     }
   }
   console.log(body);
   api
   .addCat(body)
   .then((res) => res.json())
   .then((data) => {
     if (data.message === "ok") {
       form.reset();
       closePopupForm.click();
       api
         .getCat(body.id)
         .then((res) => res.json())
         .then((cat) => {
           if (cat.message === "ok") {
             catsData.push(cat.data);
             localStorage.setItem("cats", JSON.stringify(catsData));
 
             getCats(api, catsData);
           } else {
             console.log(cat);
           }
         });
     } else {
       console.log(data);
       api
         .getIds()
         .then((r) => r.json())
         .then((d) => console.log(d));
     }
   });
 });
     
//--------------------------------------------------------------//

/*Добавляет карточку информации о каждом котике*/


let card = document.getElementsByClassName("card");
let infoCats = document.querySelector("#infoCats");


for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", async () => {
    let res = await api.getCat(card[i].id);
    let cont = await res.json();
    if (infoCats.classList!=='infoClose'){
      infoCats.classList.add('infoClose')
    }
  card[i].addEventListener("mouseout", () => {
    infoCats.classList.remove('infoClose')
})
    let name = infoCats.querySelector("#name")
    let age = infoCats.querySelector("#age")
    let info = infoCats.querySelector("#info")
    let rate = infoCats.querySelector("#rate")

    for (let key in cont){
      name.value = cont[key].name
      age.value = cont[key].age
      info.value = cont[key].description
      rate.value = cont[key].rate
    }
  })
};


//--------------------------------------------------------------//

/*Реализация меню формы регистрации на сайте*/

let btnEnter = document.querySelector("#btnEnter");

let formRegistr = document.querySelector(".formRegistr");

let formRegistrcloseBtn = document.querySelector(".formRegistrcloseBtn");

btnEnter.addEventListener("click", () => {
  if (formRegistr.classList !== "activeForm") {
    formRegistr.classList.add("activeForm");
    formRegistr.parentNode.classList.add("activeForm");
  }
});

formRegistrcloseBtn.addEventListener("click", () => {
  formRegistr.classList.remove("activeForm");
  formRegistr.parentNode.classList.remove("activeForm");
});

let btnEnterCab = document.querySelector(".btnEnterCab");
console.log(btnEnterCab);

btnEnterCab.addEventListener("click", (event) => {
  event.preventDefault();
  let login = document.querySelector('[name="login"]');
  document.cookie = `Login=${login.value}`;

  let password = document.querySelector('[name="password"]');
  document.cookie = `Password=${password.value}`;
});


