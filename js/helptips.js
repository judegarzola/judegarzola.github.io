let welcomeIntervalId;

$(document).ready(function() {
    $('.restart-button > div').text("Restart");
    $('.restart-button').on('click', function() {
        $('.magazine').turn('page', 1);
    });

    $('.download-button > div').text("Download Portfolio + CV");
    $('.download-button').on('click', function() {
        const pfolio = 'https://raw.githubusercontent.com/JoshuaRifareal/joshuarifareal.github.io/b22880801a43e812cbf63c31e6e00583ed2f2adc/docs/Joshua%20Rifareal%20-%20Architectural%20Portfolio.pdf';
        const curric = 'https://raw.githubusercontent.com/JoshuaRifareal/joshuarifareal.github.io/b22880801a43e812cbf63c31e6e00583ed2f2adc/docs/Joshua%20Rifareal%20-%20Curriculum%20Vitae.pdf';

        function downloadFile(file) {
            $('<a>').attr('href', file).attr('download', '').appendTo('body').get(0).click();
        }
      
        downloadFile(pfolio);

        setTimeout(function() {
            downloadFile(curric);
        }, 1000);
    });
})

function welcomeMessage(changeTime, fadeInTime) {
    $('.welcome-message > div').fadeIn(fadeInTime);
    $('.awesome-message').css('visibility', 'hidden');

	// Array of messages to display
	const messages = [
		"Hello! 👋",
		"Pinch and drag any corner to flip a page.",
		"You can also press arrow keys instead.",
	];
  
	let index = 0;
	function updateMessage() {
	  $('.welcome-message > div').text(messages[index]);
	  index = (index + 1) % messages.length;
	}

    updateMessage();
    welcomeIntervalId = setInterval(updateMessage, changeTime);
};

function welcomeMessageHide(){
    $('.welcome-message').css('visibility', 'hidden');
}

function awesomeMessageShow(time){
    welcomeMessageHide();
    clearInterval(welcomeIntervalId); 
    $('.awesome-message').css('visibility', 'visible');
    $('.awesome-message > div').text("Awesome! 🎊");
    $('.awesome-message > div').fadeIn(time);
}

function awesomeMessageHide(delayTime, fadeOutTime) {
    function hideMessage() {
        $('.awesome-message > div').fadeOut(fadeOutTime);
    }
    setInterval(hideMessage, delayTime);
}

function zoomMessageShow(time) {
    $('.awesome-message').css('visibility', 'hidden');
    $('.zoomhow-message').css('visibility', 'visible');
    $('.zoomhow-message > div').text("Click anywhere to zoom in to details! 👀");
    $('.zoomhow-message > div').fadeIn(time);
}

function zoomMessageHide(delayTime, fadeOutTime) {
    function hideMessage() {
        $('.zoomhow-message > div').fadeOut(fadeOutTime);
    }
    setInterval(hideMessage, delayTime);
}

function zoomEscapeShow(time) {
    // Hide other messages
    welcomeMessageHide();
    $('.awesome-message').css('visibility', 'hidden');
    $('.zoomhow-message').css('visibility', 'hidden');


    $('.zoomesc-message').css('visibility', 'visible');
    $('.zoomesc-message > div').text("Press ESC or click again to zoom out.");
    $('.zoomesc-message > div').fadeIn(time);
}

function zoomEscapeHide(time) {
    $('.zoomesc-message > div').fadeOut(time);
}

function outroMessageShow(time) {
    // Hide other messages
    $('.outro-message').css('visibility', 'visible');
    $('.outro-message > div').html("Send me a message! 🤘 <button class='message-button' onclick=\"window.open('https://mail.google.com/mail/?view=cm&fs=1&to=joshuamorata.rifareal@bicol-u.edu.ph&su=ARCHITECTURAL APPRENTICE', '_blank');\">Message</button>");
    $('.outro-message > div').fadeIn(time);
}

function outroMessageHide(time) {
    $('.outro-message > div').fadeOut(time);
}

