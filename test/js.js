let modal = document.querySelector(".modal");
let trigger = document.getElementsByClassName("trigger");
let closeButton = document.querySelector(".close-button");

const userInfo = {
    "members": {

    }
};

function toggleModal (e){
    modal.classList.toggle("show-modal");
    alert(this.id);

}

function closeModal() {
    modal.classList.toggle("show-modal");
}


function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

console.log(trigger);

Array.from(trigger).forEach(function(element) {
    let id = element.id;
    element.addEventListener("click", toggleModal);
});
// trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", closeModal);
window.addEventListener("click", windowOnClick);