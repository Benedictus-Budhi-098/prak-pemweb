// Nama    : Benedictus Budhi Dharmawan
// NIM     : 121140098
// Kelas   : Pemrograman Web (RB)

//fungsi membagi 2 bilangan sesuai input
//namun hanya valid untuk input dengan bilangan genap
function gen(input){
    return input/2;
}

//fungsi utama
function ganjil_genap(){
    //mengambil input dari file html pada id "input"
    var input = document.getElementById("input").value

    //bilangan yang diinput adalah bilangan bulat positif
    if (input > 0){

        //deklarasi variabel ganjil dan genap
        var odd = 0;
        var even = 0;
        
        //jika input genap, maka panggil fungsi pertama
        if (input%2 == 0){
            odd = gen(input);
            even = gen(input);

        //jika input ganjil, maka pada bilangan ganjil ditambah 0.5, sedangkan pada bilangan genap dikurang 0.5
        } else {
            odd = gen(input) + 0.5;
            even = gen(input) - 0.5;
        }

        //mengambil id odd dan even pada js yang telah dihitung untuk ditampilkan pada html
        document.getElementById('odd').innerHTML=odd;
        document.getElementById('even').innerHTML=even;
    }
}