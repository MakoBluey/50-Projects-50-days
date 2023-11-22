let cards = document.querySelectorAll(".panel");

cards.forEach(card => {
    card.addEventListener("click",() =>{
        removeActiveStatus()
        card.classList.remove('w-20')
        card.classList.add('w-96')
    })    
});

function removeActiveStatus() {
    cards.forEach(card => {
        card.classList.remove('w-96')
        card.classList.add('w-20')
    })
}