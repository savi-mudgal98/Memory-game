document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('#grid');
  // console.log(gridDisplay);
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  function createBoard()
{  for(let i=0;i<cardArray.length; i++)
  {
    const card= document.createElement('img');
    card.setAttribute('src','images/blue.png');
    card.setAttribute('data-id', i)
     grid.appendChild(card)
     card.addEventListener('click', flipcard);
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]


if(optionOneId == optionTwoId) {
  cards[optionOneId].setAttribute('src', 'images/blue.png')
  cards[optionTwoId].setAttribute('src', 'images/blue.png')
  alert('You have clicked the same image!')
}
else if (cardsChosen[0] === cardsChosen[1]) {
  alert('You found a match')
  cards[optionOneId].setAttribute('src', 'images/white.png')
  cards[optionTwoId].setAttribute('src', 'images/white.png')
  cards[optionOneId].removeEventListener('click', flipcard)
  cards[optionTwoId].removeEventListener('click', flipcard)
  cardsWon.push(cardsChosen)
} else {
  cards[optionOneId].setAttribute('src', 'images/blue.png')
  cards[optionTwoId].setAttribute('src', 'images/blue.png')
  alert('Sorry, try again')
}
cardsChosen = []
cardsChosenId = []

resultDisplay.textContent = cardsWon.length
if  (cardsWon.length === cardArray.length/2) {
  resultDisplay.textContent = 'Congratulations! You found them all!'
}
}

   function flipcard() {
       let cardId= this.getAttribute('data-id')
       cardsChosenId.push(cardId)
       cardsChosen.push(cardArray[cardId].name)
       this.setAttribute('src', cardArray[cardId].img)
       if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
  }

  createBoard()
});

