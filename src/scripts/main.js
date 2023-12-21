document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-random').addEventListener('submit', function(event) {
        event.preventDefault();
        let maximunNumber = document.getElementById('max-number').value;
        maximunNumber = parseInt(maximunNumber);

        let randomNumber = Math.random() * maximunNumber;
        randomNumber = Math.floor(randomNumber + 1)

        document.getElementById('result-value').innerText = randomNumber
        document.querySelector('.result').style.display = 'block'
    })
})