def on_forever():
    while True:
        if input.is_gesture(Gesture.LOGO_UP):
            radio.send_number(1)
            basic.show_leds("""
                . . # . .
                                . # . # .
                                # . . . #
                                . . . . .
                                . . . . .
            """)
        if input.is_gesture(Gesture.LOGO_DOWN):
            radio.send_number(2)
            basic.show_leds("""
                . . . . .
                                . . . # .
                                # . . . #
                                . # . # .
                                . . # . .
            """)
        if input.is_gesture(Gesture.SHAKE):
            radio.send_number(3)
            basic.show_leds("""
                # . . . #
                                . # . # .
                                . . # . .
                                . # . # .
                                # . . . #
            """)
        if input.is_gesture(Gesture.TILT_LEFT):
            radio.send_number(5)
            basic.show_leds("""
                # . . . .
                                . # . . .
                                . . # . .
                                . # . . .
                                # . . . .
            """)
        if input.is_gesture(Gesture.TILT_RIGHT):
            radio.send_number(4)
            basic.show_leds("""
                . . . . #
                                . . . # .
                                . . # . .
                                . . . # .
                                . . . . #
            """)
basic.forever(on_forever)
