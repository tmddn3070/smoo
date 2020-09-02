break_bomb = 0
menu = 0
home = 0
gijagi = 0
_return = 0
light2 = 0
temp = 0
multi_pong = 0
multi_tank = 0
basic.show_string("Hello! SMOO OS!!!!")

def on_forever():
    global menu
    if home < 0:
        game.game_over()
        basic.show_string("home.....")
        menu = 0
basic.forever(on_forever)

def on_forever2():
    global temp, light2, gijagi, break_bomb, multi_pong, multi_tank
    if menu == 1:
        temp += 1
    else:
        if menu == 2:
            light2 += 1
        else:
            if menu == 3:
                gijagi += 1
            else:
                if menu == 4:
                    break_bomb += 1
                else:
                    if menu == 5:
                        multi_pong += 1
                    else:
                        if menu == 6:
                            multi_tank += 1
basic.forever(on_forever2)

def on_forever3():
    global menu, home
    if input.button_is_pressed(Button.A):
        menu += 1
    if input.button_is_pressed(Button.AB):
        home += 1
basic.forever(on_forever3)

def on_forever4():
    if temp < 0:
        pass
basic.forever(on_forever4)

def on_forever5():
    if home < 7:
        basic.show_string("easter EGG")
basic.forever(on_forever5)
