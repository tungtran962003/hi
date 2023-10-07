function mucGia() {
    var mucgia = document.getElementById("mucgia");
    var hang = document.getElementsByName("gia");
    if (mucgia.value == "chongia") {
        for (let i = 0; i < hang.length; i++) {
            hang[i].parentElement.style.display = "table-row";
        }
    } else if (mucgia.value == "duoi10tr") {
        for (let i = 0; i < hang.length; i++) {
            hang[i].parentElement.style.display = "table-row";
            if (Number(hang[i].innerHTML) > 10000000) {
                hang[i].parentElement.style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < hang.length; i++) {
            hang[i].parentElement.style.display = "table-row";
            if (Number(hang[i].innerHTML) < 10000000) {
                hang[i].parentElement.style.display = "none";
            }
        }
    }
}
function phongAnh(event) {
    var target = event.target;
    target.style.width = "300px";
    target.style.position = "absolute";
}
function onMouseOutEvent(event) {
    var target = event.target;
    target.style.width = "30px";
    target.style.position = "static";
}
var carts = {};
function tick() {
    var chk = document.getElementsByName("checkbox");
    for (let i = 0; i < chk.length; i++) {
        var soluongi = chk[i].parentNode.parentNode.querySelector("input[type=number]");
        soluongi.disabled = !chk[i].checked;
        if (chk[i].checked == true) {
            var donGia = chk[i].parentNode.parentNode.children[3].innerHTML;
            var tenSp = chk[i].parentNode.parentNode.children[1].innerHTML;
            var thanhtien = chk[i].parentNode.parentNode.children[5];
            var soLuong = soluongi.value;
            if (soLuong < 0) {
                alert("Số lượng phải lớn hơn 0");
                soLuong = 0;
                soluongi.value = 0;
            }
            if (carts[tenSp]) {
                carts[tenSp].soLuong = soLuong;
            } else {
                carts[tenSp] = new cartItem(donGia, soLuong);
            }
            thanhtien.innerHTML = carts[tenSp].calculate();
            document.getElementById("sum").innerHTML = tinhTong();
        } else {
            var donGia = chk[i].parentNode.parentNode.children[3].innerHTML;
            var tenSp = chk[i].parentNode.parentNode.children[1].innerHTML;
            var thanhtien = chk[i].parentNode.parentNode.children[5];
            var soLuong = 0;
            soluongi.value = 0;
            if (carts[tenSp]) {
                carts[tenSp].soLuong = soLuong;
            } else {
                carts[tenSp] = new cartItem(donGia, soLuong);
            }
            thanhtien.innerHTML = "";
            document.getElementById("sum").innerHTML = tinhTong();
        }
    }
}
var tinhTong = function () {
    var tong = 0;
    for (var i = 0; i < Object.values(carts).length; i++) {
        tong += Object.values(carts)[i].calculate();
    }
    return tong;
}
function cartItem(_donGia, _soLuong) {
    this.donGia = parseInt(_donGia);
    this.soLuong = _soLuong;
    this.calculate = function () {
        return this.donGia * this.soLuong;
    }
}