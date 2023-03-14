// Varibales
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    person: "Walt Disney"
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    person: "Steve Jobs"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    person: "Eleanor Roosevelt"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    person: "Oprah Winfrey"
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    person: "James Cameron"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon"
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person: "Mother Teresa"
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    person: "Maya Angelou"
  },
  {
    quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    person: "Steve Jobs"
  }
];
btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    person.textContent = quotes[random].person;
})
