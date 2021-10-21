/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_COMMUNICATE_color1 = '#6c91ac';
    const QH_COMMUNICATE_color2 = '#27b6ac';
    const QH_COMMUNICATE_color3 = '#5b5b5b';

    const QH_REMOTE_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABgklEQVRIia3VzUpbQRjG8V9a6QcYN8Wuch1JwY17N0L1MuoVFNtaEwsigiAoCBZboe3GZZM7ELsp3XeZG7B20y7i4szB8xUz+XhhYOadOf9n5nnPmcN08Qg/8Bc3uMQGHk/JzUUPg0L7icasBBpYxDxW8CsjMtFJ5rBeyH1BHzt4ht9B5NW48IcBNsDbTP7CnT0drIb+5bjwc3mvU5GnWAq5Puqhfx0Lf4Az5WJmRZ7gGz7heZi7iYWfhge+oykpaAtdZbtICt/DVQz8JAOvFeZr94iQfCdDo4Zjd1Y0Q74jOXo7jFvKdo2MGg7lva6HuT/yBawX1i3HwA+Ui5meoB1EtsP4xbgn2A+LX0uKuRnGXdU1SK+KKPiusiULmVxX4nk97DyFv4uBf5C3ZDOA3ijblW1bMfBt1bYMRuSj4NkdVtkyLP8+Bg5r+O9+W4r5Tiy8SmSULXvjwoeJVNlyoPyqTixStOVoWngaL/FP3paPkotvZpEV+Sr52cw81vB5WvgtOOWjMK8TPs0AAAAASUVORK5CYII=';

    const QH_BLUETOOTH_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABk0lEQVRogdWYzUrEMBRGD76Nz+JqXIjCIKIIunIlI4Lo0jfRR5RhZupCisPtd9MUmqT3g26a0HtOyE9bKJfPgs+uko7gEh3BJTqCS3QEl7AC4SSUQCgJTyCMREoghMSYwOIlLOxG3Gsm8ZJR2IICPAJ70VZV4gY4ZBRWAgBrYCfaq0ici+JeYU8A4BLYij7FJVZO4Q/RNyUA8CX6bIHT2alNzoAfUdyOXkrgSbTvgKti1CY5Ep7ALf9r6Bh+XZzaZExCCVwz3IUOwH01apPUmrD3LhhuAAfgrjq1iSehFqiFf2jAK+NNp9T13IQ0kSkSm0aMo8mReG1Gl5mUxNvcxU7mfmD0hJ5CoRdx6G1UHWQ5B9siDjI18lv+pNS0WZRECh6GsOBLVH+ZG4MHLQBaourrdA48AvI4nkTxDxpvwVp4BKDNt+hT/JPSjr4Hj4BLPae/3udHHqYvnoIHX6ApfJ8VaXjQAlP+ajSPhVzEyE+JWqAhRr7P2KvEYke+T2h4CA4PweEhODwEh4fg8BAcHiodUr8eJ8EyuHJlBwAAAABJRU5ErkJggg==';

    const QH_SERIAL_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA4UlEQVRoge3YSw6CMBSF4T8O2JO4PkW3JXEnwjLUQSE2pkT7kJbmfElDGBR7MFfbCyJ/1wAXYASenmMAuukZ2Z3xD/A5Tquv2mHALGYfMLfl/c1kN7/VXPOj7HJ9cGoKUhoFKY2ClEZBSqMgpbGDjNO1DXjOYboWsWnsiN/GH1dftUODCTNv533GHROiiIOVbM0N6HMvYonPz++DjCdAqZlqpHbqbFojqLOZukaydTZ74BoyccGmO5u2pEGqPFh9o/+R2qlGXGJqJPY+qZgaib2vhmrERUESUGfTGupsivzoBSt9v5oFng/8AAAAAElFTkSuQmCC';
    QH_IR_PIN = [
        ['接口1', '2'],
        ['接口2', '4'],
        ['接口3', '7'],
        ['接口4', '8'],
        ['接口5', '12'],
        ['接口6', '13']
    ];
    // 红外
    Blockly.Blocks.hw_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.HW_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_REMOTE_ICO,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'cc-pin',
                        options: [
                            ['接口1', '2'],
                            ['接口2', '4'],
                            ['接口3', '7'],
                            ['接口4', '8'],
                            ['接口5', '12'],
                            ['接口6', '13']]
                    }
                ],
                colour: QH_COMMUNICATE_color1,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.hw_readHumidity = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.HW_READ_HUMIDITY,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_REMOTE_ICO,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'cc-key',
                        options: [
                            ['OK', '16754775'],
                            ['⬆', '16712445'],
                            ['⬇', '16750695'],
                            ['⬅', '16769055'],
                            ['➡', '16748655'],
                            ['0', '16738455'],
                            ['1', '16724175'],
                            ['2', '16718055'],
                            ['3', '16743045'],
                            ['4', '16716015'],
                            ['5', '16726215'],
                            ['6', '16734885'],
                            ['7', '16728765'],
                            ['8', '16730805'],
                            ['9', '16732845']
                        ]
                    }
                ],
                colour: QH_COMMUNICATE_color1,
                extensions: ['output_boolean']
            });
        }
    };
    // 红外遥控器接收
    Blockly.Blocks.QH_ir_re2 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_ir_re2,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_REMOTE_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: QH_IR_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [['电源Power', '1'], ['Menu', '2'], ['静音NOSound', '3'], ['Mode', '4'], ['+', '5'], ['返回Back', '6'], ['上一Prev', '7'], ['启/停Start/stop', '8'], ['下一Next', '9'], ['0', '10'], ['-', '11'], ['OK', '12'],
                            ['1', '13'], ['2', '14'], ['3', '15'], ['4', '16'], ['5', '17'], ['6', '18'], ['7', '19'], ['8', '20'], ['9', '21']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [[Blockly.Msg.QH_IrPress, '0'], [Blockly.Msg.QH_IrPressOn, '1']]
                    }
                ],
                tooltip: '对应摇控器的按键输入，注：红外遥控器的“发送” “接收”在一个程序内不能同时使用，只能二选一！',
                colour: QH_COMMUNICATE_color1,
                extensions: ['output_boolean']
            });
        }
    };
    // 红外遥控器接收
    Blockly.Blocks.QH_ir_send_nec = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_ir_send_nec,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_REMOTE_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [['RC5', 'RC5'], ['NEC', 'NEC'], ['Whynter', 'Whynter'], ['Sony', 'Sony'], ['RC6', 'RC6'], ['DISH', 'DISH'], ['SharpRaw', 'SharpRaw'], ['SAMSUNG', 'SAMSUNG']]
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    },
                    {
                        type: 'input_value',
                        name: 'bits'
                    }
                ],
                tooltip: '发送指定类型的红外数据，注：红外遥控器的“发送” “接收”在一个程序内不能同时使用，只能二选一！',
                colour: QH_COMMUNICATE_color1,
                extensions: ['shape_statement']
            });
        }
    };
    // 红外发射数组
    Blockly.Blocks.QH_ir_send_raw = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_ir_send_raw,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_REMOTE_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [['#1', '1'], ['#2', '2'], ['#3', '3'], ['#4', '4'], ['#5', '5'], ['#6', '6'], ['#7', '7'], ['#8', '8'], ['#9', '9'], ['#10', '10'], ['#11', '11'], ['#12', '12'], ['#13', '13'], ['#14', '14'], ['#15', '15'], ['#16', '16']]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    },
                    {
                        type: 'input_value',
                        name: 'length'
                    },
                    {
                        type: 'input_value',
                        name: 'freq'
                    }
                ],
                tooltip: '将读取到的红外数组放入这里发送，注意数组长度要对应长度，不同数组时要改变编号！',
                colour: QH_COMMUNICATE_color1,
                extensions: ['shape_statement']
            });
        }
    };
    // 蓝牙接收数据
    Blockly.Blocks.QH_BT_START = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_BT_START,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLUETOOTH_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [

                ],
                tooltip: 'P5接口 上传程序时不要插模块 蓝牙APP上的滑动变量对应值,在“蓝牙变量”和“蓝牙按键”前使用',
                colour: QH_COMMUNICATE_color2,
                extensions: ['shape_statement']
            });
        }
    };
    // 蓝牙按键
    Blockly.Blocks.QH_BT_button = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_BT_button,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLUETOOTH_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'TEXT',
                        text: 'U'
                    }
                ],
                tooltip: 'P5接口 上传程序时不要插模块 接收到蓝牙模块在对应APP输入的按键设定字符值（APP发送格式为“,发送的字符.”）,\n在“启用蓝牙接收”后有效',
                colour: QH_COMMUNICATE_color2,
                extensions: ['output_boolean']
            });
        }
    };
    // 蓝牙变量
    Blockly.Blocks.QH_BT_variable = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_BT_variable,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLUETOOTH_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5']]
                    }
                ],
                tooltip: 'P5接口 上传程序时不要插模块 蓝牙APP上的滑动变量对应值,在“启用蓝牙接收”后有效',
                colour: QH_COMMUNICATE_color2,
                extensions: ['output_number']
            });
        }
    };
    // 蓝牙发送变量
    Blockly.Blocks.QH_BT_print = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_BT_print,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BLUETOOTH_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'N1'
                    },
                    {
                        type: 'input_value',
                        name: 'N2'
                    },
                    {
                        type: 'input_value',
                        name: 'N3'
                    },
                    {
                        type: 'input_value',
                        name: 'N4'
                    },
                    {
                        type: 'input_value',
                        name: 'N5'
                    }
                ],
                tooltip: 'P5接口 上传程序时不要插模块 蓝牙APP V1~V5 显示变量对应值,可以为传感器值或字符串，注：重复发送要加延时间隔约30毫秒！',
                colour: QH_COMMUNICATE_color2,
                extensions: ['shape_statement']
            });
        }
    };
    // 定义串口
    Blockly.Blocks.QH_serial_change = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_serial_change,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SERIAL_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: [['接口1', '1'], ['接口2', '2'], ['接口3', '3'], ['接口4', '4'],['接口5','5'],['接口6','6']]
                    }
                ],
                tooltip: '当多串口使用时，控制器只能同时让一个串口工作，通过此块来转换软串口，在转换软串口设备前要用此块\n' +
                    '只有一个串口设备时或不需要转换当前工作串口时不需要加此块',
                colour: QH_COMMUNICATE_color3,
                extensions: ['shape_statement']
            });
        }
    };
    // 串口收到的数据等于
    Blockly.Blocks.QH_serial_jieshouzhi = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_serial_jieshouzhi,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SERIAL_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin1',
                        options: [['接口1', '1'], ['接口2', '2'], ['接口3', '3'], ['接口4', '4'],['接口5','5'],['接口6','6']]
                    },
                    {
                        type: 'input_value',
                        name: 'text'
                    }
                ],
                tooltip: '此为串口运行,直接将读到的值和设定值对比,相同时为真,可用于蓝牙等模块的通讯回读',
                colour: QH_COMMUNICATE_color1,
                extensions: ['output_boolean']
            });
        }
    };
    // 串口发送
    Blockly.Blocks.QH_serial_fasong = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_serial_fasong,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SERIAL_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin1',
                        options: [['接口1', '1'], ['接口2', '2'], ['接口3', '3'], ['接口4', '4'],['接口5','5'],['接口6','6']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'OutputModel',
                        options: [[Blockly.Msg.QH_SERIAL_WRITE, 'write'], [Blockly.Msg.QH_SERIAL_PRINT, 'print'], [Blockly.Msg.QH_SERIAL_PRINTLN, 'println']]
                    },
                    {
                        type: 'input_value',
                        name: 'text'
                    }
                ],
                tooltip: '指定串口发送数值，如多串口设备运行，运行前要加“软串口定义到”块指令进行切换串口',
                colour: QH_COMMUNICATE_color1,
                extensions: ['shape_statement']
            });
        }
    };
    // 串口接收
    Blockly.Blocks.QH_serial_jieshou = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_serial_jieshou,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SERIAL_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin1',
                        options: [['接口1', '1'], ['接口2', '2'], ['接口3', '3'], ['接口4', '4'],['接口5','5'],['接口6','6']]
                    }
                ],
                tooltip: '当串口有数据读时读取的值',
                colour: QH_COMMUNICATE_color1,
                extensions: ['output_number']
            });
        }
    };
    // 串口有数据可读
    Blockly.Blocks.QH_serial_suju = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_serial_suju,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SERIAL_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin1',
                        options: [['接口1', '1'], ['接口2', '2'], ['接口3', '3'], ['接口4', '4'],['接口5','5'],['接口6','6']]
                    }
                ],
                tooltip: '如果多串口设备使用先要“软串口定义到”，这个要配合后面“串口接收”一起使用，这个意思是当串口有可读数值时',
                colour: QH_COMMUNICATE_color1,
                extensions: ['output_boolean']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
