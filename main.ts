let testing = 0
radio.onReceivedNumber(function (receivedNumber) {
    testing = 1
    while (testing == 1) {
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
    testing = 0
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})
