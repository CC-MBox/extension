/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Sensor_color = '#27b6ac';
    const QH_Actuator_color = '#AE8F00';
    const QH_SPEECH_color1 = '#ae8f00';
    const QH_SPEECH_color2 = '#5ba5a5';
    const QH_SPEECH_color3 = '#a5675b';
    const QH_SPEECH_color4 = '#e386a1';
    const QH_COMMUNICATE_color1 = '#6c91ac';
    const QH_COMMUNICATE_color2 = '#27b6ac';
    const QH_COMMUNICATE_color3 = '#5b5b5b';
    const QH_MP3_color = '#b766ad';
    const QH_SMG_COLOR = '#ae8f00';
    const QH_OLED_COLOR = '#e36a69';
    const QH_SDISPLAY_COLOR = '#a5855b';
    const QH_LCD_COLOR = '#5ba5a5';
    const QH_ZKP_COLOR = '#6495ed';


    const QH_yssb_delay = [['700', '700'], ['2.4', '2_4'], ['24', '24'], ['50', '50'], ['101', '101'], ['154', '154']];
    const QH_yssb_gain = [['1', '1'], ['4', '4'], ['16', '16'], ['60', '60']];

    const QH_TONE_NOTES = [['NOTE_C3', '131'], ['NOTE_D3', '147'], ['NOTE_E3', '165'], ['NOTE_F3', '175'], ['NOTE_G3', '196'], ['NOTE_A3', '220'], ['NOTE_B3', '247'],
        ['NOTE_C4', '262'], ['NOTE_D4', '294'], ['NOTE_E4', '330'], ['NOTE_F4', '349'], ['NOTE_G4', '392'], ['NOTE_A4', '440'], ['NOTE_B4', '494'],
        ['NOTE_C5', '532'], ['NOTE_D5', '587'], ['NOTE_E5', '659'], ['NOTE_F5', '698'], ['NOTE_G5', '784'], ['NOTE_A5', '880'], ['NOTE_B5', '988']];
    const QH_TONE_TONE_MUSIC = [['music1', '1'], ['music2', '2'], ['music3', '3'], ['music4', '4'], ['music5', '5'], ['music6', '6'], ['music7', '7'], ['music8', '8'], ['music9', '9'], ['music10', '10']];
    const QH_ROBOT_PWMPCB = [['B0', '0'], ['B1', '1'], ['B2', '2'], ['B3', '3'], ['B4', '4'], ['B5', '5'], ['B6', '6'], ['B7', '7'], ['B8', '8'], ['B9', '9'], ['B10', 'A'], ['B11', 'B'], ['B12', 'C'], ['B13', 'D'], ['B14', 'E'], ['B15', 'F']];
    const QH_Voice_Dropdown = [
        ['欢迎使用', '0'],
        ['您好', '1'],
        ['已打开', '2'],
        ['已关闭', '3'],
        ['彩灯', '4'],
        ['LED', '5'],
        ['红灯', '6'],
        ['绿灯', '7'],
        ['黄灯', '8'],
        ['蓝色', '9'],
        ['按钮按下', '10'],
        ['按钮释放', '11'],
        ['表演', '12'],
        ['蜂鸣器关闭', '13'],
        ['显示', '14'],
        ['开始', '15'],
        ['停止', '16'],
        ['播报', '17'],
        ['0', '18'],
        ['1', '19'],
        ['2', '20'],
        ['3', '21'],
        ['4', '22'],
        ['5', '23'],
        ['6', '24'],
        ['7', '25'],
        ['8', '26'],
        ['9', '27'],
        ['十', '28'],
        ['百', '29'],
        ['千', '30'],
        ['万', '31'],
        ['点', '32'],
        ['红外发射成功', '33'],
        ['红外信号已接收', '34'],
        ['电位器的值', '35'],
        ['光线强度', '36'],
        ['音量', '37'],
        ['太吵了,请安静', '38'],
        ['X轴', '39'],
        ['Y轴', '40'],
        ['平衡', '41'],
        ['上午', '42'],
        ['下午', '43'],
        ['晚上', '44'],
        ['时', '45'],
        ['分', '46'],
        ['秒', '47'],
        ['度', '48'],
        ['温度', '49'],
        ['摄氏度', '50'],
        ['湿度', '51'],
        ['过高', '52'],
        ['过低', '53'],
        ['环境干燥', '54'],
        ['环境湿润', '55'],
        ['当前', '56'],
        ['障碍物', '57'],
        ['请注意', '58'],
        ['安全', '59'],
        ['危险', '60'],
        ['谢谢', '61'],
        ['加油，加油！', '62'],
        ['吓死宝宝了', '63'],
        ['通信故障', '64'],
        ['连接上了', '65'],
        ['正', '66'],
        ['负', '67'],
        ['上', '68'],
        ['下', '69'],
        ['左', '70'],
        ['右', '71'],
        ['你', '72'],
        ['我', '73'],
        ['他', '74'],
        ['看好你哦！', '75'],
        ['厘米', '76'],
        ['音效1', '77'],
        ['音效2', '78'],
        ['音效3', '79'],
        ['音效4', '80'],
        ['音效5', '81'],
        ['音效6', '82'],
        ['音效7', '83'],
        ['音效8', '84'],
        ['音效9', '85']
    ];
    const QH_ASR_keyword_dropdown2 = [
        ['唤醒', 'starton'],
        ['退出识别', 'startoff'],
        ['静音模式', 'soundoff'],
        ['回应模式', 'soundon'],
        ['打开设备/打开1号/开始1号', 'openequipment'],
        ['关闭设备/关闭1号/停止1号', 'closeequipment'],
        ['开灯/把灯打开/打开2号/开始2号', 'turnon2'],
        ['关闭2号/停止2号/关灯/关闭灯光', 'turnoff2'],
        ['打开3号/开启3号/开始3号', 'turnon3'],
        ['关闭3号/停止3号', 'turnoff3'],
        ['打开4号/开始4号', 'turnon4'],
        ['关闭4号/停止4号', 'turnoff4'],
        ['打开5号/开始5号', 'turnon5'],
        ['关闭5号/停止5号', 'turnoff5'],
        ['打开6号/开始6号', 'turnon6'],
        ['关闭6号/停止6号', 'turnoff6']
    ];

    const QH_ASR_keyword_dropdown = [
        ['退下/再见', 'ExitUni'],
        ['静音模式', 'soundoff'],
        ['回应模式', 'soundon'],
        ['打开设备/打开1号/开始1号', 'openequipment'],
        ['关闭设备/关闭1号/停止1号', 'closeequipment'],
        ['开灯/把灯打开/打开2号/开始2号', 'turnon2'],
        ['关闭2号/停止2号/关灯/关闭灯光', 'turnoff2'],
        ['打开3号/开启3号/开始3号', 'turnon3'],
        ['关闭3号/停止3号', 'turnoff3'],
        ['打开4号/开始4号', 'turnon4'],
        ['关闭4号/停止4号', 'turnoff4'],
        ['打开5号/开始5号', 'turnon5'],
        ['关闭5号/停止5号', 'turnoff5'],
        ['打开6号/开始6号', 'turnon6'],
        ['关闭6号/停止6号', 'turnoff6'],
        ['现在温度/今天温度', 'temperaturenow'],
        ['现在湿度/显示湿度', 'humiditynow'],
        ['你叫什么名字', 'myname'],
        ['左转/左转弯', 'leftturn'],
        ['右转/右转弯', 'rightturn'],
        ['前进/直行/进攻/出发', 'goforward'],
        ['后退/倒退/倒车', 'drawback'],
        ['停止/停了', 'stoprun'],
        ['打转/转圈', 'turnaround'],
        ['抬左手/举起左手', 'raisedlefthand'],
        ['抬右手/举起右手', 'raisedrighthand'],
        ['抬左脚/举起左脚', 'leftfoot'],
        ['抬右脚/举起右脚', 'rightfoot'],
        ['打开风扇', 'openElectricfan'],
        ['关闭风扇', 'closElectricfan'],
        ['风扇调到1档/风速调到最小', 'AdjustGearmin'],
        ['风扇调到3档/风速调到最大', 'AdjustGearmax'],
        ['定时一小时关灯', 'settiCLonehonor'],
        ['定时一小时开灯', 'settiOPonehonor'],
        ['打开空调', 'openairconditioner'],
        ['关闭空调', 'closeairconditioner'],
        ['自动模式', 'runautomatically'],
        ['制冷模式', 'coolingmode'],
        ['制热模式', 'heatingmode'],
        ['升高温度', 'raisetemperature'],
        ['降低温度', 'reducetemperature'],
        ['打开电视', 'turnontv'],
        ['关闭电视', 'turnofftv'],
        ['调到最亮', 'setmaxld'],
        ['调到最暗', 'setminld'],
        ['亮一点/增加亮度', 'increasebrightness'],
        ['调暗一点/减小亮度', 'reducebrightness'],
        ['灯调为红色/红色', 'setcolorred'],
        ['打开电源', 'turnonpower'],
        ['关闭电源', 'turnoffpower'],
        ['打开暖气', 'theheater'],
        ['关闭暖气', 'shutdownheat'],
        ['打开吹风', 'openblowing'],
        ['关闭吹风', 'closeblowing'],
        ['开始出水', 'thewater'],
        ['停止出水', 'closewater'],
        ['保温模式', 'heatpreservationmode'],
        ['打开开关', 'turnonswitch'],
        ['关闭开关', 'turnoffswitch'],
        ['温度设置为25度', 'tempSet25'],
        ['垃圾分类', 'garbageclassification'],
        ['干垃圾', 'drygarbage'],
        ['湿垃圾', 'wetgarbage'],
        ['玻璃', 'thisglass'],
        ['厨卫垃圾', 'hutchdefends'],
        ['废纸', 'wastepaper'],
        ['电池', 'thebattery'],
        ['塑料', 'theplastic'],
        ['金属', 'themetal'],
        ['打开客厅灯', 'turnonlivingroomlight'],
        ['关闭客厅灯', 'turnofflivingroomlight'],
        ['打开房间灯', 'turnonroomlight'],
        ['关闭房间灯', 'turnoffroomlight'],
        ['打开主卧灯', 'masterbedroomlight'],
        ['关闭主卧灯', 'offmasterbedroomlight'],
        ['打开阳台灯', 'turnonbalconylight'],
        ['关闭阳台灯', 'turnoffbalconylight']
    ];

    const QH_smgxs = [['auto', 'auto'], ['1', '1'], ['2', '2'], ['3', '3']];

    const QH_Button_ICO = 'data:image/png;base64,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';

    const QH_UltraSonicDistanceSensor_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAAxUlEQVR4nO3bQQqDMBRAwW/p/a/cnsDUReWVZmarkcAjoFFnAAAAAAAAAACAf3PMzKuexM4e9QR2J0BMgJgAMQFiz8Wx48L4szuos7G7nf9xrBUQEyAmQEyAmAAxAWICxASICRATICZAbLUXdIcreyZbXd8KiAkQEyAmQEyAmAAxAWICxFafJt79ULMbL+V/kQAxAWICxASICRATICZATICYADEBYgLEBIgJEPOnfMwKiAkQEyAmQEwAAAAAAAAAAACAL3sDIYsLYoVi4i4AAAAASUVORK5CYII=';

    const QH_Line_follower_ICO = 'data:image/png;base64,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';

    const QH_lightSensor_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAAEiElEQVRoge2az29VRRTHP4/kgaKNEXbaBbZqdWHLDxc1Qa3LbjSRUEBMXBjjCleC7qwmxrjs32ANAUSQRY0xiKhATHRJfyRYKGmMSUWhgLY1bVmceencc2fmzv31NIZvcpJ37z3zPefcd2bmzMyF+jEE/AnMA7vbYK92/AasGvm1bmONug0ggbTN5roCbbYCY8DXwLZq3QGgD/jK8G+vgT+FSdZS6CqwMUN/VUkIG4EZS/dSKU8j0EA6uO3gcEabPAENK91btKFbjCijt4HOgH5sQJ2Gy9YdqcDfTDwI/K4Mjwb0YwP6VOn9AWyuwN8ovKWMrwA7PbqXLb1pj06/4bA5D1TobyaawLhy4IxHdxCYNTLo0TmjuMaNjbZiUDnxdwmuBcXlC7x2HLWc+KQEz6jFcySyzQbgniylZ4AryHA5AmzK0F+P1GpDrKVIA9gBfICk0qThuwVMmHvvk5w0mw4eHzYZ324CfwGvh5TPk/zrryGdMyafG8ahKcURkimkYI2Za5rGl2uK43qo0Q8ew+OE87ob+DFHIFouAF0B/kHSg1BLZgm8kB1IOeMzfBRJMxsvkJ6XisgcMKC415Psp1quAs8FXgQg9dQw6Vm7JUMqmCWHziLSufcBPcB9RnrMvSNGx9XODmqPx4fbxsesOjKBTmT00RPeHvO8G/c/c5xw+rTQDXzuaD8HPOIJaMX4FCq1MtGPjEwLyNDcRHJW95ll4GAB/kOmrc113thomgAWjA/9JeIIwpUKb5fge8fBt6ukj9FokB6aj1fAe0JxTlTAGYWnleFFpD+URRfpgSL3irjIEvxFdX0S+KUAj8Y0cErdeykvSZGAnlXXJwtw+KC5tK1MrAM+Ripl3+Q1TbJKeEhx/JzXaAA/qeuHrd/RfsbM4rMW8bx61lFhQB2Ke97c3xrrZ5GU+8/jI/xljivl9JD9eIW+9CjuyRJ+RuMbRfRKMd+deFVxn85LUCTlvlfXuYfWADTXdxVye7Gd5FtcAh6tgNc1sfZVwJuJBsnt4FWkai7L+YXirL306WAtRXeT7pSHSnC/6+B7uQRfEP3At8haZArYgrzRC8qBZfIH1UAqbb18OGee3YuUQ8vAWUouH3wLvNZ+cxeyGNNv9gRxfeoxpNRxLfC2GJ031bNCC7ysJfiHlu4A7iX4EnAM2A88Adxv5ElkaD7mabcIPG/xv+HxIXoJ3kfyfEbLKeAB1WYA9z+VV+ZUMCCbia5lektmgN5QQF96GmZtY3WR3tPLI+dYSzMXQttYY3kCyrvRuAsZbmMDmUBGszIbjcGAeoGLwA3itoI3IH1iL8n9um1Ijp82Tt80MmHuvYdU0DbPPuA10vt+Gq2t4BvG16cy9HPB3gT8rATPYYuniv2JQtDHKf/gT51m4FkD2XS3udp+nOI68Drr0Y35kkRX8G0/8DqgHFjBP4vHfEnyrx5Jug6NQ4ddemTzYVTpte3Q+H93rH9dGa3zw4vgYVZVsNdCM9T7acx4KU8j0YtUFGPETWp5AirCn8Ddz8sK4Ir1+3Ib7NWOmC9JKsMdqmqmtd1BnasAAAAASUVORK5CYII=';

    const QH_sound_ICO = 'data:image/png;base64,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';

    const QH_Potentiometer_ICO = 'data:image/png;base64,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';

    const QH_joystick_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAE6klEQVR4nO2dzY8URRiHn1mz0eiCUS9+oSwgCFyMRFTQlcSDB6MYFIX1yp2vmyZ6NytL8OCfoAuERD1sNH4QYzwQFcP6sfFgFDSKgJpdEiW7yXioHjPzVjNb3V0z/U73+ySVbM1O/frt+vV0dVW/PQOGYRiGYRhGfBplB1CQ+4HtwBhwK7Aief0c8BvwKfAOcLqU6GpCA3gOmAWageV7YAeDfwCqYxT4nHAjZPkMuLvvUVeUrcB58pvRKheBbX2OvXKMAVfwO/df4C1gF7AOuCEp65LX3u7S7pG+7kGFGAUu4HfqFLAysP3RlPbnA9sbbTTwx4xFYG8OrX1JWzmmGBnYiX9k5zGjxYEUvR0FY6wNDfxL26kIuseE5ncRNGvBJjo77gqwKoLuStyg3q59XwTdKAyVHUAXnhb1E8CPEXR/ws3e29keQTcKmg0ZE3XZiUWQWnJbpaHZkDtE/YuI2l8usS0jhXk6z/MjEbVHhPZ8RO1CaP6E9HIhUO53s4fbyoRmQ34X9dsjakstua3S0GzIL6K+KaK21JLbKg3NhpwU9ZiXpvKSWm7LSOEh/Inh6gi6o/gTwwci6FaeBnCGzo47GkH3uND8GruTGMwL+IuB+wroHUzRe7ZgjLViCJeoIJff9+fQOoC//H4S3eOoSlYAl/CP7GOELTauwj9NtW7l3tmDeGvBNvyZe2ugnwLGgXtxM/CR5O/x5H9pt3DnsfvqhdkC/EXxJIc/gYf7HHtluQ14j/xmfADc1feoK04Dd/V1inAjTiVt7PK2x2wGXgam8U2YTv43UJO+Kh0xcsV2IPfNrsGVYYYowwxRhhmiDDNEGWaIMswQZZghyjBDlGGGKMMMUYYZogwzRBnXlB1AQR4E9gAv4edsbUle+wf4tc9x1YoG7n75acJvUH0F7GZAl+Q1swb4hPy3cD8mTvajgUtM+IPiSQ6XgMf6HHvfWYt7BnCOq3fEHC4VNM/TSo/ixgKpuYjLz3oRl391fVJWJ68dx0+OayZalf0mh7W41JrQI/QC2UxZg0tqkzofJv9bintwp6q0OGI81auOE2Q/bYQ+b94gfcx4jWyX7EPARIrORxk0BoZup6mrlb8DtcdT2r5RINY3U/R2FdBTidzBou9rR17angGuzR0pXAfMCE35RO7A0ytD5AM7TeDJQpE6nkrR3RxBVw29MuRV8f5Z4kzsGsAPQvuVCLpR0LyWtVXUWzm9RWkC7y6xLdVsBCaBb4DLZB/A614uJ313CNiQse87GAaOkD6xspKvLAKHk77NxDAudb/sHahqeZ+MphxREHTVy2SoGRvxT1NncU+rLgsVMf5nGfAM/rfjLQDrQwQm8c24uReR1oybcH3Z3revhzT8VjSy57jjIb/UcyakkVybstNUPJbT2bdz8g1pM99mwHuM/HTtX80z9VpihijDDFGGGaIMM0QZZogyzBBlmCHKMEOUYYYowwxRhhmiDDNEGWaIMswQZZghyjBDlJFmiPz5H7uFG48bRd37qaU0Q86K+uPRwjGeEPWfQxodovNG/CwuhcUoxi3AOTr7diKk4QbSE+V24rImjGwsB57HN2MB9x31QRwWja3EL0FJci2GcQnBZQdd1TJNzgz4SdxHq+wdqEpZwI3Rmc1oZz3u4zVD+m94WOle5pO+myDDmGEYhmEYhmHE5D8fr7DgI+7aSwAAAABJRU5ErkJggg==';

    const QH_Soilmoisture_ICO = 'data:image/png;base64,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';

    const QH_dht11_ICO = 'data:image/png;base64,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';

    const QH_yssb_ICO = 'data:image/png;base64,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';

    const QH_MPU6050_ICO = 'data:image/png;base64,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';

    const QH_LED_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABbklEQVRoge2XsUoDQRRFT2zND4hBQQIp1VJB/YRoqR8i+SaLZPEPoq2NYDqxEgxYpgguSCwyEX1OsjObcZ/Bd2CK2eXeeXf37e5sjbTsAW3gBNgAGu74M/AC9IEMuE+87tKcAgNgEjgGTqPOFnBLeOFy3DgPFQ6YtkXZ4mfjlWnLVcohMPYUkwNXwDnQAtbdaAEX7lzu0Y2dZyVsA0NPEV2gGaBvAj2PfkhF7SR7/h24LOHTcdqvXv1ENc7ljJ9XrkzxMzoev/aSNS5Eviq7CTwz4fmQwNPLvlgoJ6zni9gB3oT3bqh4LWIheWsz4DFCP48n4FocC/7IxQQ4EvNehLaITMyPQ4UxARpifhehLUJ6bSb0/mTE9z6tJ/SuC+9RqLAWschkCe2v+ce00J/EAmhjAbRZ9KTLt4I23lpX/g5YAG0sgDYWwPjvpNjTx+7jk/5XrPwzYAG0sQDaWABtLIA2FkAbC6CNBdDGAmjzAT0xh7HjepRgAAAAAElFTkSuQmCC';

    const QH_RELAY_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADDElEQVRoge3ZT4iVVRjH8c/4p/BPOIvAUcxsFhNWzmwkSxBNWuRGdFMNUsuICFyoi9pkBW5qK4KBQoHoIoJx0SIhrBCjTRYRRn+08jYS4iiSiiPT4jyX+96Xd2buZe473pH3C4dzfs977jnP77533jnnvFRUVExFT6a9ABuw8h7l0i41nMXdbPABfIWJOVZOYyHpLsB2bMIBfDmj72n22Iq3pNw/rRtZFfVHuIABPDT7uTXxL/6M9losjvYt/IRfJSOP0LgjWdbju3JzbIm7eFjK54vcte34MRsoMnIOL2NZGdm1QQ1j+Aa7sDTi/+EUlmc7Fxm5gxMlJtgut3Bsuk7zZiGRWaEy0m1URrqNyki3URnpNioj3UZlpNu4r40M4hIeC71V2qn1hn4J58VeGW9KhwB13sdIRh+OUmcE72X02RhDjHkeL4bujbmfC90fuQ22YqRfOkl5NPSAtJ3sC702YktCP4mhzOefwrqMXjeNHooxxJgDeCJ0X8z9eOjVkVt/PumijdUoxnE5dA23cSWjx3Az9D9RZPTynJbT+f51fTPGroW+EnPX9eXIbbQgb7BbOl5ZE3pR7vpUuien5+HBjF6o8TMU17K/hEWaz9danXtN5Lybxh25EPUe6XxrLrA56j+ywfk46d4fuLVbRiL3plvaI/2RrShwvw8bsROv4pVo38j0GcKHeAdnir7CDBvxLvZKpzZ1luIzfIKPo30GHxSMUcPPYahljuJqtPfHh3tzfbZEfEcL4+2Ivlty8d6I7w99Neaelvv6H+KcpDLSBkMKlhSdpkwjPTiO76Un0zHNT8mOUqaRZ6UF5pEow3imrMmK1lqdor5MGS2IdZwyjXwtLXfeDn06YqVQppFxPI8XQn8u9+Kyk5RphPSu5WTJc6B1I5ekN1ivYRuu4Xquz99RD2tegxUxHPVfufj1KNuktdSygj4zYgV+l9ZB43h9kn6HtL5yPTjJGG/EHBP4TWNnOiXtPNcX42lclNsD5BiUtquTjT2BX/DDFGP0S9vabzV2ohUVFTPgfz+w8Bj5R7LWAAAAAElFTkSuQmCC';

    const QH_RGB_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABeUlEQVRIidXUMUhVcRTH8U8PTBdxEDFoUbekhoSnFEQYKDQEwbMxkAiaotoanZzErSGCiIacxC3ESXAIbHDp5aQEhbjoomAqaMM9Dy7Xe/WWObwf/Plzz/93/t/D+V8Oza5LBfE21DCCm7iCDlSwi5/4hs+Yxe+/gY5iA8cl16/IKaXb2I/EZbzCELrQihZ0YhAvUA/vfvjO1EIkvFXcvrQqeBc582UAu2HuLmMuo0rm+yD244sCLMf+KMfbeNQ13I3Yfckjb+FJxreJp9lLHsbhBtpzAFVMYjFi3zGOYaymfPfwOoo5oaUwTeYAHuMT5iJ2iOvoRV/KN4OvmM4DVHGEPfRkAOtxdi0FuJEqquGbwAd8yQPAx1QlacAtSc8b/a7jGQYygAd4KXmbXF2V/LJH6E8lVqO6lYiN4Ad28D5i27HW8LwIAG/i0qnTTOfRnQCsnGX8V7VKelg05LZw+byQsVMAtTIXlBloRWOjTO6JUfHf1fyA5tcfDIFywhVTZQcAAAAASUVORK5CYII=';

    const QH_BUZZER_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFCElEQVR4nO2bTWwVVRSAv1LoK1CKgv+0UQvB1ERM0A1oZWMMAUOIUSJiVJSwlaKJbpCiMdFEgyujxoXa+BN/KBJNXLgAMXGjskGICdEqVaLWmFIEq5bn4pxxLpNz7/u77z0o8yWTdzPnzLlnzty595w7LeTk5OTk5Jy3tBjneoAbGu1Ig/gK+C6kcCEwDhSn6DEOXODe8LRMAC4DOkIROsfpAC53T0wPKL8AfFxXdxrHamCLJQgF4DDwaV3caTw9PkH2FTjvyAPQbAeaTR6AiLZuBu6KaM+iRfu4KZbBWAHYAOwF3kWWnHqxWvvYB9wTw2CMANwBvA60AhPAcASbPoa1j1bgDWBtrQZrDcASdaQV+BtYB3xTq1MBDiI3/Zf2OQhcV4vBWgLQDrwDzEby7PuBPbU4UyafAA9pnx3qQ6FaY7UEYDvQq+3n1ZFG8RawU9vXAttiGe4lrZw2B/S6kWFYRIa87wk8CnxEIBUN0KPXPuKRtyPpehE4BXQFbG0mva/egF7ZAXjJ0bvVo9Pv6GwPdephwLneLGSAlY7OiwFbUQPQCZxQnX0enbXAadUZpfoRMKo2JoE1Hr39pLV+p0cnagBcY1biMxv4UeV/AstCHZZgmdooAj8Aswydux1/NpXhc80B+FDlfwBthvxJx8bDoc6A+XqE2OLYGzDkBWBM5UMeG9ECMB04rvL3DXkrcIx0crT2G2Yic8KI09dR4AlkYssyAzikej9hr1y7VD6mPmTxBqDSZXAhMEfb+w15H7KtBvAK8G9GXkDW8QFggXO+C9ihsuyo+kdtAVyB1BxZEl86qXC+qTQAbvQOGfLb9Nc3Qh4DbtH2EeBZPY7ouRWqk8W1tcqQu74Eh3iWSgNwidM+asi79XcUGa5ZktdqGFgKPK7HUtIawnr1RoDftW3doOvLpYbcS6UBcJeZ44Y8GdY/G7KLHfnbyLKVMK7nQF6Hi4zrR/TXko057bmG3EvsDRFrEjurqTQA7lO3ko5kmC4wZL+RvhbrSSdTtJ3U9yPIK5QlSXUtmfvUxwy5l0oD8KvT7jbkyWQ0HzsIL+vvVcDXwDN6HACuzOi4dJPmC9bk6/ryiyEvm1J5wGJHbuXnKwgnQW3IzpHv09Ve7OTKrSv6DPlWR77IkNclEfrAkE9DJsAi8qRmGDrtSNKTpMtFbW/DnwglVZ8vERqiykQoSzmp8G7CqfAOx0Z/qDNgnh4h3KdrVZVuKrzLYyNqADY5OusM+SzOLIaWhzoswXLgpNoapnQx9KDHTt3K4c88OmuQEraIrAzWe1mKRXptUg7f7tH7nLQcnuPRiVYLgMwBg9ruI01/XfaQ7uTMAzZW0c9G0tdjK7I7lGUV6TeCQc5Mrqqiki2xU6STnS8B6kccX1yFL9fotb55ZCbwrfpwEnvZTYi+JQbwtKP7XAnderDT6f+pErp1CUABqfmLyPbX+pIux+NeUj8PUnpbPOockDAB3InMCS3Aa/j37WKyEnhV2yeQVWCiWmO1FkOHgQeQWboN+W63pEabIa5H8pACstmyARkBVROjGhxCvgpNIo5Vs+SVy0LtYxK4jwhfokJ/I1QJbyJ/f9eFPKF6sRtJvkaAL2IYjBUAiORQCU4D78U0mP+FSLMdaDZ5AJrtQLMJTYK9+L/8nmuU/a3ATYWn6hFMhY8h6eVUZRy5x/+x/mHiauDGhrjTeL4Evm+2Ezk5OTk5OWcJ/wEYbdHwqmB7rQAAAABJRU5ErkJggg==';

    const QH_MOTOR_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAFFUlEQVR4nO2cT2wUVRzHP9S2SoSlSgG9glEQNZTaxChYmxATwRMxGi8aCYkHEqOGmODZYOK/A5EEvagRMUY9mVQv4EUJCChZKEhQPJFAIpa6UpqW3Xr4/Z6z1rr7m3lv2tnyPsnLbHe+773f7zdv3vzezGwhEolEIpE5xADwEVAGLmspA+8DvbNoV+HpAD4BJpuUvaqNTOENJEAVYCfQAyzS0qPfVVTz+izZWGguIsFZ10CzXjUXZ8QiA22zbUAdS3U7r4HG7VvaQHPd4ua4CnKK9gJdWnr1u0qdrhA0OtozTdqgFML2Ip3Cjj7gPSR1GdFS1u/6ZtGuwmM9NQt1ChdxBLYUMYCexAB6kjWAS4C3gXPABM2XX5aSlhB9TqgPb6lPM8JtwG+BHMgSyLz6Pae+5c5u7fAE0I99Yd8F7OLfI/Y0cvQ3kT6AG4E3tY36EbVL+7LQoT6c1PrvGut5cVY7W5uizmaSte448CH/zel80pg+bXOcZK28OYV9a7Xe2RR1MtEF1IBRoN1Y52Wgihg4CCz/H12IPHA58LXur2rfFtoRn2rYR28mBhDjDhn1T2N3JmQiXX/QnjK0CeLTJOJjbmzXTnYbtLcDf6l+q0EfeiXyPMnNiWUGvZvbtxu0mdmnnWwxaHeq9gtj23ks5b5U7WsG7RbV7jO2nYkz2skag/a4ah80tu1G64oGmhUko8rCOtX/ZNCuUe0ZY9upKSHzylVsqYsLyAJj+250XwB2APdpnyX9vEP3TSLPTiwsxB7wDsS3qvYZnH415rBR/4fq7zDqFwH7aZ7w7lethTu1zu9G/WHV9xv1qZZy7pHij0b9D7rdZNSPABuAR5Enb6eQkVPRzx/rvg2qteD6PmLUO99yeXzqHjlarqgAT6r+ErPzDGMZyVnwhLHOVtXvzcOgn7XxHqO+DfhW65SZwcU6csBOaN8HsN/+7yFZYgZlITK5jgGdKep1k1yNfyHF3OLBAPCr9nkcWJyibifiYxXxORgPq0HWuaSebpLJuQZ8AKwKZ9o/rNK2aySrpTTBcxzR+uvDmQYvaaN7MtZvB15Fjq4L5CDwDH6n9hJtY5AkcGNIymNdq09lj7bzokVs7cTdebFegadyDVmZfIasU58FHtNSA44iye4QcsW9BPwJDGv9W5DcbDFwN7Aama/uJ8kkriAvJb2DnMJZyeVKfAo5KqEavRXYBnyDJK9Zb4JeRe6+bNM2Q9CrbQ9ZxJar0wIk77qGTKzjmU2bnpuBB5BRtRpYiSTKJZJbS5eRETmCZANDWg4hIy8knUjueYPa4d2+e6HnqG9DLcQxxOeHmgktKxF32h7zsajFcL42nbJiAKcnaADv0W3WK3Ar4gJ4b4jGhpH5IGhmXnBKiM/DzYQWXMrwAjA/RIMFZz7ia5o73w2pz7uuAF/V7ft8Dv49NddsSJr7gWUkbxyr++6mOfj3BOJrMIIN5RYj+AiMTEMMoCcxgJ7EAHoSA+hJDKAnMYCexAB6EgPoSQygJzGAnsQAehID6EkMoCcxgJ7EAHoSA+iJJYCjuu3O05CC4XwdbajCFsCTut2Y2ZzW4xHdBnlT1b03PIz8GMXyq59WpQQ8DpwnxTuCzWgDPiX7K2itWg4Q8H90zQOeAw6S/IBmLpYx5OX0V4Abg0QuI0V7FJqbPXmlMVXdFuFVEGdDtaGqYLjf3hapHMzV48CsBL4n3H/08CkTwHfAXbl6HIlEIpFIJBK5rvgbbb+NpWUynM4AAAAASUVORK5CYII=';

    const QH_SPEECH_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEVUlEQVRogdWaW4gVRxCGv6PrFV3RGBTDCiquShTiBUVQNxoNoi5CEkHxYcmLRggYFMxbgviq4oOiqGD0IYIXIorBu7uoIQhGRXf1yCaSRFcN5OYlXqI7PlQ106d3jrtnpndbf2hqznR3Tf0zVdU1PScH/AYMAO5ruwvcBH4GLgI/6rnXHr8CUSutAVgDjAxkY6vIqewGlGsbBAwFKoGJwCSgt46LgO+Br4CfOtRSDygDZgLbgEcImefAOqBLQLsyoT+wHvgfIXQa6BXUooyYBNxCyBwBOoU1JxuGAXcQMssD25IZcxEifwA9AtuSGRcQMtUhjfDh27Uqx3vQlRo+iDxQGXnQlRo+iMxQWe9BVzCMJg72N3ZxBOiOFJovgIEhDcnqWk+AY6pnfnZzwmIx4l7HQhuSFX2Ap0j91T+UET6y1r/IWlIGzPOgLxV8FXuHVU7wpK9k+CIy2JOeoHgPSb/PgcmBbcmEL5GstSOkET5c6xeVHwJvZdCTA84BZ4j3EjoUZcBZ5Kl8l0FPBfGuTbDdmgrgTzViWUodc4iJfObJrlT4CGhGypZxKeavIiay26NdqbBBDWlEVvxSsIuYyB0CxYlBV+C8GrOnxLkXdV4zxeMkB5zU1u5EhwMP1ZjpbZxTBjzWOUcpHifvUiQhtMd+VCNxyWITySEbeqdoeTeHI+82TcB+PVeVoHumdfx+ZkuLYCywEcgTu4j9jjKd4ul1AfHTqKR4nByiAxLCGesijcAip/8bq3+p07daz6/V37dpSbgL8jaamBB8upbZnd8KjKDwjvUCPrZ+u24xWuVVlXUJ48xXgWvI95qBeh3AL5HjKocgRaSNTxAyppxx/X+MSkOkNmGciY/jVr+3OHkHqbFWAnuRR34hYVyt9n1K7DbmbvZEiL/QY7TPdR9TBlUjGc1LnAy1DLJbMy3T5hA9/xB5Kt9SGCcT9PcNZ14TcZyUA8+0leu5AqJpXasH8LYe30c+Ai1HMtcWZ2yNXmyfknHdxsTHFWee7T5VSLCf1+vlceIkLZF64AvkrpTruT3AZWuMyWJf6++djoEuERMfBnXWOBMfJ1RGeI6TGmTvN0Lutr1g2en4NIVrgnGbSuKVfIGj246TBj2eYvV7ixODUcBflPY+YuJkCXGsjUoYZwhHiEvZ27It4iQrDlsX+7yNc5ZSWFc9RuotF7st3YecvhzxF7ORPtYRkzJXIiVKW2D8e5bK68jmRbFxEMeHQUGc+CBySWXPV44qRJ5Cl3AzlkGddewSsfurfBBpUtmvxHm2kW7GMsgj1fJJJOBdmCcyLckvDcYDs5EAa7LaPeBvoDOyMNbo+OttMN41YqEeFyMSAR+8Qkce+AFZcBOxidb/n2K3q5T+VddknQjZvMiEpLRVDRwE/gM2I5vUFci26GBkNe2L1Ea/AweQMvyfFNeuRZ7sVNrhG6RJpyt8K25v2Cuwac8oPXiDIilrRcB2ZLV+Y/ASg/1Av8XN6vUAAAAASUVORK5CYII=';

    const QH_MICROPHONE_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADg0lEQVRoge2ay0tUURzHPz3QERwdsiJFFxlENVlQ0iKsfyBqFRUVtS2rdfYP9LKdPRbRploEvQikB4WLiEiTMOiBmRkKmeRCyFF8dVuc3+2eed9z54wO6QcOM/Obe76/35l7f+fc87sD9qkCTgHPgAFgQtoA8FS+q8yDX2tEgEvAOOBkaWNAs/QpKKJAD16gz4FjQB2wQlqd2F5ox32RvgXBRmAEFdgHYLuPPg3AR+kzIhpzynLgOyqgJ0DYoG8YlTMO0AdUWI/OgKsSyDugNED/UqBLNC5bjMuINcAUMANsyUGnHvgjWrUW4jLmDOqXfGhB65FonbagZcxrcX7QgtZh0XplQcuYIXG+1oLWOtEatKBlxFJUbjhAuQW9ctGaAZZY0PNNiMwr9ziwK0W//cBklr6hIAEtDtIpB9xgCwb9jAT6BW3rzfYZyRs2BpLqbtc0R8ZzDWLe5UgLcE37PFs50gxctKD/jz5p2RwHJZ1eot+0LORIQOY8R+bFpVUQ+B1IjPht7DRqMwRQbCEOV8PdYLmEgVE/An4HMgQswzvt08Aveb/Kp0YmqjQ/M/K+BLWP/+lHwGQgi4gvrPXKa71PjUy4Gr2aTR9cVvwOpENeGzRbq7zu9amRCVejVbO5vjqwSBQ1o9zTbLV4xYetOWhvQ+XGJLBasz8Qn+tz0E5JL/Cb+B3hFXHWRbByUBh4Lxotmj2CSvKeQJFm4YQ4PKvZKlDzvIMqtpkU6MpQhW4H+IaaTFwuiP14DvGmpQQ1g8SAas0exSuZfgJ2+NDaCXzGK5nq9d8aVJF7EDuLbUoOiPOXQJFm34AqSLurcxvQCGwCVkrbLLY27bhu6etSjCoJOcC+fA3C5bY4up5gL0fdco+RfFOY2GLAeZIrMDfk+1t5ij2OMqAdbzBFCd9XovLpMdCP96CnX2yNJC+ixXiDeCM+ZoUI8BbvMqvOfHhGavAup3bs1MmMKENdAu4TqHOYPYGKoGYn91K8idmsZ51DwA8JZhS1aB5BLW76rBNCLaJHgftyrCN9bdSPrRACTqIWzcTEHpaWaP+KyqW8TbG5EgWaiJ9iu7XPTcRPuQVN4o7P9o4yiXm3Qyx4FgZSaPw3AwnKHqCT7E+fTNoY6nbHzz8nrLDbYvCp2hR2ChpZ6RSHzaiHorYIAXdE+65F3bRMkN8z4t4NGBHkF41JyyfG1fm/hWlmBjazS44AAAAASUVORK5CYII=';

    const QH_REMOTE_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABgklEQVRIia3VzUpbQRjG8V9a6QcYN8Wuch1JwY17N0L1MuoVFNtaEwsigiAoCBZboe3GZZM7ELsp3XeZG7B20y7i4szB8xUz+XhhYOadOf9n5nnPmcN08Qg/8Bc3uMQGHk/JzUUPg0L7icasBBpYxDxW8CsjMtFJ5rBeyH1BHzt4ht9B5NW48IcBNsDbTP7CnT0drIb+5bjwc3mvU5GnWAq5Puqhfx0Lf4Az5WJmRZ7gGz7heZi7iYWfhge+oykpaAtdZbtICt/DVQz8JAOvFeZr94iQfCdDo4Zjd1Y0Q74jOXo7jFvKdo2MGg7lva6HuT/yBawX1i3HwA+Ui5meoB1EtsP4xbgn2A+LX0uKuRnGXdU1SK+KKPiusiULmVxX4nk97DyFv4uBf5C3ZDOA3ijblW1bMfBt1bYMRuSj4NkdVtkyLP8+Bg5r+O9+W4r5Tiy8SmSULXvjwoeJVNlyoPyqTixStOVoWngaL/FP3paPkotvZpEV+Sr52cw81vB5WvgtOOWjMK8TPs0AAAAASUVORK5CYII=';

    const QH_BLUETOOTH_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABk0lEQVRogdWYzUrEMBRGD76Nz+JqXIjCIKIIunIlI4Lo0jfRR5RhZupCisPtd9MUmqT3g26a0HtOyE9bKJfPgs+uko7gEh3BJTqCS3QEl7AC4SSUQCgJTyCMREoghMSYwOIlLOxG3Gsm8ZJR2IICPAJ70VZV4gY4ZBRWAgBrYCfaq0ici+JeYU8A4BLYij7FJVZO4Q/RNyUA8CX6bIHT2alNzoAfUdyOXkrgSbTvgKti1CY5Ep7ALf9r6Bh+XZzaZExCCVwz3IUOwH01apPUmrD3LhhuAAfgrjq1iSehFqiFf2jAK+NNp9T13IQ0kSkSm0aMo8mReG1Gl5mUxNvcxU7mfmD0hJ5CoRdx6G1UHWQ5B9siDjI18lv+pNS0WZRECh6GsOBLVH+ZG4MHLQBaourrdA48AvI4nkTxDxpvwVp4BKDNt+hT/JPSjr4Hj4BLPae/3udHHqYvnoIHX6ApfJ8VaXjQAlP+ajSPhVzEyE+JWqAhRr7P2KvEYke+T2h4CA4PweEhODwEh4fg8BAcHiodUr8eJ8EyuHJlBwAAAABJRU5ErkJggg==';

    const QH_SERIAL_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA4UlEQVRoge3YSw6CMBSF4T8O2JO4PkW3JXEnwjLUQSE2pkT7kJbmfElDGBR7MFfbCyJ/1wAXYASenmMAuukZ2Z3xD/A5Tquv2mHALGYfMLfl/c1kN7/VXPOj7HJ9cGoKUhoFKY2ClEZBSqMgpbGDjNO1DXjOYboWsWnsiN/GH1dftUODCTNv533GHROiiIOVbM0N6HMvYonPz++DjCdAqZlqpHbqbFojqLOZukaydTZ74BoyccGmO5u2pEGqPFh9o/+R2qlGXGJqJPY+qZgaib2vhmrERUESUGfTGupsivzoBSt9v5oFng/8AAAAAElFTkSuQmCC';

    const QH_MP3_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAAC20lEQVRoge3aTYiVVRjA8d80CcNMTFI2RRK0kBQndRFBRooQxKC0ilq6cCOBYruJ1kahO2nXJrSFhATZkIqbCGcTiRjRxyQ5AyLEaBFiM814mxbnRtc7c+99P877MTF/OIv7wXmeP+95z3nec15WB1swjgv4Dp9hV6UZpaQfu3EcU1haoS3i5aoSTMJDeA0fYdbKEu1tspJMu7ARB/EF5iSTaG1/lp/yckaF++ES/pZeor2VTj9ewvv4KWWytREawqs4id8LkChNaBcmsFCwRClC74pzT9RC6J0KRAoTGhUWuVoIPRBB6C08GKGf2vCL6q7OsivUF0HoLgYj9NOJe/gKl/E89rT9HsPhPrKULL3aXXyK/XikJdaQIFjopBBL6LawEL8uFKqduKOLUNU384zwjDOB88JsmYsqhL7H54LEpIKGTR56DbmGUFmPY3OEeF2HXAxWElrEWRzAhsjxShe6gR1FBGpSutCLRQRpoVShBQUsdG10FYpRy7XSWClImcQWqpw1obqzJlR3/ndCVVfb7QxgTFicn8Vw87tfhVOHiTKSaF1Y5zL2sR7H8JvldWGqR/AY5BXah1vSi9RS6LD/qotVL/SGmp4+ZBF6VPJDrVRCSWa5Z7AXL+ApYeZp4BrOyVZdHxHnwa+R5s978KV0wyLpFYp1TjSdJNgQPs4YIInQOsv31rK2072CPYarOQIkERoQ79jllW6BBvF1zgBJh9x0BJmzvYK8FyFIUqGjOeNMYaRbgBH8FUHoTkKhh/Fzxhjf4uleAQ5FkFkSZq+kbBJ2UZP2vYgPhEmrJx9GEjqVQkgzubeFvbxOfc7ihPC+T0/+XRQ/EXb98zImbL6npQ/bsRVPYh5/4Ap+lHIBJbwklPfqXMwgUhg75ZO5KZRFteKMbDIz2FZBvj0ZFsZ/GpkzeLyKZJPSjzdxXWeJeaGG2l1Rjl3pVvpvw3N4ovn5Nn7AN4JULfkH2ycus1r5E4IAAAAASUVORK5CYII=';

    const QH_SDISPLAY_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAASUlEQVRIiWNgGOqAEUr/p5X5TDQyGA5Y0G2kkrnwEKG5D0YtGLVg1ILhYAF6WUT1UpXmPiCl9ET3HVF6B4UPCMULXjNo7oOhDwDJtgUpa+NbrAAAAABJRU5ErkJggg==';

    const QH_JPG1 = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQcEBggJAf/aAAgBAQAAAAD1TA5gumstmt2J82euqB3Hs+NgvmXibgVxts0A/8QAGAEAAgMAAAAAAAAAAAAAAAAAAgMAAQT/2gAIAQIQAAAAXRrTsgH/AP/EABgBAAMBAQAAAAAAAAAAAAAAAAACAwQF/9oACAEDEAAAAKC9CRiZf//EADAQAAIBAwICCQEJAAAAAAAAAAMEBQEGEwAHFEMCCBAREiMzQVMgISQlMEVjgYST/9oACAEBAAE/APrf3buVqUn0rLtIM4tAsYZQ3TaqvQp6euuvTDXMfVl3bE3ra0bcEX3kVdXzAyauvc6XSuQNpWpBhmJsa/GPZTYF0wfvn+fW2W4i24MS6fg6R70Y+wlJxxTZzBOr2MOgSWMY1aCCKn2krqt2XNty3dsdFyEbHKuSGLzRHOZyrZzff1we7GHwcTrq9WvK2TtVFoS4OEbMdkxlC8jiz+hrcxy7Nst7XrnQcTXVngLCAZ8JzJclY/EH5HDYc2urwU5WbhcfMpV+Xf8AVB+ocGc34h/Zy/49DsKEDACiN5gq+2o62IGMLlUjgCL8tBaNNxInTImbEEw+HqYRe7xdzZ6rr/weounSmlHYe4Y3MEwWlTeV7HCXUdbMDFmIZSOCE1eaIf0XLt7ZN2FAabg02yhXw5S/BqNio6FjQRyAQhVACgQBFygfk//EACERAAICAQMFAQAAAAAAAAAAAAECAxFBAAQSEBMhMlEx/9oACAECAQE/AJJViq84zozxCNXvw/Hj9PL80jrIoZTYOtztk3MQHceORWBUqLBGQdTbSOWKNI3ZO3XGsEaEcUSJHEXZVX2f2Y5J6BFDswVQzVZA8mvvT//EACIRAAIBAwMFAQAAAAAAAAAAAAECAwAREgQxUQUQEyFBkf/aAAgBAwEBPwCOJ5b44+vrMFH6aEMvlaPGzJlnwuO96dGRirCxFdP1Gj0sE6zRSySsVIUYFAAb2OVR62VJ5ppY1YSqyvfhq6hLBPqjLCJgGRMvIEBDAWIAXYdi7lVUsxVdgT6F+O3/2Q==';

    const QH_JPG2 = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAACAIDBgcJBAX/2gAIAQEAAAAA6pgRF23r7JN+fA5xzSj1kUzFuG8osmuER5Ve4U1H/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIE/9oACAECEAAAADhZx7qNP//EABYBAQEBAAAAAAAAAAAAAAAAAAQDAf/aAAgBAxAAAAC2ybcwlk//xAA0EAACAQIDBQUECwAAAAAAAAADBAUBBgAHEwIRFDNDEBUgI1MIEhYyISIlRGNkgYOEk6L/2gAIAQEAAT8A8YrxzLzHkLsbs2VjYmKt6QPGg1lNc0g+pztf0AYymzDXzGsiKuH3dEpg6TAa9I630Hxcl8XlOZjHse1ZNKK2YxDi5SUKHXNTiuQAIf3djGUeYEve60/ETWhSZgJBhN0q1PINTonB2POhSSO1URCjEDp03lw5C3vSXuBSF+IjKSZ1gpqRQgUCZHiC667B+gwtrc/GTlhvZfZexsJIFD3h55ndHlVOzXGa2Xt6weY23edr9/VFJVXE6aL2g1OGtdFdjyOt5If7sez2qVEkmnK8UdtzkGMDlLpsFZBRj8xUpiF7argX5QcZu37dkXdmzWPAJRa2ftYNakqXvHeuQGif0QfP/guIFx2QhEW5BMSbRV6EKDW16C3/AI2NoCoflF+vgz+SV4lKQboWg3IiSjRU9Vj7uv8Ayfr4RRokmEW/kraPhKqFmlKkpv8AB//EACERAAICAgEEAwAAAAAAAAAAAAECAxEAEgQQISJBMTJx/9oACAECAQE/AJJVjqwzE/CqLJx+TEsSONm3rQKLLbYjrIgdTYOSwxTIAwbZWBUg1WFIJlTjKHQQsKI8Ta+xiRxRKqRhgoUDybYk+zfRY9ZZHv712/On/8QAIxEAAgICAQMFAQAAAAAAAAAAAQIDEQQSABATIQUxMlGCkf/aAAgBAwEBPwCGBptqKqF1tmNAbGuDHlM8kR1TtX3GY0Frjo0bFGHkfzmDmR4UUo7O7uwIYtQAHsCK88YZuFGmfKEdM5XNHyGo0189QyYMvKM0MJhBUWpfck/d0Ok2ZLPi42O3xx99f2b6f//Z';

    const QH_JPG3 = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABgcFCAMECf/aAAgBAQAAAAD1TBBdXdiK2x21ylLrgXRstWeGlUhzRWXLZAD/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBBf/aAAgBAhAAAACbT6STlWz/xAAYAQADAQEAAAAAAAAAAAAAAAACAwUEBv/aAAgBAxAAAADSI8bcVWYv/8QAOhAAAQICBQYKCgMAAAAAAAAAAwQFAQYAAgcTFBESFiEjQRAVICIxM1FSgpIIGCQwQ1dhY3GRobHT/9oACAEBAAE/AOVN0waLyw6O4W8zgVGmOaCMPWmp61Dj8tpj/n/GlmU9GtClnjczGtZduoDh1fXaqWhW8mkCZzMmhD65CAnAXGpYbDnUlD0hjTdMzY0aBTKkCtU3WNMHYh2OX2jhc8Id2URhnDLBRW16o5IwiPbZfpzC+Dgma+w9f81O9SWcLiV2b39f97/14OFWxHWLqxTqauZE8d3woZNWXz+elpdpTNZw3p1briyGMaqICdJtjk3nNc9icO2jSudPMzMkVo1l4lPC9CYOTIUNG1sTNgLoXRyCycxHmvS0ooncIoMIIpS3oQAjHoAH7++knSSxSU08Us+eNHVVKjgHe9TBUbERCDsD7n//xAAjEQACAgEDAwUAAAAAAAAAAAABAgMRBAAhYRASMSIzcbGy/9oACAECAQE/AJcuDHbtmYqeFZvyNNkxLGkhPoeqNE7n4B1DKsyll3WyAaI+wNYDiKfvY0AjXrDnijyltvbYFuBrMmWednWyD4J6CGNWDAbje+T56f/EACMRAAIBAwQCAwEAAAAAAAAAAAECAwQREgAFITEQQQYTI3H/2gAIAQMBAT8AipKidS6BMQxW7OF5Hfekpp5JXiVRml8gzBQMe+TqaGWBwkgUMVDWDBuD11r5hQ1e4UMMNPCZf1yYXAFrW9kc88C+t4pamp2ib6o3JlicILhMj/W41sdJPRbXTwzhRIqksFOQBJJtf3bwZZCuJditgLE3Fh14/9k=';

    const QH_JPG4 = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABwgFBgEECf/aAAgBAQAAAAD1TB0Kk2d1mHrXqy2BjfmYCr+2zmGEzYD/xAAXAQEBAQEAAAAAAAAAAAAAAAADAAEC/9oACAECEAAAABQtxeq//8QAGAEAAwEBAAAAAAAAAAAAAAAAAAMEAQL/2gAIAQMQAAAAslszhaQ//8QALxAAAQIEBAMFCQAAAAAAAAAAAwQFAQYHEwACFDMgISMIElGTwxARJTAxMjRj0//aAAgBAQABPwDiW3dGe17rthTZxSntFME2gA0zFaaXsmXu/d0Vhv0fxwN9QlczNoyC1Id4fhtR9XCue5MbGVe+K3QKVACMBHVljy5h1Hq4p3WwtUKirWpA26RlRM6k1428c94Xk+1z7MVLXSYDu6pIq6/WKjvdDCFCgQBAFLkEEIQJwh8bCSOJ4pZKFREidM9JYx0kFGmME1kodXv4pvSWUKYolgmUJ85Fe+dUa+UvA6P9S3WcJiY2AbdETYuT/FnEccwUnfThPlQWE+6a71r0dkWfFGlx3ZhdXFaDOF0XTC5Rc0ZDXtIZLHTBD5IsnEECBEcpgiEIp1F05fpcP+Pz+T//xAAhEQACAgICAQUAAAAAAAAAAAACAwERABIEQRMgISIxcf/aAAgBAgEBPwA+QhTVLYwQJt6X3MYRiNWQx+zXtiOQrkjJLnYYKRvq4x3GRyNPKsT0LYb6nCNbrVIbDMzE7D8ZrAWtQwKwEBjqPr0f/8QAJBEAAgIBAwQCAwAAAAAAAAAAAQIDBBEABRIUITFRE0IgMmH/2gAIAQMBAT8Ah27cLNO1cr1nmgqcOoZe/wAYkzxJHrI8+BpUlb6McsAMd+51uO23tptdLdhaCcIjtG37KHHIZH9B1S3LcdtaRqVqau0kZRzG5Xkp+px5Gk6mm8c8MxilVlZGRyGXPhu3g+tWLNq5O09maSaVscnkYuxx7ZiSfw//2Q==';

    const QH_JPG5 = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAACAUHAwQGCf/aAAgBAQAAAAD6pgx0C2RqTzlg9GArT0PyVY1fPmXrwAB//8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIDBP/aAAgBAhAAAADMzwhuoH//xAAYAQACAwAAAAAAAAAAAAAAAAAAAwEEBf/aAAgBAxAAAAB8DLecsP/EADQQAAIABAQBCAkFAAAAAAAAAAMEAQUGEwACBxQjEBESFSE0Q1MIFiAkMDEzQmRxcoOSsv/aAAgBAQABPwD2nHV0RGbMW0IILxsTjVGu5nWUuSl8wKCoJkBdnKArcAyyW7oMWAgswDx+D3kx/wCLGntX5ayo2Sz2IMod4hlKUPlG8bGuFZVDTo0JTITiiyaXtTJ0hTWTbGUxDE4F/wAhi9jR/UCYT+EsaOwznQmDDKWcDZ9wVR9YG4gJc3zMFkMYl430uhyGAB5Q4ihvCNDmMH9cV/oVU8xIG6PpMKJLJQmUGg5k2wqR4J2Ytc5wHs95sXb2KIpdKkqSk8jWNdFLUVwQN5uPSB0zWr/1cIm6oOaJtM5QJwKAJzAd7T2L/j8H/eNJNOZxS+dKDSp1FZbnYKC6cJTuPtcA5z7XnAHbB4K4eXUGkz1rTmZNcqomxQuggyOJ08xvyA9l4OFKbySTeqxpqrZSDqlQAOrHDmDBlW7A5/dj/s/pik9OX2ahSmJqeFIEILywpwmNuHSnUus9pobqyC9b8X7Pj//EACERAAIBBAICAwAAAAAAAAAAAAECAwAEERIhMRMgMjNB/9oACAECAQE/ALm5W2VSVJyccU9zEkAn5ZCoYajJINQypPGsidN1V5bLcxYK7EdCvuiFv4MJqF+X4KiiWFdV4Hp//8QAIREAAgEEAgIDAAAAAAAAAAAAAQIDAAQREiIxE0EgITL/2gAIAQMBAT8Agga4YqpUYUscn0KS3lefwcVcMVOxwARU8DW8pjb9DurO5e1nSRX0OQNu8VGXhme5Sfl9vtgcj76JqSRpWLMck9n4f//Z';

    const QH_JPG6 = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAABgcIBAn/2gAIAQEAAAAA9UwMI6Mh0gvOM4Q2P3cllmf5LbYrSywD/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgMABP/aAAgBAhAAAACGqY9CK//EABcBAAMBAAAAAAAAAAAAAAAAAAACAwT/2gAIAQMQAAAAuS2wzjL/AP/EADAQAAIBAwEGBAMJAAAAAAAAAAMEBQEGEwcAAhEUI0MVICEzEGNzEiQwMTRBU3KB/9oACAEBAAE/APPHMzGpkTel5PXXM2/4YwwWFTCXABRDBnAwwDv8xto5er986fQcy+IImmRMiZoP+ZQ9V9tZtWN/TvejIlRepJaZqfk8tT1AHh3jUW6xvoh20pkd+Zt1njOS0ywJ9ijzjyB0OtX8wACyGnAHwkvEfDz+H4Oa5emHJ7PHZvQK7H5F+qyMZv0bfXKLffkT4lE+rWi2Bf3gZjfdv6bWDZSNj2jFW6vShRJVrmOSvvG/UGY/0u12WfA3ciRCTTGUVOJQ71KdYJ/2OA3ZNTazrfk7ZgqoNTTk3hOfl2G/Q+DshOb1zV+d5Ll1L3LCvaqk1RVSBciWG1HaehaspV4shPT6VdzBtptPTk/Z6E7Nphj25KtTUTH2gNGpVfN87D9jy33YdtX9HLx8+HMALK7geBcPXV/C/8QAIxEAAgICAAUFAAAAAAAAAAAAAQIDEQASBBATIWEiMUJxkf/aAAgBAgEBPwCefpagLsW2NXXZRZxuIiESy36GUMD4OI26hskhjmiVHW9WBDfL9wdBr4YC9FK6eFxEWNQqigOQRVZmCqC3uQO5++X/xAAjEQACAAYBBAMAAAAAAAAAAAABAgADBBESITEFEBNhUVKR/9oACAEDAQE/AJMny5EtiBjvEnbEAcQKae095AS7oxUj2IdGRmUjgkRSdQm0cp0lol3N/JsMPQII1BFSLVWVs2B8gaxLP9fyDtix5PPYuxVVLMVXgX0L/Hb/2Q==';

    const QH_JPG7 = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAACAYHAwUJBP/aAAgBAQAAAADqmAEPXduKrrNoPBzp6CLNuGij9aVluphdwJvYLDgYTMf/xAAXAQEBAQEAAAAAAAAAAAAAAAAEAwAB/9oACAECEAAAAIU5QD8Rf//EABcBAAMBAAAAAAAAAAAAAAAAAAMEBQL/2gAIAQMQAAAAMPTxV0KM7//EADQQAAIBAgMDCgMJAAAAAAAAAAMEBQYTAAEUAgcjEBESFRYgITNDUwiDkyIlMDVCYnOBs//aAAgBAQABPwDvVTCdo4g0dlISKF3LwOgawcX94i96E9TtShgH5hao4zX5xppnSmQ0h/ZOfyDn/htcm8ar+xNMlkFExNtmOuBJS7YvHaxQbU9Xcl1vK1c992NfkSChooAj+0xqeOf/AB5HAsHTMFUtk2nysmxImqA8dTyeRxdnEab6omoDJ2yY0rmEyxwMA8DmYZL0NOb5uIcTqUSkGRPkZoa64zm903N44+IZSdJtQzcUXNUuQ2lV3L9jIJ2jB9b0DshDthWP++1+vG60rjtTpEdaG+/HUksnUDYjagBnr98AL/rHW+39TkmEzuRZgqm0xig5hG5vLxTm740ZLGmJQqjj+lshb0uzf+v52Epiu64S63NURoVArDNlRAIL9i+VYGoOzik1DrVW9TEvItzcXKQGbewCUNfzGdM9hj5HF2MJ7sF1Hwmj5AqCgTXgpiFZyF3KPln42DBBgpmonJBQ7IihEpZBevl9dngYoiHqw1WbM3NxAorYXQbTXDm1qGCaowmOkfJbgh8r8H//xAAiEQACAQMEAgMAAAAAAAAAAAABAgMAERIEISIxEBNBUXH/2gAIAQIBAT8Akm9Tc0IQsFVhvcmndY0Z2NlVSSaik9q5gcT0ak0qTQNIZ1RkNghUkt+Wpp11S4KHVW6bq5+qWCKCJMJ1lLcnAUjAn438LpFDKWYnFgwttuPH/8QAJBEAAgEDAwQDAQAAAAAAAAAAAQIDBBEhABJREBMxMgUUJIH/2gAIAQMBAT8Agh+wp2Mu9QSVOMDSI8jqiC7MwA1LH2m2k3I9hYix4yBqi7EcE8zzx709YMl34tiw/ulo5qP9TiNwPKe2q5KUdh4KlZt8QLgKV2HjPnpN8jJNGUKIAQAccdP/2Q==';

    const QH_JPG8 = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABgcDBAUJ/9oACAEBAAAAAPVMCNyTi7HSVbYEXzTRXkGyzydlK9G2QH//xAAWAQEBAQAAAAAAAAAAAAAAAAAAAwL/2gAIAQIQAAAACdszp//EABcBAAMBAAAAAAAAAAAAAAAAAAADBAL/2gAIAQMQAAAAAobJlyf/xAArEAACAQMCAwcFAQAAAAAAAAADBAUBBhMAAhAzQxEUICEjNJISMGOUotP/2gAIAQEAAT8A8ZXXqTi6Q441FagzHdqWmEVadDhLvHi48zYkzuFDSnoh5xdJOUeVEcQShyg5JR4Tcbiv2NtdrCaPkWt4F8pqrBobCCteyhj/AN/DfpN4DogmAUJhHBQoSi6urinY+2Y6jTO0m8P1gGIQh5SlK3XAEINQE5HXAjVtfMGubEUJR4TCNt6J6cbjDdvfQlhhR2LB2GKbm6kL5m4+aegkIOOKGPXW9YruD3X4KB5NNQN0Xncp5qOKnEKNpqqlBURc/u83+WrbjpNFI3f6qEaMbKQwRYMvl1/BdllPzExtlYaSAo3WOwGEYGYRxdD9fLv+erNs5m2auNyDYm3naL0MQIcARBU8gAAH7P8A/8QAIhEAAQMDAwUAAAAAAAAAAAAAAgEREwMQEgAiMSFBQlFx/9oACAECAQE/ALxlW2JUEH8i41NSnChkxkrdeE+roxwNRdCbuiuloaUsuO/3b//EAB4RAAICAgMBAQAAAAAAAAAAAAECAxEEEAASIkGB/9oACAEDAQE/AN4kSzzhGaNRRJLt1X9PFwJ/EjdVQtQcnzR+3x1jjkdI2VkVqBU2DpsiZ4liLeAbrX//2Q==';

    const QH_JPG9 = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAaAAEBAQADAQAAAAAAAAAAAAAABgUDBwgJ/9oACAEBAAAAAPqmBka+foEHeTnDUvP/AHzE5/ZrigdqpAf/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//aAAgBAhAAAAABOn//xAAXAQADAQAAAAAAAAAAAAAAAAAAAgME/9oACAEDEAAAAANEWm6f/8QAMRAAAQMBBQUECwAAAAAAAAAAAwEEEwUAAgYRFBAVM0NTICEkYxIWIzA0QVFSVKHD/9oACAEBAAE/AO3o03lq5jfDQw8jY/CJ+0KAkoBnTlEhN2PWllvLQTeMz4UXd+RBl14dlXqgKY0O9hl+UAuMY/QtR6yGtM5UGQJArEYJU9qIv02mNQh41UV906uJqQGM0ujRRlcKDThOp+NnF6FjHAAKGMUQg+bbEbxgUFUamFr0FT0mZD5oXfd/K/bAplLR74d2u2EJlyR2VDGL522FvNPCktqrgyj1t8UzszooS3Unp03hzZ9cFsO4dpdAY3mjEN8IvtUxjfs/uf/EACARAAIBBAEFAAAAAAAAAAAAAAECAwAQETEhEzIzUWH/2gAIAQIBAT8Av0p5fErHHLYGcCvg2e0ezRiaJirbsIYwwYLyNG3/xAAeEQEBAQACAgMBAAAAAAAAAAACAQMQEQAEIjFRof/aAAgBAwEBPwDn1sH7CZGaaOdfU/D4QmiTO6lJ5tksd9A50iurO4v6bZxddKaavjfucf/Z';

    const QH_JPG10 = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwUGBwEICf/aAAgBAQAAAAD6pia26yFQj4bSJBfnP0Pgul3hedxxqbgxWX1MOIH9/8QAFwEBAQEBAAAAAAAAAAAAAAAABAACA//aAAgBAhAAAACOg2+0dH//xAAWAQEBAQAAAAAAAAAAAAAAAAAAAwH/2gAIAQMQAAAAG2gtH//EACsQAAICAAQDCAIDAAAAAAAAAAMEAQUAAhETBhQjEBIhMTNTYmMgcwdDkv/aAAgBAQABPwDtZvEVLZJIu4IrsMbRJ9KOV89cUzrz1auZ9MijWnWD93bxDd2NWuLKhUO2DR8swEIuiHX7z6dHHCiLtZWSFo2UzMtNGOaPKTOG5idn6NS4OvZZL+zrLJTNY01xmiQknx2Y2NgwGI9jw11+eE0lkUwqhFAQhBshD2Riz4ztqTjA4u5mIqpDQdnMeRCKBYAWWT+jO8fq5/8AHzxp3Yx/KVoesra2Mx+Tgxid2AuSjvmn+nekyvzN6o93uY4SvDXNGk+WQyUq+mop1CXTTrg+ieyMN8H0FoyF9hPOUmaV5z9ZgEl5bxBzAdetp92OJOO1aU7KiYXX3/aV00D+8x+iHFHxkna5sta0q6q1pOyJsIZ3v0HXmQ/i/wAD2r9q24K7Ioo+beOMSgN7f5cS3rMa+z7WKfgenqrALcuWLRgToDeNvbXhy/466xjyjt//xAAXEQEAAwAAAAAAAAAAAAAAAAAQBBQg/9oACAECAQE/AGTisf/EAB0RAAAGAwEAAAAAAAAAAAAAAAEEEBITFAADIRH/2gAIAQMBAT8AXRlU0AT+cW4ZbA7if//Z';

    const QH_JPG11 = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABgcDBQQICf/aAAgBAQAAAAD1TABhqG0onx7GRTrlKrilhr9gAf/EABUBAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAAitH//EABYBAQEBAAAAAAAAAAAAAAAAAAADBf/aAAgBAxAAAAAT18W5/8QALRAAAgECBAMFCQAAAAAAAAAAAwQFARMAAgYUISMzBxARMIMSICIkMUNxc6P/2gAIAQEAAT8A8w/AVbXOLTGYHaFPjz+3KxMQpXLxyJho6f8AVQ7HK/lhMW0UAEpjHKEHheL1i41HCTEjlXzxs03HUD9bQgGu08PvbimIc2o6smHKMRzQRA+AwbwTeuDvSikYkbhhcKFOc5fzxwXX5prKErWrNheXqUKiFOkCvQ3J/mefjQ09IOTIY0DxptAq56FK2GyVL1rNL+4wtCrqyjEgMvMOAIsw/cURSRDYUAEIqU6Ig2PK/8QAJBEAAQMBBwUAAAAAAAAAAAAAAQIDEQAQEhMUICEiMUFCUYH/2gAIAQIBAT8Atw23NlFYPjd6fTWaae4TE0UIQeLilyBM9j60f//EACMRAAIBAgYCAwAAAAAAAAAAAAECAwQRABITISIyBRAgQoH/2gAIAQMBAT8A9mWojmiCRQvG2bUZ+y2HHKDsbnY3w/j6mmjExdBbsn2xTyVMqM1RGkb6jqAhuCgPA/o3+H//2Q==';

    const QH_JPGLOGO = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAC0ALQMBIgACEQEDEQH/xAAdAAABBAIDAAAAAAAAAAAAAAAABQYHCAECAwQJ/9oACAEBAAAAAPVMrXpZbPDGNEJou2CBRuZ7OA0mSrSZkjJqp8ovYjhM7TxX/wD/xAAVAQEBAAAAAAAAAAAAAAAAAAAEAP/aAAgBAhAAAACKqKqMn//EABYBAQEBAAAAAAAAAAAAAAAAAAUABP/aAAgBAxAAAACROkTrRn//xAA4EAABAgMEBgQOAwAAAAAAAAADBAUBBhMAAgcUESAhIzNDEBJEcQgVJFFSVGRydIKToqPisrPD/9oACAEBAAE/AOicMbErFNhpYY28zo4ok1U4kojqIi7wJ7N+MA5qlcTtL7cZwJF2yRwBgY9LZX7P/dqYoToeRJeC6jCEyYLw2BdYl5CFWoy5z2dzhlfFuexuTgtbwua4BROKRLWNRifMwAn+IEbjck1y5bwVWxw689vpkcEqR4dgRADlB4yn/a5qTJLqeZ5fdWlXwVoKNiy4cFFJMDcFx8TeRh3xwHCCvwK6bs/q1f7LSKzzWC4hSMYYsjDdPWMUpYqDF9nBmez6kyBcCsi2LfXq5esGlxi6ORYUgQMkEXN70sNtUVpZE6sqozUrDUFQqhMPTAPdo5Oo5sk2mMai5GCI6j6IN9+lnpnxJKlWiSOxomzNUGggQ7jffpZ+ZcVDN60LS5GMUrhWCYRQAog324/hZkvvAVztBxheuhKqSlBp5WzL0YfSrfP0zDhPK00ueedwQOWhSjEZFAdkfcL3/Z6Fj4EYclczLztdUyjiaVKrb+a1zA3DsQDhuNl67cPxYZtVt/LZnlxmlJFFK1poBT9fr04efo//xAAaEQACAgMAAAAAAAAAAAAAAAAEEAARFCEk/9oACAECAQE/AIOR1sYetvHX/8QAGBEAAwEBAAAAAAAAAAAAAAAAAQQQFAD/2gAIAQMBAT8A5hZTHWGRjAF0T//Z';

    const QH_ZKP_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD70lEQVRoge2ZW0tVQRTHf2pl0eUhykJK6iW7ED5ISan5rNkN6iVIIgqikqCX/AAV9FSZSvRQ+BHKeuhCRRLVQ1ZUBNKL3Uk60c0LqKeHvUb3mT0z5+x99jGL84dhzp611n/WzKxZM6OQx9TFHSD5j5Vu5XyBbyDJeOZj0lEAMM0m+AeQMvGFf8uLuJEfyFSDaY9kgzlAiZQFwMI03z1ATcw+jKe0qLhJtBQai7+m9Bs1ayn7D0A/8FnqPdJ+APgibV+ANzH1F7CPdYayaI/UX36zO2Cb5ZzeHPIr4oC++WybMtYVyq+IA+9JTb8K+0lNvzlDtunwBuEOwil7IEL4K8oToDZiXzk7ECcb/+eBGHYgtnd9t8toMjjD7hFX6GV7+QvLmeJv1PSbiz9aZMUZJrTW+H4PAl+Bx2E7dOCxcA762lZHIbJlrWKgDRjFfhbkqowCreJDpv4aBcXAbWkfBM4C64HZUqqAc8BQFs5mwnsDmBF2IIp8M95KJIG3wFqTkaACeCe6Zxx6Cqcj8LYCu4FhzdcAurWBtOAt7aChs+9S9E6HxGalw7kVwIiF9wHBtKt4R4AT2kDuKyX/Zq/FyxwFwCxgicgvAC808kKCieI5cFHaDzoGcggosvCOEZxlxVsEzMMLd+XnJkc/43gtpOsMskopOqrE5qWD96WD1wbF+yqEzTgGxHiOfH8HfpI6gEppU2E2V2x+OXh/abymcNLbFe9vG6nrHBmSusiho2O61JkcaErXFE56u/JhOIQv43gkRNUGmS20qsVGj30/XonOhhC+1IjNQ5uCa0WuSL3LILsnRcdeqW85eG9qun7Ywmyn1FdtpK6B9EpdZpCNSfFjI9CElyY7HLwdeCl6L8FVsYWZ8qHXIEuLZiFtz0C3Gu+NngROZqB/SnQ/YQ5dHe2i32xTcK1IqdSf0nRSB9wFFsl3A7DVob8NqJffi8W2Lk0fyodSp5YFnXizsM+hUwg8I3h/GhOHdexgInz85RnuSd0nep2hRiC4Jcb1Dp0mnzPH8S58LfLdY9B/atFNCpcN9aLjSiJWqDRZYZHPBPp8jqgDbi7BGdeLSbdPOE2oIM2NwbWc86XWL4cKR0jNaM3ioHVDptEtE04TfkhtepekhZrtcoOsBEiIvI1g3I9iDskGgg+0MeC8/E4It45ysrhrdYnxMa19GnBdZOpw24q3Jwbw/ujW6OBt9On2AFukXf3r7hrBa9FRkVkPRBe2M/E2acabqVVMDDCBd9WPC0uBb8LdhfemKQEOM3GB3R6VvAPzZu3He5rGjSrhNvWZycHsxC68QysBfAQuAcuyJXVgOXBZ+kpI3zudFnlMQfwBDXzGA8qBsJsAAAAASUVORK5CYII=';

    const QH_OLED_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAQAAAAWR4QsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflAhsDFQfcEm6BAAADLUlEQVRYw+3ZT2icRRjH8c+72bXSxhJbxN3UbqGiFMSrnnpQFBE8KNSbStUqmFabxmpEK3gu/sMqovVP8aAn20QPFUR6EmMvgqWU0l5EoygpJpukCY3JeNjJZtNk2fzZ9xUkzxyWmfed+X2fZ+ad531noeBRA6aEDMuUHzyiAAW9RjMVny0VvQqJx7ynXTBoRHbWoVNiTFdiwJ2Cjx02LMlIPujQ6wmJAaYEv7olQ++rdqvfBFM5eVQyDX/VKkaRz8VqVsFfYLmGV/Ie96bb0gbIN2i/Ro9XrZf3XF3blawiUHDQa9ZjsHbf0/o9mEYMguCsG+d5f8iEYNoRG0Gb/cYE37uuZbpF5wRhIUDBKyYFM47YEL3vNi4I3tKWNkDBIZOCae9oj953GxMEn9jUwsg3ALjPeJTfEOUPRO8/cn0L5RsC7PSnK96uyfdEoKMtlm8I0GanB2ryB6P3H7Rw8TUBmLM2z7ssmPZhy71fAkDei1H+3RS8bwpQ8EJNvj0V+SYAdxiOG1Fa8jWAxXPBZZesc9TLxlIDiLY4wFkP2ey08bTlGwEEP6cvXbXc6odYA1gDWANYA/hfAAT//FcA1VzQYVdmH+fTfnJxrpoIYCb+pm2JxI92GVR0yo65bJjlWijXv+RVAf7WbyIzgFMu1FeD4IJihhGo2hYXBSHnd9zknswB7rYFg4k39OAP35hcwTCJMz6re3PcbrcblrCgr3W/Il6n7LtVnfZNO1A38PvL6vutMtzsmCEzyxSeu3/Ik7U95PCSew85Zvvs4dQ6O9y+jC+gIPGwu2r1im6fgs3utWkJUzDqjHOrOfLZ7S9BcNJJQXDJnuxO2hJ7VARBv6KifkEwUjcRKct3GREEfTpBZ0QY9kz6CImnovd9SrXWUkSopD0Rib0170vzrnTqixPRlR5Czr74z8KJq+SrUTgRo7A3HYSkJn+8QeaYRRhtFUJOyTZlZWVbdTeRn4+w39bYc5vSypJ9zrPO+6VWJgXBl03yZslxQTBR1/O8fSuJyEanF2ygny9ymHW1FX2xoN9APPJdliVeil7P7t5fxee+mXX6el5mmdTbOAL/AgRpI1hYsOBEAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA3LTE5VDAzOjM5OjIwKzAwOjAwhmcOXAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMS0wOFQyMDoyMzoyMCswMDowMBGue7YAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANjMzyPq/zAAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA3MzTErRAFAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1NDY5NzkwMDA0P7o0AAAAEnRFWHRUaHVtYjo6U2l6ZQAxMTc3OUK4GW78AAAAWnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vZGF0YS93d3dyb290L3d3dy5lYXN5aWNvbi5uZXQvY2RuLWltZy5lYXN5aWNvbi5jbi9maWxlcy8xMTkvMTE5MTAzOC5wbmcuZKKRAAAAAElFTkSuQmCC';

    const QH_ANGRY_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAABJElEQVQokbXSO07EMBAG4IkiZFGsQknno2QLDsARuAMNnY0oOBZGKbYjR8BhG0pHFFhayz8zdiK2gS5RZOvzOPFjhvD7WNoSnmTAUSuwRD0yERlL0nVI3PaWkgYUYo+kLUUDDAj8Wcfg7oiJ22dLM3czEzisOEjckozFfzBy+7UppnN4cw69grfzoVY88Q+aBbllOFMRBUFX+HtGUhWPZdGmIKsCZwRRFwQt8KYgKoGtGw0NI7cVnh4wxss6zd1dY/S7GtnfEEZ7VWFbwhvRywLHWaQ1EuBul4jjdV7DEtlf8MXHRk46w3ecn8/GFAQ9Y0gtBksByUw4nnaSxmhO7wOm/C0JTj3nGcEgc+qzQur4aPxy7XCh6LVcZCd8w4yNq/cv/ABn+24HXc1w9QAAAABJRU5ErkJggg==';

    const QH_AWAKE_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAABC0lEQVQokbWSMW7DMAxFvxugHj12q4+QI+gouUanmkGH3qA9Tgx4yJixq4NcwEFaQCgUsZ+S3TRDMwSIIZB4IkjK/ISePsEtoYddtJgZCOA0AmgE5ioNtE4QatVSvdNQC3yj2unAtIpAt9Mt7atgT7cnqq4nWFtcYHf+AmxoD9dB/wsvhHIEPyPwbwwiCLseCdoiFUBF8HAJWjzpRopUOnIIvEDus3wjPN4tDI7F+6BduE85MRUI+AOfmF+OHPFwiigc4RuL3HRubxub9umhywyrlcFzhq8U+bh2VGeDP9MnQ0fbCUza7SRjVnsUODg6HRqNlD6WGir1NQ93h4tST+ti82Ma4cbb+x/8ALFea53Cx4FFAAAAAElFTkSuQmCC';

    const QH_BLACK_EYE_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAABKUlEQVQokb2SIU/DQBTHXxkEgaicrGGSYPAVSAyQnZ7F9DP0kgl8vwDBLUdwsyQkFZXzw3TtFygBcVm6Pv7X0euxCRRcan79vbav7/+I+yPp7+GVBhYaIoo7qAEhICePWYdcBwCJe1zB+pJMtc8rwL2k+kiMj7kEZJL0mVpOOQOUgFsxuuygelbLRwuJGN3wAvAhaRWpt+sOikSczn43pWvyXXNnDRolwIsDTRY7RrbPsAw1L9YHkxa8B0AzMGXlxhsC6sPQQEM+4JPOe6hp32xo2BumwLyNnI+uaeJ0QG5vqSkrlFKzruviKVL9QMaJ6AfimnzumPerSNnxVjB28BrGRqIvEjHlFJAixpNobmP8EfB39DE3frsU2BId4Npdl+0x//Ef27sPXxyzP+vLfhM8AAAAAElFTkSuQmCC';

    const QH_BOTTOM_LEFT_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA9UlEQVQokdWSMW7CQBBFP7IiChcuU/oYKZfLoBxjp0tJSZubxJILV8ARYpQDgIWQLLTx5M8agxuSykVW1ozejtYzu/9D70swJdSwjQKJgQBOOwBeYCnTwOgEIVeda+s05ILWq5Z65LGMwPSle8Y3QcPUEFWrASqrC2yv/QV2jKf/BN/e4NLD4WDw+RGhfTGofYT3zKBwEepXwlbWERZLq8xWESQx4HvfYIP0j8riaVQpsvjr575pOmpK0e7jxEErDsqHb3gF6nOOKvRilYylwKTdDzL2al8FDo5Jj147St/NNbBtzo/eoVHywS70E3iMMLF7H8EPPex/bNUX2nQAAAAASUVORK5CYII=';

    const QH_BOTTOM_RIGHT_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA9UlEQVQokdWSoW7DQBBEp4oUq8g0zL9R5t8Iy0eElPmkgHxOQUlhJQPDhIU2Mgl0lIBTcr3p7LmWSxIWUMva1bu50640A46fwyPhC3bwiYmBA0pGAJWDtZxBtXQIBZnRlwyFg6/Imp2e5QK1lnvVtcNR7SgkmwEa0x3szN+Bjerpf8EuwVuCGA2+r72yehXELMEFpoRJf21qyuF5aXCezgXdLCkeLwb4A1u831fOmI9KSHMOT8t+6Mc4lCs/rmOLNlq0Tf7skj+LdjCrVq0dzNr9YGPv9q/BoVRjVzHK+pgx5PSFfmVHQSmGuChP0DPBg9N7C34AZi2BTJ3AlzIAAAAASUVORK5CYII=';

    const QH_CRAZY1_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8ElEQVQokbWSMY7CMBBFh41WKSPKrVxxjnCXPYjdcQ1uskgpKNkjgDgARiniwvjzrSTKgDbSUhBZM3oe2fOdP4Lpc/JOOEre2EmRwYnUSCJineRUITLWTqIBSoQa0TgJFmjgeawiMJ1xYtw4uTJdicB+hH2uO8l74W9IHeFAaHPFKIilglAo8F8Kfpd2gqPgP+AX+oKFnekzKEg/Slt3aSfVwbTjew7wlYLtSsHuW0OhYP3xemX7Odf0QU4vdICbbZ9+/IM/PTSMjZNs7Wm0sXd7MDjWTPAWidanErFiSy7ODgfFjOPCeRIeI7x5eufgDhWhg4Msl9cxAAAAAElFTkSuQmCC';

    const QH_CRAZY2_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA+klEQVQokbXSsU6EQBAG4N8jhspQX0XlM1hi4oP4GJZs52v4KJdQXOm9gVxsrrDgYrMJm/39d4EwFhotjpCdfGyWGZgB18vhkuiRHuxQJDigYQTQOqRQMWhtHEJNlvQNQ+3gW7LjoGOVoPDOo9Znh7PCWST3C/Zp3yE987/glePb54qPJwNfGbzcGvR3BrsHg/uN3Sn+tNOXNs91xmPGkCsYx6m2nDTemKpPRQaZ4LcGh227ogf/jcOVecFg85w2BrEymAudMH/CDPPjv/VnQqe1c0itPS5tnLo9Nzg0ChxaRrU+lgxKW+vW7GhQ6mVcNE/QMeHC0/sTvgD7UIMSuMcyKAAAAABJRU5ErkJggg==';

    const QH_DISAPPOINTED_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAABL0lEQVQokb3SsU7DMBAG4CsRZPTIhuEJGFi6+UUYeAd2YsjQR2DkUdoqQ0ZGRlLyAokKklVZ+fnPboUYGEsUOfp8tnzxneDn8XJMdKITKykUXsRhEpHKi34MIkfnJVp0JUKBaL2ECusGwwYwBFD32AzAwssIlCN6LmgVkxnRRofeS8+dAe1kM4IjYDKGKuAVC2wVHRRNxjphk1EvFXcZ8q7wlWISpxCniLMXYndiFWH2TMQzoxjEKKRUdAmfUihW+8iV4mkfuVScynmKzO+9fJh0zk5ub7x0F/46HToVhMtZP0JRLVOiD6gJfKXIGxovvLAE5N8+YPvfaHMGLBbG32g4MlEWk5eui9tUbc5r7iwwi8lCDRVLyw4pEQ2C5cveYaPYQ7uwn4TbiCN371/4BhzAZnz8a7MjAAAAAElFTkSuQmCC';

    const QH_DIZZY_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAABNElEQVQokbXSv0vDQBQH8AcOWQrBTacbXYUsTt7o4h/RodA/wN27LhanIk4u9l8pnFAKhfwLKQFdG7OkcNzz++4aREShQ0O445Pk7vJ+EH9flo6JiuTBgk4ElkhzICJjSaacPUZtySvmjDvNXlnqDLPjLZblAKaaNxinlhpMDci87LGU95bkWfcPSoztASgjdEIu8AlBC7r0mR8qoLFG0LkMqAdKsJvXwLuZCdqrAlhXZcTluWAxFnyOH4HV60XEaC14LhJuBU8Jw4hJkTZYyQYurmnUC/B2H3fbPZzKoWc38d+qO6CdxEO9+ZAf5XmKZybxXOsIKyEEiiEg6RK2OyhVv7BP/I/6JDiMzpKUdtOXMVV7X2Akmae8NRxQ+pCxR+oVbvQOGkX17YJ+IiwDjty9f+ELUzN2kOtwbvQAAAAASUVORK5CYII=';

    const QH_DOWN_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA7ElEQVQokd3SMW7CQBAF0E+QQumSco/gI+xRyEnwUOUIlDkKkVxQpkyLlS5pbCWRVmjZnz9YCBroaGJZO3o7Wmm1f8DzZ7gndvCNV0wdBkQWAI3BS8WsNRpyIGdMkTkYUkO27HWsElQ+2Gl9Ngwqg0huT9h63+B76QbetH7/R/we8T5is3EsRzwdO6sRVjswYvIi7B8WjsNkLeTH6CioHLjAD+rbnQPm5w4t6OH3WOjhh2K15wNPYeBOYbW6TmvoddFOMS49xtR8ar/jlweco3Jm37Ao+jJjrpiCfs2OBiWcxkXzBA2JcOfpvYY/VRV8zksX6nYAAAAASUVORK5CYII=';

    const QH_EVIL_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAABKElEQVQokb3SMU6EQBgF4IeYYGFCZyyMHMF2Y8NR9ihMYsF1vIAJG4ptjFxhCQeQic0U7DzfzLChslwpgI//JwPzfnA7DK6JGeFBhzzAADU9gMYgXEouOtcGS0UWdDWXysCVZM+ZXEqhICeOpCsMbE9akfYojAFH9U4Gk9pdQBvgmoQywFfCQF/9CCwjljqijXBNRB9hGTFGHBLeI95SW9cEIFVMJfibfURWCkse285ZIbjbuI5HLpzwkpAJHdYKBJMqxNOOw32qnPHwyK9npEVNfcfPV+zXLzDsLl9gdXvwfWr7bk76jY9UWTdkw/BPCItq4y3XfDYoPvYGykobHJoVo7LSc2XJVnNQ68K5oVf0vtAE0Ck+DQU1KNVlXDRP0GvClaf3L/wCZ91q5ZfyZSQAAAAASUVORK5CYII=';

    const QH_HURT_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAABIklEQVQokcXSsU7DMBAG4D+KkBdQkFjY/CjpwrPwACxsdsXAa/AkyChDN9o3IKFLR0cMWIqVn7ukUSfYKjKc9fliK7k78PR4nBMtdCOgVHig5gjAeehSMUusPbIlDVPNbD2SIxtGOVYJZNmzk/js0cvSC8nNgo3mPXQv/YGtxK9/RJw+54jAtxPA4BZkgV0Qb/luFoRHbtcLCrm6dTOyESQ7I1aCbGYEJxiKGbCagVNk6GsHWEXEvV5waRRhdSeI12sFfCnY4eXB49NMiEg3Hq09Zl5LgQtmyvDJo+PqQgqfCi18z7aS/hwKNyHank0u2XhEZtdxP1xpG5MbPhp247c2ONfSZ0bHUVo/GuaK8m9JhoIyKHYZF5knSNEEZ57e3/AD5xRrNEODy9sAAAAASUVORK5CYII=';

    const QH_KNOCKED_OUT_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAAsklEQVQokb2SMQrDMBAEN6RQ6SfoKXqarsu3Ai5c5gs2KdLapFEhvFnFNnaKpDA4QtwyJw7E7YLrMRwJLUrjinMBAwJHANFQpGJWDYbsSccUmL0hRbJmr7FKILmzU70YBskgJJsFmvJuKL30A26qz70wvOFxNPQ4CVq4FbS3Lbh/fmf33ubFf/gzQa1aG4q13WLj5PZscA4S9pGjrB8dc8XkdZUdBcUvcVGeoDHBwen9Bi9Mh5JCepqpAQAAAABJRU5ErkJggg==';

    const QH_LOVE_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAABAElEQVQokbXSMU7EMBAF0L+sViko3ND7BlzB1+AoVHiouBRFpBRbcgWvKGgT0VjC8vDH3ggoSLHSRtGMniNH9sxAfx7BNZFgCyP2BgGCVgBRYMlpYQyC4lUHzUGLF+SoOunMbY5getcT44tgYVpI1eOKo30X2FrewBvj54XIfk/MT84w3x+I9DoY0t0NMT7cNsAgOBhG7H4Dj4bdNliqvAUWsZ2g/TqhnaBgsLOhna3CERm+XQGeKAgNEoiK2DBGu9xzv2lqN506loaPjq8L63Yu/J/+dEyMk8Bae1rb2Lt9bnAJTDpHrWx9HbQ4zZ4vZ4eD4tdx4TyB24grT+9/+Ablk1xH61JzegAAAABJRU5ErkJggg==';

    const QH_Middle_LEFT_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA7UlEQVQokbWSPU7EMBSEB61QCoqUlD6Kt+EsHMOv4zrcgEgptlo4QnbFAciKghRWhnnORhvET0VSvKfPEyfPngEvj2FNOMAXGmwcDIgcASSDt5pZNRpyICsOkTkYhkS27LWtFqi98qj6YDipnYTkboad6wZfG/6AF9X3f4ePJ4cuFcjJYegK9MGhmZRDLXi22wLNvSs2vba9E+yv6gK2cQU3F9jjB6WpFsr2unwtfP/PeYK4mO2xW0z9lla4kOXFf/Fngla1Nbi1x9nGye2zwTmqsU8cZf1YMetEOodCQQUlzHFRnqBtgpXT+xt8Ale4f//z1iglAAAAAElFTkSuQmCC';

    const QH_Middle_RIGHT_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8klEQVQokbXSMWrDQBAF0C8crMooN9A13OkauUcaQwpt5yqnyQUCKlTaR4hJk1LGBi9kvT9/VhaSCUknIWZ4Gq207Aw4Xg5z4gP24B0LgwMqRgC1g6WCQbFyCCWZ01cMpYOvyYadlhWC0icPiluHo9JRJNsBrdUd7Jn/BzvF0wx4MVwvPdpUee2RGUKeEGH4yp4NYbkR/CpVzg9PQveY4LEW9ngb0U2xR3otYDNWzrAP+Oz3f247WEz29r2a7Dpe5jiQ8eDv+tOjUWwcrLWHoY19t28NDpUSu5pRrY85Q0Ff6tbsaFDKYVw0T9AyYebp/Qs/kIqBZfRS9sYAAAAASUVORK5CYII=';

    const QH_NEUTRAL_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA60lEQVQokbXSQWrDMBAF0G8SyNLLLnWEHkFHyUmKtOsxepJCwIsse4OQkAvEtAtTFP3+kWLsEtJVbcwMz2PZQjPgdEUsiSPswQ4rQwQ8M4AQYallUvQRyZEbDp7JRQyB7HjRslZQOvOk+BrRK/UiuR+xt3qEPRv+wIfi5//jUPBS0RecQ8EuGJpaiV74xrageRPyqrx2bZ6EtPaGjFb4wvOEhPsK4abKFfaBjHD/n7oDzPaWuzDb9fsSBzI7+F/9qegUuwhr7WlsY+32rcHJK/ESmNX6vGFqOTjdmh0NihvHRfMELRMWnt5H+AHrPXy/z/un6AAAAABJRU5ErkJggg==';

    const QH_NUCLEAR_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAABUElEQVQokbXSsUrDUBQG4GNbLYKQVSgYX0EEJ/G+irj4CjrovZ2chL5BfQQ3x1YytFscBYc2tJBFaGuGpvR6j/+5aRCpujWEc/gSLiTnP8Tfl6FNYkjyoEtVgSFS7IhIG5IWsEVVhmzIXOdcsQ0N5Zo54imOBQDaiBPUO0MztBnI3CvRk/eG5Fn+D2LUbA2JR1RgTwFuXwusjoGc24IFz4GMJ4IP/QaM+Ukw1vdAnxuCd1UDXm93Bf2wArTOtgUvB5Urjh9OawWqHjuCVmMLODypCB6PBOcXHp2EAR05j8wj9RiwoMMFZh6jAkMneLaCSdfhCwbNT0HavQFisxTMzTUwoUywNMfAnC79bycpsIhigVNtwGrlp2O0jIp+GeIaVoP/kU+BCDUyJNEmZYxF2quArULjqWaH6F2dbcB5iBu7g0UJy3XBPhGOARve3r/wBV6Ra0YFtwjIAAAAAElFTkSuQmCC';

    const QH_PINCH_LEFT_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA6ElEQVQokcWSPQrCQBCFR4KksEhpuUfwCCteLNN5DK8SCJJKcgV/CtuITYolzzebBH9AC0FMMcO3k2HfzhvB/VP5JezFDgpJDFTEoxORXMVShsDoVYIDUrQewam0OVCiYVtGYDrhwLhWuTBdiEA1QmV1FTtrP0DNeP0rVD1wHpxIwZC8wFFX/G07SaJqTQg7Tug6Qi2zCEX6UFlOraIuwj6LMI/QOIPlIkLIDZpeznljUHu7572c74c49Dz500PJWKqYtYfRxt7tweDgmdDk6Gh9lyLwRXwHlwJU5cZ1MY1sM7W/3d53cANErWnzffF+HQAAAABJRU5ErkJggg==';

    const QH_PINCH_MIDDLE_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA7klEQVQokcWSQUoDQRBFv0TIwkUvXfYRvIDQR/EoXTtv4VUcmMUsvYIhF8iQLAbp9PdXT8agYBZCcBiqeF1dzad+gefPcE14hx90WDkYkFgBZIOnwKKYDCWSa06JJRqmTPbcqS0IlLbcKD4bRqVRSA4LDF43+Nl0Ad4U9/8KwwyahybSKax+wPbj5k7XDrfBVVcEPVCQ9l9wwEN7DfFcOeJeUJFbxVKDpwZdFhzx2mBscvpZzotX+OjTuSDnz0M89XzzZ4ZesTe4tZvFxtntk8ElKXGXWWV9XbMETlG/dkeq4rIurlFtrva62/sbfAIl9mf0CAzjBgAAAABJRU5ErkJggg==';

    const QH_PINCH_RIGHT_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8ElEQVQokcWSMY7CMBBFP7ASZbhB2j0CXa6x96ChizsOwhFot0BKkXI5wqI0lImgcGHl88cmilgJCiS0UTSjZ3vsr/kDjp/DO+EXtrDHzMABBXsApYOljEGxcAg5OacvGHIHX5IVW5VlAqWGR8WNQ6fUCcl6gNr2HWzNP4EfxfO/Qp1A/VBH9gqzP9Dw9PGpY4fF1sBjqQta7EY4IN4WsB53LvgS+Enc6eEjrOKjE4PLNCmoo5wsHfs2COfmuZxXm3irufMnQaVYOZi1x8HG5PbN4FAosS3Zy/p+zpDR5/o1O1KVD+NiGlVmat87vY/gCtdEbGdBkaUeAAAAAElFTkSuQmCC';

    const QH_TEAR_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/ElEQVQokbXSMU7EMBAF0B8iiKhyhByBI5ib7FHijpKSkqOwUoqUewRY5QJZQWEhrz9/lIQ1C5FoNopm9OJYM/IYPD0el8Qb7MMWpcEDjglA62GpZlR0HrEhKwbH2HiEluw4alstKA3cKz54HJQOItkv6G3dw34YF6imqm4VyjMMvN8E9sfiZTB4F7gj+G4onoXPq43hWDwJ8cYZEmrhA3cnRPxeIZrvlfUOztohrQNOHcx4/R92OR5XUWVIZY7bDPE6R7GGlIPl30XnKfyYz4ROsfOw0e6XMU7TngccnRLHlkmjTxVjzdDo1d3RiTXLdbHz0zY7ycve3jV8Ae9SVdDGajl5AAAAAElFTkSuQmCC';

    const QH_TIRED_LEFT_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4ElEQVQokeWSMQrCQBBFR4KksEhpmaOsjZeyyXQWXsKbJBDUSjyCkRzABJtFlnz/BEJE1M7KEGZ4O9lhs28E46PyS6jEFgqJDFTEoRORTMVSgsDoVEIKxPAOIVXxGVCi4baEwFTjwrhWaZlaInAY4GB1FVvzX+DEePtP4B1QAjUUDNEL1IslP9tNNv1VaWx7qMUaaEQ4ymyEt5XF9KlSWYO9zq1bu52Zn8L1QLctyipDqdJcrzRan3PT6Fc5bV/uveDgmNBk6Ki+ixES+JQvZ4fnTYdxsdNzSOw/fju9n+ABhx519l+cbAEAAAAASUVORK5CYII=';

    const QH_TIRED_MIDDLE_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA30lEQVQokeWSPWrEMBCFH2xgS5cpdQQfQUfJUTRdThUwuHC5N1gSfAEbuzBB0csbZX9CIOlcRRIzfBqNkOYNeB+GPeEVvtHh4GBAZAGQDO4aZtloyIE8covMwbAlsuektEYgN/JN9tkwy81CcrjC4HGD721/wEl2+Z+gGkgEydDJHH7A+IFHlWp9aL1UBY1yMtrlBivid6gRItRjNVIvOBWkGrGo297xNLo+XXJ9wAo++9Kn3jDxLEVHvriMX2pfBM5RjlNikfTlyNxwC1rqHb03XNvFX680/8e+3fsbfAJxP3Verwte+AAAAABJRU5ErkJggg==';

    const QH_TIRED_RIGHT_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA6UlEQVQokeWSMY7CMBBFPwpSyrR0uQZdrkG/l6CLJQoOsgdYIS6AlCLl0tGC0lAmCoW1a/z5A0KRELsdFZY1o+eRLdtvwGE4vBL2sIUNEgMHFIwASgdLGYNi4RByMqUvGHIHX5IVW23LBEoND4pLh06pE5L1HWqrO9ia/we+Ffv3BP2BJEjDRiF5gIan8UxftZ18GnjMtadFf4OpYIv1AM8qJ8yGStQBNY+jD/Pzg5UgJM1V1qKT1ZhWDi1jPEjj+be+2t5VJvhLgkMhz2xLRqmPKUNGn2uqd3Tf/N4udns1ib3jtd37F1wAMZd4axa6/gUAAAAASUVORK5CYII=';

    const QH_TOXIC_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAABGElEQVQokbXSsUrEQBAG4JEDrxFSXHOCmFfQyuKKfRvfwNYsCFr6CD6Kd6RII/gKCQopTUxxEdf9/Wc3wVhocXAhzPBtmN2wM4Kfx8o+UYourGWmsCIGXkQyK5oSOEZjxaXAHL2BS630GZCjYVlCML2gYryz0jK1JFCMKPS7FV3r/8EzY7cr2oAiwj4qZIAh/ABJCSfZFEbhJZlgda+op9gG4PxBcRlxqBv4ZdztVs/BMpzzWX4R9aZTNFcVsX7LFV1yRDydLkLNJvzoTah5PzkmXs8uQo05IMrrmeIDLdGhiOiILeqdr2py8b/6E5Ez5la0tdXYxtjtocHOMKHJ4Nl6P4dL0Kd8OTsclHQcF86TsIzY8/T+hW92FXgt2fyLPgAAAABJRU5ErkJggg==';

    const QH_UP_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAA6klEQVQokeXSQWrDMBAF0G8SyNLLLnWEHkFH6UmKtOsxepKCwQstc4NQowvEpAtRFP3+cTAmlC6zqm1GPM9IWsyA2xPxSHzCfgzYGSLg2QCECFt6VkUfUR15YPGsLqIEcuRZ23qBJ2ZOfOVbxEx7M3NIhiHMTOyYIzKjL0zfeFnQvQttFwzX7qnwWPf+IjT0wheeN1T8zhBuy1xhBzSEy3rPUfcsGIJAcMFMKxtvZScDP24ZLuA/QVLM1h9yvseoOEZYaydacVq7PQlqcPVaeA5san07sPYsTp9mR4Pi1nHRPEHbhAdP71/4AaQHfL8y06HVAAAAAElFTkSuQmCC';

    const QH_WINKING_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABAAQAAAABZqeZRAAAACXBIWXMAAAsSAAALEgHS3X78AAAAx0lEQVQokbWSMQ7CMAxFf8XA2JExR8nR4o1jcJVKHRi5AQJxgVYsGUI+PypVw1CmEkW2niMnjr/BZRn+CTeUQIddAQM8M4BgKK5lkvWG5Mg9o2dyhhjInoPSWoHcg3fZo2GUG4XkeYZzOTeUWPwBF9nn9nCtYayhCxWYr6A5LfBqDgtktFGdAnY/gXDVBTisvfNVwbha9fbd+TT+S58JetneUKS9zzJOan8ETl6OQ2CW9HnP1DI6bc2Ofu/mcSm9UJrgz9O7Bm+xDoQgKYY44gAAAABJRU5ErkJggg==';


    QH_C01_PIN = [
        ['接口1', '2'],
        ['接口2', '4'],
        ['接口3', '7'],
        ['接口4', '8'],
        ['接口5', '12'],
        ['接口6', '13']];
    QH_OUTPUT_BOTH_PIN = [
        ['接口1', '2'],
        ['接口2', '4'],
        ['接口3', '7'],
        ['接口4', '8'],
        ['接口5', '12'],
        ['接口6', '13']
    ];
    QH_OUTPUT_RIGHT_PIN = [
        ['接口1', '2'],
        ['接口2', '4'],
        ['接口3', '7'],
        ['接口4', '8'],
        ['接口5', '12'],
        ['接口6', '13']
    ];
    QH_BUZZER_PIN = [
        ['接口1', '2'],
        ['接口2', '4'],
        ['接口3', '7'],
        ['接口4', '8'],
        ['接口5', '12'],
        ['接口6', '13']
    ];
    QH_MOTOR_PIN = [['M1 (DIR7-SPEED6-ENCODER3)', '1'], ['M2 (DIR4-SPEED5-ENCODER2)', '2']];
    UNO_PIN = [['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'], ['10', '10'], ['11', '11'], ['12', '12'], ['13', '13'], ['A0', 'A0'], ['A1', 'A2'], ['A3', 'A3'], ['A4', 'A4'], ['A5', 'A5']];
    QH_SOFTWARESERIAL_PIN = [
        ['接口1', '2'],
        ['接口2', '4'],
        ['接口3', '7'],
        ['接口4', '8'],
        ['接口5', '12'],
        ['接口6', '13']
    ];
    QH_IR_PIN = [
        ['接口1', '2'],
        ['接口2', '4'],
        ['接口3', '7'],
        ['接口4', '8'],
        ['接口5', '12'],
        ['接口6', '13']
    ];
    // 添加内容
    // 彩屏刷新显示
    Blockly.Blocks.QH_display_samll_refresh_display = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QH_display_samll_refresh_display,
                message1: '%1', // Statement
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    }
                ],
                args1: [
                    {
                        type: 'input_statement',
                        name: 'DO'
                    }
                ],
                tooltip: '屏坐标:X最大160，Y最大130',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['colours_control', 'shape_statement']
            });
        }
    };
    // 横坚屏设置
    Blockly.Blocks.QH_display_samll_HV = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_HV,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [[(Blockly.Msg.QH_display_samll_HV0), '2'], [(Blockly.Msg.QH_display_samll_HV1), '3'], [(Blockly.Msg.QH_display_samll_HV2), '1'], [(Blockly.Msg.QH_display_samll_HV3), '0']]
                    }
                ],
                tooltip: '横坚屏设置',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 屏亮度设置
    Blockly.Blocks.QH_display_samll_BL = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_BL,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_bl_1'
                    }
                ],
                tooltip: '屏亮度设置',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 小彩屏颜色刷屏
    Blockly.Blocks.QH_display_samll_clr = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_clr,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [[(Blockly.Msg.QH_display_samll_clr1), 'CLR'], [(Blockly.Msg.QH_display_samll_clr2), 'SBC']]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_clr_1'
                    }
                ],
                tooltip: '颜色刷屏或背景颜色设置',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 默认图片显示
    Blockly.Blocks.QH_display_samll_flash_pic = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_flash_pic,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Serial',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'HV',
                        options: [[(Blockly.Msg.QH_display_samll_HV11), '0'], [(Blockly.Msg.QH_display_samll_HV10), '1']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'model',
                        options: [[(Blockly.Msg.QH_display_samll_pic0), '0'], [(Blockly.Msg.QH_display_samll_pic1), '1']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'picNum',
                        options: [
                            [{src: QH_JPG1, width: 30, height: 30, alt: '微笑'}, '0'],
                            [{src: QH_JPG2, width: 30, height: 30, alt: '大笑'}, '1'],
                            [{src: QH_JPG3, width: 30, height: 30, alt: '哭'}, '2'],
                            [{src: QH_JPG4, width: 30, height: 30, alt: '怒'}, '3'],
                            [{src: QH_JPG5, width: 30, height: 30, alt: '坏笑'}, '4'],
                            [{src: QH_JPG6, width: 30, height: 30, alt: '眨眼'}, '5'],
                            [{src: QH_JPG7, width: 30, height: 30, alt: '骂'}, '6'],
                            [{src: QH_JPG8, width: 30, height: 30, alt: '憨笑'}, '7'],
                            [{src: QH_JPG9, width: 30, height: 30, alt: '沉默'}, '8'],
                            [{src: QH_JPG10, width: 30, height: 30, alt: '晕'}, '9'],
                            [{src: QH_JPG11, width: 30, height: 30, alt: '伤心'}, '10'],
                            [{src: QH_JPGLOGO, width: 30, height: 30, alt: 'LOGO'}, '11']
                        ]
                    }
                ],
                tooltip: '默认图片显示',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 图片显示
    Blockly.Blocks.QH_display_samll_pic = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_pic,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [[(Blockly.Msg.QH_display_samll_pic0), '0'], [(Blockly.Msg.QH_display_samll_pic1), '1']]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pic_add'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pic_X'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pic_Y'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pic_W'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pic_H'
                    }
                ],
                tooltip: '图片显示',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 画点指令
    Blockly.Blocks.QH_display_samll_PS = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_PS,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_ps_X'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_ps_Y'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_ps_colou'
                    }
                ],
                tooltip: '画点指令',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 画线框指令
    Blockly.Blocks.QH_display_samll_PL = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_PL,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [[(Blockly.Msg.QH_display_samll_pl1), 'PL'], [(Blockly.Msg.QH_display_samll_pl2), 'BOX'], [(Blockly.Msg.QH_display_samll_pl3), 'BOXF']]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pl_X'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pl_Y'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pl_X2'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pl_Y2'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_pl_colou'
                    }
                ],
                tooltip: '画线框指令',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 画圆指令
    Blockly.Blocks.QH_display_samll_CIR = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_CIR,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [[(Blockly.Msg.QH_displayhollowround), 'CIR'], [(Blockly.Msg.QH_displaysolidround), 'CIRF']]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_cir_X'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_cir_Y'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_cir_R'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_cir_colou'
                    }
                ],
                tooltip: '画圆指令',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 显示文本
    Blockly.Blocks.QH_display_samll_DC = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_DC,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [['16', '16'], ['24', '24'], ['32', '32']]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_dc_colou'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_dc_X'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_dc_Y'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_dc_text'
                    }
                ],
                tooltip: '显示文本',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 显示中文
    Blockly.Blocks.QH_display_samll_CN = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_CN,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [['16', '16'], ['24', '24'], ['32', '32']]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_dc_colou'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_dc_X'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_dc_Y'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_dc_text'
                    }
                ],
                tooltip: '显示中文',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 显示带底色文本
    Blockly.Blocks.QH_display_samll_SBCDC = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_SBCDC,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [['16', '16'], ['24', '24'], ['32', '32']]
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_sbcdc_colou2'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_sbcdc_colou'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_sbcdc_X'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_sbcdc_Y'
                    },
                    {
                        type: 'input_value',
                        name: 'QDP_display_samll_sbcdc_text'
                    }
                ],
                tooltip: '显示带底色文本',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 自定义指令
    Blockly.Blocks.QH_display_samll_order = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_order,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'input_value',
                        name: 'text'
                    }
                ],
                tooltip: '自定义指令',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 波特率
    Blockly.Blocks.QH_display_samll_btl = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display_samll_btl,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SDISPLAY_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_SOFTWARESERIAL_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [['9600', '9600'], ['115200', '115200'], ['19200', '19200'], ['5600', '5600']]
                    }
                ],
                tooltip: '设置屏的通讯波特率，注：非P5时只能用9600（出厂值），每次更改后要关电重启，不建议更改！',
                colour: QH_SDISPLAY_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
