//masonry js code
$(document).ready(function(){
  $('.masonry-container').masonry({
    // options
    itemSelector: '.masonry-item'
  });
});

function inputName(){
  var input1 = $('.First-Name');
  var input2 = $('.Hello');
  var form = $('.form');

  var name = 'First-Name';
  name += input1.val();
  name += 'Hello';
 name += input2.val();
  
  input1.val('First-Name');
  input2.val('Hello');
 
  
  inputName().text(name);
}

$(document).ready(function(){  
  $('#inputName').click(function(){
    inputName();
  });
});




 $( function() {
    $( ".draggable" ).draggable();
  } );