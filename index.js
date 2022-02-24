// 💾 Application state
let lastMessage;

// 🔎 Query selectors
const author = document.querySelector(".author");
const emojis = document.querySelectorAll(".emoji");
const message = document.querySelector(".message");

// 🎧 Event listeners
emojis.forEach(emoji => {
  emoji.addEventListener("click", displayPhrase);
});

// FUNCTIONS ⤵
function generateRandom(array) {
  const index = Math.floor(Math.random() * array.length);
  return index;
};

function displayPhrase(event) {
  event.preventDefault();

  const emojion = event.target.classList[1];
  const randomIndex = generateRandom(phrases[emojion]);
  let newMessage = `${emojion}${randomIndex}`;
  let phrase = phrases[emojion][randomIndex];

  if (lastMessage === newMessage) {
    phrase = phrases[emojion][randomIndex - 1];
    newMessage = phrase;
  };

  if (!phrase) {
    phrase = {
      quote: "Take fifteen minutes for yourself outdoors 🌳",
      author: "",
    }
  };

  setText(message, `${phrase.quote}`);
  setText(author, `- ${phrase.author}`);

  lastMessage = newMessage;
};

function setText(element, message) {
  element.textContent = message;
;}