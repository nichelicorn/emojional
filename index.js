// 💾 Application state
const phrases = {
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
  studious: [
    {
      quote: "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
      author: "Richard Feynmann"
    },
    {
      quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
      author: "Albert Camus"
    },
    {
      quote: "I wanted a perfect ending. Now I've learned, the hard way, that some poems don't rhyme, and some stories don't have a clear beginning, middle, and end. Life is about not knowing, having to change, taking the moment and making the best of it, without knowing what's going to happen next. Delicious Ambiguity.",
      author: "Gilda Radner"
    },
    {
      quote: "Once you learn to read, you will be forever free.",
      author: "Frederick Douglass"
    },
    {
      quote: "No one is born hating another person because of the color of his skin, or his background, or his religion. People must learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than its opposite.",
      author: "Nelson Mandela, Long Walk to Freedom"
    },
  ],
};

// 🔎 Query selectors
const author = document.querySelector(".author");
const emojis = document.querySelectorAll(".emoji");
const message = document.querySelector(".message");
let lastMessage;

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
  const newMessage = `${emojion}${randomIndex}`;
  let phrase = phrases[emojion][randomIndex];

    if (lastMessage === newMessage) {
    phrase = phrases[emojion][randomIndex - 1];
    if (!phrase) {
      message.textContent = "Take fifteen minutes for yourself outdoors 🌳";
      author.textContent = "";
    }
    message.textContent = phrase.quote;
    author.textContent = `- ${phrase.author}`;
  } else {
    message.textContent = phrase.quote;
    author.textContent = `- ${phrase.author}`;
  };

  lastMessage = newMessage;
};

function setText(element, message) {
  element.textContent = message;
}