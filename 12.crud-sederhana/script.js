const tombol = document.getElementById('tombol');


function buatBaris(nama, email, alamat) {
    const inputNama = document.createElement('td');
    const inputEmail = document.createElement('td');
    const inputAlamat = document.createElement('td');

    inputNama.append(nama);
    inputEmail.append(email);
    inputAlamat.append(alamat);

    const tr = document.createElement('tr');
    tr.append(inputNama, inputEmail, inputAlamat);

    const tabel = document.querySelector('.data');
    tabel.append(tr);

}

tombol.addEventListener('click', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value;

    console.log(nama, email, alamat);

    buatBaris(nama, email, alamat);
});
