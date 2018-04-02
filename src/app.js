$(document).ready(function () {

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


  // function collisionDetection(rectone, recttwo) {

  //   let r1 = $(rectone);
  //   let r2 = $(recttwo);
  //   let r1x = r1.offset().left;
  //   let r1w = r1.width();
  //   let r1y = r1.offset().top;
  //   let r1h = r1.height();

  //   let r2x = r2.offset().left;
  //   let r2w = r2.width();
  //   let r2y = r2.offset().top;
  //   let r2h = r2.height();

  //   if (r1y + r1h < r2y ||
  //       r1y > r2y + r2h ||
  //       r1x > r2x + r2w ||
  //       r1x + r1w < r2x) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // $(document).keyup(function (e) {
  //   $('.dog').css({
  //     top: e.pageY,
  //     left: e.pageX,
  //   });

  //   $('.critter').each(function () {
  //     if (collisionDetection('.dog', $(this))) {
  //         critter.addClass('deathAnimation');
  //         score+=1;
  //         addScore();
  //     } else if ($(this).hasClass('deathAnimation')) {
  //       $(this).removeClass('deathAnimation');
  //       $(this).css('display', 'none');
  //     }
  //   });
  // });



// function collisionDetection(rectone, recttwo) {

//     let r1 = $(rectone);
//     let r2 = $(recttwo);
//     let r1x = r1.offset().left;
//     let r1w = r1.width();
//     let r1y = r1.offset().top;
//     let r1h = r1.height();

//     let r2x = r2.offset().left;
//     let r2w = r2.width();
//     let r2y = r2.offset().top;
//     let r2h = r2.height();

//     if (r1y + r1h < r2y ||
//         r1y > r2y + r2h ||
//         r1x > r2x + r2w ||
//         r1x + r1w < r2x) {

//     console.log('also here')
//     //debugger;
//     } else {
//       //return true;
//       console.log('here');
//     }
//   }

//   setInterval(function (e) {
//     $('.critter').each(function () {
//       if (collisionDetection('.dog', $(this))) {
//         $(this).addClass('deathAnimation');
//         score+=1;
//         addScore();
//       } else if ($(this).hasClass('deathAnimation')) {
//         $(this).removeClass('deathAnimation');
//         $(this).css('display', 'none');
//       // } else if (collisionDetection('.critter', '.dog')){
//       //   console.log('i hit you instead!')
//       }
//     });
//   });
//   250



  //window.setInterval(collisionDetection, 250);

  let collision = setInterval(function () {



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



 }, 250);

// var treeHit = false;
//    $('.critter').each(function () {
//     treeHit = collision(dog, $(this));
//     if (treeHit == true) {
//     console.log('hit2');
// }

// });

 // $('.critter').each(function () {
 //      if (collisionDetection('.dog', $(this))) {
 //        $(this).addClass('deathAnimation');

 //        score+=1;
 //        addScore();
 //      } else if ($(this).hasClass('deathAnimation')) {
 //        $(this).removeClass('deathAnimation');
 //        $(this).css('display', 'none');

 //      }
 //    });

// var hitting = setInterval(function () {
//             var treeHit = false;
//             $('.critter').each(function () {
//                 treeHit = collisionDetection(dog, $(this));
//                 if (treeHit == true) {
//                     console.log('hit2');
//                 }
//             });
//         }, 1);







  function addScore() {
    scoreBoard.css('font-size', '20px');
    scoreBoard.html(score);
  }

  // function squirrel(){
  //   $('.squirrel').css({ }).animate({});
  // }

  // squirrel();




});
