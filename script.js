let correct = document.getElementById('right');
let wrong = document.getElementById('wrong');
let correctMsg = 'You have submited succsfully';
let wrongMsg = 'You have failled to submit';
let btn = document.getElementById('formBtn');
btn.addEventListener('click', ()=>{
    let fullName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let comment = document.getElementById('comment').value;
    if (fullName && email && phone && comment != ''){
        document.getElementById('correct').innerText = correctMsg;
    } else {
        document.getElementById('wrong').innerText = wrongMsg;
    }
})