var speechRecognition = window.webkitSpeechRecognition

var  recogniton =  new speechRecognition();

var textbox =$("#textbox")   

var instructions = $("#instructions")

var content =''

recogniton.continuous =  true

// recognition is started

recogniton.onstart = function()
 {
    instructions.text("Voice recognition is on")
    //responsiveVoice.speak("Voice recognition is on");
}

recogniton.onspeechend = function()
{
    instructions.text("No activity")
}
recogniton.onerror = function(event) {
   // handle specific cases
   if (event.error === 'no-speech') {
        instructions.text("No speech detected. Please try again.");
    } else if (event.error === 'audio-capture') {
        instructions.text("Microphone not accessible. Please check your mic.");
    } else if (event.error === 'network') {
        instructions.text("Network error occurred. Please check your connection.");
    } else if (event.error === 'not-allowed') {
        instructions.text("Permission to use microphone denied.");
    } else {
        instructions.text("Error occurred. Try again.");
    }
};
   if (event.error === 'no-speech') {
        instructions.text("No speech detected. Please try again.");
    } else if (event.error === 'audio-capture') {
        instructions.text("Microphone not accessible. Please check your mic.");
    } else if (event.error === 'network') {
        instructions.text("Network error occurred. Please check your connection.");
    } else if (event.error === 'not-allowed') {
        instructions.text("Permission to use microphone denied.");
    } else {
        instructions.text("Error occurred. Try again.");
    }
};
};
    recogniton.onresult = function(event){
        var current = event.resultIndex;

        var transcript = event.results[current][0].transcript

        content += transcript

        content =  content.toLowerCase();

        textbox.val(content)

        
    }



$("#start-btn").click(function(event)
{
    if(content.length)
    {
        content +=  ''
    }
    recogniton.start()
}) 
