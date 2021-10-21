/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Actuator_color = '#AE8F00';



    const QH_ROBOT_PWMPCB = [['B0', '0'], ['B1', '1'], ['B2', '2'], ['B3', '3'], ['B4', '4'], ['B5', '5'], ['B6', '6'], ['B7', '7'], ['B8', '8'], ['B9', '9'], ['B10', 'A'], ['B11', 'B'], ['B12', 'C'], ['B13', 'D'], ['B14', 'E'], ['B15', 'F']];


    const QH_RELAY_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADDElEQVRoge3ZT4iVVRjH8c/4p/BPOIvAUcxsFhNWzmwkSxBNWuRGdFMNUsuICFyoi9pkBW5qK4KBQoHoIoJx0SIhrBCjTRYRRn+08jYS4iiSiiPT4jyX+96Xd2buZe473pH3C4dzfs977jnP77533jnnvFRUVExFT6a9ABuw8h7l0i41nMXdbPABfIWJOVZOYyHpLsB2bMIBfDmj72n22Iq3pNw/rRtZFfVHuIABPDT7uTXxL/6M9losjvYt/IRfJSOP0LgjWdbju3JzbIm7eFjK54vcte34MRsoMnIOL2NZGdm1QQ1j+Aa7sDTi/+EUlmc7Fxm5gxMlJtgut3Bsuk7zZiGRWaEy0m1URrqNyki3URnpNioj3UZlpNu4r40M4hIeC71V2qn1hn4J58VeGW9KhwB13sdIRh+OUmcE72X02RhDjHkeL4bujbmfC90fuQ22YqRfOkl5NPSAtJ3sC702YktCP4mhzOefwrqMXjeNHooxxJgDeCJ0X8z9eOjVkVt/PumijdUoxnE5dA23cSWjx3Az9D9RZPTynJbT+f51fTPGroW+EnPX9eXIbbQgb7BbOl5ZE3pR7vpUuien5+HBjF6o8TMU17K/hEWaz9danXtN5Lybxh25EPUe6XxrLrA56j+ywfk46d4fuLVbRiL3plvaI/2RrShwvw8bsROv4pVo38j0GcKHeAdnir7CDBvxLvZKpzZ1luIzfIKPo30GHxSMUcPPYahljuJqtPfHh3tzfbZEfEcL4+2Ivlty8d6I7w99Neaelvv6H+KcpDLSBkMKlhSdpkwjPTiO76Un0zHNT8mOUqaRZ6UF5pEow3imrMmK1lqdor5MGS2IdZwyjXwtLXfeDn06YqVQppFxPI8XQn8u9+Kyk5RphPSu5WTJc6B1I5ekN1ivYRuu4Xquz99RD2tegxUxHPVfufj1KNuktdSygj4zYgV+l9ZB43h9kn6HtL5yPTjJGG/EHBP4TWNnOiXtPNcX42lclNsD5BiUtquTjT2BX/DDFGP0S9vabzV2ohUVFTPgfz+w8Bj5R7LWAAAAAElFTkSuQmCC';


    const QH_BUZZER_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFCElEQVR4nO2bTWwVVRSAv1LoK1CKgv+0UQvB1ERM0A1oZWMMAUOIUSJiVJSwlaKJbpCiMdFEgyujxoXa+BN/KBJNXLgAMXGjskGICdEqVaLWmFIEq5bn4pxxLpNz7/u77z0o8yWTdzPnzLlnzty595w7LeTk5OTk5Jy3tBjneoAbGu1Ig/gK+C6kcCEwDhSn6DEOXODe8LRMAC4DOkIROsfpAC53T0wPKL8AfFxXdxrHamCLJQgF4DDwaV3caTw9PkH2FTjvyAPQbAeaTR6AiLZuBu6KaM+iRfu4KZbBWAHYAOwF3kWWnHqxWvvYB9wTw2CMANwBvA60AhPAcASbPoa1j1bgDWBtrQZrDcASdaQV+BtYB3xTq1MBDiI3/Zf2OQhcV4vBWgLQDrwDzEby7PuBPbU4UyafAA9pnx3qQ6FaY7UEYDvQq+3n1ZFG8RawU9vXAttiGe4lrZw2B/S6kWFYRIa87wk8CnxEIBUN0KPXPuKRtyPpehE4BXQFbG0mva/egF7ZAXjJ0bvVo9Pv6GwPdephwLneLGSAlY7OiwFbUQPQCZxQnX0enbXAadUZpfoRMKo2JoE1Hr39pLV+p0cnagBcY1biMxv4UeV/AstCHZZgmdooAj8Aswydux1/NpXhc80B+FDlfwBthvxJx8bDoc6A+XqE2OLYGzDkBWBM5UMeG9ECMB04rvL3DXkrcIx0crT2G2Yic8KI09dR4AlkYssyAzikej9hr1y7VD6mPmTxBqDSZXAhMEfb+w15H7KtBvAK8G9GXkDW8QFggXO+C9ihsuyo+kdtAVyB1BxZEl86qXC+qTQAbvQOGfLb9Nc3Qh4DbtH2EeBZPY7ouRWqk8W1tcqQu74Eh3iWSgNwidM+asi79XcUGa5ZktdqGFgKPK7HUtIawnr1RoDftW3doOvLpYbcS6UBcJeZ44Y8GdY/G7KLHfnbyLKVMK7nQF6Hi4zrR/TXko057bmG3EvsDRFrEjurqTQA7lO3ko5kmC4wZL+RvhbrSSdTtJ3U9yPIK5QlSXUtmfvUxwy5l0oD8KvT7jbkyWQ0HzsIL+vvVcDXwDN6HACuzOi4dJPmC9bk6/ryiyEvm1J5wGJHbuXnKwgnQW3IzpHv09Ve7OTKrSv6DPlWR77IkNclEfrAkE9DJsAi8qRmGDrtSNKTpMtFbW/DnwglVZ8vERqiykQoSzmp8G7CqfAOx0Z/qDNgnh4h3KdrVZVuKrzLYyNqADY5OusM+SzOLIaWhzoswXLgpNoapnQx9KDHTt3K4c88OmuQEraIrAzWe1mKRXptUg7f7tH7nLQcnuPRiVYLgMwBg9ruI01/XfaQ7uTMAzZW0c9G0tdjK7I7lGUV6TeCQc5Mrqqiki2xU6STnS8B6kccX1yFL9fotb55ZCbwrfpwEnvZTYi+JQbwtKP7XAnderDT6f+pErp1CUABqfmLyPbX+pIux+NeUj8PUnpbPOockDAB3InMCS3Aa/j37WKyEnhV2yeQVWCiWmO1FkOHgQeQWboN+W63pEabIa5H8pACstmyARkBVROjGhxCvgpNIo5Vs+SVy0LtYxK4jwhfokJ/I1QJbyJ/f9eFPKF6sRtJvkaAL2IYjBUAiORQCU4D78U0mP+FSLMdaDZ5AJrtQLMJTYK9+L/8nmuU/a3ATYWn6hFMhY8h6eVUZRy5x/+x/mHiauDGhrjTeL4Evm+2Ezk5OTk5OWcJ/wEYbdHwqmB7rQAAAABJRU5ErkJggg==';

    const QH_MOTOR_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAFFUlEQVR4nO2cT2wUVRzHP9S2SoSlSgG9glEQNZTaxChYmxATwRMxGi8aCYkHEqOGmODZYOK/A5EEvagRMUY9mVQv4EUJCChZKEhQPJFAIpa6UpqW3Xr4/Z6z1rr7m3lv2tnyPsnLbHe+773f7zdv3vzezGwhEolEIpE5xADwEVAGLmspA+8DvbNoV+HpAD4BJpuUvaqNTOENJEAVYCfQAyzS0qPfVVTz+izZWGguIsFZ10CzXjUXZ8QiA22zbUAdS3U7r4HG7VvaQHPd4ua4CnKK9gJdWnr1u0qdrhA0OtozTdqgFML2Ip3Cjj7gPSR1GdFS1u/6ZtGuwmM9NQt1ChdxBLYUMYCexAB6kjWAS4C3gXPABM2XX5aSlhB9TqgPb6lPM8JtwG+BHMgSyLz6Pae+5c5u7fAE0I99Yd8F7OLfI/Y0cvQ3kT6AG4E3tY36EbVL+7LQoT6c1PrvGut5cVY7W5uizmaSte448CH/zel80pg+bXOcZK28OYV9a7Xe2RR1MtEF1IBRoN1Y52Wgihg4CCz/H12IPHA58LXur2rfFtoRn2rYR28mBhDjDhn1T2N3JmQiXX/QnjK0CeLTJOJjbmzXTnYbtLcDf6l+q0EfeiXyPMnNiWUGvZvbtxu0mdmnnWwxaHeq9gtj23ks5b5U7WsG7RbV7jO2nYkz2skag/a4ah80tu1G64oGmhUko8rCOtX/ZNCuUe0ZY9upKSHzylVsqYsLyAJj+250XwB2APdpnyX9vEP3TSLPTiwsxB7wDsS3qvYZnH415rBR/4fq7zDqFwH7aZ7w7lethTu1zu9G/WHV9xv1qZZy7pHij0b9D7rdZNSPABuAR5Enb6eQkVPRzx/rvg2qteD6PmLUO99yeXzqHjlarqgAT6r+ErPzDGMZyVnwhLHOVtXvzcOgn7XxHqO+DfhW65SZwcU6csBOaN8HsN/+7yFZYgZlITK5jgGdKep1k1yNfyHF3OLBAPCr9nkcWJyibifiYxXxORgPq0HWuaSebpLJuQZ8AKwKZ9o/rNK2aySrpTTBcxzR+uvDmQYvaaN7MtZvB15Fjq4L5CDwDH6n9hJtY5AkcGNIymNdq09lj7bzokVs7cTdebFegadyDVmZfIasU58FHtNSA44iye4QcsW9BPwJDGv9W5DcbDFwN7Aama/uJ8kkriAvJb2DnMJZyeVKfAo5KqEavRXYBnyDJK9Zb4JeRe6+bNM2Q9CrbQ9ZxJar0wIk77qGTKzjmU2bnpuBB5BRtRpYiSTKJZJbS5eRETmCZANDWg4hIy8knUjueYPa4d2+e6HnqG9DLcQxxOeHmgktKxF32h7zsajFcL42nbJiAKcnaADv0W3WK3Ar4gJ4b4jGhpH5IGhmXnBKiM/DzYQWXMrwAjA/RIMFZz7ia5o73w2pz7uuAF/V7ft8Dv49NddsSJr7gWUkbxyr++6mOfj3BOJrMIIN5RYj+AiMTEMMoCcxgJ7EAHoSA+hJDKAnMYCexAB6EgPoSQygJzGAnsQAehID6EkMoCcxgJ7EAHoSA+iJJYCjuu3O05CC4XwdbajCFsCTut2Y2ZzW4xHdBnlT1b03PIz8GMXyq59WpQQ8DpwnxTuCzWgDPiX7K2itWg4Q8H90zQOeAw6S/IBmLpYx5OX0V4Abg0QuI0V7FJqbPXmlMVXdFuFVEGdDtaGqYLjf3hapHMzV48CsBL4n3H/08CkTwHfAXbl6HIlEIpFIJBK5rvgbbb+NpWUynM4AAAAASUVORK5CYII=';

    //  偶数引脚
    QH_C02_PIN = [
        ['接口1', '2'],
        ['接口2', '4'],
        ['接口3', '7'],
        ['接口4', '8'],
        ['接口5', '12'],
        ['接口6', '13']
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
    // 奇数引脚
    QH_C01_PIN = [
        ['接口1', '3'],
        ['接口2', '5'],
        ['接口3', '6'],
        ['接口4', '9'],
        ['接口5', '10'],
        ['接口6', '11']
    ];
    //双引脚
    CC_TWO_PIN = [
        ['接口1', '2,3'],
        ['接口2', '4,5'],
        ['接口3', '7,6'],
        ['接口4', '8,9'],
        ['接口5', '12,10'],
        ['接口6', '13,11']
    ];

    // high low
    Blockly.Blocks.QH_inout_highlow = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BOOL',
                        options: [
                            ['HIGH', 'HIGH'],
                            ['LOW', 'LOW']
                        ]
                    }
                ],
                tooltip: '状态选单 高/低',
                colour: QH_Actuator_color,
                extensions: ['output_boolean']
            });
        }
    };

    // 继电器
    Blockly.Blocks.QH_relay = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_relay,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_RELAY_ICO,
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
                tooltip: '继电器输出',
                colour: QH_Actuator_color,
                extensions: ['shape_statement']
            });
        }
    };
    // 读取继电器状态
    Blockly.Blocks.QH_read_relay = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_read_relay,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_RELAY_ICO,
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
                tooltip: '读取继电器状态',
                colour: QH_Actuator_color,
                extensions: ['output_boolean']
            });
        }
    };


    // 蜂鸣器音乐
    // Blockly.Blocks.QH_buzzer_music = {
    //     init: function () {
    //         this.jsonInit({
    //             message0: '%1',
    //             message1: Blockly.Msg.QH_buzzer_music,
    //             args0: [
    //                 {
    //                     type: 'field_image',
    //                     src: QH_BUZZER_ICO,
    //                     width: 30,
    //                     height: 30
    //                 }
    //             ],
    //             args1: [
    //                 {
    //                     type: 'field_dropdown',
    //                     name: 'PIN',
    //                     options: QH_C01_PIN
    //                 },
    //                 {
    //                     type: 'field_dropdown',
    //                     name: 'PIN2',
    //                     options: QH_TONE_TONE_MUSIC
    //                 }
    //             ],
    //             tooltip: '对应播放系统内音乐，直到自动播完',
    //             colour: QH_Actuator_color,
    //             extensions: ['shape_statement']
    //         });
    //     }
    // };
    // 直流电机
    Blockly.Blocks.CC_motor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.CC_motor,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MOTOR_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: CC_TWO_PIN
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                tooltip: '5~8V直流电机在M1-M2口上的控制，旋转速度通过0~255来控制，\n负数为反转，0为停止，工作时间通过延时指令来控制\n当电机受外部机构卡死时，会内部保护停机，这时重启电源即可\n 一定要开启电源开关，不然电机不转.',
                colour: QH_Actuator_color,
                extensions: ['shape_statement']
            });
        }
    };

    // 舵机360
//    Blockly.Blocks.QH_servomotor360 = {
//        init: function () {
//            this.jsonInit({
//                message0: '%1',
//                message1: Blockly.Msg.QH_servomotor360,
//                args0: [
//                    {
//                        type: 'field_image',
//                        src: QH_MOTOR_ICO,
//                        width: 30,
//                        height: 30
//                    }
//                ],
//                args1: [
//                    {
//                        type: 'field_dropdown',
//                        name: 'PIN',
//                        options: QH_OUTPUT_RIGHT_PIN
//                    },
//                    {
//                        type: 'field_dropdown',
//                        name: 'DIR',
//                        options: [[Blockly.Msg.QH_CW, '1'], [Blockly.Msg.QH_CCW, '0']]
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'speed'
//                    }
//                ],
//                tooltip: '舵机,注意选择对应的舵机类型0~360度,不建议长时间运行！\n',
//                colour: QH_Actuator_color,
//                extensions: ['shape_statement']
//            });
//        }
//    };
//    // 舵机180
//    Blockly.Blocks.QH_servomotor180 = {
//        init: function () {
//            this.jsonInit({
//                message0: '%1',
//                message1: Blockly.Msg.QH_servomotor180,
//                args0: [
//                    {
//                        type: 'field_image',
//                        src: QH_MOTOR_ICO,
//                        width: 30,
//                        height: 30
//                    }
//                ],
//                args1: [
//                    {
//                        type: 'field_dropdown',
//                        name: 'pin',
//                        options: QH_OUTPUT_RIGHT_PIN
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'speed'
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'num1'
//                    },
//                    {
//                        type: 'field_dropdown',
//                        name: 'wait',
//                        options: [[(Blockly.Msg.QH_Donotinterrupt), '1'], [(Blockly.Msg.QH_Interruptible), '0']]
//                    }
//                ],
//                tooltip: '舵机,注意选择对应的舵机类型0~180度,不建议长时间运行！\n',
//                colour: QH_Actuator_color,
//                extensions: ['shape_statement']
//            });
//        }
//    };
//    // 舵机180
//    Blockly.Blocks.QH_servomotorread = {
//        init: function () {
//            this.jsonInit({
//                message0: '%1',
//                message1: Blockly.Msg.QH_servomotorread,
//                args0: [
//                    {
//                        type: 'field_image',
//                        src: QH_MOTOR_ICO,
//                        width: 30,
//                        height: 30
//                    }
//                ],
//                args1: [
//                    {
//                        type: 'field_dropdown',
//                        name: 'pin',
//                        options: QH_OUTPUT_RIGHT_PIN
//                    }
//                ],
//                tooltip: '舵机,注意选择对应的舵机类型0~180度,不建议长时间运行！\n',
//                colour: QH_Actuator_color,
//                extensions: ['output_number']
//            });
//        }
//    };
//    // 舵机板设置参数180
//    Blockly.Blocks.QH_servomotorPWM_set180 = {
//        init: function () {
//            this.jsonInit({
//                message0: '%1',
//                message1: Blockly.Msg.QH_servomotorPWM_set180,
//                args0: [
//                    {
//                        type: 'field_image',
//                        src: QH_MOTOR_ICO,
//                        width: 30,
//                        height: 30
//                    }
//                ],
//                args1: [
//                    {
//                        type: 'field_dropdown',
//                        name: 'pin',
//                        options: QH_ROBOT_PWMPCB
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'param1'
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'param2'
//                    }
//                ],
//                tooltip: '舵机板类型0~180度舵机参数初始块，默认值为180度用，用户可以进行微调\n',
//                colour: QH_Actuator_color,
//                extensions: ['shape_statement']
//            });
//        }
//    };
//    // 舵机板180设置角度
//    Blockly.Blocks.QH_servomotorPWM = {
//        init: function () {
//            this.jsonInit({
//                message0: '%1',
//                message1: Blockly.Msg.QH_servomotorPWM,
//                args0: [
//                    {
//                        type: 'field_image',
//                        src: QH_MOTOR_ICO,
//                        width: 30,
//                        height: 30
//                    }
//                ],
//                args1: [
//                    {
//                        type: 'field_dropdown',
//                        name: 'pin',
//                        options: QH_ROBOT_PWMPCB
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'num1'
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'num2'
//                    }
//                ],
//                tooltip: '舵机板I2C接口地址,一个板可以接16个舵机,编号0~15,可以并联16个板,外接电源5~6V,当角度设置为负的时候为停止.注意选择对应的舵机类型0~180度,使用前要放一个180参数设置块初始化\n',
//                colour: QH_Actuator_color,
//                extensions: ['shape_statement']
//            });
//        }
//    };
//    // 舵机板设置参数360
//    Blockly.Blocks.QH_servomotorPWM_set360 = {
//        init: function () {
//            this.jsonInit({
//                message0: '%1',
//                message1: Blockly.Msg.QH_servomotorPWM_set360,
//                args0: [
//                    {
//                        type: 'field_image',
//                        src: QH_MOTOR_ICO,
//                        width: 30,
//                        height: 30
//                    }
//                ],
//                args1: [
//                    {
//                        type: 'field_dropdown',
//                        name: 'pin',
//                        options: QH_ROBOT_PWMPCB
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'S_param'
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'CW_L_param'
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'CW_H_param'
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'CCW_L_param'
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'CCW_H_param'
//                    }
//                ],
//                tooltip: '舵机板类型0~36度舵机参数初始块，默认值为360度用，用户可以进行微调\n',
//                colour: QH_Actuator_color,
//                extensions: ['shape_statement']
//            });
//        }
//    };
//    // 舵机板360度
//    Blockly.Blocks.QH_servomotorPWM360 = {
//        init: function () {
//            this.jsonInit({
//                message0: '%1',
//                message1: Blockly.Msg.QH_servomotorPWM360,
//                args0: [
//                    {
//                        type: 'field_image',
//                        src: QH_MOTOR_ICO,
//                        width: 30,
//                        height: 30
//                    }
//                ],
//                args1: [
//                    {
//                        type: 'field_dropdown',
//                        name: 'pin',
//                        options: QH_ROBOT_PWMPCB
//                    },
//                    {
//                        type: 'field_dropdown',
//                        name: 'pin3',
//                        options: [[Blockly.Msg.QH_CW, '1'], [Blockly.Msg.QH_CCW, '0']]
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'num2'
//                    },
//                    {
//                        type: 'input_value',
//                        name: 'num1'
//                    }
//                ],
//                tooltip: '舵机板I2C接口地址,一个板可以接16个舵机,号0~15,速度为0的时候为停止.可以并联16个板,外接电源5~6V,注意选择对应的舵机类型0~360度,不建议长时间运行！使用前要放一个360度参数设置块初始化\n',
//                colour: QH_Actuator_color,
//                extensions: ['shape_statement']
//            });
//        }
//    };
    return Blockly;
}

exports = addBlocks;
