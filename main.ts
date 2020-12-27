function Candy_Cane () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
    for (let index = 0; index <= 149; index++) {
        if (color_4 < 4) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
        } else if (color_4 >= 4 && color_4 < 8) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        } else {
            color_4 = 0
        }
        color_4 = color_4 + 1
    }
    strip.show()
    basic.pause(5000)
}
function Sparkle () {
    basic.showLeds(`
        # . . . #
        # # . # #
        # # # # #
        # # . # #
        # . . . #
        `)
    strip.clear()
    for (let index = 0; index < 150; index++) {
        choose = randint(1, 8)
        if (choose == 1) {
            my_color = neopixel.rgb(249, 4, 202)
        } else if (choose == 2) {
            my_color = neopixel.rgb(249, 184, 4)
        } else if (choose == 3) {
            my_color = neopixel.rgb(29, 249, 4)
        } else if (choose == 4) {
            my_color = neopixel.rgb(192, 116, 246)
        } else if (choose == 5) {
            my_color = neopixel.rgb(249, 242, 4)
        } else if (choose == 6) {
            my_color = neopixel.rgb(250, 24, 3)
        } else if (choose == 7) {
            my_color = neopixel.rgb(119, 198, 254)
        } else {
            my_color = neopixel.rgb(4, 246, 249)
        }
        basic.showNumber(choose)
        strip.setPixelColor(randint(0, 149), my_color)
        strip.show()
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    Keep_Going = 0
    for (let index = 0; index < 5; index++) {
        Train()
    }
    Keep_Going = 1
})
input.onButtonPressed(Button.AB, function () {
    Keep_Going = 0
    for (let index = 0; index < 5; index++) {
        Candy_Cane()
    }
    Keep_Going = 1
})
input.onButtonPressed(Button.B, function () {
    Keep_Going = 0
    for (let index = 0; index < 5; index++) {
        Sparkle()
    }
    Keep_Going = 1
})
function Train () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # # .
        # # # # #
        . . # . .
        `)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
    for (let index = 0; index <= 149; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(index - 5, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(150 - index, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(156 - index, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(25)
    }
}
let which_one = 0
let my_color = 0
let choose = 0
let color_4 = 0
let Keep_Going = 0
let strip: neopixel.Strip = null
basic.showLeds(`
    . . # . .
    . # . # .
    . . . # .
    . . . # .
    . . . # .
    `)
strip = neopixel.create(DigitalPin.P0, 150, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.pause(2000)
strip.setBrightness(100)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
Keep_Going = 1
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . . .
        . # . . .
        . # . . .
        `)
    if (Keep_Going >= 1) {
        for (let index = 0; index <= 149; index++) {
            if (color_4 == 0) {
                color_4 = 1
                strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
            } else {
                color_4 = 0
                strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
            }
        }
        strip.show()
    }
    basic.pause(1200000)
    which_one = randint(1, 4)
    if (which_one == 1) {
        Train()
    } else if (which_one == 2) {
        Sparkle()
    } else if (which_one == 3) {
        Candy_Cane()
    }
})
