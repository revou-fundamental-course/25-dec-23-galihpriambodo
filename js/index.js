// Membuat perhitungan Keliling Segitiga
    function HitungKeliling() {
    // Mengambil elemen di dalam HTML dengan id dan dimasukkan ke dalam variabel let
        let inputSisiSatu = document.getElementById("input-sisi-satu");
        let inputSisiDua = document.getElementById("input-sisi-dua");
        let inputSisiTiga = document.getElementById("input-sisi-tiga");
        let outputKeliling = document.getElementById("output-keliling");

// Memberikan sebuah value pada variabel yang memiliki nilai
        let sisiSatu = parseFloat(inputSisiSatu.value);
        let sisiDua = parseFloat(inputSisiDua.value);
         let sisiTiga = parseFloat(inputSisiTiga.value);

// Masuk ke dalam proses sisisatu, sisidua, sisitiga
    if (isNaN(sisiSatu) || isNaN(sisiDua) || isNaN(sisiTiga)) {
        // Cetak konten "*Mohon untuk isi nilai Alas dan Tingginya terlebih dahulu"
        outputKeliling.textContent = "*Mohon untuk isi nilai Input Sisi 1, Input Sisi 2, Input Sisi 3";
    }

// Jika tidak masuk ke dalam proses perhitungan menggunakan rumus
    else {
        // luas adalah hasil perhitungan dari (sisi + sisi + sisi)
        let keliling = sisiSatu + sisiDua + sisiTiga;

        // fungsi ini untuk menghilangkan konten "*Mohon untuk isi nilai Alas dan Tingginya terlebih dahulu"
        outputKeliling.textContent = "" 
        // Cetak hasil di dalam HTML
        outputKeliling.innerHTML = 
        `<p>Hasil :</p>
        <p>L = (${sisiSatu} + ${sisiDua} + ${sisiTiga})</p>
        <p>L = ${keliling}</p>`;
    }
}

// function ResetKeliling() = fungsinya sama dengan function ResetKeliling()
function ResetKeliling() {
    let inputSisiSatu = document.getElementById("input-sisi-satu");
    let inputSisiDua = document.getElementById("input-sisi-dua");
    let inputSisiTiga = document.getElementById("input-sisi-tiga");
    let outputKeliling = document.getElementById("output-keliling");
    inputSisiSatu.value = "";
    inputSisiDua.value = "";
    inputSisiTiga.value = "";
    outputKeliling.textContent = "";
}

// Membuat perhitungan Luas Segitiga
function HitungLuas() {
    // Mengambil elemen di dalam HTML dengan id dan dimasukkan ke dalam variabel let
    let inputAlas = document.getElementById("masukanalas");
    let inputTinggi = document.getElementById("masukantinggi");
    let outputLuas = document.getElementById("output-luas");

    // Memberikan value pada variabel yang memiliki nilai
    let Alas = parseFloat(inputAlas.value);
    let Tinggi = parseFloat(inputTinggi.value);

    // Masuk ke dalam proses jika alas dan tingginya kosong maka true
    if (isNaN(Alas) || isNaN(Tinggi)) {
        // Cetak konten "*Mohon untuk isi nilai Alas dan Tingginya terlebih dahulu"
        outputLuas.textContent = "*Mohon untuk isi nilai Alas dan Tingginya terlebih dahulu";
    }
    // Jika tidak masuk ke dalam proses perhitungan menggunakan rumus
    else {
        // luas adalah hasil perhitungan dari (alas * tinggi) / 2
        let luas = (Alas * Tinggi) / 2;

        // fungsi ini untuk menghilangkan konten "*Mohon untuk isi nilai Alas dan Tingginya terlebih dahulu"
        outputLuas.textContent = "" 
        // Cetak hasil di dalam HTML
        outputLuas.innerHTML = 
        `<p>Hasil :</p>
        <p>L = (${Alas} x ${Tinggi}) / 2</p>
        <p>L = ${luas}</p>`;
    }
}

// Fungsi untuk membuat Reset Luas
function ResetLuas() {
    // Mengambil elemen di dalam HTML dengan id dan dimasukkan ke dalam variabel let
    let inputAlas = document.getElementById("masukanalas");
    let inputTinggi = document.getElementById("masukantinggi");
    let outputLuas = document.getElementById("output-luas");
    // Fungsi ini untuk menghilangkan nilai Alas , Tinggi 
    inputAlas.value = "";
    inputTinggi.value = "";
    outputLuas.textContent = "";
}
