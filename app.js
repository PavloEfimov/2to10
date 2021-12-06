let btn = document.querySelector('#button');
let input = document.querySelector('#input');
let inputBin = document.querySelector('#inputBin');
let clearBtn = document.querySelector('#clearBtn');
let output = document.querySelector('#output');
let binNumber='';


btn.addEventListener('click', convert2to10);
input.addEventListener('keydown', checkInput)

function checkInput (e){
    if ((e.key!=='0')&&(e.key!=='1')) {
        alert ('введенный символ - не двоичное число');
    
    } else if (binNumber.length>8){
        alert ('длина двоичного числа превышает 8')
    } else {
        binNumber = binNumber + e.key
    }
   input.value = '';
   inputBin.textContent = binNumber;
};
function convert2to10() {
    let number10=0;
    for (let i = binNumber.length-1; i>=0; i--){
        number10 =number10 + binNumber[binNumber.length-1-i]*Math.pow(2, i)
    }
    console.log ('number10 ',number10)
    output.textContent = number10;
    return null;
};
clearBtn.addEventListener('click', function(){
    input.value = '';
    inputBin.textContent = '';
    output.textContent = '';
    binNumber=''
})