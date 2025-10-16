document.getElementById("myButton").addEventListener("click",  function(){
	  var position = $('#anchorForButton').offset().top;
    $('html, body').animate({ scrollTop: position }, 'slow');
});
