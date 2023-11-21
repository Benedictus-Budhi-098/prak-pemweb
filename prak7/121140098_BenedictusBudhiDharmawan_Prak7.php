<?php

class data {  //merepresentasikan kelas berisi nama dan nim seseorang
    public $nama;
    public $nim;
    public function __construct($nama, $nim) { //fungsi untuk mengambil nama dan nim
        $this->nama = $nama;
        $this->nim = $nim;
    }
}

class mhs extends data{ //kelas baru yang merupakan turunan dari kelas "data"
    public $prodi;
    public function __construct($nama, $nim, $prodi){
        parent::__construct($nama, $nim); //mengambil variabel yang berasal dari kelas induk untuk digunakan pada kelas turunan
        $this->prodi = $prodi; 
    }
 
    function display(){ //fungsi untuk mencetak output
        echo "Nama  : " . $this->nama . "<br>";
        echo "NIM   : " . $this->nim . "<br>";
        echo "Prodi : ". $this->prodi . "<br>";
        echo "<br>";
    }
}


//objek yang menggunakan kelas "mhs" menggunakan variabel nama, nim dan prodi
$mahasiswa_1 = new mhs("Benedictus Budhi Dharmawan", "121140098", "Teknik Informatika");
$mahasiswa_2 = new mhs("Ahmad Rizki Maulana", "121140105", "Teknik Informatika");

//memanggil fungsi display untuk menampilkan objek yang telah dibuat
$mahasiswa_1->display();
$mahasiswa_2->display();
?>