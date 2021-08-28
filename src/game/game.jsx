import kaboom from 'kaboom/dist/kaboom';

import wall from './assets/sprites/Wall.png';
import wall_l from './assets/sprites/Wall-L.png';
import wall_r from './assets/sprites/Wall-R.png';
import floor from './assets/sprites/floor.png';
import boris from './assets/sprites/Boris.png';
import bolt from './assets/sprites/Bolt.png'
import door from './assets/sprites/Door.png'
import shelf from './assets/sprites/Shelf.png'
import spike from './assets/sprites/Spike.png'

import song from './assets/sounds/8bitsong.mp3';

const Game = () => {
  // Creates Kaboom frame
  const k = kaboom({
    global: true,
    scale: 1,
    width: 1024,
    height: 672 ,
    debug: true,
    clearColor: [0, 0, 0, 1],
    canvas: document.getElementById('gamecontainer'),
  });
  
  // k.debug.inspect = true;
  
  /* Load Assets */
  k.loadSprite('floor', floor);
  k.loadSprite('wall', wall);
  k.loadSprite('wall_r', wall_r);
  k.loadSprite('wall_l', wall_l);
  k.loadSprite('bolt', bolt )
  k.loadSprite('door', door )
  k.loadSprite('shelf', shelf )
  k.loadSprite('spike', spike )
  k.loadSprite('boris', boris, {
    sliceX: 2,
    sliceY: 3,
    anims: {
      idle: {
        from: 0,
        to: 4,
      },
      run: { from: 1, to: 3 },
    },
  });

  const music = new Audio(song);

  /* Define Constants */
  const MOVE_SPEED = 200;
  const JUMP_FORCE = 450;

  k.scene('main', ({ level, score }) => {
    // music.play();

    k.layers(['bg', 'obj', 'ui'], 'obj');
    k.camIgnore(['ui']);

    // k.add([k.sprite('wall'), k.layer('bg')]);

    const maps = [
      [
        'aaaaaaaaaaaaaaaa',
        'l              r',
        'l             dr',
        'l             dr',
        'l             sr',
        'l            s r',
        'l           s  r',
        'l          s   r',
        'l         s    r',
        'l    i   s     r',
        'bbbbbbbbbbbbbbbb',
      ],
      [
        'aaaaaaaaaaaaaaaa',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'bbbbbbbbbbbbbbbb',
      ],
      [
        'aaaaaaaaaaaaaaaa',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'bbbbbbbbbbbbbbbb',
      ],
      [
        'aaaaaaaaaaaaaaaa',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'bbbbbbbbbbbbbbbb',
      ],
      [
        'aaaaaaaaaaaaaaaa',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'bbbbbbbbbbbbbbbb',
      ],
      [
        'aaaaaaaaaaaaaaaa',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'a              a',
        'bbbbbbbbbbbbbbbb',
      ],
    ];

    const levelCfg = {
      width: 64,
      height: 64,
      a: [k.sprite('wall'), 'wall', { scale: 0.5}],
      l: [k.sprite('wall_l'), 'wall_l', { scale: 0.5 }, k.solid()],
      r: [k.sprite('wall_r'), 'wall_r', { scale: 0.5 }, k.solid()],
      b: [k.sprite('floor'), 'floor', { scale: 0.5 }, k.solid()],
      d: [k.sprite('door'), 'door',  {scale: 0.5}],
      s: [k.sprite('shelf'), 'shelf' ,{scale: 0.5}, k.solid(), k.area(k.vec2(0, 0), k.vec2(124, 30))],
      i: [k.sprite('spike'), 'spike', {scale: 0.5}, k.area(k.vec2(90, 125), k.vec2(45, 10))],
    };

    k.addLevel(maps[level], levelCfg);

    /* Player Setup */
    const player = k.add([
      k.sprite('boris', {
        animSpeed: 0.2,
        frame: 1,
      }),
      k.pos(50, 50),
      k.origin('center'),
      k.body(),
      k.area(k.vec2(-25, 65), k.vec2(25, -50)),
      k.scale(1),
      // {
      //   // right by default
      //   dir: k.vec2(1, 0),
      // },
    ]);

    // Movement Controls
    k.keyDown('left', () => {
      player.move(-MOVE_SPEED, 0);
      player.scale.x = 1;
      player.play('run');
    });

    k.keyDown('right', () => {
      player.move(MOVE_SPEED, 0);
      player.scale.x = -1;
      player.play('run');
    });

    k.keyPress('space', () => {
      if (player.grounded()) {
        player.jump(JUMP_FORCE);
      }
    });

    k.keyRelease('left', () => {
      player.play('idle');
    });

    k.keyRelease('right', () => {
      player.play('idle');
    });

    // const scoreLabel = k.add([
    //   k.text(score),
    //   k.pos(10, 10),
    //   k.layer('ui'),
    //   {
    //     value: score,
    //   },
    //   k.scale(2),
    // ]);

    // k.add([
    //   k.text('level ' + parseInt(level + 1)),
    //   k.pos(400, 485),
    //   k.scale(2),
    // ]);

    // // jump with space
    // k.keyPress("space", () => {
    // 	// these 2 functions are provided by body() component
    // 	if (player.grounded()) {
    // 		player.jump(JUMP_FORCE);
    // 	}
    // });

    // k.keyDown("left", () => {
    // 	player.move(-MOVE_SPEED, 0);
    // });

    // k.keyDown("right", () => {
    // 	player.move(MOVE_SPEED, 0);
    // });

    // player.overlaps('dangerous', () => {
    //   k.go('lose', { score: scoreLabel.value})
    //     window.value= scoreLabel.value
    //     test(window.value)
    //     audio.pause()
    // })

    // player.overlaps('victory', () => {
    //   k.go('win', { score: scoreLabel.value})
    //     window.value= scoreLabel.value
    //     test(window.value)
    //     audio.pause()
    // })
  });

  // k.scene('win', ({ score }) => {
  //   k.add([
  //     k.text('YOU WIN!', 32),
  //     origin('center'),
  //     k.pos(k.width() / 2, k.height() / 3),
  //   ]);
  //   k.add([
  //     k.text(score, 32),
  //     origin('center'),
  //     k.pos(k.width() / 2, k.height() / 2),
  //   ]);
  // });

  // k.scene('lose', ({ score }) => {
  //   k.add([
  //     k.text('YOU DIED', 32),
  //     origin('center'),
  //     k.pos(k.width() / 2, k.height() / 3),
  //     k.color(1, 0, 0),
  //   ]);
  //   k.add([
  //     k.text(score, 32),
  //     origin('center'),
  //     k.pos(k.width() / 2, k.height() / 2),
  //   ]);
  // });

  // Triggers start of game process
  k.start('main', { level: 0, score: 0 });

  return null;
};

export default Game;
