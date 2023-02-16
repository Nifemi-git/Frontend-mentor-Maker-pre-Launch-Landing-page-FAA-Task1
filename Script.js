let getEmail = document.getElementById('input-email');

let button = document.getElementById('notify-btn');

const regex = /^[a-z 0-9]+@[a-z]+\.com$/;

function validate() {
    let result = regex.test(getEmail.value);

    if (getEmail.value === '') {
        alert("Oops! Please add your email address");
    }else if(result === true){
        alert(`Thanks for signing up with us, we've sent you an email, check your inbox!`)
    }else if(result === false){
        alert(`Oops! That doesn't look like an email address`);
    }
}

button.onclick = validate;
