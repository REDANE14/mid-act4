var quoteAPI = 'https://type.fit/api/quotes';
var button1 = document.querySelector('.new-quote')
var button2 = document.querySelector('.copyQuote')

button1.addEventListener('click', function() {
    fetch(quoteAPI)
        .then(res => res.json())
        .then(data => JSON.stringify(data[Math.floor(Math.random(data) * data.length)]))
        .then(data2 => displayQuote(` "${JSON.parse(data2).text}" - "${JSON.parse(data2).author}"`))

})

button2.addEventListener('click', function() {
    var quoteText = document.querySelector('.quote-text')
    var result = quoteText.innerText
    navigator.clipboard.writeText(result)

})


function displayQuote(quote) {
    var quoteText = document.querySelector('.quote-text')
    quoteText.innerHTML = `<strong> ${quote} </strong>`;
    console.log(quote)

}

var quoteText = document.querySelector('.quote-text')
quoteText.innerHTML = `<strong> Hell there, Welcome to random quotes generator!! </strong>`;