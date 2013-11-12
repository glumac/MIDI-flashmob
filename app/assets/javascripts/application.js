// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks

function clickPiano() {
	$(".piano").click(function() {
		$( this ).fadeTo( "slow", 0.33 );
		$( this ).addClass( "my_piano" );
		var selected_piano = $(this).attr('id');
		// console.log($(this).attr('id'));
		$.ajax({
		type: "POST",
		url:"/piano",
		dataType:'json',
		data: {piano: selected_piano},
   //  success:function(data){
			// $(this).addClass("selected");
			// console.log(data);
			// }
		}).done(function(data){
			var piano_return = data.piano;
			// console.log(piano_return);
		});
	});
}

function changeAll(data){
	var piano = data.piano;
	// console.log(piano);
	var el = $("#"+piano);
	el.addClass("selected");
}

function loadingNote() {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: "acoustic_grand_piano",
		callback: function() {
			var delay = 0; // play one note every quarter second
			var note = 50; // the MIDI note
			var velocity = 127; // how hard the note hits
			// play the note
			MIDI.setVolume(0, 127);
			MIDI.noteOn(0, note, velocity, delay);
			MIDI.noteOff(0, note, delay + 0.75);
		}
	});
}

function playNote() {
  MIDI.loadPlugin({
    soundfontUrl: "soundfont/",
    instrument: "acoustic_grand_piano",
    callback: function() {
      var delay = 0; // play one note every quarter second
      var note = 76; // the MIDI note
      var velocity = 127; // how hard the note hits
      // play the note
      MIDI.setVolume(0, 127);
      MIDI.noteOn(0, note, velocity, delay);
      MIDI.noteOff(0, note, delay + 0.75);
      console.log("playnote");
    }
  });
}

function playFile(file) {
		MIDI.Player.loadFile(file, function(e){
    console.log("playfile");
    MIDI.Player.start();
  });
}


// //////////PUSHER//////////////////////
// // Enable pusher logging - don't include this in production
// Pusher.log = function(message) {
//   if (window.console && window.console.log) {
//     window.console.log(message);
//   }
// };

// var pusher = new Pusher('778221c8f338a6510736');
// var channel = pusher.subscribe('test_channel');
// channel.bind('my_event', function(data) {
//   alert('boom');
//   alert(data.message);
// });


$( document ).ready(function() {
	loadingNote();
	clickPiano();
	playFile();
	// var selected_piano = $('.selected');
});


