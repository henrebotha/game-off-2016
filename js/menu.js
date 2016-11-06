var menuState = {
	create: function() {
		// Create the menu here
		console.log('Calling create function of menuState...')

		var titleLabel = game.add.text(
			80,
			80,
			'Github Game Off 2016',
			{
				font: '50px Arial',
				fill: '#3030ff'
			}
		)

		var startLabel = game.add.text(
			80,
			game.world.height - 80,
			'Log in',
			{
				font: '25px Arial',
				fill: '#3030ff'
			}
		)

		// TODO priority 1: Add a listener for clicking on "Log in"
		var keyEnter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
		keyEnter.onDown.addOnce(this.start, this)

		// TODO priority 9: Add a bonus button that says 'Sign up' which simply
		// shows a warning that says 'We are not accepting new hires at this
		// time.'
	},

	start: function() {
		console.log('Calling start function of menuState...')
		game.state.start('play')
	}
}
