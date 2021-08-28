import kaboom from 'kaboom/dist/kaboom';

import boris from './assets/sprites/Boris.png';
import wiz from './assets/sprites/Wiz.png';
import background from './assets/sprites/Background.png';
import floor from './assets/sprites/floor.png';
import floor_l from './assets/sprites/Floor-L.png';
import floor_r from './assets/sprites/Floor-R.png';
import floor_cl from './assets/sprites/Floor-CL.png';
import floor_cr from './assets/sprites/Floor-CR.png';
import wall from './assets/sprites/Wall.png';
import wall_l from './assets/sprites/Wall-L.png';
import wall_r from './assets/sprites/Wall-R.png';
import black from './assets/sprites/Black.png';
import door from './assets/sprites/Door.png';
import rock_1 from './assets/sprites/Rock1.png';
import rock_2 from './assets/sprites/Rock2.png';
import shelf from './assets/sprites/Shelf.png';
import spike from './assets/sprites/Spike-b.png';
import bolt from './assets/sprites/Bolt.png';
import death from './assets/sprites/Skele-1.png';

// import song from './assets/sounds/8bitsong.mp3';

const Game = () => {
  // Creates Kaboom frame
  const k = kaboom({
    global: true,
    scale: 1,
    width: 1024,
    height: 692,
    debug: true,
    clearColor: [0, 0, 0, 1],
    canvas: document.getElementById('gamecontainer'),
  });

  // k.debug.inspect = true;

  /* Load Assets */
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
  k.loadSprite('wiz', wiz, {
    sliceX: 3,
    sliceY: 4,
    anims: {
      idle: {
        from: 0,
        to: 5,
      },
      attack: { from: 6, to: 11 },
    },
  });
  k.loadSprite('background', background);
  k.loadSprite('floor', floor);
  k.loadSprite('floor_l', floor_l);
  k.loadSprite('floor_r', floor_r);
  k.loadSprite('floor_cl', floor_cl);
  k.loadSprite('floor_cr', floor_cr);
  k.loadSprite('wall', wall);
  k.loadSprite('wall_l', wall_l);
  k.loadSprite('wall_r', wall_r);
  k.loadSprite('black', black);
  k.loadSprite('door', door);
  k.loadSprite('rock_1', rock_1);
  k.loadSprite('rock_2', rock_2);
  k.loadSprite('shelf', shelf);
  k.loadSprite('spike', spike);
  k.loadSprite('bolt', bolt);
  k.loadSprite('death', death);

  // const music = new Audio(song);

  /* Define Constants */
  const MOVE_SPEED = 200;
  const JUMP_FORCE = 450;

  k.scene('main', ({ level, score }) => {
    // music.play();

    k.layers(['bg', 'obj', 'ui'], 'obj');
    k.camIgnore(['ui']);

    k.add([k.sprite('background'), k.layer('bg'), { scale: 0.5 }]);

    const maps = [
      [
        'aaaaaaaaaaaaaaaa',
        'xxl            r',
        'xl             d',
        'l               ',
        'l             sr',
        'l            s r',
        'l           s  r',
        'l          s   r',
        'l         s    r',
        'lp     cbm  oi r',
        'vbbbbbbxxxbbbbbn',
      ],
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
        'l       s    i r',
        'bbbbbbbbbbbbbbbb',
      ],
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
        'l       s    i r',
        'bbbbbbbbbbbbbbbb',
      ],
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
        'l       s    i r',
        'bbbbbbbbbbbbbbbb',
      ],
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
        'l       s    i r',
        'bbbbbbbbbbbbbbbb',
      ],
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
        'l       s    i r',
        'bbbbbbbbbbbbbbbb',
      ],
    ];

    const levelCfg = {
      width: 64,
      height: 64,
      a: [k.sprite('wall'), 'wall', { scale: 0.5 }],
      l: [k.sprite('wall_l'), 'wall_l', { scale: 1 }, k.solid()],
      r: [k.sprite('wall_r'), 'wall_r', { scale: 1 }, k.solid()],
      b: [
        k.sprite('floor'),
        'floor',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(0, 5), k.vec2(64, 64)),
      ],
      v: [k.sprite('floor_l'), 'floor_l', { scale: 1 }, k.solid()],
      n: [k.sprite('floor_r'), 'floor_r', { scale: 1 }, k.solid()],
      c: [
        k.sprite('floor_cl'),
        'floor_cl',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(5, 5), k.vec2(64, 64)),
      ],
      m: [
        k.sprite('floor_cr'),
        'floor_cr',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(5, 5), k.vec2(64, 64)),
      ],
      x: [k.sprite('black'), 'black', { scale: 1 }],
      d: [k.sprite('door'), 'door', { scale: 1 }],
      s: [
        k.sprite('shelf'),
        'shelf',
        { scale: 0.5 },
        k.solid(),
        k.area(k.vec2(0, 0), k.vec2(124, 30)),
      ],
      i: [
        k.sprite('spike'),
        'spike',
        { scale: 1 },
        k.area(k.vec2(20, 60), k.vec2(45, 0)),
      ],
      o: [
        k.sprite('rock_1'),
        'rock_1',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(0, 10), k.vec2(64, 64)),
      ],
      p: [
        k.sprite('rock_2'),
        'rock_2',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(0, 25), k.vec2(64, 64)),
      ],
    };

    k.addLevel(maps[level], levelCfg);

    // adding level text and count
    k.add([k.text('Room ' + parseInt(level + 1)), k.pos(50, 50), k.scale(2)]);

    /* Player Setup */
    const player = k.add([
      k.sprite('boris', {
        animSpeed: 0.2,
        frame: 1,
      }),
      k.pos(75, 400),
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

    k.keyPress('up', () => {
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

    player.overlaps('next-level', () => {
      k.go('main', {
        level: (level + 1) % maps.length,
        // score: scoreLabel.value
      });
    });

    player.overlaps('dangerous', () => {
      k.go(
        'lose'
        // { score: scoreLabel.value}
      );
      // window.value= scoreLabel.value
      // test(window.value)
      // audio.pause()
    });

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

  k.scene('lose', () =>
    // { score }
    {
      k.add([
        k.text('YOU DIED!', 32),
        origin('center'),
        k.pos(k.width() / 2, k.height() / 3),
        k.color(1, 0, 0),
      ]);
      k.add([
        k.sprite('death'),
        'death',
        origin('center'),
        k.pos(k.width() / 2, k.height() / 1.75),
      ]);
      // k.add([
      //   k.text(score, 32),
      //   origin('center'),
      //   k.pos(k.width() / 2, k.height() / 2),
      // ]);
    }
  );

  // Triggers start of game process
  k.start('main', { level: 0, score: 0 });

  return null;
};

export default Game;
