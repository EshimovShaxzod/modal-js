
let showBtn = document.getElementById('show-btn');
let closeBtn = document.getElementById('close-btn');
let elModal = document.getElementById('modal');
let elOverlay = document.getElementById('overlay');

function addHidden(){
    elModal.classList.add('hidden');
    elOverlay.classList.add('hidden');
}

function removeHidden(){
    elModal.classList.remove('hidden');
    elOverlay.classList.remove('hidden');
}

showBtn.addEventListener('click', () =>{
    showBtn.style.display = 'none';
    removeHidden()
})

closeBtn.addEventListener('click', () =>{
    showBtn.style.display = 'block';
    addHidden()
})

