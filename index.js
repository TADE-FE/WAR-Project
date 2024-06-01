
//init arrays representing ranks/suits in a card deck
const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
const suits = ['Hearts','Diamonds','Clubs','Spades']


// randomly reorder cards using fisher-yates algo
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//pass rank, suits through shuffle function (not needed)
// shuffle(ranks);
 //shuffle(suits);


 //init deck array to hold cards in deck. nested loop iterate each combination of rank/suit and push to deck
const deck = [];
for (let suit of suits) {
    for (let rank of ranks) {
        deck.push({rank, suit});
    }
}

shuffle(deck)

//slice first 26 cards from deck array, "deal" to players 1,2 hand
const player1Hand = deck.slice(0,26);
const player2Hand = deck.slice(26);


//compare card rank, return 1 for card1 > cards 2. return 2 for card 2 > card1. return 0 for tie
function compareCards(card1, card2) {
    const rankIndex1 = ranks.indexOf(card1.rank);
    const rankIndex2 = ranks.indexOf(card2.rank);
    if (rankIndex1 > rankIndex2) return 1;
    if (rankIndex2 > rankIndex1) return 2;
    return 0;
}


let player1Score =  0;
let player2Score = 0;


//player card variables assign cards drawn from player hand
for (let i=0; i < 26; i++) {
    const player1Card = player1Hand[i];
    const player2Card = player2Hand[i];

    // string interpolation used to log what player card is set
    console.log(`First player sets ${player1Card.rank} of ${player1Card.suit}`);
    console.log(`Second player sets ${player2Card.rank} of ${player2Card.suit}`);

    //compareCard function called with cards drawn as arguments, log which player wins the round using 1, 2, 0 for player 1 win, player 2 win, tie from compareCard function
    const roundWinner = compareCards(player1Card, player2Card);
    if (roundWinner === 1) {
        console.log("First player wins the round");
        player1Score++;
    } else if (roundWinner === 2) {
        console.log("Second player wins the round");
        player2Score++;
    } else { 
    console.log("tie");
}
}

//determine winner

console.log(`First player score: ${player1Score}`);
console.log(`Second player score: ${player2Score}`);

function winner(){
    if (player1Score > player2Score){
        console.log("First player wins!")
    } else if (player1Score < player2Score) {
        console.log ("Second player wins!")
    } else {
        console.log("It is a tie!")
    }
}
winner()