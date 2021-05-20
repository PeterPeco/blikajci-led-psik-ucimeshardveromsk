let led_pasik = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
basic.forever(function () {
    led_pasik.showColor(neopixel.rgb(10, 0, 0))
    basic.pause(500)
    led_pasik.showColor(neopixel.rgb(0, 10, 0))
    basic.pause(500)
    led_pasik.showColor(neopixel.rgb(0, 0, 10))
    basic.pause(500)
})
