import kaboom from 'kaboom/dist/kaboom';

import wall from './assets/sprites/Wall.png';
import floor from './assets/sprites/Floor.png';
import boris from './assets/sprites/Skele.png';

import song from './assets/sounds/8bitsong.mp3';

const Game = () => {
  // Creates Kaboom frame
  const k = kaboom({
    global: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
    canvas: document.getElementById('gamecontainer'),
  });

  /* Load Assets */
  k.loadSprite('floor', floor);
  k.loadSprite('wall', wall);
  k.loadSprite('boris', boris, {
    sliceX: 3,
    sliceY: 3,
    anims: {
      idle: {
        from: 2,
        to: 8,
      },
      run: { from: 2, to: 2 },
    },
  });

  const music = new Audio(song);

  /* Define Constants */
  const MOVE_SPEED = 200;
  const JUMP_FORCE = 450;

  k.scene('main', ({ level, score }) => {
    music.play();

    k.layers(['bg', 'obj', 'ui'], 'obj');
    k.camIgnore(['ui']);

    // k.add([k.sprite('wall'), k.layer('bg')]);

    const maps = [
      [
        'aaaaaaaaaaaaaaaaaaaaaa',
        'a                    a',
        'a                    a',
        'a                    a',
        'a                    a',
        'a                    a',
        'a                    a',
        'bbbbbbbbbbbbbbbbbbbbbb',
      ],
    ];

    const levelCfg = {
      width: 64,
      height: 64,
      a: [k.sprite('wall'), 'wall', { scale: 0.5 }],
      b: [k.sprite('floor'), 'floor', { scale: 0.5 }, k.solid()],
      // "s": [k.sprite("skele"), k.solid(), "wall", { scale: 1.0 }],
    };

    k.addLevel(maps[level], levelCfg);

    /* Player Setup */
    const player = k.add([
      k.sprite('boris', {
        animSpeed: 0.2,
        frame: 1,
      }),
      k.pos(5, 300),
      k.origin('center'),
      k.body(),
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
