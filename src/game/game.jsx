import k from "../kaboom"
import wall from "./Wall.png"
import floor from "./floor.png"
import skele from "./Skele-1.png"
import gameSong from './8bitsong.mp3'

const MOVE_SPEED = 120
const JUMP_FORCE = 120

k.loadRoot('https://i.imgur.com/')
k.loadSprite("floor", floor)
k.loadSprite("skele", skele)
k.loadSprite("wall", wall)



const audio = new Audio(gameSong)

k.scene("game", ({ level, score }) => {

  audio.play()

  k.layers(['bg', 'obj', 'ui'], 'obj')

  const maps = [

    [
      "bbbbbbbbbbbbbbbbbbbbbbb",
      "a                     a",
      "a                     a",
      "a                     a",
      "a                     a",
      "a                     a",
      "a                     a",
      "a                     a",
      "a                     a",
      "a                     a",
      "bbbbbbbbbbbbbbbbbbbbbbb"
    ],

  ]

  const levelCfg = {
    width: 32,
    height: 32,

    "a": [k.sprite("wall"), k.solid(), "wall"],
    "b": [k.sprite("floor"), k.solid(), "wall"],
    // "s": [k.sprite("skele"), k.solid(), "wall", { scale: 1.0 }],
    // "$": [k.sprite("name of it"), k.solid(), "wall", { scale: 1.0 }],
    // "%":[k.sprite("name of it"), k.solid(), "wall", { scale: 1.0 }],

  }

  k.addLevel(maps[level], levelCfg)

  const floor = k.add([k.sprite('bg'),
  k.layer('bg'),
  k.scale(10)

  ])

  const scoreLabel = k.add([
    k.text(score),
    k.pos(10, 10),
    k.layer('ui'),
    {
      value: score,
    },
    k.scale(2)
  ])

  k.add([k.text('level ' + parseInt(level + 1)), k.pos(400, 485), k.scale(2)])

  const player = k.add([
    k.sprite('skele'),
    k.pos(5, 190),
    k.scale(1),
    {
      // right by default
      dir: k.vec2(1, 0),
    }
  ])

// jump with space
k.keyPress("space", () => {
	// these 2 functions are provided by body() component
	if (player.grounded()) {
		player.jump(JUMP_FORCE);
	}
});

k.keyDown("left", () => {
	player.move(-MOVE_SPEED, 0);
});

k.keyDown("right", () => {
	player.move(MOVE_SPEED, 0);
});






  player.overlaps('dangerous', () => {
    k.go('lose', { score: scoreLabel.value})
      window.value= scoreLabel.value
      test(window.value)
      audio.pause()
  })


  player.overlaps('victory', () => {
    k.go('win', { score: scoreLabel.value})
      window.value= scoreLabel.value
      test(window.value)
      audio.pause()
  })


})



  k.scene("win", ({ score }) => {
    k.add([k.text("YOU WIN!", 32), origin('center'), k.pos(k.width() / 2, k.height()/3)])
    k.add([k.text(score, 32), origin('center'), k.pos(k.width() / 2, k.height() / 2)])
   
  
  })
  
  k.scene("lose", ({ score }) => {
    k.add([k.text("YOU DIED", 32), origin('center'), k.pos(k.width() / 2, k.height()/3),k.color(1,0,0)])
    k.add([k.text(score, 32), origin('center'), k.pos(k.width() / 2, k.height() / 2)])
  
  })





  



export const gameStart = () => { k.start("game", { level: 0, score: 0 }) }