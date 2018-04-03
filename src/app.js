window.onload = function () {


  const gameContainer = $('.gameContainer')
  const containerLocation = gameContainer[0].getBoundingClientRect()
  let dog = $('.dog');
  let critter = $('.critter');
  let score = 0;
  let scoreBoard = $('.scoreNumber');
  const critterCollection = document.getElementsByClassName('critter');

  $('.gameContainer').scroll(function () {
    $('.dog').css('top', $(this).scrollTop());
  });


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
        critterCollection[i].getBoundingClientRect()
      ), 250);
    }
  }

  setInterval(choose, 250);

  function collision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
       rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
      console.log('collision');
    }
  }



  for (let i = 0; i < 4; i++) {
    makeCritters();
  }


  function makeCritters() {
    let critters = $('<img></img>').attr({
      'class': 'critter',
      'src': 'tails.gif'
    })
    let critters2 = $('<img></img>').attr({
      'class': 'critter2',
      'src': 'tails.gif'
    })
    let critters3 = $('<img></img>').attr({
      'class': 'critter3',
      'src': 'tails.gif'
    })
    let top = Math.random() * containerLocation.height
    let left = Math.random() * containerLocation.width
    gameContainer.append(critters2)
    gameContainer.append(critters)
    gameContainer.append(critters3)
    $(critters2).css({
      'top': top,
      //'left': left
    })
    $(critters).css({
      //'top': top,
      'left': left
    })
    $(critters3).css({
      'top': top,
      'left': left
    })
  }

  function addScore() {
    scoreBoard.css('font-size', '20px');
    scoreBoard.html(score);

  }
  addScore();

let nameSubmit = $('#nameSubmit')

 $(document).on('click', nameSubmit, function(){
   let userName =  $('#inputName').val();
   alert(userName);
 });
// function formName() {
//     let input = document.getElementById('nameSubmit').value;
//     alert(input);
//     console.log('anything');
//  }


};
