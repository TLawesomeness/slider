$(function() {
  var modal = $('.fade').modal('show');
  var random = _.random(0, 20)*5;
  var mySlider = $('input.slider').slider( { min: 0, max: 100, step: 5, value:random });
  var target;
  var initPos = mySlider.on('slideStart', function(e){
    console.log("Initial Value is " + e.value);

    var initValue = e.value;

    do {
      target = _.random(0, 20)*5;
    } while(initValue == target);
    
    $('#message').text("Your target is " + target);


  })

  var endPos = mySlider.on('slideStop', function(e) {
    var endValue = e.value;

    if(endValue == target) {
      $('#congrats').text('You did it!');
      setTimeout(function() {
        $('.fade').modal('hide');
      }, 3000);

    }
    else {
      $('#end').text('Too bad, try again.');
    }
  })

})

// $(function() {
//   var modal = $('.fade').modal('show');
// })
