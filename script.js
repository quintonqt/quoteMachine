const quotes = ["No one can make you feel inferior without your consent.",
"The fool doth think he is wise, but the wise man knows himself to be a fool.",
"Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
"The way to get started is to quit talking and begin doing.",
"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
"Many of life's failures are people who did not realize how close they were to success when they gave up.",
"Life is never fair, and perhaps it is a good thing for most of us that it is not.",
"In this life we cannot do great things. We can only do small things with great love.",
"Success is not final; failure is not fatal: It is the courage to continue that counts.",
"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."];

const authors = ["Eleanor Roosevelt", "William Shakespeare", "Mark Twain", "Walt Disney", "Mother Teresa", "Thomas A. Edison", "Oscar Wilde", "Mother Teresa", "Winston S. Churchill", "Barack Obama"];

function getQuoteAndAuthor() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('text').innerHTML = quotes[randomNumber];
  document.getElementById('author').innerHTML = authors[randomNumber];
}

getQuoteAndAuthor();