const form = document.getElementById('form');

var quantity1 = 0;
document.getElementById("itemQuantity1").innerText=quantity1;

function increment1 () {
    quantity1 = increment(quantity1)
    document.getElementById("itemQuantity1").innerText=quantity1;
}
function decrement1 () {
    quantity1 = decrement(quantity1)
    document.getElementById("itemQuantity1").innerText=quantity1;
}

var quantity2 = 0;
document.getElementById("itemQuantity2").innerText=quantity2;
function increment2 () {
    quantity2 = increment(quantity2)
    document.getElementById("itemQuantity2").innerText=quantity2;
}
function decrement2 () {
    quantity2 = decrement(quantity2)
    document.getElementById("itemQuantity2").innerText=quantity2;
}

var quantity3 = 0;
document.getElementById("itemQuantity3").innerText=quantity3;
function increment3 () {
    quantity3 = increment(quantity3)
    document.getElementById("itemQuantity3").innerText=quantity3;
}
function decrement3 () {
    quantity3 = decrement(quantity3)
    document.getElementById("itemQuantity3").innerText=quantity3;
}

var quantity4 = 0;
document.getElementById("itemQuantity4").innerText=quantity4;
function increment4 () {
    quantity4 = increment(quantity4)
    document.getElementById("itemQuantity4").innerText=quantity4;
}
function decrement4 () {
    quantity4 = decrement(quantity4)
    document.getElementById("itemQuantity4").innerText=quantity4;
}

var quantity5 = 0;
document.getElementById("itemQuantity5").innerText=quantity5;
function increment5 () {
    quantity5 = increment(quantity5)
    document.getElementById("itemQuantity5").innerText=quantity5;
}
function decrement5 () {
    quantity5 = decrement(quantity5)
    document.getElementById("itemQuantity5").innerText=quantity5;
}

var quantity6 = 0;
document.getElementById("itemQuantity6").innerText=quantity6;
function increment6 () {
    quantity6 = increment(quantity6)
    document.getElementById("itemQuantity6").innerText=quantity6;
}
function decrement6 () {
    quantity6 = decrement(quantity6)
    document.getElementById("itemQuantity6").innerText=quantity6;
}

var quantity7 = 0;
document.getElementById("itemQuantity7").innerText=quantity7;
function increment7 () {
    quantity7 = increment(quantity7)
    document.getElementById("itemQuantity7").innerText=quantity7;
}
function decrement7 () {
    quantity7 = decrement(quantity7)
    document.getElementById("itemQuantity7").innerText=quantity7;
}

var quantity8 = 0;
document.getElementById("itemQuantity8").innerText=quantity8;
function increment8 () {
    quantity8 = increment(quantity8)
    document.getElementById("itemQuantity8").innerText=quantity8;
}
function decrement8 () {
    quantity8 = decrement(quantity8)
    document.getElementById("itemQuantity8").innerText=quantity8;
}

var quantity9 = 0;
document.getElementById("itemQuantity9").innerText=quantity9;
function increment9 () {
    quantity9 = increment(quantity9)
    document.getElementById("itemQuantity9").innerText=quantity9;
}
function decrement9 () {
    quantity9 = decrement(quantity9)
    document.getElementById("itemQuantity9").innerText=quantity9;
}

var quantity10 = 0;
document.getElementById("itemQuantity10").innerText=quantity10;
function increment10 () {
    quantity10 = increment(quantity10)
    document.getElementById("itemQuantity10").innerText=quantity10;
}
function decrement10 () {
    quantity10 = decrement(quantity10)
    document.getElementById("itemQuantity10").innerText=quantity10;
}

function increment (total) {
    total = total + 1;
    return total;
}

function decrement (total) {
    if(total == 0) {
        total -= 0;
    }else {
        total -= 1;
    }
    return total;
}


// Form Validations
const name = document.getElementById('name');
const phonenum = document.getElementById('phoneNum');
const adr = document.getElementById('adr');
const date = document.getElementById('date');
const email = document.getElementById('email');
const check1 = document.querySelector('#prod1');
const check2 = document.querySelector('#prod2');
const check3 = document.querySelector('#prod3');
const check4 = document.querySelector('#prod4');
const check5 = document.querySelector('#prod5');
const check6 = document.querySelector('#prod6');
const check7 = document.querySelector('#prod7');
const check8 = document.querySelector('#prod8');
const check9 = document.querySelector('#prod9');
const check10 = document.querySelector('#prod10');
const errorElmnt = document.getElementById('errorMsg');

function validateCheckBox(){
    if(check1.checked){
        if(quantity1 < 1){
            return false;
        }
    }
    
    if(check2.checked){
        if(quantity2 < 1){
            return false;
        }
    }
    
    if(check3.checked){
        if(quantity3 < 1){
            return false;
        }
    }
    
    if(check4.checked){
        if(quantity4 < 1){
            return false;
        }
    }
    
    if(check5.checked){
        if(quantity5 < 1){
            return false;
        }
    }
    
    if(check6.checked){
        if(quantity6 < 1){
            return false;
        }
    }
    
    if(check7.checked){
        if(quantity7 < 1){
            return false;
        }
    }
    
    if(check8.checked){
        if(quantity8 < 1){
            return false;
        }
    }
    
    if(check9.checked){
        if(quantity9 < 1){
            return false;
        }
    }
    
    if(check10.checked){
        if(quantity10 < 1){
            return false;
        }
    }
}

form.addEventListener('submit', (e) => {
    let msg = []
    if (name.value === ''){
        msg.push('Please fill your name!')
    }
    
    if (name.value.length < 3){
        msg.push('Name must be longer than 2 characters!')
    }

    if (!isNaN(name.value)){
        msg.push('Name must only contain alphabets!')
    }

    if (adr.value === ''){
        msg.push('Please fill your address!')
    }

    if (phonenum.value === ''){
        msg.push('Please fill your phone number!')
    }

    if (isNaN(phonenum.value)){
        msg.push('There can be no characters in the phone number!')
    }

    if (phonenum.value.length > 15 || phonenum.value.length < 10){
        msg.push('Input a phone number with 10 to 15 digits!')
    }

    if (email.value === ''){
        msg.push('Please fill your email!')
    }

    if (date.value === ''){
        msg.push('Please choose the delivery date!')
    }

    if (!check1.checked && !check2.checked && !check3.checked && !check4.checked && !check5.checked && !check6.checked && !check7.checked && !check8.checked && !check9.checked && !check10.checked){
        msg.push('Choose atleast 1 product!')
    }

    if (validateCheckBox() == false){
        msg.push('Chosen Product Quantity must be above 0!')
    }

    if(msg.length > 0){
        e.preventDefault()
        errorElmnt.innerText = msg.join('\n')
    }
})