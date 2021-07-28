const tombol = document.getElementById('tombol');


function buatBaris(nama, email, alamat) {
    const inputNama = document.createElement('td');
    const inputEmail = document.createElement('td');
    const inputAlamat = document.createElement('td');

    inputNama.append(nama);
    inputEmail.append(email);
    inputAlamat.append(alamat);

    const tr = document.createElement('tr');
    tr.append(inputNama, inputEmail, inputAlamat, hapusData());

    const tabel = document.querySelector('.data');
    tabel.append(tr);

}



function hapusData() {
    return buatTombolHapus('red', function(event) {
        hapusSelesai(event.target.parentElement);
    });
}




function buatTombolHapus(buttonTypeClass, eventListener) {
    const button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Hapus');
    button.classList.add(buttonTypeClass);
    button.addEventListener('click', function(event) {
        eventListener(event);
    });
    return button;
}


tombol.addEventListener('click', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value;

    console.log(nama, email, alamat);

    buatBaris(nama, email, alamat);
});






function hapusSelesai(taskElement) {
    taskElement.remove();
}