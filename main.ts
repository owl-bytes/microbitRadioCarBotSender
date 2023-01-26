basic.forever(function on_forever() {
    while (true) {
        if (input.isGesture(Gesture.LogoUp)) {
            radio.sendNumber(1)
            basic.showLeds(`
                . . # . .
                                . # . # .
                                # . . . #
                                . . . . .
                                . . . . .
            `)
        }
        
        if (input.isGesture(Gesture.LogoDown)) {
            radio.sendNumber(2)
            basic.showLeds(`
                . . . . .
                                . . . # .
                                # . . . #
                                . # . # .
                                . . # . .
            `)
        }
        
        if (input.isGesture(Gesture.Shake)) {
            radio.sendNumber(3)
            basic.showLeds(`
                # . . . #
                                . # . # .
                                . . # . .
                                . # . # .
                                # . . . #
            `)
        }
        
        if (input.isGesture(Gesture.TiltLeft)) {
            radio.sendNumber(5)
            basic.showLeds(`
                # . . . .
                                . # . . .
                                . . # . .
                                . # . . .
                                # . . . .
            `)
        }
        
        if (input.isGesture(Gesture.TiltRight)) {
            radio.sendNumber(4)
            basic.showLeds(`
                . . . . #
                                . . . # .
                                . . # . .
                                . . . # .
                                . . . . #
            `)
        }
        
    }
})
