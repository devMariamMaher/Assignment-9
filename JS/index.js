var quote = document.getElementById("quote")
var author = document.getElementById("author")

quotesArray = [
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein"
    },
    
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },

    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
    },

    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi"
    },

    {
        quote: "“Without music, life would be a mistake.”",
        author: "― Friedrich Nietzsche"
    },

    {
        quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        author: "― Ralph Waldo Emerson"
    },

    {
        quote: "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
        author: "― Mark Twain"
    },

    {
        quote: "“We are all in the gutter, but some of us are looking at the stars.”",
        author: "― Oscar Wilde"
    }
];

quotesCopy = quotesArray.slice();
indexAccessed = [];

function generateQuote(){
    var randomIndex = Math.floor(Math.random() * quotesCopy.length);

    while(indexAccessed.includes(randomIndex)){
        randomIndex = (randomIndex + 1) % quotesCopy.length;
    }
    indexAccessed.push(randomIndex);

    quote.innerHTML = quotesCopy[randomIndex].quote;
    author.innerHTML = quotesCopy[randomIndex].author;

    if(indexAccessed.length == quotesCopy.length){
        indexAccessed = [];
    }
}
