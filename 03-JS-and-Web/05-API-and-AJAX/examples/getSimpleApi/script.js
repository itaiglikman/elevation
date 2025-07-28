const jokeText = document.getElementById('jokeText');
const url = 'https://official-joke-api.appspot.com/random_joke'

document.getElementById('jokeBtn').addEventListener('click', () => {
    jokeText.innerText = 'loading'
    fetch(url)
        .then(response => response.json())
        .then(data => jokeText.innerText = data.setup + '\n' + data.punchline)
        .catch(err => jokeText.innerText = err)
})
