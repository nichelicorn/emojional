// 💾 Application state
var phrases = {
  // happy: ["You go!", "Your smile just cheered me up!", "YAY!"],
  happy: [
    {
      quote: "My God, a moment of bliss. Why, isn't that enough for a whole lifetime?",
      author: "Fyodor Dostoevsky"
    },
    {
      quote: "You cannot protect yourself from sadness without protecting yourself from happiness.",
      author: "Jonathan Safran Foer"
    },
    {
      quote: "We all live with the objective of being happy; our lives are all different and yet the same.",
      author: "Anne Frank"
    },
    {
      quote: "Just because you are happy it does not mean that the day is perfect but that you have looked beyond its imperfections.",
      author: "Bob Marley"
    },
    {
      quote: "The trouble is that we have a bad habit, encouraged by pedants and sophisticates, of considering happiness as something rather stupid. Only pain is intellectual, only evil interesting. This is the treason of the artist; a refusal to admit the banality of evil and the terrible boredom of pain.",
      author: "Ursula K LeGuin"
    }
  ],
  // silly: ["Interesting response", "Sounds ... good?", "Me too."],
  silly: [
    {
      quote: "You will do foolish things, but do them with enthusiasm.",
      author: "Colette"
    },
    {
      quote: "When pain brings you down, don't be silly, don't close your eyes and cry, you just might be in the best position to see the sun shine.",
      author: "Alanis Morissette"
    },
    {
      quote: "Ever wonder about those people who spend $2 apiece on those little bottles of Evian water? Try spelling Evian backward.",
      author: "George Carlin"
    },
    {
      quote: "It's silly not to hope. It's a sin he thought.",
      author: "Ernest Hemingway, The Old Man and the Sea"
    },
    {
      quote: "When I like people immensely I never tell their names to anyone. It is like surrendering a part of them. I have grown to love secrecy. It seems to be the one thing that can make modern life mysterious or marvelous to us. The commonest thing is delightful if one only hides it. When I leave town now I never tell my people where I am going. If I did, I would lose all my pleasure. It is a silly habit, I daresay, but somehow it seems to bring a great deal of romance into one's life.",
      author: "Oscar Wilde, The Picture of Dorian Gray"
    },
  ],
  // crying: ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"],
  crying: [
    {
      quote: "They say when you are missing someone that they are probably feeling the same, but I don't think it's possible for you to miss me as much as I'm missing you right now.",
      author: "Edna St. Vincent Millay"
    },
    {
      quote: "Tears are words that need to be written.",
      author: "Paulo Coelho"
    },
    {
      quote: "What a sad era when it is easier to smash an atom than a prejudice.",
      author: "Albert Einstein"
    },
    {
      quote: "Melancholy were the sounds on a winter's night.",
      author: "Virginia Woolf, Jacob's Room"
    },
    {
      quote: "There's good in all of us and I think I simply love people too much, so much that it makes me feel too fucking sad.",
      author: "Kurt Cobain"
    },
  ],
  // wormy: ["Earthworms have red blood, just like humans.", "In the tropical areas of the world, some species of earthworms can reach up to 14 feet long.", "Earthworms have no ears or eyes. They do have one end of their body that is more sensitive to light than the other."],
  wormy: [
    {
      quote: "Well, I must endure the presence of a few caterpillars if I wish to become acquainted with the butterflies.",
      author: "Antoine de Saint-Exupéry, The Little Prince"
    },
    {
      quote: "The caterpillar does all the work, but the butterfly gets all the publicity.",
      author: "George Carlin"
    },
    {
      quote: "I will defend the absolute value of Mozart over Miley Cyrus, of course I will, but we should be wary of false dichotomies. You do not have to choose between one or the other. You can have both. The human cultural jungle should be as varied and plural as the Amazonian rainforest. We are all richer for biodiversity. We may decide that a puma is worth more to us than a caterpillar, but surely we can agree that the habitat is all the better for being able to sustain each.",
      author: "Stephen Fry, The Fry Chronicles"
    },
    {
      quote: "Nobody really metamorphoses. Cinderella is always Cinderella, just in a nicer dress. The Ugly Duckling was always a swan, just a smaller version. And I bet the tadpole and the caterpillar still feel the same, even when they're jumping and flying, swimming and floating. Just like I am now.",
      author: "Holly Smale, Geek Girl "
    },
    {
      quote: "Keep your temper, said the Caterpillar.",
      author: "Lewis Carroll, Alice in Wonderland"
    },
  ],
  // mindblown: ["Have you taken a pom?", "Do you need a friend in study hall?", "Thank goodness we have Monday off!"],
  mindblown: [
    {
      quote: "If you let people into your life a little bit, they can be pretty damn amazing.",
      author: "Sherman Alexie, The Absolutely True Diary of a Part-Time Indian"
    },
    {
      quote: "Anything that’s human is mentionable, and anything that is mentionable can be more manageable. When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary. The people we trust with that important talk can help us know that we are not alone.",
      author: "Fred Rogers"
    },
    {
      quote: "Learning never exhausts the mind.",
      author: "Leonardo da Vinci"
    },
    {
      quote: "Just because you fail once, doesn't mean you're gonna fail at everything. Keep trying, hold on, and always, always, always believe in yourself, because if you don't, then who will, sweetie? So keep your head high, keep your chin up, and most importantly, keep smiling, because life's a beautiful thing and there's so much to smile about.",
      author: "Marilyn Monroe"
    },
    {
      quote: "There is no greater agony than bearing an untold story inside you.",
      author: "Maya Angelou, I Know Why the Caged Bird Sings"
    },
  ],
  // studious: ["Did you read the MDN for that?", "Has anything unexpected happened in your code?", "What did you learn today?"]
  studious: [
    {
      quote: "",
      author: ""
    },
    {
      quote: "",
      author: ""
    },
    {
      quote: "",
      author: ""
    },
    {
      quote: "",
      author: ""
    },
    {
      quote: "",
      author: ""
    },
  ],
}

// 🔎 Query selectors
// select the node list of emojis
const emojis = document.querySelectorAll(".emoji");
const message = document.querySelector(".message");

// 🎧 Event listeners
emojis.forEach(emoji => {
  emoji.addEventListener("click", displayPhrase);
});

// FUNCTIONS ⤵
function generateRandom(array) {
  // console.log("array >", array, typeof array); // array is coming through as a string!
  // console.log("array.length >", array.length);
  var index = Math.floor(Math.random() * array.length);
  return index;
}

function sayThings(array) {
  var index = generateRandom(array);
  console.log(index);
  phrase.innerText = array[index];
}

function displayPhrase(event) {
  event.preventDefault();
  // console.log("event target >", event.target);
  // console.log("event target.classList >", event.target.classList);
  const emojion = event.target.classList[1];
  // console.log("emojion >", emojion, typeof emojion); // logs a string based on the class of the targeted emoji

  console.log("phrases[emojion] >", phrases[emojion]);

  const randomIndex = generateRandom(phrases[emojion]);

  console.log("randomIndex >", randomIndex);

  // when the phrase is a string in an array
  // const phrase = phrases[emojion][randomIndex];

  // when the phrase is an object
  const phrase = phrases[emojion][randomIndex];

  // console.log("phrase array >", phrases[emojion]);
  // console.log("phrase >", phrase);
  console.log("phrase.quote >", phrase.quote);

  if (!phrase) {
    console.log("error with the phrase")
    message.textContent = "Today is a lovely day for a walk. Take 15 minutes for yourself outside."
  } else {
    // message.textContent = phrase;
    message.textContent = phrase.quote;
  }

}