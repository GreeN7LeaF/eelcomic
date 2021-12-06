var usernameArray = ['thaomy310702', 'eelcomic2021'];
var passwordArray = ['310702', '123456'];

localStorage.setItem('thaomy310702','310702');
localStorage.setItem('eelcomic2021','123456');

window.onload = function(){
    var inputs = document.querySelectorAll('input');
    for(var i = 0; i < inputs.length; i++) {
        // console.log(inputs[i].type);
        if(inputs[i].type.toLowerCase() == 'password'){
            // console.log(inputs[i]);
            inputs[i].value = ""; 
        }
    }
}

var begin = setInterval(() => {
        var pwC = document.getElementsByClassName('pw-container');
        for(var i = 0; i < pwC.length; i++){
            if(pwC[i].classList.contains('valid')){
                // console.log(pwC[i]);
                pwC[i].classList.remove('valid');
            }
        }

        var ps = document.getElementById("pss");
        var rp = document.getElementById("rp-pss");
        if(ps.value.length > 5){
            var temp = ps.parentElement;
            temp.classList.add('valid');
        }
        if(rp.value.length > 5){
            var temp = rp.parentElement;
            temp.classList.add('valid');
        }
    }, 100);

function validation(){
    var user = document.getElementById('username').value;
    var pw = document.getElementById('pss').value;
    // var valid = false;

    // check a valid username
    if(user in localStorage){
        if(localStorage[user] === pw){
            // console.log('yes');
            window.location.href = "/home.html";
        }else{
            alert('Mật khẩu chưa đúng');
        }
    }else{
        alert('Tài khoản không hợp lệ, bạn đã đăng kí làm thành viên của Eel Comic chưa?');
    }
}

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
    
      input.focus();
  
      return true;
  
    } else {
      alert("Email không hợp lệ");
  
      input.focus();
  
      return false;
  
    }

    const channel = new BroadcastChannel('');
  
}
function match() {
    var ps = document.getElementById("pss");
    var rp = document.getElementById("rp-pss");
    if (rp.value != ps.value) {
        return false;
    } else {
        return true;
    }
}

function registion(){
    var email = document.getElementById('email');
    var pw = document.getElementById('pss');
    var pwContainer = pw.parentElement;

    if(pwContainer.classList.contains('valid')){
        pwContainer.classList.remove('valid');
    }

    // check if an email valid or not
    if(ValidateEmail(email)){
        // console.log("email valid");
        if(email in localStorage){
            alert('Tài khoản này đã tồn tại');
        }else{
            if(pw.value.length > 5 && match()){
                alert('Đăng kí thành công, hãy đăng nhập lại bằng tài khoản này nhé');
                
            }else{
                alert('Mật khẩu chưa khớp');
            }
        }
    }else{
        console.log('no');
    }
}