class FlashmobController < ApplicationController

	def index

	end

	def controllers
		@player_num = params[:player_num]
	end

	def send_message
		puts "-------------------------------------"
		puts params
		if !params[:message].nil?
			pusher(params[:message])
		end
		render :json => {response_type: "Success!"}
	end

	def boom(message)

		# require 'pusher'

		Pusher.url = "http://778221c8f338a6510736:0dbff8300eedac9597b3@api.pusherapp.com/apps/58922"

		Pusher['test_channel'].trigger('my_event', {
		  message: message
		})

	end


end