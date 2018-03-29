$(document).ready(function () {

  const gameContainer = $('.gameContainer')
  const dog = $('.dog');
  const critter = $('.critter');
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
    going = setInterval(keepGoing, 1);

    function keepGoing() {
      $('.dog').css(animation);
    }
  }

  function keyup(e) {

    clearInterval(going);
    $(document).one('keydown', keyDown);
  }


  function collisionDetection(rectone, recttwo) {

    let r1 = $(rectone);
    let r2 = $(recttwo);
    let r1x = r1.offset().left;
    let r1w = r1.width();
    let r1y = r1.offset().top;
    let r1h = r1.height();

    let r2x = r2.offset().left;
    let r2w = r2.width();
    let r2y = r2.offset().top;
    let r2h = r2.height();

    if (r1y + r1h < r2y ||
        r1y > r2y + r2h ||
        r1x > r2x + r2w ||
        r1x + r1w < r2x) {
      return false;
    } else {
      return true;
    }
  }

  $(document).keyup(function(e) {
    $('.dog').css({
      top: e.pageY,
      left: e.pageX,
    });

    $('.critter').each(function () {
      if (collisionDetection('.dog', $(this))) {
          critter.addClass('deathAnimation');
          score+=1;
          addScore();
      } else if ($(this).hasClass('deathAnimation')) {
        $(this).removeClass('deathAnimation');
        $(this).css('display', 'none');
      }
    });
  });

  setInterval(collisionDetection, 250);

  function addScore() {
    scoreBoard.css('font-size', '20px');
    scoreBoard.html(score);
  }


});
