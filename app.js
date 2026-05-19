let speed = prompt("Введите скорость:");

if (speed <= 60) {
    console.log("Всё хорошо");
} else if (speed > 60 && speed <= 100) {
    console.log("Будь внимателен!");
} else {
    console.log("Ты превысил скорость!");
}
