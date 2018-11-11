'use strict';
function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}
(function(){
  if (typeof(document.querySelector)==="undefined") {
    return;
  }
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.createElement("a");
    var button_text = document.createTextNode("Ring the Doorbell");
    var figure = document.querySelector(".audio");
    var figureParent = figure.parentNode;
    button.setAttribute("href", "");
    button.appendChild(button_text);
    figureParent.replaceChild(button, figure);
  });
})();
