let testing_2 = 0
radio.onReceivedNumber(function (receivedNumber) {
    testing_2 = 1
    while (testing_2 == 1) {
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
    testing_2 = 0
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})
