// A module pattern should be used here

var myBasicCalculator = (function() {



$('.buttons, .cero').on('click', function(){
	
	var value = $(this).val();
	var span = document.createElement('span');
	span.append(value);
	$('#display').append(span);

});




})();