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





//joins mob, sends ajax/pusher call to other page viewers, and prevents user from joining twice
$(function(){
	$("#join").click(function() {
		$("#pianos").append('<li class = "piano"><img src = "satie.png" width="175px"></li>');
		// playNote();
		$("li:last").addClass("my_piano just_added");
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
		// $(".join").removeClass('join');
		$('#join_span').text("     Joined!     ");
		$("#join").unbind("click");
		$("#join").addClass("clicked");
		$("#join").removeAttr('id');
	});
});


/////assigns correct part to player 

function assignPart(track){
	var key2 = "my_piano";
  if ($("li:nth-child(1)").attr("class").search(key2) > 0){
		window.track = "gym1.mid";
	} else if ($("li:nth-child(2)").attr("class").search(key2) > 0){
		window.track = "gym2.mid";
	} else if ($("li:nth-child(3)").attr("class").search(key2) > 0){
		window.track = "gym3.mid";
	} else if ($("li:nth-child(4)").attr("class").search(key2) > 0){
		window.track = "gym4.mid";
	} else if ($("li:nth-child(5)").attr("class").search(key2) > 0){
		window.track = "gym5.mid";
	} else if ($("li:nth-child(6)").attr("class").search(key2) > 0){
		window.track = "gym6.mid";
	} else if ($("li:nth-child(7)").attr("class").search(key2) > 0){
		window.track = "gym7.mid";
	} else if ($("li:nth-child(8)").attr("class").search(key2) > 0){
		window.track = "gym8.mid";
	} else if ($("li:nth-child(9)").attr("class").search(key2) > 0){
		window.track = "gym9.mid";
	} else if ($("li:nth-child(10)").attr("class").search(key2) > 0){
		window.track = "gym10.mid";
	} else if ($("li:nth-child(11)").attr("class").search(key2) > 0){
		window.track = "gym11.mid";
	} else if ($("li:nth-child(12)").attr("class").search(key2) > 0){
		window.track = "gym12.mid";
	} else if ($("li:nth-child(13)").attr("class").search(key2) > 0){
		window.track = "gym13.mid";
	} else if ($("li:nth-child(14)").attr("class").search(key2) > 0){
		window.track = "gym14.mid";
	} else if ($("li:nth-child(15)").attr("class").search(key2) > 0){
		window.track = "gym15.mid";
	} else if ($("li:nth-child(16)").attr("class").search(key2) > 0){
		window.track = "gym16.mid";
	} else if ($("li:nth-child(17)").attr("class").search(key2) > 0){
		window.track = "gym17.mid";
	} else if ($("li:nth-child(18)").attr("class").search(key2) > 0){
		window.track = "gym18.mid";
	} else if ($("li:nth-child(19)").attr("class").search(key2) > 0){
		window.track = "gym19.mid";
	} else if ($("li:nth-child(20)").attr("class").search(key2) > 0){
		window.track = "gym20.mid";
	} else {
		window.track = "gym2.mid";
	}
	console.log(track + "loaded");
}




//plays an individual MIDI node on image click. This is necessary for now as the MIDI file player seems to crash if a note is not played first before a file is loaded. 
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

//plays a MIDI track
function playFile(track) {
	MIDI.Player.start(track);
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
	$(function(){
		$("li:nth-child(5) img").click(function() {
				MIDI.programChange(0, 52);
				console.log("flute");
		});
		$("li:nth-child(6) img").click(function() {
				MIDI.programChange(0, 30);
				console.log("flute");
		});
		$("li:nth-child(7)").click(function() {
				MIDI.programChange(0, 52);
				console.log("flute");
		});
		$("li:nth-child(8)").click(function() {
				MIDI.programChange(0, 6);
		});
		$("li:nth-child(9)").click(function() {
				MIDI.programChange(0, 55);
		});
		$("li:nth-child(10)").click(function() {
				MIDI.programChange(0, 24);
		});
		$("li:nth-child(11)").click(function() {
				MIDI.programChange(0, 56);
		});
		$("li:nth-child(12)").click(function() {
				MIDI.programChange(0, 45);
		});
		$("li:nth-child(13)").click(function() {
				MIDI.programChange(0, 13);
		});
		$("li:nth-child(14)").click(function() {
				MIDI.programChange(0, 95);
		});
		$("li:nth-child(15)").click(function() {
				MIDI.programChange(0, 14);
		});
		$("li:nth-child(16)").click(function() {
				MIDI.programChange(0, 56);
		});
		$("li:nth-child(17)").click(function() {
				MIDI.programChange(0, 72);
		});
		$("li:nth-child(18)").click(function() {
				MIDI.programChange(0, 59);
		});
		$("li:nth-child(19)").click(function() {
				MIDI.programChange(0, 123);
		});
		$("li:nth-child(120)").click(function() {
				MIDI.programChange(0, 87);
		});
	});
}


//starts playing the selected MIDI track.  I can probably merge this function with playFile
function playAll() {
		playFile(track);
		console.log(track);
}



  // $("#piano2").click(function() {
		// 	playFile("Gymnopedie_1_Saya_Tomoko-s-gymno1.mid");
  // });

  // $("#piano1").click(function() {
  //     playNote();
  //     // playFile("/gymlow.mid");
  // });



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
	
  ////// Pusher - initialize
  var play_all_event = new CustomEvent("play_all");
  var pusher = new Pusher('778221c8f338a6510736');
  var channel = pusher.subscribe('test_channel');
  var callback = function(data) {};


  ///// Pusher - When a user joins adds images to other users' screens 
  channel.bind('my_event', function(data) {
    var key = "just_added";
    if ($('#pianos li').length === 0 || $("li:last").attr("class").search(key) === -1) {
      $("#pianos").append('<li class = "piano selected"><img src = "satie.png" width="175px"></li>');
      }
    channel.unbind('my_event', callback);
    $(".just_added").removeClass('just_added');
    $(".just_added").unbind("search");
  });

  ///// Pusher - Plays track 
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


MIDI.loadPlugin({
		soundfontUrl: "FluidR3_GM/",
		instruments: ["choir_aahs"],
		callback: function() {
		}
});


