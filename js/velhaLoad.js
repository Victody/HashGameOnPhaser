var loadState = {
	preload: function(){
		var txtLoading = game.add.text(game.world.centerX, 200, 'LOADING...',{font: '30px emulogic', fill:'#fff'});//adiciona texto ao objeto carregamento
			txtLoading.anchor.set(.5);

		var progressBar = game.add.sprite(game.world.centerX, 250, 'progressBar');//adiciona barra de progresso para carregamento dos arquivos de imagem
		progressBar.anchor.set(.5);//mudamos o ponto de ancoragem para o centro da imagem (x , y)
	
		game.load.setPreloadSprite(progressBar);//definimos a imagem como barra de progresso

		game.load.image('bg', 'img/velhaBG.png');//Carrega background para utilizar no jogo
		game.load.image('branco', 'img/branco.png');//carrega imagem em branco
		game.load.image('1', 'img/1.png');//carrega imagem X
		game.load.image('2', 'img/2.png');//carrega imagem O
		game.load.spritesheet('buttons', 'img/menuButtons.png', 335, 60);//carrega botões

		//game.load.audio('pegarItem', 'sfx/getitem.ogg');//carregamento áudio pegarItem sfx
		//game.load.audio('perderItem', 'sfx/loseitem.ogg');//carregamento áudio perderItem sfx
		//game.load.audio('musica', 'sfx/music.ogg');//carregamento múca de fundo BGM

	},
	create: function(){
		game.state.start('velhaMenu');
	}
};