basic.clearScreen()
let x = 1
basic.forever(function () {
    if (input.acceleration(Dimension.X) < 200) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # # . .
            # # # . .
            # # # . .
            . . . . .
            `)
    }
    if (input.acceleration(Dimension.X) > -200) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # # #
            . . # # #
            . . # # #
            . . . . .
            `)
    }
})
