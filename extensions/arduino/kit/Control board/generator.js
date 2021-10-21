/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    function numberck (pinn) {
        if (pinn == '1') {
            return 'P1';
        }
        if (pinn == '2') {
            return 'P2';
        }
        if (pinn == '3') {
            return 'P3';
        }
        if (pinn == '4') {
            return 'P4';
        }
        if (pinn == '5') {
            return 'P5';
        }
        if (pinn == '6') {
            return 'P6';
        }
    }
    // 掌控屏
    Blockly.Arduino.qdp_display_START = function () {
        Blockly.Arduino.definitions_.define_qdpBT = '#include <AppBtRec.h>';
        Blockly.Arduino.definitions_.define_qdpBTD = 'AppBtRec AppBtRec;\n';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);\n';
        const code = 'AppBtRec.PortReceive();\n';
        return code;
    };
    // 掌控屏按键
    Blockly.Arduino.qdp_display_button = function () {
        const num = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const code = `AppBtRec.IsObject(${num})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 读掌控屏变量
    Blockly.Arduino.qdp_display_variable = function () {
        const dropdown_pin1 = this.getFieldValue('pin');
        const code = `AppBtRec.GetVal(${dropdown_pin1})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 发送变量到掌控屏
    Blockly.Arduino.qdp_display_print = function () {
        const dropdown_pin1 = this.getFieldValue('pin');
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_.define_send3times0xff = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
        const num1 = Blockly.Arduino.valueToCode(this, 'N1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const code = `Serial.print("t${dropdown_pin1}.txt=\\"");\nSerial.print(String(${num1}));\nSerial.print("\\"");\nsend3times0xff();\n`;
        return code;
    };
    // 睡眠控制
    Blockly.Arduino.qdp_zkpdisplay_sleep = function () {
        const dropdown_pin2 = this.getFieldValue('pin2');
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_.define_send3times0xff = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
        const code = `Serial.print("sleep=${dropdown_pin2}");\nsend3times0xff();\n`;
        return code;
    };
    // 屏蜂鸣器
    Blockly.Arduino.qdp_zkpdisplay_buzzer = function () {
        const dropdown_pin = this.getFieldValue('pin2');
        const num = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_.define_send3times0xff = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
        const code = `Serial.print("cfgpio 7,3,0");\nsend3times0xff();\nSerial.print("pwmf=${dropdown_pin}");\nsend3times0xff();\nSerial.print(String("pwm7=")+String(${num}));\nsend3times0xff();\n`;
        return code;
    };
    // 颜色
    Blockly.Arduino.qdp_zkpdisplay_color = function () {
        const dropdown_pin = this.getFieldValue('pin1');
        const code = `${dropdown_pin}`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 颜色刷屏
    Blockly.Arduino.qdp_zkpdisplay_clscolor = function () {
        const num = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_.define_send3times0xff = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
        const code = `Serial.print(String("cls ")+String(${num}));\nsend3times0xff();\n`;
        return code;
    };
    // 表情刷屏
    Blockly.Arduino.qdp_zkpdisplay_pic = function () {
        const dropdown_pin = this.getFieldValue('pin2');
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_.define_send3times0xff = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
        const code = `Serial.print("pic 0,0,${dropdown_pin}");\nsend3times0xff();\n`;
        return code;
    };
    // 页面跳转
    Blockly.Arduino.qdp_zkpdisplay_page = function () {
        const dropdown_pin = this.getFieldValue('pin2');
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_.define_send3times0xff = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
        const code = `Serial.print("page ${dropdown_pin}");\nsend3times0xff();\n`;
        return code;
    };
    // 画圆
    Blockly.Arduino.qdp_zkpdisplay_drawinground = function () {
        const dropdown_pin = this.getFieldValue('pin2');
        const num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'num2', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num3 = Blockly.Arduino.valueToCode(this, 'num3', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num4 = Blockly.Arduino.valueToCode(this, 'num4', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_.define_send3times0xff = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
        const code = `Serial.print("${dropdown_pin} "+String(${num1})+String(",")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4}));\nsend3times0xff();\n`;
        return code;
    };
    // 画线矩形区域填充
    Blockly.Arduino.qdp_zkpdisplay_function1 = function () {
        const dropdown_pin = this.getFieldValue('pin2');
        const num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'num2', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num3 = Blockly.Arduino.valueToCode(this, 'num3', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num4 = Blockly.Arduino.valueToCode(this, 'num4', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num5 = Blockly.Arduino.valueToCode(this, 'num5', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_.define_send3times0xff = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
        const code = `Serial.print("${dropdown_pin} "+String(${num1})+String(",")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(",")+String(${num5}));\nsend3times0xff();\n`;
        return code;
    };
    // 文字信息
    Blockly.Arduino.qdp_zkpdisplay_TEXT = function () {
        const num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'num2', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num3 = Blockly.Arduino.valueToCode(this, 'num3', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num4 = Blockly.Arduino.valueToCode(this, 'num4', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num5 = Blockly.Arduino.valueToCode(this, 'num5', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num6 = Blockly.Arduino.valueToCode(this, 'num6', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num7 = Blockly.Arduino.valueToCode(this, 'text3', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const dropdown_pin = this.getFieldValue('pinn');

        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_.define_send3times0xff = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
        const code = `Serial.print("xstr "+String(${num1})+String(",")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(",0,")+String(${num5})+String(",")+String(${num6})+String(",1,1,${dropdown_pin},\\""));\nSerial.print(String(${num7}));\nSerial.print("\\"");\nsend3times0xff();\n`;
        return code;
    };
    // 文字信息
    Blockly.Arduino.qdp_zkpdisplay_TEXT_CN = function () {
        const number = Math.ceil(Math.random() * 100000);
        const num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'num2', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num3 = Blockly.Arduino.valueToCode(this, 'num3', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num4 = Blockly.Arduino.valueToCode(this, 'num4', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num5 = Blockly.Arduino.valueToCode(this, 'num5', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num6 = Blockly.Arduino.valueToCode(this, 'num6', Blockly.Arduino.ORDER_ATOMIC) || '0';
        let num7 = Blockly.Arduino.valueToCode(this, 'text3', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const dropdown_pin = this.getFieldValue('pinn');
        num7 = num7.replace(/\"/g, '');
        num7 = utf8ToGb2312Array(num7);
        Blockly.Arduino.definitions_[`var_declare_${number}`] = `const char str_${number}[] = {${num7}};`;// 定义数组

        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_.define_send3times0xff = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
        const code = `Serial.print("xstr "+String(${num1})+String(",")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(",0,")+String(${num5})+String(",")+String(${num6})+String(",1,1,${dropdown_pin},\\""));\nSerial.write(str_${number},sizeof(str_${number}));\nSerial.print("\\"");\nsend3times0xff();\n`;
        return code;
    };
    // 自定义指令
    Blockly.Arduino.qdp_zkpdisplay_order = function () {
        const text = Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_.define_send3times0xff = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
        const code = `Serial.print(${text});\nsend3times0xff();\n`;
        return code;
    };
    return Blockly;
}

exports = addGenerator;
