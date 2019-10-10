const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .buttons button').forEach(btn=>btn.addEventListener('click', btnClicked));

document.querySelector('.calc .eq').addEventListener('click', checkInfinity);
document.querySelector('.calc .clear').addEventListener('click', clear);
document.querySelector('.calc .back').addEventListener('click', back);

//TODO///////////////////////////////////////
function btnClicked(ev) {
    //     const displayValue = display.value;
    //     const lastChar = displayValue[displayValue.length-1];
    // if (lastChar === '+'
    //     || lastChar === '-'
    //     || lastChar === '*'
    //     || lastChar === '/'
    //     || lastChar === '.') {
    //         let newString = displayValue.substr(0, displayValue.length-1) + ev.target.innerText;
    //         displayValue.value = newString;

    // } else {
    display.value += ev.target.innerText;

}
;/////////////////////////////////////////////////////

function back() {
    const exp = display.value;
    display.value = exp.substr(0, exp.length - 1);
}
;
function clear() {
    display.value = '';
}
;
function checkInfinity() {
    const displayValue = display.value;
    if (eval(displayValue) !== Infinity) {
        display.value = eval(displayValue);
    } else {
        display.value = '';
        display.placeholder = 'Error';
    }
    ;
}
;