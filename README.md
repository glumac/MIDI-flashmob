#Erik Satie Flashmob

#### Make a flashmob online at [Erik Satie Flashmob](http://midi-flashmob.herokuapp.com/)

#####Erik Satie Flashmob is a Rails4 and MIDI Javascript experiment. 

This site uses the power of MIDI, the protocol that allows the triggering of individual music notes with pitch, velocity, and other controls, along with javascript, to use the browser as a interactive musical playback device.

When multiple users log onto a "flashmob" each is assigned a different part of a musical piece. When a participant presses "play", all logged-in browsers play a song in-sync, creating a "laptop choir. Users can change the instrument on which their part is being played, and the color of the Erik Satie icons changes based on the MIDI note data be being currently played in the browser.

The management of real-time synchronous part assignment and music play is controlled with websockets through the Pusher API. 

##### Resources
*  Rails
*  <https://github.com/gleitz/MIDI.js> Javascript library
*  <http://pusher.com/> Websocket API

#####Background/Info:

This site is a musical experiment inspired by early-20th-century Parisian composer Erik Satie.  Satie, who had ties to the avant-garde Dada movement,  preferred to call himself not musician, but a "phonometrician" (meaning "someone who measures sounds").  For this reason, beyond the basic organ on which all players being, several of the other sounds are absurd "instruments" such as a helicopter's whirling blades, and the division of parts between laptop "players" is intended to be asymmetrical and surprising.    

##### Coming soon: 

Up next: Bolero Flashmob, and support for multiple mobs. 

![Satie Flashmob](http://glumac.net/satiescreenshot.png)
