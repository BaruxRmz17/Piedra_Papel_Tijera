let userScore = 0; // Variable que lleva la puntuación del usuario
let computerScore = 0; // Variable que lleva la puntuación de la computadora

// Selección de elementos HTML que muestran la puntuación y el resultado
const userScore_span = document.getElementById("user-score"); // Elemento donde se muestra la puntuación del usuario
const computerScore_span = document.getElementById("computer-score"); // Elemento donde se muestra la puntuación de la computadora
const result_p = document.querySelector(".result > p"); // Elemento que muestra el resultado del juego

// Selección de elementos de elección de usuario
const piedra_div = document.getElementById("r"); // Botón de "piedra"
const papel_div = document.getElementById("p"); // Botón de "papel"
const tijera_div = document.getElementById("t"); // Botón de "tijera"

// Botón de reinicio del juego
const resetButton = document.getElementById("reset-btn"); // Botón para reiniciar el juego

// Función que genera una elección aleatoria para la computadora
function getComputerChoice() {
    const choices = ['r', 'p', 't']; // Opciones posibles para la computadora
    const randomNumber = Math.floor(Math.random() * 3); // Número aleatorio entre 0 y 2
    return choices[randomNumber]; // Devuelve una elección aleatoria
}

// Función que convierte la elección en letra a una palabra completa
function convertToWord(letter) {
    if (letter === "r") return "piedra"; // Convierte "r" a "piedra"
    if (letter === "p") return "papel";  // Convierte "p" a "papel"
    return "tijera";                     // Convierte "t" a "tijera"
}

// Función para cuando el usuario gana la ronda
function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice); // Elemento elegido por el usuario
    removeNeonEffect(userChoice); // Remueve el efecto de neón temporalmente
    userScore++; // Incrementa la puntuación del usuario
    userScore_span.innerHTML = userScore; // Actualiza el marcador del usuario en la pantalla
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`; // Muestra el mensaje de victoria
    userChoice_div.classList.add('green-glow'); // Añade efecto verde de victoria
    setTimeout(() => {
        userChoice_div.classList.remove('green-glow'); // Remueve el efecto verde tras un tiempo
        userChoice_div.classList.add('neon-default'); // Restaura el efecto neón
    }, 300);
}

// Función para cuando el usuario pierde la ronda
function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice); // Elemento elegido por el usuario
    removeNeonEffect(userChoice); // Remueve el efecto de neón temporalmente
    computerScore++; // Incrementa la puntuación de la computadora
    computerScore_span.innerHTML = computerScore; // Actualiza el marcador de la computadora en la pantalla
    result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose.`; // Muestra el mensaje de derrota
    userChoice_div.classList.add('red-glow'); // Añade efecto rojo de derrota
    setTimeout(() => {
        userChoice_div.classList.remove('red-glow'); // Remueve el efecto rojo tras un tiempo
        userChoice_div.classList.add('neon-default'); // Restaura el efecto neón
    }, 300);
}

// Función para cuando hay un empate
function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice); // Elemento elegido por el usuario
    removeNeonEffect(userChoice); // Remueve el efecto de neón temporalmente
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw.`; // Muestra el mensaje de empate
    userChoice_div.classList.add('gray-glow'); // Añade efecto gris de empate
    setTimeout(() => {
        userChoice_div.classList.remove('gray-glow'); // Remueve el efecto gris tras un tiempo
        userChoice_div.classList.add('neon-default'); // Restaura el efecto neón
    }, 300);
}

// Función principal que determina el resultado de cada ronda
function game(userChoice) {
    const computerChoice = getComputerChoice(); // Genera la elección de la computadora
    switch (userChoice + computerChoice) { // Concadena las opciones para determinar el resultado
        case "rt":
        case "pr":
        case "tp":
            win(userChoice, computerChoice); // Llama a la función win si el usuario gana
            break;
        case "rp":
        case "pt":
        case "tr":
            lose(userChoice, computerChoice); // Llama a la función lose si el usuario pierde
            break;
        case "rr":
        case "pp":
        case "tt":
            draw(userChoice, computerChoice); // Llama a la función draw si es un empate
            break;
    }
}

// Función inicial que configura los eventos y establece el estilo de neón inicial
function main() {
    addNeonEffectToChoices(); // Aplica el efecto de neón a todas las opciones al cargar la página

    piedra_div.addEventListener('click', () => game("r")); // Configura el clic de la opción "piedra"
    papel_div.addEventListener('click', () => game("p"));  // Configura el clic de la opción "papel"
    tijera_div.addEventListener('click', () => game("t")); // Configura el clic de la opción "tijera"

    // Configura el botón de reinicio para ejecutar la función resetGame
    resetButton.addEventListener('click', resetGame);
}

// Función que reinicia el juego a sus valores iniciales
function resetGame() {
    userScore = 0; // Reinicia la puntuación del usuario
    computerScore = 0; // Reinicia la puntuación de la computadora
    userScore_span.innerHTML = userScore; // Actualiza la pantalla con el marcador en cero
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "¡Juego reiniciado! Selecciona tu movimiento."; // Muestra un mensaje de reinicio

    // Aplica el estilo de neón inicial a cada opción después del reinicio
    addNeonEffectToChoices();
}

// Función que aplica el efecto de neón a todas las opciones de juego
function addNeonEffectToChoices() {
    const choices = document.querySelectorAll(".choice"); // Selecciona todas las opciones
    choices.forEach(choice => {
        choice.classList.add('neon-default'); // Agrega la clase 'neon-default' a cada opción
    });
}

// Función que remueve temporalmente el efecto de neón de una opción seleccionada
function removeNeonEffect(userChoice) {
    const userChoice_div = document.getElementById(userChoice); // Selecciona el elemento de la elección del usuario
    userChoice_div.classList.remove('neon-default'); // Remueve la clase 'neon-default'
}

// Llama a la función main para inicializar el juego al cargar la página
main();
