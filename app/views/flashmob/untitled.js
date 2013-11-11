
// example named function
function sayHi(name) {
  alert("Hi, "+name)
}

sayHi('John')

// my version of named function
function playFile(file) {
	  MIDI.Player.loadFile(file, function(e){
    console.log("called", e); 
    MIDI.Player.start();
  });
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
    }
  });
}

$("#piano1").click(function() {
    playNote();
});



$("#piano1").click(function() {
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
    }
  });
});






/// original unnamed

$("#piano2").click(function() {
  MIDI.Player.loadFile("/Gymnopedie_1_Saya_Tomoko-s-gymno1.mid", function(e){
    console.log("called", e); 
    MIDI.Player.start();
  });
});

// example jquery call function 
$("#closeLink").click(function() {
    closeIt(1, false);
});


// my jquery call function
$("#piano2").click(function() {
    play("/Gymnopedie_1_Saya_Tomoko-s-gymno1.mid");
});


$("#piano2").click(function() {
  playFile("/Gymnopedie_1_Saya_Tomoko-s-gymno1.mid") 
});


$("#piano2").click(function() {
  MIDI.Player.loadFile("minute_waltz.mid", callback);
});



$("#piano1").click(function() {
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
    }
  });
});
