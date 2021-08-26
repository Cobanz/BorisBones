import kaboom from 'kaboom/dist/kaboom'
 const k = kaboom({
    global: true,
    // fullscreen: true,
    // parent: 'game',
    scale: 1,
    debug: true,
    clearColor: [0,0,0,1],
    canvas: document.getElementById("game")
})
export default k