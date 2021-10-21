/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */

/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    // 红外
    Blockly.Arduino.hw_init = function (block) {
        const pin = block.getFieldValue('cc-pin');
        Blockly.Arduino.includes_.include_hw_init = `#include <IRremote.h>`;
        Blockly.Arduino.definitions_[`define_hw_init_${pin}`] = `IRrecv irrecv(${pin});`;
        Blockly.Arduino.setups_[`setup_hw_init_${pin}`] = `irrecv.enableIRIn();`;
        return '';
    };

    Blockly.Arduino.hw_readHumidity = function (block) {
        const key = block.getFieldValue('cc-key');
        Blockly.Arduino.definitions_[`define_hw_init_${key}`] =
            `unsigned long key;\ndecode_results results;\n\nvoid IR_key() {
          static double ir_LastTime;
          if (irrecv.decode(&results)) {
            ir_LastTime = millis();
            if (results.value != 4294967295) {
              key = results.value;
            }
            irrecv.resume();
          } else if ((millis() - ir_LastTime) >= 180) {
            key = 0;
          }
        }`;
        // Blockly.Arduino.loops_[`loop_hw_init_${key}`] = `IR_key();
        //         key = 0;`;
        const code = `key == ${key}`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 红外遥控器
    Blockly.Arduino.QH_ir_re2 = function () {
        const dropdown_pin = this.getFieldValue('PIN1');
        const dropdown_pin1 = this.getFieldValue('PIN');
        const type = this.getFieldValue('TYPE');
        Blockly.Arduino.definitions_.define_ir_recv = '#include <IRremote.h>\n';
        Blockly.Arduino.definitions_[`var_declare_ir_recv0${dropdown_pin}`] = `IRrecv irrecv_${dropdown_pin}(${dropdown_pin});\ndecode_results results_${dropdown_pin};\n`;
        Blockly.Arduino.definitions_[`var_ir_recv1${dropdown_pin}`] = `bool irkeypressed_${dropdown_pin}(uint8_t key ,bool type) {\n` +
            `static uint8_t resultkey = 0;\n` +
            `const uint8_t keyval[] = {0xFF, 0x5D, 0x9D, 0x1D, 0xDD, 0xFD, 0x3D, 0x1F, 0x57, 0x6F, 0x97, 0x67, 0x4F, 0xCF, 0xE7, 0x85, 0xEF, 0xC7, 0xA5, 0xBD, 0xB5, 0xAD}; //对应编码值\n` +
            `static uint8_t keyrecv = 0;\n` +
            `static unsigned long irDelayTime = 0;\n` +
            `if (irrecv_${dropdown_pin}.decode(&results_${dropdown_pin})) {\n` +
            `  uint8_t ir_item = results_${dropdown_pin}.value & 0xFF;\n` +
            `  uint8_t i ;\n` +
            `  for ( i = 0; i < 22; i++) {\n` +
            `    if (ir_item == keyval[i]) {\n` +
            `      break;\n` +
            `    }\n` +
            `  }\n` +
            `  if (i > 0 && i < 22)\n` +
            `    keyrecv = i;\n` +
            `  irrecv_${dropdown_pin}.resume();\n` +
            `  irDelayTime = millis();\n` +
            `} else {\n` +
            `  if(type){\n` +
            `    if (millis() - irDelayTime > 200) {\n` +
            `       keyrecv = 0;\n` +
            `      }\n` +
            `  }\n` +
            `}\n` +
            `if (key == keyrecv) {\n` +
            `  if(!type)\n` +
            `keyrecv = 0;\n` +
            `  return true;\n` +
            `}\n` +
            `return false;\n` +
            `}\n`;
        Blockly.Arduino.setups_[`setup_ir_recv_${dropdown_pin}`] = `irrecv_${dropdown_pin}.enableIRIn();`;

        const code = `irkeypressed_${dropdown_pin}(${dropdown_pin1},${type})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 红外发送
    Blockly.Arduino.QH_ir_send_nec = function () {
        Blockly.Arduino.definitions_.define_ir_recv = '#include "IRremote.h"';
        Blockly.Arduino.definitions_.var_declare_ir_send = 'IRsend irsend;';
        let data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC) || '0';
        data = data.replace(/\"/g, '');
        const bits = Blockly.Arduino.valueToCode(this, 'bits', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const type = this.getFieldValue('TYPE');
        const code = `irsend.send${type}(${data},${bits});`;
        return code;
    };
    // 红外发送数组
    Blockly.Arduino.QH_ir_send_raw = function () {
        const dropdown_pin = this.getFieldValue('PIN');
        Blockly.Arduino.definitions_.include_IRremote = '#include <IRremote.h>\n';
        Blockly.Arduino.definitions_.var_declare_ir_send = 'IRsend irsend;\n';
        const length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const freq = Blockly.Arduino.valueToCode(this, 'freq', Blockly.Arduino.ORDER_ATOMIC) || '0';

        let text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '0';
        text = text.replace(/\"/g, '');

        Blockly.Arduino.definitions_[`QDPir_send_raw${dropdown_pin}`] = `uint16_t buf_raw${dropdown_pin}${length}={${text}};\nint vpin_value${dropdown_pin};\n`;
        const code = `irsend.sendRaw(buf_raw${dropdown_pin},${length},${freq});\n`;
        return code;
    };
    // 蓝牙接收数据
    Blockly.Arduino.QH_BT_START = function () {
        Blockly.Arduino.definitions_.define_qdpBT = '#include <AppBtRec.h>';
        Blockly.Arduino.definitions_.define_qdpBTD = 'AppBtRec AppBtRec;\n';
        Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
        const code = 'AppBtRec.PortReceive();\n';
        return code;
    };
    // 蓝牙按键
    Blockly.Arduino.QH_BT_button = function () {
        const num = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const code = `AppBtRec.IsObject(${num})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 蓝牙变量
    Blockly.Arduino.QH_BT_variable = function () {
        const dropdown_pin1 = this.getFieldValue('pin');
        const code = `AppBtRec.GetVal(${dropdown_pin1})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 蓝牙发送变量
    Blockly.Arduino.QH_BT_print = function () {
        const num1 = Blockly.Arduino.valueToCode(this, 'N1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'N2', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num3 = Blockly.Arduino.valueToCode(this, 'N3', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num4 = Blockly.Arduino.valueToCode(this, 'N4', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num5 = Blockly.Arduino.valueToCode(this, 'N5', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const code = `Serial.print(String(${num1})+','+String(${num2})+','+String(${num3})+','+String(${num4})+','+String(${num5}));`;
        return code;
    };
    // 更改串口定义
    Blockly.Arduino.QH_serial_change = function () {
        const dropdown_pin = this.getFieldValue('pinn');
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
        const code = `P${dropdown_pin}.listen();\n`;
        return code;
    };
    // 串口接收的数据等于

    Blockly.Arduino.QH_serial_jieshouzhi = function () {
        const dropdown_pin = this.getFieldValue('pin1');
        const num = Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC) || '0';

        if (dropdown_pin == 5) {

            Blockly.Arduino.definitions_[`J1_return_SoftwareSerial${dropdown_pin}`] = 'bool portReceived_Serial(String inputStr) {\n' +
                'static String recStr = "";\n' +
                'if (Serial.available() > 0) {\n' +
                '  recStr = Serial.readString();\n' +
                '}\n' +
                'if (String(recStr).equals(String(inputStr))) {\n' +
                '  recStr = "";\n' +
                '  return true;\n' +
                '}\n' +
                'return false;\n' +
                '}\n';
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `portReceived_Serial(${num})`;

        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  P${dropdown_pin}(${dropdown_pin},${dropdown_pin});`;
            Blockly.Arduino.definitions_[`return_SoftwareSerial1${dropdown_pin}`] = `bool portReceived_P${dropdown_pin}(String inputStr) {\n` +
                `static String recStr = "";\n` +
                `P${dropdown_pin}.listen();\n` +
                `if (P${dropdown_pin}.available() > 0) {\n` +
                `  recStr = P${dropdown_pin}.readString();\n` +
                `}\n` +
                `if (String(recStr).equals(String(inputStr))) {\n` +
                `  recStr = "";\n` +
                `  return true;\n` +
                `}\n` +
                `return false;\n` +
                `}\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `P${dropdown_pin}.begin(9600);`;
            var code = `portReceived_P${dropdown_pin}(${num})`;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 串口发送
    Blockly.Arduino.QH_serial_fasong = function () {
        const dropdown_pin = this.getFieldValue('pin1');
        const OutputModel = this.getFieldValue('OutputModel');
        const num = Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC) || '0';
        if (dropdown_pin == 5) {
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.${OutputModel}(${num});\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  P${dropdown_pin}(${dropdown_pin},${dropdown_pin});`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `P${dropdown_pin}.begin(9600);`;
            var code = `P${dropdown_pin}.${OutputModel}(${num});\n`;
        }
        return code;
    };
    // 串口接收
    Blockly.Arduino.QH_serial_jieshou = function () {
        const dropdown_pin = this.getFieldValue('pin1');
        if (dropdown_pin == 5) {
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = 'Serial.readString()';
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  P${dropdown_pin}(${dropdown_pin},${dropdown_pin});`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `P${dropdown_pin}.begin(9600);`;
            var code = `P${dropdown_pin}.readString()`;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 串口有数据可读
    Blockly.Arduino.QH_serial_suju = function () {
        const dropdown_pin = this.getFieldValue('pin1');
        if (dropdown_pin == 5) {
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = 'Serial.available() > 0\n';

        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  P${dropdown_pin}(${dropdown_pin},${dropdown_pin});`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `P${dropdown_pin}.begin(9600);`;
            var code = `P${dropdown_pin}.available() > 0`;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
