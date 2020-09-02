input.onButtonPressed(Button.A, function () {
    menu += 1
})
input.onButtonPressed(Button.AB, function () {
    home = 0
    gijagi = 0
    _return = 0
    light2 = 0
    temp = 0
    multi_pong = 0
    multi_tank = 0
    hot_potato = 0
    menu = 1
    menu_active = 1
    break_bomb = 0
})
input.onButtonPressed(Button.B, function () {
    if (menu == 1) {
        temp = 3
    } else {
        if (menu == 2) {
            light2 = 3
        } else {
            if (menu == 3) {
                gijagi = 3
            } else {
                if (menu == 4) {
                    break_bomb = 3
                } else {
                    if (menu == 5) {
                        multi_pong = 3
                    } else {
                        if (menu == 6) {
                            multi_tank = 3
                        } else {
                            if (menu == 7) {
                                hot_potato = 3
                            }
                        }
                    }
                }
            }
        }
    }
})
let break_bomb = 0
let hot_potato = 0
let menu = 0
let menu_active = 0
let multi_tank = 0
let multi_pong = 0
let temp = 0
let light2 = 0
let _return = 0
let gijagi = 0
let home = 0
home = 0
gijagi = 0
_return = 0
light2 = 0
temp = 0
multi_pong = 0
multi_tank = 0
menu_active = 1
menu = 1
hot_potato = 0
basic.forever(function () {
    if (menu_active == 1) {
        basic.showString("" + (menu))
    }
})
basic.forever(function () {
    if (menu == 8) {
        menu = 1
    }
})
basic.forever(function () {
    if (temp == 3) {
        basic.showString("" + (input.temperature()))
    } else {
        if (light2 == 3) {
            basic.showString("" + (input.lightLevel()))
        } else {
            if (gijagi == 3) {
                basic.showString("" + (input.compassHeading()))
            }
        }
    }
})
basic.forever(function () {
    if (home == 50) {
        basic.showString("easter EGG")
    }
})
