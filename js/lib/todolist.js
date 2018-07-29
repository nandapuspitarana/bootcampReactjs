const judulDom = document.getElementById('salam');
const formSubmit = document.getElementById('formSubmit');
// buatlah variel dom yang mengarah ke input
const isiDom = document.getElementById('isi');
// buatlah variel dom yang mengarah ke button
const tombolDom = document.getElementById('tombol');
// buatlah variel dom yang mengarah ke ul
const listDom = document.getElementById('list');
// varibel pembuka list
const listHTML = "<div id='list' class='alert alert-warning alert-dismissible fade show' role='alert'>"
// varibel penutup list
const listHTML2 = "<button type='button' class='close' data-dismiss='alert' aria-label='Close' onClick='remove(${i})'><span aria-hidden='true'>&times;</span></button></div>"

// (salah) template list literalnya ingat pakai backlick yang ada di atas tab keyboard
// const templateListLiteral = `<div id="list" class="alert alert-warning alert-dismissible fade show" role="alert">${data[i]}<button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick="remove(${i})"><span aria-hidden="true">&times;</span></button></div>`
// 01 tampung semua array yang mau disimpan
let data = [];
// 04 get semua data dari lokal memori
localData = JSON.parse(localStorage.getItem('isiData'));
// di check sebelum input data ke dalam
if(localData != null){
    data = localData;
}

// varibel fungsi annonimus
const fungsiTodo = function(){
    // ngeget data yg diinput
    // menyimpan data yang di get ke var data
    const tambah = isiDom.value
    // menambahkan data yg disimpan
    // listDom.innerHTML = listDom.innerHTML + listHTML + data + listHTML2
    // 02 push data
        data.push(tambah);
        // nampilin data onclick
        render();
        // 03 upload ke local storage
        localStorage.setItem('isiData', JSON.stringify(data))
        // input valuenya harus kosong
        isiDom.value = ""
}

// 05 bikin fungsi buat looping data untuk dikeuarkan
function render(){
    let html = "";
    for(var i = 0; i < data.length; i++){
        // html += listHTML + data[i] + listHTML2
        // 08 template list literalnya ingat pakai backlick yang ada di atas tab keyboard
        html += `<div id="list" class="alert alert-warning alert-dismissible fade show" role="alert">${data[i]}<button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick="remove(${i})"><span aria-hidden="true">&times;</span></button></div>`;
    }

    listDom.innerHTML = html;
}

// 06 buat masukin looping
render()

    // jika disubmit
    formSubmit.addEventListener('submit', fungsiTodo)

// 07 hapus data local storage
function remove(id){
    data.splice(id, 1);
    localStorage.setItem('isiData', JSON.stringify(data));
    render();
}