class FlashmobController < ApplicationController

	def index

	end

	def boom
	
		Pusher.url = "http://778221c8f338a6510736:0dbff8300eedac9597b3@api.pusherapp.com/apps/58922"

				Pusher['test_channel'].trigger('my_event', {
				  message: 'boom!!'
				})
	end



end