const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        // All clear function //
        if (item.id == 'clear') {
            display.innerText = '';
        }
        // Backspace fuction //
        else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length-1);
        }
        // Percent(%) function
        else if (item.id=='%' && display.innerText != '') {
            display.innerText = display.innerText/100;
        }
        // Should not have more than one decimal
        else if (item.id=="." && display.innerText.includes(".")) {
            return
        }
        else if (item.id=='%' && display.innerText == '') {
            display.innerText = 'NaN';}
        // Equal function starts.
        else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        }
        else if (display.innerText == '' && item.id=='equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } //Equal function ends.
        else if (display.innerText == '' && item.id=='.') {
            display.innerText = '0.'
        }

        // Concatenate function
        else {
            display.innerText += item.id;
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}
   