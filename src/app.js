window.onload = function () {



$('.gameContainer').scroll(function() {

    $('.dog').css('top', $(this).scrollTop());
});

  const gameContainer = $('.gameContainer')
  let dog = $('.dog');
  let critter = $('.critter');
  let score = 0;
  let scoreBoard = $('.scoreNumber');
  const critterCollection = document.getElementsByClassName('critter')


$(document).keydown(function(event) {
  switch(event.which) {

    case 38: dogUp();
    break;
    case 40: dogDown();
    break;
    case 37: dogLeft();
    break;
    case 39: dogRight();
    break;
    default: return;
  }
  event.preventDefault();
});

  function dogUp() {
    $('.dog').css('top', '-=10');
  }

  function dogDown() {
    dog.css('top', '+=10px');
  }

  function dogLeft() {
    dog.css('left', '-=10px');
  }

  function dogRight() {
    dog.css('left', '+=10px');
  }

  function choose() {
    for (let i = 0; i < critterCollection.length; i++) {
      setInterval(collision(dog[0].getBoundingClientRect(),
        critterCollection[j].getBoundingClientRect()), 250)
    }
  }
  setInterval(choose, 250);

  function collision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
       rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
      console.log('collision')
    }
  }






  function addScore() {
    scoreBoard.css('font-size', '20px');
    scoreBoard.html(score);
  }



function formName() {
    let input = document.getElementById("nameSubmit").value;
    alert(input);
    console.log('anything')
}


};
