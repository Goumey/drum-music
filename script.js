// 

window.addEventListener("keypress",function(event){
event.preventDefault();

const audioNew = document.querySelector(`audio[data-key="${event.charCode}"]`); 
console.log(audioNew)
audioNew.play();


});