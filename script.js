
// Welcome message
alert("l wish you a nice browse");

function TheWinner() {

// var PredictTheWinner1 = prompt('Who do you expect to be most likely to win')

  var PredictTheWinner = prompt('What is your expectation for the winner');

 
  while (PredictTheWinner !== 'Manchster' && PredictTheWinner !== 'Chelesa') {
    PredictTheWinner = prompt('please only answer with Manchster or Chelesa');
  }

 if (PredictTheWinner == 'Manchster') {
    document.write('<img src="https://upload.wikimedia.org/wikipedia/ar/e/eb/Manchester_City_FC_badge.svg">');
  }

  else if (PredictTheWinner == 'Chelesa') { document.write('<img src="https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/BBF7/production/_118291184_mediaitem118291183.jpg">'); 
  }
  
  var push = prompt('how many push do you give our website?');

  if (push > 6) {
    push = 6;
  }

  for (var i = 0; i < push; i++) {

    document.write('<img src="https://e7.pngegg.com/pngimages/245/624/png-clipart-golf-balls-cartoon-golf-cartoon-character-face.png">');
  }
}
TheWinner()