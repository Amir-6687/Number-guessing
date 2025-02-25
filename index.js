const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let userGuess = document.getElementById("guess").value;
  let message = document.getElementById("message");
  attempts++;

  if (userGuess == randomNumber) {
    message.innerHTML = `🎉 Glückwunsch! Du hast die Zahl ${randomNumber} in ${attempts} Versuchen erraten!`;
  } else if (userGuess < randomNumber) {
    message.innerHTML = "🔼 Zu niedrig! Versuch es nochmal.";
  } else {
    message.innerHTML = "🔽 Zu hoch! Versuch es nochmal.";
  }
}
