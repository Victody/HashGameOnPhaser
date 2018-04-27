//Estado para carregar a barra de loading, é o que inicia todos os estados do jogo
var bootState = {
	preload: function(){
		game.load.image('progressBar', 'img/progressBar.png');//imagem da barra
	},

	create: function(){
		game.state.start('velhaLoad');//proximo estado
	}
};