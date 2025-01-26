/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
// const button = document.querySelector("#alertButton");
// const input = document.querySelector("#alertInput")
// button.addEventListener("click", () => {
//     console.log(input.value);
// })
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
// const inputFirst = document.querySelector('#leftSwapInput');
// const inputSecond = document.querySelector('#rightSwapInput');
// const button1 = document.querySelector('#swapButton');

// button1.addEventListener('click',funcSwap)

// function funcSwap(e){
//     const third = inputFirst.value ;
//     inputFirst.value = inputSecond.value;
//     inputSecond.value = third;
// }

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const button = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");
// button.addEventListener('click', changeValue)
//   function changeValue(event) {
//     if (input.type === "text") {
//         button.textContent = "Розкрити"
//         input.type = "password";
//     } else {
//         button.textContent = "Приховати"
//         input.type = "text";
//     }
//   }

// ЗАДАЧА 4
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// */
// https://github.com/kashirin-olexsandr/test12/blob/main/DOM/style.css
const buttonDecrease = document.querySelector("#decrease");
const buttonIncrease = document.querySelector("#increase");
const box = document.querySelector("#box");

buttonDecrease.addEventListener("click", funcDecrease);
buttonIncrease.addEventListener("click", funcIncrease);

function funcDecrease(e) {
  const boxWidth = parseInt(getComputedStyle(box).width);
  const boxHeight = parseInt(getComputedStyle(box).height);

  box.style.width = boxWidth - 10 + "px";
  console.log(box.style.width);
  box.style.height = boxHeight - 10 + "px";
  console.log(box.style.height);
}
function funcIncrease(e) {
  const boxWidth = parseInt(getComputedStyle(box).width);
  const boxHeight = parseInt(getComputedStyle(box).height);

  box.style.width = boxWidth + 10 + "px";
  console.log(box.style.width);
  box.style.height = boxHeight + 10 + "px";
  console.log(box.style.height);
}


/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/
const button = document.querySelector("#double");
button.addEventListener("click",() => {
const listItem = document.querySelectorAll(".listItem")
 console.log(listItem)
  listItem.forEach(item => {
    item.textContent = item.textContent * 2 
    
  })
  
}
)