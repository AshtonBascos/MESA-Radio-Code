let yeah_boiiiiii = 0
radio.onReceivedNumber(function (receivedNumber) {
    yeah_boiiiiii = 1
    while (yeah_boiiiiii == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    yeah_boiiiiii = 0
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})
