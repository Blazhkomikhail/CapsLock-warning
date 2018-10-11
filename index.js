console.clear();

let inputPass = document.querySelector('.inp');
let capsWarning = document.querySelector('.capsWarning');
let capsLockEnebled = false;
capsWarning.style.display = 'none';
capsWarning.style.color = 'red';

document.addEventListener('keydown', function () {
  if (event.keyCode === 20) {
    capsLockEnebled = !capsLockEnebled;
  }
})

inputPass.addEventListener('keydown', function (e){
      
  if (e.key.toLowerCase() === e.key && e.shiftKey === false) {
      capsLockEnebled = false;
      capsWarning.style.display = 'none';
   }
  else if (e.key.toUpperCase() === e.key && e.shiftKey === false) { 
      capsLockEnebled = true;
      capsWarning.style.display = 'block';

  }
})

inputPass.addEventListener('keydown', function (e){
  if (e.keyCode === 20) {
    capsWarning.style.display = 'none';
  }
})
inputPass.addEventListener('blur', function (e){
       capsWarning.style.display = 'none';
})
