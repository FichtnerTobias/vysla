
radio.setGroup(1)
let start = true

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    start = !start
    if (start) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})

basic.forever(function () {
    if (start) {
        let x = input.acceleration(Dimension.X)
        let y = input.acceleration(Dimension.Y)
        console.log(`${x} ${y}`)

        radio.sendValue("x", x)
        radio.sendValue("y", y)

        basic.pause(50)
    } else if (!start){
        radio.sendValue("stop", 0)
    }
})
