/*
 * An application that displays a random 5-card poker hand, by "dealing out"
 * five random cards from a deck.  This is a very sloppy script that we will 
 * refactor later to use modules.
 */

// Create a deck of cards sorted by suit then rank.  The first card (at index
// 0) is the ace of spades (A♠), and the last (at index #51) is the king of 
// clubs (K♣).
var deck = [];
"♠♡♢♣".split("").forEach(function (suit) {
    "A 2 3 4 5 6 7 8 9 10 J Q K".split(" ").forEach(function (rank) {
        deck.push(rank + suit);
    });
});

// Create a hand by successively removing a random card from the deck 
// and adding it to the hand. 
var hand = [];
for (var i = 0; i < 5; i += 1) {
    hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}

// Display the hand.
console.log(hand.join(" "));
