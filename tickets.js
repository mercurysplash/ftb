var letter = "";

function ValidName() {

    var re = /^[A-Za-zА-Яа-яЁё\-]{2,20}$/i;
    var name = document.getElementById("name").value;
    var valid = re.test(name);
    if (name == "") output = 'Введите Ваше имя\n';
    else {
        if (!valid) {
            output = 'Имя введено неправильно\n';
            document.getElementById("name").focus();
        }
        else output = "";
    }
  //  document.getElementById('message1').innerHTML = output;
    letter = output+letter;
    return valid;
}
function ValidSname() {

    var re = /^[A-Za-zА-Яа-яЁё0-9\-]{2,40}$/i;
    var sname = document.getElementById("sname").value;
    var valid = re.test(sname);
    if (sname == "") output = 'Введите Вашу фамилию \n';
    else {
        if (!valid) {
            output = 'Фамилия введена неправильно\n';
            document.getElementById("sname").focus();
        }
        else output = "";
    }
 //   document.getElementById('message2').innerHTML = output;
    letter = output+letter;
    return valid;
}
function ValidAge() {

    var re = /^[1-9]{1}[0-9]{1}$/i;
    var age = document.getElementById("age").value;
    var valid = re.test(age);
    if (age == "") output = 'Введите Ваш возраст\n';
    else {
        if (!valid || age<16) {
            output = 'Возраст введен неправильно или ваш возраст меньше 16 лет\n';
            document.getElementById("age").focus();
        }
        else output = "";
    }
 //   document.getElementById('message3').innerHTML = output;
    letter = output+letter;
    return valid;
}

function ValidPhone() {
    var re = /^[\+0-9\-]{4,14}$/i;
    var phone = document.getElementById("phone").value;
    var valid = re.test(phone);
    if (phone == "") output = 'Введите Ваш номер телефона\n';
    else {
        if (valid) output = "";
        else {
            output = 'Номер телефона введен неправильно!\n';
            document.getElementById("phone").focus();
        }
    }
   // document.getElementById('message4').innerHTML = output;
    letter = output+letter;
    return valid;
} 

function ValidMail() {
    var re = /^[a-z]{1}[a-z0-9\.\_]*@[a-z]+\.[a-z]{2,4}$/i;
    var email = document.getElementById("email").value;
    var valid = re.test(email);
    if (email == "") output = 'Введите Ваш адрес электронной почты\n';
    else {
        if (valid) output = "";
        else {
            output = 'Адрес электронной почты введен неправильно!\n';
            document.getElementById("email").focus();
        }
    }
  //  document.getElementById('message5').innerHTML = output;
    letter = output+letter;
    return valid;
}

function GetAlert(){    
    if (letter == "") alert("Билет успешно забронирован");
    else {alert(letter); letter=""}
}