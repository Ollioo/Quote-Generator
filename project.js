let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [
    {
      quote: '“Be yourself; everyone else is already taken.”',
      person: 'Oscar Wilde'
    },
    {
      quote: '"Two things are infinite: the universe and human stupidity; I am not sure about the universe."',
      person: 'Albert Einstein'
    },
    {
      quote: '“So many books, so little time.”',
      person: 'Frank Zappa'
    },
    {
      quote: '“A room without books is like a body without a soul.”',
      person: 'Marcus Tullius Cicero'
    },
    {
      quote: '“In three words I can sum up everything I have learned about life: it goes on.”',
      person: 'Robert Frost'
    },
    {
      quote: '“The only way to do great work is to love what you do.”',
      person: 'Steve Jobs'
    },
    {
      quote: '“Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.”',
      person: 'Albert Schweitzer'
    },
    {
      quote: '“The best way to predict the future is to create it.”',
      person: 'Peter Drucker'
    },
    {
      quote: '“Life is 10% what happens to us and 90% how we react to it.”',
      person: 'Charles R. Swindoll'
    },
    {
      quote: '“The greatest glory in living lies not in never falling, but in rising every time we fall.”',
      person: 'Nelson Mandela'
    }
  ];

  btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;    
  })