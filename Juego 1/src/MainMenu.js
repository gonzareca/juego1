pinftball.MainMenu = function(game) {};
pinftball.MainMenu.prototype = {
	create: function() {
		//this.add.sprite(0, 0, 'screen-mainmenu');
		//this.gameTitle = this.add.sprite(Ball._WIDTH*0.5, 40, 'title');
		//this.physics.startSystem(Phaser.Physics.ARCADE);
		this.loadBg = this.add.sprite(14, 28, 'precanchaBg');
		this.loadBg = this.add.sprite(0, 0, 'prebordesupBg');
		this.loadBg = this.add.sprite(0, 445+28, 'prebordeinfBg');
		this.loadBg = this.add.sprite(800-32, 28, 'prebordederBg');
		this.loadBg = this.add.sprite(0, 28, 'prebordeizqBg');
		
		this.loadBg = this.add.sprite(400-32, 250-28, 'prepelota');		
		//this.pelota.anchor.setTo(0.5);
		//this.physics.enable(this.pelota, Phaser.Physics.ARCADE);
		//this.pelota.body.bounce.setTo(0.3, 0.3);
		//this.pelota.body.setCircle(50);
		
		/*this.startButton = this.add.button(Ball._WIDTH*0.5, 200, 'button-start', this.startGame, this, 2, 0, 1);
		this.startButton.anchor.set(0.5,0);
		this.startButton.input.useHandCursor = true;*/

		// button to "read the article"
	},
	//startGame: function() {
		//this.game.state.start('Howto');
//	}
};