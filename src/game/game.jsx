import kaboom from 'kaboom/dist/kaboom';

import boris from './assets/sprites/Boris.png';
import wiz from './assets/sprites/Wiz.png';
import background from './assets/sprites/Background.png';
import roof from './assets/sprites/Roof.png';
import roof_l from './assets/sprites/Roof-L.png';
import roof_r from './assets/sprites/Roof-R.png';
import floor from './assets/sprites/floor.png';
import floor_l from './assets/sprites/Floor-L.png';
import floor_r from './assets/sprites/Floor-R.png';
import floor_cl from './assets/sprites/Floor-CL.png';
import floor_cr from './assets/sprites/Floor-CR.png';
import wall from './assets/sprites/Wall.png';
import wall_l from './assets/sprites/Wall-L.png';
import wall_r from './assets/sprites/Wall-R.png';
import wall_cld from './assets/sprites/Wall-CLD.png';
import wall_crd from './assets/sprites/Wall-CRD.png';
import black from './assets/sprites/Black.png';
import door from './assets/sprites/Door.png';
import door_l from './assets/sprites/Door-L.png';
import door_e from './assets/sprites/Door-Exit.png';
import rock_1 from './assets/sprites/Rock1.png';
import rock_2 from './assets/sprites/Rock2.png';
import platform from './assets/sprites/Platform.png';
import spike from './assets/sprites/Spike-b.png';
import bolt from './assets/sprites/Bolt.png';
import death from './assets/sprites/Skele-1.png';
import crab from './assets/sprites/Crab.png';
import sign_d from './assets/sprites/Sign-1.png';
import sign_w from './assets/sprites/Sign-2.png';

import song from './assets/sounds/8bitsong.mp3';

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
    sliceX: 3,
    sliceY: 3,
    anims: {
      idle: {
        from: 0,
        to: 4,
      },
      run: { from: 5, to: 7 },
      jump: { from: 8, to: 8 },
      stand: { from: 0, to: 0 },
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
  k.loadSprite('roof', roof);
  k.loadSprite('roof_l', roof_l);
  k.loadSprite('roof_r', roof_r);
  k.loadSprite('floor', floor);
  k.loadSprite('floor_l', floor_l);
  k.loadSprite('floor_r', floor_r);
  k.loadSprite('floor_cl', floor_cl);
  k.loadSprite('floor_cr', floor_cr);
  k.loadSprite('wall', wall);
  k.loadSprite('wall_l', wall_l);
  k.loadSprite('wall_r', wall_r);
  k.loadSprite('wall_cld', wall_cld);
  k.loadSprite('wall_crd', wall_crd);
  k.loadSprite('black', black);
  k.loadSprite('door', door);
  k.loadSprite('door_l', door_l);
  k.loadSprite('door_e', door_e);
  k.loadSprite('rock_1', rock_1);
  k.loadSprite('rock_2', rock_2);
  k.loadSprite('platform', platform);
  k.loadSprite('spike', spike);
  k.loadSprite('bolt', bolt);
  k.loadSprite('death', death);
  k.loadSprite('crab', crab);
  k.loadSprite('sign_d', sign_d);
  k.loadSprite('sign_w', sign_w);

  const music = new Audio(song);

  /* Define Constants */
  const MOVE_SPEED = 200;
  const JUMP_FORCE = 500;
  const SLICER_SPEED = 100;

  k.scene('main', ({ level, score }) => {
    music.play();

    k.layers(['bg', 'obj', 'ui'], 'obj');
    k.camIgnore(['ui']);

    k.add([k.sprite('background'), k.layer('bg'), { scale: 0.5 }]);

    const maps = [
      [
        'xxqaaaaaaaaaaaaw',
        'xxg            r',
        'xl             d',
        'xg              ',
        'l             sr',
        'l            s r',
        'l           s  r',
        'l          s   r',
        'l         s    r',
        'lo   pcbui     r',
        'vbbbbbxxxbbbbbbt',
      ],

      [
        'xxqaaaaaaaaaaaaw',
        'xxg            r',
        'xlo            r',
        'xgsssssssss    r',
        'l              r',
        'l           piir',
        'l    ssssssssssr',
        'l              r',
        'l        o     d',
        'l^oii   cbu     ',
        'vbbbbbbbxxxbbbbt',
      ],

      [
        'zzzzqwqaaaaaawxx',
        'zxxxgrl      fxx',
        'zxxx rl e     fx',
        'zxxx rlss      r',
        'xzgs rl    rl  r',
        'xg   rl    rl  r',
        'l    rl   srl  r',
        'l    fgs   rl  r',
        'l          rl  d',
        'vbu       srl   ',
        'xxxbbbbbbbbbbbbt',
      ],

      [
        'qaaaaaaawxxxxxxx',
        'l       fxxxqaaw',
        'l        rqag  r',
        'lssssss  rl    d',
        'l        rl     ',
        'l    e   rl   sr',
        'l   sssssrl    r',
        'l        sss   r',
        'l             sr',
        'l ^      ^     r',
        'vbbbbbbbbbbbbbbt',
      ],

      [
        'qaaaaaaaaaaaaaaw',
        'l              r',
        'l              r',
        'l              r',
        'l              r',
        'l              r',
        'l              r',
        'l              r',
        'n    !    ?    m',
        '                ',
        'vbbbbbbbbbbbbbbt',
      ],
    ];

    // k.origin('center')
    const levelCfg = {
      width: 64,
      height: 64,
      e: [
        k.sprite('wiz'),
        'wiz',
        k.body(),
        { scale: 1 },
        k.origin('center'),
        k.area(k.vec2(25, 65), k.vec2(25, 50)),
      ],
      a: [k.sprite('roof'), 'roof', { scale: 1 }, k.solid()],
      q: [k.sprite('roof_l'), 'roof_l', { scale: 1 }, k.solid()],
      w: [k.sprite('roof_r'), 'roof_r', { scale: 1 }, k.solid()],
      l: [k.sprite('wall_l'), 'wall_r', { scale: 1 }, k.solid()],
      r: [k.sprite('wall_r'), 'wall_r', { scale: 1 }, k.solid()],
      g: [k.sprite('wall_cld'), 'wall_cld', { scale: 1 }, k.solid()],
      f: [k.sprite('wall_crd'), 'wall_crd', { scale: 1 }, k.solid()],
      b: [
        k.sprite('floor'),
        'floor',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(0, 5), k.vec2(64, 64)),
      ],
      v: [
        k.sprite('floor_l'),
        'floor_l',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(0, 5), k.vec2(64, 64)),
      ],
      t: [
        k.sprite('floor_r'),
        'floor_r',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(0, 5), k.vec2(64, 64)),
      ],
      c: [
        k.sprite('floor_cl'),
        'floor_cl',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(5, 5), k.vec2(64, 64)),
      ],
      u: [
        k.sprite('floor_cr'),
        'floor_cr',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(5, 5), k.vec2(64, 64)),
      ],
      x: [k.sprite('black'), 'black', { scale: 1 }],
      z: [k.sprite('black'), 'black_s', { scale: 1 }, k.solid()],
      d: [k.sprite('door'), 'door', 'next-level', { scale: 1 }],
      n: [k.sprite('door_l'), 'door_l', 'win', { scale: 1 }],
      m: [k.sprite('door_e'), 'door_e', 'dangerous', { scale: 1 }],
      s: [
        k.sprite('platform'),
        'platform',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(0, 0), k.vec2(62, 25)),
      ],
      i: [
        k.sprite('spike'),
        'spike',
        'dangerous',
        { scale: 1 },
        k.area(k.vec2(20, 60), k.vec2(45, 5)),
      ],
      o: [
        k.sprite('rock_1'),
        'wall_r',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(0, 10), k.vec2(64, 64)),
      ],
      p: [
        k.sprite('rock_2'),
        'wall_r',
        { scale: 1 },
        k.solid(),
        k.area(k.vec2(0, 25), k.vec2(64, 64)),
      ],
      '!': [k.sprite('sign_d'), 'sign_d', { scale: 1 }],
      '?': [k.sprite('sign_w'), 'sign_w', { scale: 1 }],

      '^': [
        k.sprite('crab'),
        'crab',
        'dangerous',
        { dir: 1, timer: 0, scale: 0.75 },
        k.body(),
        k.area(k.vec2(0, 40), k.vec2(64, 64)),
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
      k.pos(200, 100),
      k.origin('center'),
      k.body(),
      k.area(k.vec2(-20, 65), k.vec2(20, -50)),
      k.scale(1),

      // {
      //   // right by default
      //   dir: k.vec2(1, 0),
      // },
    ]);
    player.play('idle');

    k.action('crab', (s) => {
      s.move(s.dir * SLICER_SPEED, 0);
      // s.resolve()
    });

    k.collides('crab', 'wall_r', (s) => {
      s.dir = -s.dir;
    });

    // const wizard = k.add([
    //   k.sprite('wiz', {
    //     animSpeed:0.2,
    //     frame: 0,
    //   })
    // ])
    // wizard.play('idle');

    // Movement Controls
    k.keyDown('left', () => {
      player.move(-MOVE_SPEED, 0);
    });

    k.keyDown('right', () => {
      player.move(MOVE_SPEED, 0);
    });

    k.keyPress('left', () => {
      if (player.grounded()) {
        player.play('run');
      }
      player.scale.x = 1;
    });

    k.keyPress('right', () => {
      if (player.grounded()) {
        player.play('run');
      }
      player.scale.x = -1;
    });

    k.keyDown('up', () => {
      if (player.grounded()) {
        player.jump(JUMP_FORCE);
        player.play('jump');
      }
    });

    k.keyRelease(['left', 'right'], () => {
      if (player.grounded()) {
        player.play('idle');
      }
    });

    k.keyRelease(['up'], () => {
      player.play('stand');
    });


    function restart() {
      k.keyPress(["r"], () => {
        k.go('main', {
          level: (0),
        });
      });
    } 

    restart()

    // player.collides("enemy", (e) => {
    //   destroy(e);
    //   destroy(player);
    //   shake(120);
    //   play("explosion");
    //   music.detune(-1200);
    //   makeExplosion(vec2(width() / 2, height() / 2), 12, 120, 30);
    //   wait(1, () => {
    //     music.stop();
    //     go("main");
    //   });
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
      music.pause();
      // window.value= scoreLabel.value
      // test(window.value)
    });

    player.overlaps('win', () => {
      k.go('win');
      music.pause();
    });
  });

    





  // player.overlaps('victory', () => {
  //   k.go('win', { score: scoreLabel.value})
  //     window.value= scoreLabel.value
  //     test(window.value)
  // })

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


  k.scene('win', () =>
    // { score }
    {
      k.add([
        k.text('YOU ESCAPED!', 32),
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

// [
//   'qaaaaaaaaaaaaaaw',
//   'l              r',
//   'l              r',
//   'l              r',
//   'l              r',
//   'l              r',
//   'l              r',
//   'l              r',
//   'l              r',
//   'l              r',
//   'vbbbbbbbbbbbbbbn',
// ],
