console.log('Initialising boot.js...')

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {create: create})

console.log('Game object created')

function create() {
	// TODO priority 1: figure out why this isn't setting the background colour
	game.stage.backgroundColor = '#ffffff'
	console.log('Background colour set')
}

game.state.add('menu', menuState)
game.state.add('play', playState)

game.state.start('menu')
