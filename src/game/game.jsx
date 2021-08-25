import k from "../kaboom"


const MOVE_SPEED = 120

k.loadRoot(*background*)
k.loadSprite("sprite string", *what we call*)



const audio= new Audio(*game song*)

k.scene("game", ({level, score}) => {

audio.play()

k.layers(['bg', 'obj', 'ui'], 'obj')

const maps = [

  [
      "cccccccccccc",
      "a          b",
      "a    %     b",
      "a          b",
      "a        $ b",
      "dddddddddddd"
  ],

  [
      "cccccccccccc",
      "a          b",
      "a          b",
      "a          b",
      "a          b",
      "dddddddddddd"
  ],
  [
      "cccccccccccc",
      "a          b",
      "a          b",
      "a          b",
      "a          b",
      "dddddddddddd"
  ],
  [
      "cccccccccccc",
      "a          b",
      "a    %     b",
      "a          b",
      "a        $ b",
      "dddddddddddd"
  ],

]

const levelCfg = {
  width:32,
  height: 32,

  "symbol we use" : [k.sprite("name of it"), k.solid(), "wall",{scale:1.0}],
  "next symbol we use",

}

k.addLevel(maps[level], levelCfg)

const floor =k.add([k.sprite('bg'),
k.layer('bg'),
k.scale(10)

])

const scoreLabel = k.add([
  k.text(score),
  k.pos(400, 450),
  k.layer('ui'),
  {
    value: score,
  },
  k.scale(2)
])





})
