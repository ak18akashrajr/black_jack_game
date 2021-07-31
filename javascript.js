
let cards=[]
let sum=0;
let hasBlackJack=false;
let isAlive=true;

//getting elements from html doc
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");





console.log(cards);
function getRandomCard(params) {
    
    let randomCard=Math.floor(Math.random()*13)+1;
    

    if(randomCard===1){
        return 11;
    }else if(randomCard>10){
        return 10;
    }else{
        return randomCard;
    }
    
    
}
console.log(getRandomCard());


//start game function
function startGame(params) {
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}




//render game function
function renderGame() {
    if(sum<=20){
        message="Do you want to draw a new card? "
        isAlive=true;
    }else if(sum===21){
        
        message="Wohoo! You've got Blackjack! "
        hasBlackJack=true;
    }else{
        message="You're out of the game!  "
        isAlive=false;
    }
    
    messageEl.textContent=message;
    sumEl.textContent="Sum: "+sum;
    cardsEl.textContent="Cards:";
    for (let i=0;i<cards.length;i++){
       cardsEl.textContent+=cards[i]+" ";

    }
}

//new card
function newCard(params) {
    if(isAlive===true && hasBlackJack===false){
        
            card=getRandomCard();
            sum=sum+card;
            cards.push(card)
            renderGame()
    }

}

