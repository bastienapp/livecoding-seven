const a = () => "a";
const maximum = (a, b) => {
  let result = 0;
  if (a > b) {
    result = a;
  } else {
    result = b;
  }
  return result;
}

const rollDice = (score) => {

  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const result = dice1 + dice2;

  alert(result);
  if (result != 7) {
    return score + result;
  } else {
    return 0;
  }
}

const round = (player) => {
  let score = rollDice(0);
  while (score != 0 && confirm(`${player}: ${score}, continue?`)) {
    score = rollDice(score);
  }
  return score;
}

const winner = (score1, player1, score2, player2) => {
  if (score1 > score2) {
    alert(`${player1} wins`);
  } else if (score2 > score1) {
    alert(`${player2} wins`);
  } else {
    alert("It's a draw");
  }
}

const player1 = prompt("Player 1, say your name");
const score1 = round(player1);
const player2 = prompt("Player 2, say your name");
const score2 = round(player2);
winner(score1, player1, score2, player2);

/*
scoreJoueur2 = lancerDes(0)
tant que scoreJoueur2 != 0 et que joueur2 continue
  scoreJoueur2 = lancerDes(scoreJoueur2)
fin tant que

si scoreJoueur1 > scoreJoueur2
  afficher joueur1 gagne
sinon si scoreJoueur2 > scoreJoueur1
  afficher joueur2 gagne
sinon
  afficher égalité
fin si

fonction lancerDes(scoreJoueur)

  résultat = joueur1 lance 2 dés
  si le résultat != 7
    scoreJoueur += résultat
  sinon
    scoreJoueur = zéro
  fin si

  retourn scoreJoueur
*/