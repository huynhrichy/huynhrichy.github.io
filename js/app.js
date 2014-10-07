
$(document).ready(function() {
	$('#name').hide().fadeIn(1000, function() {
	});

	var grid = document.querySelector('#grid');

var msnry = new Masonry(grid, {
	isFitWidth: true,
	itemSelector: '.project',
	columnWidth: 500,
	transitionDuration: 0
	//gutter: 10

	//isOriginLeft:
});

});