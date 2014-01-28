$(document).on('ready', function(){

	var deletePin = function () {
		$(this).closest('.note').remove();
	};

	// This will apply a pin with the x and y coordinates of the mouse
	var applyPin = function (e) {

		var offset = $(this).offset();
		var leftoff = e.clientX-offset.left;
		var topoff = e.clientY-offset.top;

		console.log(leftoff);
		console.log(topoff);

		newPin = $('#pin-prototype').clone(true).appendTo('.main-container');

		newPin.css({
			'left': leftoff-20+'px',
			'top': topoff-40+'px',
			'z-index': '2'
		});

		newPin.show();
		newPin.children().show();
		newPin.find('.note-text').focus();

	};

	var hideComments = function () {
		$('.note-text').hide();
	};

	var displayComments = function () {
		$(this).closest('.note').find('.note-text').css({
			'opacity':'0.75',
		});
		$(this).closest('.note').find('.note-text').show().attr('readonly','readonly');
	};

	$(document).on('mouseout','.note', hideComments);
	$(document).on('mouseover','.pushpin', displayComments);
	$(document).on('click','.pushpin', deletePin);
	$(document).on('click','#main-map', applyPin);
});





