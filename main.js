let out = document.getElementById('alert')
let input = document.getElementById('input')
let text = `<div class="alert alert-light bg-dark text-center " role="alert">
<strong><span><i class="fa fa-gift" aria-hidden="true"></i></span> INPUT SOME MONEY FIRST </strong>
</div>`

input.addEventListener('keyup', filterNumber)
out.innerHTML = text;

function chosePresent(money) {

    let present = ''
    let link = ''

    if (money <= 0) {
        present = 'INPUT SOME MONEY FIRST'
    } else if (money <= 10) {
        present = 'Card 💟'
    } else if (money <= 100) {
        present = 'Chocolates 🍫'
    } else if (money <= 250) {
        present = 'Flowers 🌻🌹'
    } else {
        present = 'Ring 💍';
    }

    text = `<div class="alert alert-light bg-dark text-center " role="alert">
<strong><span><i class="fa fa-gift" aria-hidden="true"></i></span> ${present}</strong>
</div>`


    out.innerHTML = text;

}

function filterNumber(e) {

    let m = e.target.value.slice(-1) //LAST CHARACTER ENTERED
    let n = Number(e.target.value) //INPUT TO NUMBER OR NaN
    let o = e.target.value.substr(0, e.target.value.length - 1) //THE INPUT VALUE MINUS THE LAST CHAR ENTERED
    if (!isNaN(n)) {
        chosePresent(n)
    } else if (m == '.') {
        if ((e.target.value.split('.')).length != 2) {
            e.target.value = o //ERASES LAST
        }
    } else {
        e.target.value = o //ERASES LAST
    }
}