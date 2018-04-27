var game = new Phaser.Game(750,500, Phaser.AUTO);
	
	var jogador = 1;
	var jogada = 0;
	var casa;
	var tileW = 165;
	var tileH = 230;
    var onGame = true;
	var tabuleiro = [];
	var tabJogado = [];


	var chkVitoria = function(tabJogado){
		if(jogada < 9){
			if (tabJogado[0] === 1 && tabJogado[1] === 1 && tabJogado[2] === 1) {
				alert("Vitória Player 1");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[3] === 1 && tabJogado[4] === 1 && tabJogado[5] === 1){
				alert("Vitória Player 1");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[6] === 1 && tabJogado[7] === 1 && tabJogado[8] === 1){
				alert("Vitória Player 1");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[0] === 1 && tabJogado[4] === 1 && tabJogado[8] === 1 ){
				alert("Vitória Player 1");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[2] === 1 && tabJogado[4] === 1 && tabJogado[6] === 1){
				alert("Vitória Player 1");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[0] === 1 && tabJogado[3] === 1 && tabJogado[6] === 1){
				alert("Vitória Player 1");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[1] === 1 && tabJogado[4] === 1 && tabJogado[7] === 1){
				alert("Vitória Player 1");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[2] === 1 && tabJogado[5] === 1 && tabJogado[8] === 1){
				alert("Vitória Player 1");
				game.state.start('velhaMenu');
			}else
			if (tabJogado[0] === 2 && tabJogado[1] === 2 && tabJogado[2] === 2) {
				alert("Vitória Player 2");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[3] === 2 && tabJogado[4] === 2 && tabJogado[5] === 2){
				alert("Vitória Player 2");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[6] === 2 && tabJogado[7] === 2 && tabJogado[8] === 2){
				alert("Vitória Player 2");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[0] === 2 && tabJogado[4] === 2 && tabJogado[8] === 2 ){
				alert("Vitória Player 2");
				game.state.start('velhaMenu');
				return;
			}else
			if(tabJogado[2] === 2 && tabJogado[4] === 2 && tabJogado[6] === 2){
				alert("Vitória Player 2");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[0] === 2 && tabJogado[3] === 2 && tabJogado[6] === 2){
				alert("Vitória Player 2");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[1] === 2 && tabJogado[4] === 2 && tabJogado[7] === 2){
				alert("Vitória Player 2");
				game.state.start('velhaMenu');
			}else
			if(tabJogado[2] === 2 && tabJogado[5] === 2 && tabJogado[8] === 2){
				alert("Vitória Player 2");
				game.state.start('velhaMenu');
			}
		}else 
		if(jogada >= 9) {
				alert("VELHA!! EMPATE");
				game.state.start('velhaMenu');
		}
	}

	var jogadaNpc =  function(tabuleiro, tabJogado){
		if(tabJogado[4] === 0){
			tabuleiro[4].loadTexture('2', 0, false);
			tabJogado[4] = 2;
			jogador = 1;
			jogada++;
		} else
		if(tabJogado[0] === tabJogado[1] && tabJogado[2] === 0){
			tabuleiro[2].loadTexture('2', 0, false);
			tabJogado[2] = 2;
			jogador = 1;
			jogada++;
		}
		else
		if(tabJogado[0] === tabJogado[2] && tabJogado[1] === 0){
			tabuleiro[1].loadTexture('2', 0, false);
			tabJogado[1] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[1] === tabJogado[2] && tabJogado[0] === 0){
			tabuleiro[0].loadTexture('2', 0, false);
			tabJogado[0] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[3] === tabJogado[4] && tabJogado[5] === 0){
			tabuleiro[5].loadTexture('2', 0, false);
			tabJogado[5] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[3] === tabJogado[5] && tabJogado[4] === 0){
			tabuleiro[4].loadTexture('2', 0, false);
			tabJogado[4] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[5] === tabJogado[4] && tabJogado[3] === 0){
			tabuleiro[3].loadTexture('2', 0, false);
			tabJogado[3] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[6] === tabJogado[7] && tabJogado[8] === 0){
			tabuleiro[8].loadTexture('2', 0, false);
			tabJogado[8] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[6] === tabJogado[8] && tabJogado[7] === 0){
			tabuleiro[7].loadTexture('2', 0, false);
			tabJogado[7] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[8] === tabJogado[7] && tabJogado[6] === 0){
			tabuleiro[6].loadTexture('2', 0, false);
			tabJogado[6] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[0] === tabJogado[4] && tabJogado[8] === 0){
			tabuleiro[8].loadTexture('2', 0, false);
			tabJogado[8] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[0] === tabJogado[8] && tabJogado[4] === 0){
			tabuleiro[4].loadTexture('2', 0, false);
			tabJogado[4] = 2;
			jogador = 1;
			jogada++;
		}
		else
		if(tabJogado[8] === tabJogado[4] && tabJogado[0] === 0){
			tabuleiro[0].loadTexture('2', 0, false);
			tabJogado[0] = 2;
			jogador = 1;
			jogada++;
		}
		else
		if(tabJogado[2] === tabJogado[4] && tabJogado[6] === 0){
			tabuleiro[6].loadTexture('2', 0, false);
			tabJogado[6] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[2] === tabJogado[6] && tabJogado[4] === 0){
			tabuleiro[4].loadTexture('2', 0, false);
			tabJogado[4] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[4] === tabJogado[6] && tabJogado[2] === 0){
			tabuleiro[2].loadTexture('2', 0, false);
			tabJogado[2] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[0] === tabJogado[3] && tabJogado[6] === 0){
			tabuleiro[6].loadTexture('2', 0, false);
			tabJogado[6] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[0] === tabJogado[6] && tabJogado[3] === 0){
			tabuleiro[3].loadTexture('2', 0, false);
			tabJogado[3] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[3] === tabJogado[6] && tabJogado[0] === 0){
			tabuleiro[0].loadTexture('2', 0, false);
			tabJogado[0] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[1] === tabJogado[4] && tabJogado[7] === 0){
			tabuleiro[7].loadTexture('2', 0, false);
			tabJogado[7] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[1] === tabJogado[7] && tabJogado[4] === 0){
			tabuleiro[4].loadTexture('2', 0, false);
			tabJogado[4] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[4] === tabJogado[7] && tabJogado[1] === 0){
			tabuleiro[1].loadTexture('2', 0, false);
			tabJogado[1] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[2] === tabJogado[5] && tabJogado[8] === 0){
			tabuleiro[8].loadTexture('2', 0, false);
			tabJogado[8] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[2] === tabJogado[8] && tabJogado[5] === 0){
			tabuleiro[5].loadTexture('2', 0, false);
			tabJogado[5] = 2;
			jogador = 1;
			jogada++;
		}else
		if(tabJogado[5] === tabJogado[8] && tabJogado[2] === 0){
			tabuleiro[2].loadTexture('2', 0, false);
			tabJogado[2] = 2;
			jogador = 1;
			jogada++;
		}else{
			var casaNpc = Math.floor(Math.random() * 8 + 1);
				while(tabJogado[casaNpc] != 0 && jogada <8){
					this.casaNpc = Math.floor(Math.random() * 8 + 1);
				}
				if( tabJogado[casaNpc] === 0){
					tabuleiro[casaNpc].loadTexture('2', 0, false);
					tabJogado[casaNpc] = 2;
					jogador = 1;
					jogada++;
				}
		}

	}



	game.state.add('velhaBoot', bootState);
	game.state.add('velhaLoad', loadState);
	game.state.add('velhaMenu', menuState);
	game.state.add('stageVs2', stageVs2State);
	game.state.add('stageVsPc', stageVsPcstate);
	game.state.add('velhaEnd', endState);

	game.state.start('velhaBoot');