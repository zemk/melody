$(document).ready(function () {
  var currentFloor =2;
  var floorPaht = $('.home-image path' );
  var counteUp =$('.counter-up');
  var counteDown =$('.counter-down');
  var modal = $('.modal');
  var modalCloseButton =$('.modal-close-button');
  var viewFlats =$('.view-flats');
    floorPaht.on('mouseover', function (){
    floorPaht.removeClass('current-floor')
    currentFloor = $(this).attr('data-floor');
    $('.counter').text(currentFloor)
  })
  counteUp.on('click', function (){
    if(currentFloor <18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false});
      $('.counter').text(usCurrentFloor)
      floorPaht.removeClass('current-floor')
      $(`[data-floor = ${usCurrentFloor}]` ).toggleClass('current-floor');
    }
  });
  counteDown.on('click', function (){
    if(currentFloor >2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false});
      $('.counter').text(usCurrentFloor)
      floorPaht.removeClass('current-floor')
      $(`[data-floor = ${usCurrentFloor}]` ).toggleClass('current-floor');
    }
  });
  floorPaht.on('click', toggleModal)
  modalCloseButton.on('click', toggleModal);
  viewFlats.on('click', toggleModal);

  function toggleModal () {
    modal.toggleClass('is-open');
  }
  

});
