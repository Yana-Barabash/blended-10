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
const inputFirst = document.querySelector('#leftSwapInput');
const inputSecond = document.querySelector('#rightSwapInput');
const button1 = document.querySelector('#swapButton');

button1.addEventListener('click',funcSwap)

function funcSwap(e){
    const third = inputFirst.value ;
    inputFirst.value = inputSecond.value;
    inputSecond.value = third;
}


/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const button = document.querySelector("#passwordButton");
const input = document.querySelector("#passwordInput");
button.addEventListener('click', changeValue)
  function changeValue(event) {
    if (input.type === "text") {
        button.textContent = "Розкрити"
        input.type = "password";
    } else {
        button.textContent = "Приховати"
        input.type = "text";
    }
  }