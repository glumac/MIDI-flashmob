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


//assigns correct part to player 
function assignPart(track){
	var key2 = "my_piano";
  if ($("li:nth-child(1)").hasClass(key2)){
		window.track = "gym1.mid";
	} else if ($("li:nth-child(2)").hasClass(key2)){
		window.track = "gym2.mid";
	} else if ($("li:nth-child(3)").hasClass(key2)){
		window.track = "gym3.mid";
	} else if ($("li:nth-child(4)").hasClass(key2)){
		window.track = "gym4.mid";
	} else if ($("li:nth-child(5)").hasClass(key2)){
		window.track = "gym5.mid";
	} else if ($("li:nth-child(6)").hasClass(key2)){
		window.track = "gym6.mid";
	} else if ($("li:nth-child(7)").hasClass(key2)){
		window.track = "gym7.mid";
	} else if ($("li:nth-child(8)").hasClass(key2)){
		window.track = "gym8.mid";
	} else if ($("li:nth-child(9)").hasClass(key2)){
		window.track = "gym9.mid";
	} else if ($("li:nth-child(10)").hasClass(key2)){
		window.track = "gym10.mid";
	} else if ($("li:nth-child(11)").hasClass(key2)){
		window.track = "gym11.mid";
	} else if ($("li:nth-child(12)").hasClass(key2)){
		window.track = "gym12.mid";
	} else if ($("li:nth-child(13)").hasClass(key2)){
		window.track = "gym13.mid";
	} else if ($("li:nth-child(14)").hasClass(key2)){
		window.track = "gym14.mid";
	} else if ($("li:nth-child(15)").hasClass(key2)){
		window.track = "gym15.mid";
	} else if ($("li:nth-child(16)").hasClass(key2)){
		window.track = "gym16.mid";
	} else if ($("li:nth-child(17)").hasClass(key2)){
		window.track = "gym17.mid";
	} else if ($("li:nth-child(18)").hasClass(key2)){
		window.track = "gym18.mid";
	} else if ($("li:nth-child(19)").hasClass(key2)){
		window.track = "gym19.mid";
	} else if ($("li:nth-child(20)").hasClass(key2)){
		window.track = "gym20.mid";
	} else {
		window.track = "gym2.mid";
	}
	console.log(window.track + " loaded");
}

//plays an individual "silent" MIDI node on image click. This is necessary for now as the MIDI file player seems to crash if some note is not played first before a file is loaded. 
function playNote() {
  MIDI.loadPlugin({
   soundfontUrl: "FluidR3_GM/",
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

//loads a MIDI track
function loadFile(track) {
		MIDI.Player.loadFile(track, function(e){
    console.log("file");
  });
}

//starts playing the selected MIDI track.  Will later probably merge this function with playFile
function playAll() {
		playFile(track);
		console.log(track);
}

function listen(){
	MIDI.Player.removeListener(); // removes current listener.
	MIDI.Player.addListener(function(data) { // set it to your own function!
		var now = data.now; // where we are now
		var end = data.end; // time when song ends
		var channel = data.channel; // channel note is playing on
		var message = data.message; // 128 is noteOff, 144 is noteOn
		var note = data.note; // the note
		var velocity = data.velocity; // the velocity of the note
		// var col = 0x0;
		// var hexNote = note.toString(16);
		if (note < 50 && data.message === 144) {
			console.log(note);
			jQuery(".satie").animate({
      	backgroundColor: "purple"
 			}, 10000 );
		} else if (note >= 50 && data.message === 144) {
			console.log(note);	
			jQuery(".satie").animate({
      backgroundColor: "yellow"
 			}, 10000 );
 			} else if (data.message === 128) {
			console.log(note);	
			jQuery(".satie").animate({
      backgroundColor: "black"
 			}, 10000 );
		};
	});
}

//plays a MIDI track
function playFile(track) {
	$('.prejoin').hide("slow");
	if ($('#join_span').text() == "     Joined!     "){
		$('#play_span').text("Playing Gymnopédie No.1");
	};
	MIDI.Player.start(track);
	listen();
	// smooth();
		$(function(){
		$("li:nth-child(1) img").click(function() {
				MIDI.programChange(0, 52);
				console.log("1");
		});
	});
	$(function(){
		$("li:nth-child(2) img").click(function() {
				MIDI.programChange(0, 125);
				console.log("2");
		});
	});
	$(function(){
		$("li:nth-child(3) img").click(function() {
			MIDI.programChange(0, 18);
			console.log("3");
		});
	});

	$(function(){
		$("li:nth-child(4) img").click(function() {
			MIDI.programChange(0, 122);
			console.log("4");
		});
	});
}

function smooth(){
	// Smooth animation, interpolates between onMidiEvent calls;
	MIDI.Player.clearAnimation(); // clears current animation.
	MIDI.Player.setAnimation(function(data) {
	var now = data.now; // where we are now
	var end = data.end; // time when song ends
	var events = data.events; // all the notes currently being processed
	// then do what you want with the information!
	});
}

$( document ).ready(function() {
	var selected_piano;
	var piano_return;
	var playNote;
	
function red(){
	var toggler = $(".before:first");
	toggler.children().removeClass("prejoin");
	toggler.removeClass("before");
	toggler.addClass("after");
}

//joins mob, sends ajax/pusher call to other page viewers, and prevents user from joining twice

$("#join").click(function() {
	red();
	$(".after:last").addClass("my_piano just_added");
	assignPart();
	loadFile(track);
	selected_piano = $(this).attr('id');
	$.ajax({
	type: "POST",
	url:"/piano",
	dataType:'json',
	data: {piano: selected_piano},
	}).done(function(data){
	});
	$('#join_span').text("     Joined!     ");
	$("#join").unbind("click");
	$("#join").addClass("clicked");
});

$("#playbtn").click(function() {
	$.ajax({
	type: "POST",
	url:"/play",
	dataType:'json',
	data: {piano: "selected_piano"},
	}).done(function(data){
		console.log(data);
	});
});

  // Pusher - initialize
  var play_all_event = new CustomEvent("play_all");
  var pusher = new Pusher('778221c8f338a6510736');
  var channel = pusher.subscribe('test_channel');
  var callback = function(data) {};

  // Pusher - When a user joins adds images to other users' screens 
  channel.bind('my_event', function(data) {
  	var lastbig = $(".after:last");
  	if(!lastbig.hasClass("just_added")){
  		red();
  		var newlastbig = $(".after:last");
  		newlastbig.addClass("selected");
  	}
  	lastbig.removeClass("just_added");
    channel.unbind('my_event', callback);
  });

  // Pusher - Plays track 
  channel.bind('play_all', function(data, track) {
    playFile(track);
    channel.unbind('play_all', callback);
  });

});

window.onload = function () {
	MIDI.loadPlugin({
		soundfontUrl: "FluidR3_GM/",
		instruments: ["distortion_guitar", "choir_aahs", "helicopter", "rock_organ", "seashore"],
		callback: function() {
			MIDI.programChange(0, 18);
			for (var n = 0; n < 1; n ++) {
				var delay = n / 4; // play one note every quarter second
				var note = MIDI.pianoKeyOffset + n; // the MIDI note
				var velocity = 1; // how hard the note hits
				// play the note
				MIDI.noteOn(0, note, velocity, delay);
				// play the some note 3-steps up
				MIDI.noteOn(1, note + 3, velocity, delay);
			}
		}
	});
};