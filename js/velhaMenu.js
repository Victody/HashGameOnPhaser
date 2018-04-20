var menuState = {
	create: function() {
		//Resetar variáveis globais sempre que o Menu abrir
		jogador = 1;
		jogada = 0;
		casa;
		tileW = 165;
		tileH = 230;
	    onGame = true;
		tabuleiro = [];
		tabJogado = [];

		game.stage.backgroundColor = '#5f0707';

		//referência do texto do Titulo do Jogo
		var txtJogoVelha = game.add.text(game.world.centerX,150,'JOGO DA VELHA',{font:'40px emulogic',fill:'#fff'});
			txtJogoVelha.anchor.set(.5);
		//UI/Botões	
		var btnVsPC = game.add.button(game.world.centerX,600,'buttons',this.clickVsPC, this, 1,0,1);
			btnVsPC.anchor.set(.5);
			game.add.tween(btnVsPC).to({y: 250},1000).start();

		var btnVs2 = game.add.button(game.world.centerX,600,'buttons',this.clickVs2, this, 3,2,3);
			btnVs2.anchor.set(.5);
			game.add.tween(btnVs2).to({y: 350},1000).start();

		var siteHome = game.add.button(game.world.centerX,600,'buttons',this.clickSite, this, 5,4,5);
			siteHome.anchor.set(.5);
			game.add.tween(siteHome).to({y: 450},1000).start();			
	},

	//Método de inicio do jogo
	clickVsPC: function(){
		//this.music.stop();
		game.state.start('stageVsPc');
	},
	clickVs2: function(){
		//this.music.stop();
		game.state.start('stageVs2');
	},
	clickSite: function(){
		//this.music.stop();
		//game.state.start('stage1');
		window.location.assign("https://www.radiologiaabreu.com.br/")
	}
};