let cards = []

let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    Name: "Yash",
    Chips: $145

}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name +  ":" + " " + player.Chips
console.log(cards)

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13)
    if(randomNumber === 1){
        return 11
    }
    else if( randomNumber > 10){
        return 10
    }
    else{
        return randomNumber
    }
    
   
}


function startGame(){
    isAlive = true
    let firstNumber = getRandomCard()
    let secondNumber = getRandomCard()
    cards = [firstNumber, secondNumber]
    sum = firstNumber + secondNumber

    renderGame()
}

function renderGame(){
    sumEl.textContent= "Sum: " + sum 
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
if(sum <= 20){
    message="Do You Want To Draw a New Card?"
} 
else if(sum === 21){
    message = "Wohoo! You've Got BlackJack!"
    hasBlackjack=true
}
else{
    message = "You're Out of the Game!"
    isAlive = false
}
messageEl.textContent=message

}
function newCard(){
    if(isAlive === true && hasBlackjack === false ) 
    {
    console.log("Drawing a New Card from The Deck!")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}