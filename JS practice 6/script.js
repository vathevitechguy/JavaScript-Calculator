var btns = document.querySelector('.btn');
var screen = document.querySelector('.screen');
var equalBtn = document.querySelector('.btn-equal');
var clearBtn = document.querySelector('.btn-clear');

for (let i = 0;  i < btns.length; i++) {
    btns[i].addEventListener('click', function(){
        var number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}

equalBtn.addEventListener('click', function(){
    let value = eval(screen.value);
    screen.value = value;
})

clearBtn.addEventListener('click', function(){
    screen.value = '';
})

