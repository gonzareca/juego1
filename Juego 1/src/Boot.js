var pinftball = {
	_WIDTH: 800,
	_HEIGHT: 500
};
pinftball.Boot = function(game) {};
pinftball.Boot.prototype = {
	preload: function() {
		this.load.image('precanchaBg', 'img/canchaBg.png');
		this.load.image('prebordesupBg', 'img/bordesupBg.png');
		this.load.image('prebordeinfBg', 'img/bordeinfBg.png');
		this.load.image('prebordederBg', 'img/bordederBg.png');
		this.load.image('prebordeizqBg', 'img/bordeizqBg.png');
		this.load.image('prepelota', 'img/pelotaEst1mini.png');
	},
	create: function() {
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.game.state.start('Preloader');
	}
};