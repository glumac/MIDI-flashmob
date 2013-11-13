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
	$(".piano").click(function() {
		playNote();
		// $( this ).fadeTo( "slow", 0.33 );
		String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
		var key = "my_piano";
		$( this ).addClass( "my_piano" );
		selected_piano = $(this).attr('id');
		// console.log($(this).attr('id'));
		if ($("#piano1").attr("class").search(key) <= 0) {
      window.track = "gymlow2.mid";
    } else if ($("#piano2").attr("class").search(key) <= 0){
			window.track = "gymhigh.mid";
		} else {
		console.log("no piano selected");
		}
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
			// console.log(piano_return);
		});
	});
	});

$(function(){
	$(".playbtn").click(function() {
		$.ajax({
		type: "POST",
		url:"/play",
		dataType:'json',
		data: {nil: "nil"},
		}).done(function(data){
		});
	});
});

function changeAll(data){
	console.log("test test");
	var piano = data.piano;
	console.log(piano);
	var el = $("#"+piano);
	el.addClass("selected");
}

function playAll() {
		playFile(track);
		console.log(track);
}

var pusher = new Pusher('778221c8f338a6510736');
var channel = pusher.subscribe('test_channel');
channel.bind('play_all', function(data) {
  alert('boom');
  alert(data.message);
});

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

function playFile(track) {
		MIDI.Player.loadFile(track, function(e){
    console.log("playfile");
    MIDI.Player.start();
  });
}

  $("#playbtn").click(function() {
     playAll();
  });

  $("#piano2").click(function() {
			playFile("Gymnopedie_1_Saya_Tomoko-s-gymno1.mid");
  });

  $("#piano1").click(function() {
      playNote();
      // playFile("/gymlow.mid");
  });



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


