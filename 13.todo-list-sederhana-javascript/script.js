const tombol = document.querySelector('.tombol');
        
function buatList(input) {
    const table = document.querySelector('table');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    
    const inputToDo = document.createElement('td');
    inputToDo.append(input);

    table.append(tr);
    tr.append(inputToDo, tombolHapus());
}

function tombolHapus() {
    return buatSelesai('red', function(event) {
        clear(event.target.parentElement);
    });
}
function buatSelesai(buttontypeclass, eventListener) {
    const btn = document.createElement('input');
    btn.setAttribute('value', 'hapus');
    btn.setAttribute('type', 'submit');
    btn.classList.add(buttontypeclass);
    btn.addEventListener('click', function(event) {
        eventListener(event);
    });
    return btn;
}
function clear(element) {
    element.remove();
    alert('List berhasil dihapus!');
}


tombol.addEventListener('click', function() {
    let input = document.getElementById('input').value;
    
    buatList(input);
});