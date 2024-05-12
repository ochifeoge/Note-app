const createBtn = document.querySelector("button");
const notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}


createBtn.addEventListener('click', () =>{
    let noteField = document.createElement('p');
    let delet = document.createElement('img');

    noteField.className = 'input-box';
    noteField.setAttribute('contenteditable', 'true');
    delet.src = "Image/delete.png";

    notesContainer.appendChild(noteField).appendChild(delet);
});

notesContainer.addEventListener('click', (e)=> {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === 'P') {
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
});



