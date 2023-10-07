let listSanPham = [
    {
        name: 'iphone',
        giaTien: 1000
    },
    {
        name: 'android',
        giaTien: 2000
    },
    {
        name: 'nokia',
        giaTien: 3000
    },
    {
        name: 'oppo',
        giaTien: 4000
    }
]

let iphone = 0 
let android = 0
let nokia = 0 
let oppo = 0

function countMoney(idCount, idMoney, name) {
    let soLuong = document.getElementById(idCount).value
    if (soLuong === null || soLuong === '') {
        soLuong = 0
    }
    soLuong = Number(soLuong)
    let sanPham = listSanPham.find(item => item.name === name)
    document.getElementById(idMoney).innerHTML = (soLuong * sanPham.giaTien) + ' VND'
    if (name === 'iphone') {
        iphone = soLuong * sanPham.giaTien
    }
    if (name === 'android') {
        android = soLuong * sanPham.giaTien
    }
    if (name === 'nokia') {
        nokia = soLuong * sanPham.giaTien
    }
    if (name === 'oppo') {
        oppo = soLuong * sanPham.giaTien
    }
    let total = iphone + android + nokia + oppo
    document.getElementById('total-money').innerHTML = total + ' VND'
}

