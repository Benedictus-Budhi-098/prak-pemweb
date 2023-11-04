// <!-- Nama   : Benedictus Budhi Dharmawan -->
// <!-- NIM    : 121140098 -->
// <!-- Kelas  : Pemrograman Web RB -->


//mengambil print dan button dari html
const print = document.querySelector('.print')
const buttonn = document.querySelectorAll('button')

//mengelompokkan charater spesial
const char = ['+', '-', '*', '/', '%', '=']

//bakal hasil yang akan diprint pada layar
let out = ""

//fungsi kalkulator dengan val adalah variabel input saat tombol ditekan
const calct = (val) => {
    if (val === "=" && out!== ""){
        //merubah fungsi yang hanya % menjadi /100 agar angka dioperasikan
        out = eval(out.replace("%", "/100"))
    }
    else if (val === "AC"){
        //menghapus seluruh input yang telah dilakukan
        out = ""
    }
    else if (val === "Del"){
        //merubah input menjadi string, kemudian memotong tepat 1 digit bagian belakang string
        out = out.toString().slice(0, -1)
    }

    else {
        //ketika val melakukan input sesuai dengan char spesial, maka bilangan dioperasikan
        if (out === "" && char.includes(val))return

        //fungsi agar bilangan dapat terus dioperasikan
        out = out + val
    }

    //fungsi untuk menampilkan hasil akhir pada variabel "out"
    print.value = out
};

//buttonn menyimpan tombol dalam bentuk array
buttonn.forEach((button) => {

    //saat tombol ditekan, terjadi event "click", kemudian terjadi pemanggilan fungsi "calct"
    button.addEventListener("click", (e) => calct(e.target.dataset.value));
});