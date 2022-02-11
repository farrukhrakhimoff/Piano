// ---------------------------------->>> random bgcolor  of piano nota  <<< -------------------------------------------------

let piano = document.getElementById('piano');
let nota = document.querySelectorAll('#piano_nota');


for (let i = 0; i < nota.length; i++) {
  
   nota[i].addEventListener('mouseout', function () {
      nota[i].classList.toggle('scale');
      nota[i].classList.toggle('red');
   })
  
   nota[0].addEventListener('mouseout', Do)
   nota[1].addEventListener('mouseout', Re)
   nota[2].addEventListener('mouseout', Mi)
   nota[3].addEventListener('mouseout', Fa)
   nota[4].addEventListener('mouseout', Sol)
   nota[5].addEventListener('mouseout', Lja)
   nota[6].addEventListener('mouseout', Si)

   document.addEventListener('keypress', function (e) {
      console.log(e.keyCode)
      if (e.keyCode == 97) {
         nota[0].classList.toggle('red')
         nota[0].classList.toggle('scale')
         Do()
      }
      else if (e.keyCode == 115) {
         nota[1].classList.toggle('red')
         nota[1].classList.toggle('scale')
         Re()
      }
      else if (e.keyCode == 100) {
         nota[2].classList.toggle('red')
         nota[2].classList.toggle('scale')
         Mi()
      }
      else if (e.keyCode == 102) {
         nota[3].classList.toggle('red')
         nota[3].classList.toggle('scale')
         Fa()
      }
      else if (e.keyCode == 103) {
         nota[4].classList.toggle('red')
         nota[4].classList.toggle('scale')
         Sol()
      }
      else if (e.keyCode == 104) {
         nota[5].classList.toggle('red')
         nota[5].classList.toggle('scale')
         Lja()
      }
      else if (e.keyCode == 106) {
         nota[6].classList.toggle('red')
         nota[6].classList.toggle('scale')
         Si()
      }
   })

}
function Do() {
   let music = new Audio('sounds/do.mp3')
   music.play()
}
function Re() {
   let music = new Audio('sounds/re.mp3')
   music.play()
}
function Mi() {
   let music = new Audio('sounds/mi.mp3')
   music.play()
}
function Fa() {
   let music = new Audio('sounds/fa.mp3')
   music.play()
}
function Sol() {
   let music = new Audio('sounds/sol.mp3')
   music.play()
}
function Lja() {
   let music = new Audio('sounds/lja.mp3')
   music.play()
}
function Si() {
   let music = new Audio('sounds/si.mp3')
   music.play()
}
