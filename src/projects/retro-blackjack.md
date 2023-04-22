---
layout: project.njk
title: Retro Blackjack
subtitle: Minimalist React-based application inspired by the classic handheld game from the early 90’s.
tags: project
story: false
order: 5
stack: ['react', 'netlify']
live: https://blackjack.grahamhagenah.com
source: https://github.com/grahamhagenah/blackjack
intro:
  summary: Minimalist React-based application inspired by the classic handheld game from the early 90’s. My goal was to capture the charm and simplicity of the original version and learn about React along the way.
  image: /assets/img/blackjack.jpeg
  preview: /assets/img/blackjack-preview.jpg
  alt: ""
---

## Building Mental Models

I started this project to gain experience building an interactive, client-side application in React. I learn best when I switch between discovering new concepts and applying the knowledge practically. I've found that growth is not as linear as one would expect; a more realistic path resembles a circle in which the student initially struggles with unfamiliar material, experiments with concepts, builds a mental model, hones expertise in a subject, revises their mental model, and expands their reach to the next set of unfamiliar concepts.

Reading documentation, following tutorials, and seeking guidance from mentors is an essential part of the process. Still, I've found that tackling problems head-on with just-in-time learning is the most effective way to learn something new.

In building this game, I sought a deeper understanding of React Hooks, the fundamentals of functional programming, and best practices for handling state.

## How The App Works

I started by defining the object that the game relies on: a deck of cards. I generate an array of 52 values representing each card in a full deck, then pass that array as a prop to my ```<App/>``` component.

```js
//create deck of cards
let cards = [];

const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
for(var suits = 0; suits < 4; suits++) {
  for (let value in values) {
    cards.push(values[value])
  }
}

ReactDOM.render(
  <App cards={ cards } />, 
  document.getElementById('root')
)
```

Inside App.js, I define a component ```<Board/>```, representing the larger structure of the application, and ```<Hand/>```, representing the hands of the player and dealer. The variables I pass to the components indicate whose turn it is, the overall score for the player, the current totals for the dealer and the player, the state of both hands, and which hand the board is displaying.

```jsx
const Board = ( {score, turn, playerHand, playerTotal, dealerHand, dealerTotal, switchView } ) => {

    if(turn === true && switchView === false) {
      return (
        <div className=“board”>
          <Hand name=“Player” hand={playerHand} total={playerTotal} score={score} />
        </div>
      )
    }
    else 
      return (
        <div className=“board”>
          <Hand name=“Dealer” hand={dealerHand} total={dealerTotal} score={score}  />
        </div>
      )
}

const Hand = ({ name, hand, total, score }) => {
  return (
    <div className=“hand”>
      <ul>    
        <li className=“name”>{name}</li>
        {(total < 1) && <li className=“total”></li>}
        {(total > 0) && <li className=“total”>{total}</li>}
        <li><div className=“card-value”>{hand[0]}</div></li>
        <li><div className=“card-value”>{hand[1]}</div></li>
        <li><div className=“card-value”>{hand[2]}</div></li>
        <li><div className=“card-value”>{hand[3]}</div></li>
        <li><div className=“card-value”>{hand[4]}</div></li>
        <li><div className=“card-value”>{hand[5]}</div></li>
      </ul> 
    </div>
  )
}
```

From there, I defined a component ```<Controls/>``` containing the markdown and logic for the buttons which trigger the actions to hit, stand, and switch the view.

In ```<App/>```, I wrote functions for dealing cards to the appropriate index of a hand, getting the value of cards drawn from the deck, shuffling the deck, checking the totals for the player and dealer, determining the win or lose states, and changing the player's score depending on the outcome of the game.

I track state for all the variables:

```js
  const [deck, setDeck] = useState(cards)
  const [hasAce, setHasAce] = useState(0)
  const [dealerHasAce, setDealerHasAce] = useState(0)
  const [beginningState, setBeginningState] = useState(true)
  const [playerHand, setPlayerHand] = useState(Array(6).fill(''))
  const [playerTotal, setPlayerTotal] = useState(0)
  const [dealerTotal, setDealerTotal] = useState(0)
  const [dealerHand, setDealerHand] = useState(Array(6).fill(''))
  const [nextPlayerPosition, setNextPlayerPosition] = useState(0)
  const [nextDealerPosition, setNextDealerPosition] = useState(0)
  const [playersTurn, togglePlayersTurn] = useState(true)
  const [gameOver, toggleGameOver] = useState(false)
  const [playerWins, setplayerWins] = useState(false)
  const [score, setScore] = useState(200)
  const [change, setChange] = useState(0)
  const [switchView, setView] = useState(false)
  ```

## Why I Chose React

This project aimed to deepen my understanding of React, but I could have used a different framework or even vanilla JavaScript. Using a library like React is powerful because of the seamless, efficient way it updates state and unlocks the reusability of components. I got started fast with Create React App, which handled the configuration details and allowed me to focus on prototyping my design. Netlify, my go-to choice for hosting Jamstack apps and websites, distributed the static files. The hosting platform has a first-class integration with GitHub, making it easy to commit and deploy my changes immediately.

<img class="content-img" src="/assets/img/blackjack-mobile.webp" alt="">

## What I Learned

This project helped me to internalize the benefits of using React Hooks over Class-based objects, and specifically how this method eliminates the confusion surrounding ```this``` when updating state.

Something else I learned was the nuance of where I should be storing state since components will have their own states they are concerned with as well as states that are common to several components. I decided to store state in the nearest common ancestor of components that require it, and only lift the state when an additional component needs access to a state variable. 

For example, I initially stored the state of ```playerTotal``` and ```dealerTotal``` in ```<Hand/>```, but realized later that the parent components required access to those states for determining whether the game was over. I lifted the state for those variables up to ```<App/>``` and passed down the values as props to the components that render them to the document.