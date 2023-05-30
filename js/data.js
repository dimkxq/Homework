const user = {
  name: "Діма",
  surname: "Гаврилюк",
  userPhoto: "my-photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "wish-1.jpg", alt: "Авто моєї мрії" },
    { src: "home.jpg", alt: "Домівка на місяці" },
    { src: "voyage.jpg", alt: "Подорож до Марсу" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  350,
  500,
  800,
  1000,
  1200,
  1400,
  1600,
  1800,
  2000,
  2200,
  2400,
  2600,
];

const necessaryExpenses = 900;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Самостійність" },
  { month: "Жовтень", skill: "Гнучкість" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Публіувція сайту" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
