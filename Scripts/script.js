//Modal
//Opening
var modalWrapper = document.getElementById("modal-wrapper");
var modalClose = document.getElementsByClassName("modal-content")

var modalButton = document.getElementsByClassName("works-button-modal")
for (var button of modalButton){
  const modalId = button.getAttribute('data-modal-id');
  button.addEventListener('click', () => {
    modalWrapper.style.display = "block";
    var modalItem = document.getElementById(modalId)
    modalItem.style.display = "flex";
  })
}

//Closing
var closeButton = document.getElementsByClassName("modal-close")
for (var button of closeButton){
  button.addEventListener('click', () => {
    modalWrapper.style.display = "none";
    for (var item of modalClose){
      item.style.display = "none"
    }
  })
}
window.onclick = function(event) {
  if (event.target == modalWrapper) {
    modalWrapper.style.display = "none";
    for (var item of modalClose){
      item.style.display = "none"
    }
  }
}
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalWrapper.style.display = 'none'
    for (var item of modalClose){
      item.style.display = "none"
    }
  }
})
