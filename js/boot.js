console.log('Initialising boot.js...')

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game')

game.state.add('menu', menuState)
game.state.add('play', playState)

game.state.start('menu')
