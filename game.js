var square = "<div id=%name% "
var square1 = "onclick='play(%nam%)' "
var square2 = "style='border:5px solid;float:left;height:140px;width:140px;'></div>"
var colors = ['red','gray','blue','yellow','black','green','orange']
var names = ['A1','A2','A3','B1','B2','B3','C1','C2','C3']
function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}
function firstPos(){
	for (var e in names){
		$('#main').append(square.replace('%name%',names[e])+square1.replace('%nam%',names[e])+square2.replace('solid','solid '+randomChoice(colors)))
	}
}
firstPos()

function Player1(player){
	player = new Image();
	player.src = 'images/player1.png'
	player.id = 'x'
	return player;
}

function Player2(player){
	player = new Image();
	player.src = 'images/player2.png'
	player.id = 'o'
	return player;
}
turn = 0
function play(a){
	player1 = new Player1()
	player2 = new Player2()
	if ($(a).find('img').length === 0){
		if (turn === 0){
			$(a).append(player1)
			turn = 1
			verify()
		}else{
			$(a).append(player2)
			turn = 0
			verify()
		}
	}
}

function verify(){
	var result = [];
	if ($('#A1').find('#o').length === 1){
		if ($('#B1').find('#o').length === 1){
			if ($('#C1').find('#o').length === 1){
				alert('O wins!!!')
				resetGame()
			}
		}
		if ($('#A2').find('#o').length === 1){
			if ($('#A3').find('#o').length === 1){
				alert('O wins!!!')
				resetGame()
			}
		}
		if ($('#B2').find('#o').length === 1){
			if ($('#C3').find('#o').length === 1){
				alert('O wins!!!')
				resetGame()
			}
		}
	}
	if ($('#C1').find('#o').length === 1){
		if ($('#B2').find('#o').length === 1){
			if ($('#A3').find('#o').length === 1){
				alert('O wins!!!')
				resetGame()
			}
		}
		if ($('#C2').find('#o').length === 1){
			if ($('#C3').find('#o').length === 1){
				alert('O wins!!!')
				resetGame()
			}
		}
	}
	if ($('#C3').find('#o').length === 1){
		if ($('#B3').find('#o').length === 1){
			if ($('#A3').find('#o').length === 1){
				alert('O wins!!!')
				resetGame()
			}
		}
	}
	if ($('#A2').find('#o').length === 1){
		if ($('#B2').find('#o').length === 1){
			if ($('#C2').find('#o').length === 1){
				alert('O wins!!!')
				resetGame()
			}
		}
	}
	if ($('#B1').find('#o').length === 1){
		if ($('#B2').find('#o').length === 1){
			if ($('#B3').find('#o').length === 1){
				alert('O wins!!!')
				resetGame()
			}
		}
	}
	if ($('#A1').find('#x').length === 1){
		if ($('#B1').find('#x').length === 1){
			if ($('#C1').find('#x').length === 1){
				alert('X wins!!!')
				resetGame()
			}
		}
		if ($('#A2').find('#x').length === 1){
			if ($('#A3').find('#x').length === 1){
				alert('X wins!!!')
				resetGame()
			}
		}
		if ($('#B2').find('#x').length === 1){
			if ($('#C3').find('#x').length === 1){
				alert('X wins!!!')
				resetGame()
			}
		}
	}
	if ($('#C1').find('#x').length === 1){
		if ($('#B2').find('#x').length === 1){
			if ($('#A3').find('#x').length === 1){
				alert('X wins!!!')
				resetGame()
			}
		}
		if ($('#C2').find('#x').length === 1){
			if ($('#C3').find('#x').length === 1){
				alert('X wins!!!')
				resetGame()
			}
		}
	}
	if ($('#C3').find('#x').length === 1){
		if ($('#B3').find('#x').length === 1){
			if ($('#A3').find('#x').length === 1){
				alert('X wins!!!')
				resetGame()
			}
		}
	}
	if ($('#A2').find('#x').length === 1){
		if ($('#B2').find('#x').length === 1){
			if ($('#C2').find('#x').length === 1){
				alert('X wins!!!')
				resetGame()
			}
		}
	}
	if ($('#B1').find('#x').length === 1){
		if ($('#B2').find('#x').length === 1){
			if ($('#B3').find('#x').length === 1){
				alert('X wins!!!')
				resetGame()
			}
		}
	}
	for (var e in names){
		if ($('#'+names[e]).find('img').length === 1){
			result.push(names[e])
		}
	}
	if (result.length === 9){
		alert('Draw game. Try again!')
		resetGame()
	}
}

function resetGame(){
	$('#main').empty()
	firstPos()
}