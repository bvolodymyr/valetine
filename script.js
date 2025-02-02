const messages = [
    "Точно?",
    "Прям точно точно??",
    "Ти прям впевнена?",
    "Ну буласка...",
    "Ну подумай ще може",
    "Якщо скажеш ні я буду сумувати...",
    "Дуже сумувати...",
    "Дуже дуже дуже сумувати...",
    "Ладно всьо більше не буду просити...",
    "Хуй там, скажи так вже! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}