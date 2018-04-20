var endState = {
	create: function() {
		game.add.sprite(0,0,'end');

		var txtpressStart = game.add.text(game.world.centerX, 250,'PRESS START', {font: '24px emulogic', fill: '#fff'});
			txtpressStart.anchor.set(.5);
			txtpressStart.alpha = 0;

		game.time.events.add(3000, function(){
			game.add.tween(txtpressStart).to({alpha:1},500).to({alpha:0},500).loop().start();

			var enterKey = game.input.keyboard.addKey(Phaser.KeyCode.ENTER);
				enterKey.onDown.addOnce(this.backToMenu,this);
		}, this);
},
	backToMenu: function(){
		game.state.start('menu');
	}
};