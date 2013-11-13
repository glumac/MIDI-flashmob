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
//= require_tree .


var track;
var selected_piano;
var piano_return;




$(function(){
	$("#join").click(function() {
		$("#pianos").append('<li class = "piano"><img src = "satie.png" width="175px"></li>');
		playNote();
		$("li:last").addClass("my_piano");
		selected_piano = $(this).attr('id');
		$.ajax({
		type: "POST",
		url:"/piano",
		dataType:'json',
		data: {piano: selected_piano},
		}).done(function(data){
		});
		// $(".join").removeClass('join');
		$('#join_span').text("     Joined!     ");
		$("#join").unbind("click");
		$("#join").addClass("clicked");
		$("#join").removeAttr('id');
	});
});

// Fades out an image when a user has selected it
function changeAll(data){
	console.log("test test");
	var piano = data.piano;
	console.log(piano);
	var el = $("#"+piano);
	el.addClass("selected");
}

//plays an individual MIDI node on image click. This is necessary for now as the MIDI file player seems to crash if a note is not played first before a file is loaded. 
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

//plays a MIDI track
function playFile(track) {
		MIDI.Player.loadFile(track, function(e){
    console.log("playfile");
    MIDI.Player.start();
  });
}


//starts playing the selected MIDI track.  I can probably merge this function with playFile
function playAll() {
		playFile(track);
		console.log(track);
};


$("#playbtn").click(function() {
		$.ajax({
		type: "POST",
		url:"/play",
		dataType:'json',
		data: {piano: "selected_piano"},
		}).done(function(data){
			console.log(data)
		});
});

  // $("#piano2").click(function() {
		// 	playFile("Gymnopedie_1_Saya_Tomoko-s-gymno1.mid");
  // });

  // $("#piano1").click(function() {
  //     playNote();
  //     // playFile("/gymlow.mid");
  // });



//////////PUSHER//////////////////////
// Enable pusher logging - don't include this in production
Pusher.log = function(message) {
  if (window.console && window.console.log) {
    window.console.log(message);
  }
};


$( document ).ready(function() {
	var selected_piano;
	var piano_return;
	var playNote;
	// var selected_piano = $('.selected');
});


