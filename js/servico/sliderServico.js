var btnPrevious = document.getElementById('voltar');
var btnNext = document.getElementById('avancar');

var first = document.getElementById('first')

var count = 0;

btnNext.addEventListener('click', function () {


    if (count == 4) {
        count = -1;
    }

    count++

    var value = -20 * count;

    first.style.setProperty('margin-left', value + "%")


})

btnPrevious.addEventListener('click', function () {

    if (count == 0) {
        count = 5;
    }

    count--

    var value = -20 * count;

    first.style.setProperty('margin-left', value + "%")
})