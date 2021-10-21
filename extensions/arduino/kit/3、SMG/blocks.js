/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_SMG_COLOR = '#ae8f00';


    const QH_SMG_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAQAAAAWR4QsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflAhsDFQfcEm6BAAADLUlEQVRYw+3ZT2icRRjH8c+72bXSxhJbxN3UbqGiFMSrnnpQFBE8KNSbStUqmFabxmpEK3gu/sMqovVP8aAn20QPFUR6EmMvgqWU0l5EoygpJpukCY3JeNjJZtNk2fzZ9xUkzxyWmfed+X2fZ+ad531noeBRA6aEDMuUHzyiAAW9RjMVny0VvQqJx7ynXTBoRHbWoVNiTFdiwJ2Cjx02LMlIPujQ6wmJAaYEv7olQ++rdqvfBFM5eVQyDX/VKkaRz8VqVsFfYLmGV/Ie96bb0gbIN2i/Ro9XrZf3XF3blawiUHDQa9ZjsHbf0/o9mEYMguCsG+d5f8iEYNoRG0Gb/cYE37uuZbpF5wRhIUDBKyYFM47YEL3vNi4I3tKWNkDBIZOCae9oj953GxMEn9jUwsg3ALjPeJTfEOUPRO8/cn0L5RsC7PSnK96uyfdEoKMtlm8I0GanB2ryB6P3H7Rw8TUBmLM2z7ssmPZhy71fAkDei1H+3RS8bwpQ8EJNvj0V+SYAdxiOG1Fa8jWAxXPBZZesc9TLxlIDiLY4wFkP2ey08bTlGwEEP6cvXbXc6odYA1gDWANYA/hfAAT//FcA1VzQYVdmH+fTfnJxrpoIYCb+pm2JxI92GVR0yo65bJjlWijXv+RVAf7WbyIzgFMu1FeD4IJihhGo2hYXBSHnd9zknswB7rYFg4k39OAP35hcwTCJMz6re3PcbrcblrCgr3W/Il6n7LtVnfZNO1A38PvL6vutMtzsmCEzyxSeu3/Ik7U95PCSew85Zvvs4dQ6O9y+jC+gIPGwu2r1im6fgs3utWkJUzDqjHOrOfLZ7S9BcNJJQXDJnuxO2hJ7VARBv6KifkEwUjcRKct3GREEfTpBZ0QY9kz6CImnovd9SrXWUkSopD0Rib0170vzrnTqixPRlR5Czr74z8KJq+SrUTgRo7A3HYSkJn+8QeaYRRhtFUJOyTZlZWVbdTeRn4+w39bYc5vSypJ9zrPO+6VWJgXBl03yZslxQTBR1/O8fSuJyEanF2ygny9ymHW1FX2xoN9APPJdliVeil7P7t5fxee+mXX6el5mmdTbOAL/AgRpI1hYsOBEAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA3LTE5VDAzOjM5OjIwKzAwOjAwhmcOXAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMS0wOFQyMDoyMzoyMCswMDowMBGue7YAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANjMzyPq/zAAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA3MzTErRAFAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1NDY5NzkwMDA0P7o0AAAAEnRFWHRUaHVtYjo6U2l6ZQAxMTc3OUK4GW78AAAAWnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vZGF0YS93d3dyb290L3d3dy5lYXN5aWNvbi5uZXQvY2RuLWltZy5lYXN5aWNvbi5jbi9maWxlcy8xMTkvMTE5MTAzOC5wbmcuZKKRAAAAAElFTkSuQmCC';

    const QH_LED_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABbklEQVRoge2XsUoDQRRFT2zND4hBQQIp1VJB/YRoqR8i+SaLZPEPoq2NYDqxEgxYpgguSCwyEX1OsjObcZ/Bd2CK2eXeeXf37e5sjbTsAW3gBNgAGu74M/AC9IEMuE+87tKcAgNgEjgGTqPOFnBLeOFy3DgPFQ6YtkXZ4mfjlWnLVcohMPYUkwNXwDnQAtbdaAEX7lzu0Y2dZyVsA0NPEV2gGaBvAj2PfkhF7SR7/h24LOHTcdqvXv1ENc7ljJ9XrkzxMzoev/aSNS5Eviq7CTwz4fmQwNPLvlgoJ6zni9gB3oT3bqh4LWIheWsz4DFCP48n4FocC/7IxQQ4EvNehLaITMyPQ4UxARpifhehLUJ6bSb0/mTE9z6tJ/SuC+9RqLAWschkCe2v+ce00J/EAmhjAbRZ9KTLt4I23lpX/g5YAG0sgDYWwPjvpNjTx+7jk/5XrPwzYAG0sQDaWABtLIA2FkAbC6CNBdDGAmjzAT0xh7HjepRgAAAAAElFTkSuQmCC';

    const QH_RGB_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABeUlEQVRIidXUMUhVcRTH8U8PTBdxEDFoUbekhoSnFEQYKDQEwbMxkAiaotoanZzErSGCiIacxC3ESXAIbHDp5aQEhbjoomAqaMM9Dy7Xe/WWObwf/Plzz/93/t/D+V8Oza5LBfE21DCCm7iCDlSwi5/4hs+Yxe+/gY5iA8cl16/IKaXb2I/EZbzCELrQihZ0YhAvUA/vfvjO1EIkvFXcvrQqeBc582UAu2HuLmMuo0rm+yD244sCLMf+KMfbeNQ13I3Yfckjb+FJxreJp9lLHsbhBtpzAFVMYjFi3zGOYaymfPfwOoo5oaUwTeYAHuMT5iJ2iOvoRV/KN4OvmM4DVHGEPfRkAOtxdi0FuJEqquGbwAd8yQPAx1QlacAtSc8b/a7jGQYygAd4KXmbXF2V/LJH6E8lVqO6lYiN4Ad28D5i27HW8LwIAG/i0qnTTOfRnQCsnGX8V7VKelg05LZw+byQsVMAtTIXlBloRWOjTO6JUfHf1fyA5tcfDIFywhVTZQcAAAAASUVORK5CYII=';


    // 三引脚
    QH_THREE_PIN = [
        ['接口1', '2, 3, 2'],
        ['接口2', '2, 5, 4'],
        ['接口3', '2, 6, 7'],
        ['接口4', '2, 9, 8'],
        ['接口5', '2, 10, 12'],
        ['接口6', '2, 11, 13']
    ];
    // 模拟输出引脚
    QH_OUTPUT_BOTH_PIN = [
        ['接口1', 'A3'],
        ['接口2', 'A4'],
        ['接口3', 'A5'],
        ['接口4', 'A0'],
        ['接口5', 'A1'],
        ['接口6', 'A2']
    ];

    // 初始化
    // Blockly.Blocks.CC_display_init = {
    //     init: function () {
    //         this.jsonInit({
    //             message0: '%1',
    //             message1: Blockly.Msg.CC_display_init,
    //             args0: [
    //                 {
    //                     type: 'field_image',
    //                     src: QH_OLED_ICO,
    //                     width: 30,
    //                     height: 30
    //                 }
    //             ],
    //             colour: QH_SMG_COLOR,
    //             extensions: ['shape_statement']
    //         });
    //     }
    // };
    // // 开和关
    // Blockly.Blocks.CC_displayonoroff = {
    //     init: function () {
    //         this.jsonInit({
    //             message0: '%1',
    //             message1: Blockly.Msg.CC_displayonoroff,
    //             args0: [
    //                 {
    //                     type: 'field_image',
    //                     src: QH_OLED_ICO,
    //                     width: 30,
    //                     height: 30
    //                 }
    //             ],
    //             args1: [
    //                 {
    //                     type: 'field_dropdown',
    //                     name: 'trun',
    //                     options: [
    //                         ['开', 'displayOn()'],
    //                         ['关', 'displayOff()'],
    //                         ['清除', 'clear()']
    //                     ]
    //                 }
    //             ],
    //             tooltip: '',
    //             colour: QH_SMG_COLOR,
    //             extensions: ['shape_statement']
    //         });
    //     }
    // };

    // LED灯
    Blockly.Blocks.QH_ledlight = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_ledlight,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LED_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: QH_OUTPUT_BOTH_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: [
                            [Blockly.Msg.QH_LEFT, '0'],
                            [Blockly.Msg.QH_RIGHT, '1']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'STATE'
                    }
                ],
                tooltip: '开启LED灯',
                colour: QH_SMG_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 读取LED灯状态
    Blockly.Blocks.QH_read_ledlight = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_read_ledlight,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LED_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: QH_OUTPUT_BOTH_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: [
                            [Blockly.Msg.QH_LEFT, '0'],
                            [Blockly.Msg.QH_RIGHT, '1']
                        ]
                    }
                ],
                tooltip: '读取LED灯状态',
                colour: QH_SMG_COLOR,
                extensions: ['output_boolean']
            });
        }
    };
    // LED灯亮度
    Blockly.Blocks.QH_ledlight_PWM = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_ledlight_PWM,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_LED_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: QH_OUTPUT_BOTH_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: [
                            [Blockly.Msg.QH_LEFT, '0'],
                            [Blockly.Msg.QH_RIGHT, '1']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'ledn'
                    }
                ],
                tooltip: 'LED灯亮度调节',
                colour: QH_SMG_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // rgb全彩灯
    Blockly.Blocks.CC_rgb_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.CC_rgb_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_RGB_ICO,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'cc-rgb',
                        options: [
                            ['接口1', 'A3,2,3'],
                            ['接口2', 'A4,4,5'],
                            ['接口3', 'A5,7,6'],
                            ['接口4', 'A0,8,9'],
                            ['接口5', 'A1,12,10'],
                            ['接口6', 'A2,13,11']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Green',
                        options: [
                            ['开', '0'],
                            ['关', '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Red',
                        options: [
                            ['开', '0'],
                            ['关', '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Blue',
                        options: [
                            ['开', '0'],
                            ['关', '1']
                        ]
                    }
                ],
                colour: QH_SMG_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 数码管显示
    Blockly.Blocks.QH_display = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_display,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_SMG_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pinn',
                        options: QH_THREE_PIN
                    },
                    {
                        type: 'input_value',
                        name: 'num'
                    }
                ],
                tooltip: '',
                colour: QH_SMG_COLOR,
                extensions: ['shape_statement']
            });
        }
    };
    // 小数点
    // Blockly.Blocks.QH_displayoff = {
    //     init: function () {
    //         this.jsonInit({
    //             message0: '%1',
    //             message1: Blockly.Msg.QH_displayoff,
    //             args0: [
    //                 {
    //                     type: 'field_image',
    //                     src: QH_OLED_ICO,
    //                     width: 30,
    //                     height: 30
    //                 }
    //             ],
    //             args1: [
    //                 {
    //                     type: 'field_dropdown',
    //                     name: 'pinn',
    //                     options: QH_OUTPUT_BOTH_PIN
    //                 },
    //                 {
    //                     type: 'field_dropdown',
    //                     name: 'num',
    //                     options: [
    //                         ['亮', 'true'],
    //                         ['暗', 'false']
    //                     ]
    //                 }
    //             ],
    //             tooltip: '',
    //             colour: QH_SMG_COLOR,
    //             extensions: ['shape_statement']
    //         });
    //     }
    // };
    return Blockly;
}

exports = addBlocks;
