document.querySelector('#submit').onclick = function (event) {
    event.preventDefault();
    console.log('work')

    let name = document.querySelector('#login').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirmPassword').value;
    
    let data = {
        "name": name,
        "email": email,
        "password": password,
        "confirmPassaword": confirmPassword,
    }

    ajax('core/signup.php', 'post', login, data)

    function login(result) {
        console.log(result);
        if (result == 2) {
            alert('Вы ввели не все данные!');
        }
        else if (result == 1) {
            alert('Регистрация прошла успешно!')
        }
        else {
            alert('Ошибка! Попробуйте ещё раз.')
        }
    }
}