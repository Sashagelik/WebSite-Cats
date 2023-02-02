let cat = [
  {
    id: 1673795214011,
    name: "Mat",
    favourite: true,
    rate: 10,
    age: 1,
    description: "Самый гордый кот",
    img_link:
      "https://krasivosti.pro/uploads/posts/2021-07/1625899180_1-krasivosti-pro-p-koshka-na-raduge-koti-krasivo-foto-1.jpg ",
  },
  {
    id: 1673795215374,
    name: "Tomma",
    favourite: true,
    rate: 5,
    age: 3,
    description: "Самая красивая кошечка",
    img_link:
      "https://krasivosti.pro/uploads/posts/2021-04/1617960547_27-p-milie-kotiki-estetika-30.jpg",
  },
  {
    id: 1673795218350,
    name: "Jet",
    favourite: false,
    rate: 7,
    age: 4,
    description: "Самый веселый кот",
    img_link:
      "https://krasivosti.pro/uploads/posts/2021-09/1631620190_54-krasivosti-pro-p-novogodnii-kot-koshki-krasivo-foto-63.jpg",
  },
  {
    id: 1673795251230,
    name: "Bob",
    favourite: false,
    rate: 4,
    age: 1,
    description: "Самый флегматичный кот",
    img_link:
      "https://krasivosti.pro/uploads/posts/2022-01/1641308252_1-krasivosti-pro-p-prikolnie-koti-krasivo-foto-1.jpg",
  },
  {
    id: 1673795290416,
    name: "Fill",
    favourite: false,
    rate: 9,
    age: 2,
    description: "Самый ленивый кот",
    img_link:
      "https://krasivosti.pro/uploads/posts/2021-03/1616469500_32-p-milie-smeshnie-kotiki-foto-koshka-32.jpg",
  },
  {
    id: 1673795290658,
    name: "Dag",
    favourite: true,
    rate: 8,
    age: 7,
    description: "Самый самый красиый кот",
    img_link:
      "https://krasivosti.pro/uploads/posts/2022-01/1641308214_4-krasivosti-pro-p-prikolnie-koti-krasivo-foto-4.jpg",
  },
  {
    id: 1673795290846,
    name: "Ruf",
    favourite: true,
    rate: 6,
    age: 8,
    description: "Просто ласковый что =)",
    img_link:
      "https://krasivosti.pro/uploads/posts/2022-01/1641308268_3-krasivosti-pro-p-prikolnie-koti-krasivo-foto-3.jpg",
  },
  {
    id: 1673795290699,
    name: "Bars",
    favourite: true,
    rate: 6,
    age: 8,
    description: "Котик - спортсмен",
    img_link:
      "https://krasivosti.pro/uploads/posts/2022-01/1641308300_24-krasivosti-pro-p-prikolnie-koti-krasivo-foto-25.jpg",
  },
  {
    id: 16151449,
    name: "Danny",
    favourite: true,
    rate: 8,
    age: 5,
    description: "Очень умный котик",
    img_link:
      "https://img.freepik.com/free-photo/kitty-with-monochrome-wall-behind-her_23-2148955134.jpg?w=740&amp;t=st=1674459287~exp=1674459887~hmac=c4662ea9e72432dc221171164d4ae090d0d6b7206f2d90530318f6fda504f1af",
  },
  {
    id: 12358951357,
    name: "Karl",
    favourite: false,
    rate: 6,
    age: 8,
    description: "Дикий котик",
    img_link:
      "https://images.wallpaperscraft.ru/image/single/kot_morda_pushistyj_polosatyj_97082_3840x2160.jpg",
  },
];
const login = "gelik_alex";
const url = "https://sb-cats.herokuapp.com/api/2/";

const getResponse = async () => {
  const response = await fetch(`${url}${login}/show`, {
    method: "GET", // метод http запроса, по умолчанию GET
    headers: {
      //объект с заголовками запроса
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(data),    //передаваемые данные
  });
  const data = await response.json();
  console.log(data);
};
const postResponse = async () => {
  for (let el of cat) {
    const responsePost1 = await fetch(`${url}${login}/add`, {
      method: "POST", // метод http запроса, по умолчанию GET
      headers: {
        //объект с заголовками запроса
        "Content-Type": "application/json",
      },
      body: JSON.stringify(el), //передаваемые данные
    });
  }
};
postResponse();
getResponse();
