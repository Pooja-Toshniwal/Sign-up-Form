const check = () => {
    const pass = document.querySelector('input[name="password"]').value;
    const repass = document.querySelector('input[name="confirm"]').value;
    if (pass === repass) {
        document.querySelector('.pass_wrong').innerHTML = '';
    } else {
        console.log("hjfjeghk");
        document.querySelector('.pass_wrong').innerHTML = 'Incorrect';
    }
}