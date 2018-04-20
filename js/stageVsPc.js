var stageVsPcstate = {
	create: function(){
		//cor de BG
		game.stage.backgroundColor = '#5f0707';
		//Tabuleiro

		for(var linhas = 0; linhas<3; linhas++){
			for(var colunas = 0; colunas<3;colunas++){
				var tileIdx = linhas*3+colunas;
				tabuleiro[tileIdx] = this.game.add.sprite(colunas*tileH, linhas*tileW, 'branco');
				//console.log(" "+colunas+" "+linhas+" "+ tileIdx);
				tabJogado[tileIdx] = 0;
				tabJogado[tileIdx].index = tileIdx;
				tabuleiro[tileIdx].index = tileIdx;
				tabuleiro[tileIdx].inputEnabled = true;
				tabuleiro[tileIdx].events.onInputDown.add(this.doClick)
				tabuleiro[tileIdx].events.onInputOver.add(function(sprite){
						sprite.alpha = 0.5;
					});
				tabuleiro[tileIdx].events.onInputOut.add(function(sprite){
						sprite.alpha = 1.0;
					});
			}
		}		
	},

	doClick: function(sprite){
		casa = sprite.index;
			if(sprite.key === 'branco' && jogador === 1){
					sprite.loadTexture('1', 0, false);
					tabJogado[casa] = 1;
					this.chkVitoria(tabJogado);
					jogada++;
					jogador = 2;
			}
			this.jogadaNpc(tabuleiro, tabJogado);
			this.chkVitoria(tabJogado);
	},
};