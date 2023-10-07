function onInputText(id) {
    document.getElementById(id).innerHTML = ''
}

function checkName() {
    let name = document.getElementById('name').value
    if (name !== null && name.trim() === '') {
        document.getElementById('note-name').innerHTML = 'Chưa nhập tên'
        return false;
    }
    return true;
}

function checkEmail() {
    let email = document.getElementById('email').value
    if (email !== null && email.trim() === '') {
        document.getElementById('note-email').innerHTML = 'Chưa nhập email'
        return false;
    }
    return true;
}

function checkUser() {
    let user = document.getElementById('user').value
    if (user !== null && user.trim() === '') {
        document.getElementById('note-user').innerHTML = 'Chưa nhập tên đăng nhập'
        return false;
    }
    return true;
}

let pass 
function checkPass() {
    pass = document.getElementById('pass').value
    if (pass !== null && pass.trim() === '') {
        document.getElementById('note-pass').innerHTML = 'Chưa nhập mật khẩu'
        return false;
    }

    if (pass.trim() < 3) {
        document.getElementById('note-pass').innerHTML = 'Mật khẩu phải có ít nhất 3 kí tự'
        return false;
    }

    let passwordCharacter = pass.split("")
    if (!passwordCharacter.some(character => character.toLowerCase() !== character && character.toUpperCase() === character)) {
        document.getElementById('note-pass').innerHTML = 'Mật khẩu phải có ít nhất 1 chữ cái viết hoa'
        return false;
    }

    if (!passwordCharacter.some(character => !isNaN(character))) {
        document.getElementById('note-pass').innerHTML = 'Mật khẩu phải có ít nhất 1 số'
        return false;
    }

    return true;
}

function checkPass2() {
    let pass2 = document.getElementById('checkpass').value
    if (pass2 !== null && pass2.trim() === '') {
        document.getElementById('note-checkpass').innerHTML = 'Chưa nhập kiếm tra mật khẩu'
        return false;
    }
    if (pass !== pass2) {
        document.getElementById('note-checkpass').innerHTML = 'Mật khẩu không khớp'
        return false;
    }
    return true;
}

function checkBox() {
    let box = document.forms.myForm.checkbox
    let ischecked = false
    for (let index = 0; index < box.length; index++) {
        if (box[index].checked) {
            ischecked = true
            break
        }
    }
    if (ischecked) {
        return true;
    }
    document.getElementById('note-checkbox').innerHTML = 'Vui lòng chọn một sở thích'
    return false;
}


function checkForm() {
    let isValidName = checkName();
    let isValidEmail = checkEmail();
    let isValidUser = checkUser();
    let isValidPass = checkPass();
    let isVlidPass2 = checkPass2();
    let isValidCheckBox = checkBox();
    if (isValidName === true && isValidEmail ===true && isValidUser === true && isValidPass === true && isVlidPass2 === true && isValidCheckBox === true) {
        alert('Đăng kí thành công!')
    }
}