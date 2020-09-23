console.log('hello world how are u')
var text = document.getElementById('text');

var word = text.getElementsByTagName('span');

var i = 0;
function rotator() {
    word[i].style.display = 'none';

    i = (i + 1) % word.length;

    word[i].style.display = 'initial';
}
setInterval(rotator, 1000);