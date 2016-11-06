var menuState = {
	create: function() {
		// Create the menu here
		console.log('Calling create function of menuState...')
	},

	start: function() {
		console.log('Calling start function of menuState...')
		game.state.start('play')
	}
}
