basic.clearScreen()
let LED_X = 2
led.plot(LED_X, 2)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -200) {
        LED_X = 2
        led.plot(LED_X, -1)
    }
    if (input.acceleration(Dimension.X) > 200) {
        LED_X = 2
        led.plot(LED_X, 1)
    }
})
