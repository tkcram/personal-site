//Modal
//Opening
var modalWrapper = document.getElementById("modal-wrapper");
var modalClose = document.getElementsByClassName("modal-content");
var modalButton = document.getElementsByClassName("works-button-modal");

for (var button of modalButton){
  const modalId = button.getAttribute('data-modal-id');
  button.addEventListener('click', () => {
    modalWrapper.style.display = "block";
    var modalItem = document.getElementById(modalId);
    modalItem.style.display = "flex";
    window.location.hash = modalId;
  });
};

document.addEventListener('DOMContentLoaded', function () {
  var skipId = window.location.hash;
  var skipType = skipId.split("-")[0];
  var skipDiv = document.querySelector(skipId);
  if(skipType == "#modal"){
    modalWrapper.style.display = "block";
    skipDiv.style.display = "flex";
  } else if (skipType == "#section") {
    skipDiv.scrollIntoView();
  };
}, false);

//Closing
var closeButton = document.getElementsByClassName("modal-close")
for (var button of closeButton){
  button.addEventListener('click', () => {
    modalWrapper.style.display = "none";
    for (var item of modalClose){
      item.style.display = "none";
      window.location.hash = "";
    };
  });
};
window.onclick = function(event) {
  if (event.target == modalWrapper) {
    modalWrapper.style.display = "none";
    for (var item of modalClose){
      item.style.display = "none";
      window.location.hash = "";
    };
  };
};
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalWrapper.style.display = 'none';
    for (var item of modalClose){
      item.style.display = "none";
      window.location.hash = "";
    };
  };
});

