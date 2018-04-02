window.onload = function () {

$('.gameContainer').scroll(function() {

    $('.dog').css('top', $(this).scrollTop());
});

  const gameContainer = $('.gameContainer')
  let dog = $('.dog');
  let critter = $('.critter');
  let score = 0;
  let scoreBoard = $('.scoreNumber');
  let going;
  const change = {
    37: {
      left: '-=.5px'
    },
    38: {
      top: '-=.5px'
    },
    39: {
      left: '+=.5px'
    },
    40: {
      top: '+=.5px'
    },
  }

  $(document).one('keydown', keyDown);

  function keyDown(e) {
    $(document).one('keyup', keyup)
    let animation = change[e.which];
    event.preventDefault();
    going = setInterval(keepGoing, 1);
    function keepGoing() {
      $('.dog').css(animation);

    }

  }



  function keyup(e) {

    clearInterval(going);
    $(document).one('keydown', keyDown);
    event.preventDefault();
  }





  window.setInterval(collisionDetection, );

  function collisionDetection() {
    let dogWidth, dogHeight, dogX, dogY, critterWidth, critterHeight, critterX, critterY;

    dogWidth = dog.outerWidth();
    dogHeight = dog.outerHeight();
    dogX = dog.offset().left;
    dogY = dog.offset().top;
    critterWidth = critter.outerWidth();
    critterHeight = critter.outerHeight();
    critterX = critter.offset().left;
    critterY = critter.offset().top;

    if ((dogX + dogWidth) > (critterX) && dogX < (critterX + critterWidth) &&
       (dogY + dogHeight) > (critterY) && dogY < (critterY + critterHeight)) {

      console.log('hit!');
    }
    else{

    }

};

$('.critter').each(function () {
      if (collisionDetection('.dog', $(this))) {
        $(this).addClass('deathAnimation');

        score+=1;
        addScore();
      } else if ($(this).hasClass('deathAnimation')) {
        $(this).removeClass('deathAnimation');
        $(this).css('display', 'none');

      }
    });









  function addScore() {
    scoreBoard.css('font-size', '20px');
    scoreBoard.html(score);
  }

  // function squirrel(){
  //   $('.squirrel').css({ }).animate({});
  // }

  // squirrel();

function formName() {
    let input = document.getElementById("nameSubmit").value;
    alert(input);
    console.log('anything')
}


};
