// Массив с фактами
var facts = [
  "Название CaWiWorld пошло с CArbor WIndows WORLD",
  "До версий 1.0, 1.1, 1.2, 1.3 было еще много версий...",
  "Релостер писал сайт в гс с TheDanyaWin",
  "Очень много кто оценил сайт",
  "Это 5 факт, больше нету"
];

// Функция для получения случайного факта
function getRandomFact() {
  var randomIndex = Math.floor(Math.random() * facts.length);
  return facts[randomIndex];
}

// Функция для отображения факта на странице
function displayFact() {
var factContainer = document.querySelector(".fact-container");
var fact = getRandomFact();
factContainer.textContent = fact;
}

// Встраиваемый код
document.write('<h4><div class="fact-container"></div></h4>');
displayFact();