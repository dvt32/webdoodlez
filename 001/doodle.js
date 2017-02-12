/*
	KNOWN BUGS:
	- $('#bowser').show() screws up Bowser's and Mario's 'top' position values
	- reaching the Mushroom's range with the press of the down/up key screws up Mario's 'top' position value
*/

// If you have any idea how to fix these, let me know at 'dtrifonov32 [at] gmail.com'

$(document).ready(function() {
	var getMarioX = function() {
		return parseInt($('#mario').position().left);
	};
	var getMarioY = function() {
		return parseInt($('#mario').position().top);
	};
	var moveLeft = function() {
		var newMarioX = getMarioX() - MOVEMENT_IN_PIXELS;
		if (newMarioX >= INITIAL_MARIO_X) {
			$('#mario').animate({left: "-=" + MOVEMENT_IN_PIXELS + "px"}, 'fast');
		}
	};
	var moveUp = function() {
		var newMarioY = getMarioY() - MOVEMENT_IN_PIXELS;
		if (newMarioY >= MIN_MARIO_Y) {
			$('#mario').animate({top: "-=" + MOVEMENT_IN_PIXELS + "px"}, 'fast');
		}
	}; 
	var moveRight = function() {
		var newMarioX = getMarioX() + MOVEMENT_IN_PIXELS; 
		if (newMarioX <= MAX_MARIO_X) {
			$('#mario').animate({left: "+=" + MOVEMENT_IN_PIXELS + "px"}, 'fast');
		}
	};
	var moveDown = function() {
		var newMarioY = getMarioY() + MOVEMENT_IN_PIXELS;
		if (newMarioY <= INITIAL_MARIO_Y) {
			$('#mario').animate({top: "+=" + MOVEMENT_IN_PIXELS + "px"}, 'fast');
		}
	};
	var isCollisionPresent = function() {
		var currentMarioX = getMarioX();
		var currentMarioY = getMarioY();
		var isInMushroomRangeX = (currentMarioX >= MUSHROOM_X_START && currentMarioX <= MUSHROOM_X_END);
		var isInMushroomRangeY = (currentMarioY <= MUSHROOM_Y_START && currentMarioY >= MUSHROOM_Y_END);
		if (isInMushroomRangeX && isInMushroomRangeY) {
			$('body').css({'background-color': 'black'});
			$('#mushroom').hide();
			$('#nested-box').css({'background-color': 'red'}).text("THIS WAS A MISTAKE");
			$('#bowser').show();
			$('#bowser').css({top: "-=48px"}).animate({left: "+=500px"}, 'slow');
			$('#mario').css({top: "-=48px"});
			setTimeout(
				function() {
					$('#box').fadeOut("slow");
					$('#dont-trust-me').text("Don't trust everything you read.").fadeIn(3000);
				},
				4000
			);
			return true;
		}
		return false;
	};

	var INITIAL_MARIO_X = getMarioX();
	var INITIAL_MARIO_Y = getMarioY();
	var MOVEMENT_IN_PIXELS = 30;
	var MAX_MARIO_X = $('#box').width() - MOVEMENT_IN_PIXELS;
	var MIN_MARIO_Y = INITIAL_MARIO_Y - MOVEMENT_IN_PIXELS;
	var MUSHROOM_X_START = parseFloat($('#mushroom').css('left'));
	var MUSHROOM_X_END = MUSHROOM_X_START + $('#mushroom').width() + $('#mario').width();
	var MUSHROOM_Y_START = parseFloat($('#mushroom').css('top'));
	var MUSHROOM_Y_END = MUSHROOM_Y_START - $('#mushroom').height();
	var LEFT_ARROW_KEY = 37;
	var UP_ARROW_KEY = 38;
	var RIGHT_ARROW_KEY = 39;
	var DOWN_ARROW_KEY = 40;

	// Handle keyboard input
	var collisionIsPresent = false;
	$(document).keyup(function(key) {
		if (collisionIsPresent === false) {
			$('#mario').clearQueue();
			switch(parseInt(key.which, 10)) {
			case LEFT_ARROW_KEY:
				moveLeft();
				break;
			case UP_ARROW_KEY:
				moveUp();
				break;
			case RIGHT_ARROW_KEY:
				moveRight();
				break;
			case DOWN_ARROW_KEY:
				moveDown();
				break;
			default:
				break;
			}
			collisionIsPresent = isCollisionPresent();
		}
	});
});