class FlashmobController < ApplicationController

	def index
	end

	def piano
		Pusher.url = "http://778221c8f338a6510736:0dbff8300eedac9597b3@api.pusherapp.com/apps/58922"	
		Pusher['test_channel'].trigger('my_event', {piano: params['piano']})

		respond_to do |format|
	  		format.html
	  		format.json { render :json => {piano: params['piano']}.to_json}
	  end
	end

	def play
		Pusher.url = "http://778221c8f338a6510736:0dbff8300eedac9597b3@api.pusherapp.com/apps/58922"	
		Pusher['test_channel'].trigger('play_all', {piano: params['piano']})

		respond_to do |format|
	  		format.html
	  		format.json { render :json => {piano: params['piano']}.to_json}
	  end
	end

end