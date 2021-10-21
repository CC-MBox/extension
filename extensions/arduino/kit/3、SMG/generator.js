/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    // LED1

    Blockly.Arduino.QH_ledlight = function () {
        const dropdown_pin = this.getFieldValue('PIN');
        const dropdown_pin2 = this.getFieldValue('PIN1');
        const dropdown_stat = Blockly.Arduino.valueToCode(this, 'STATE', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.setups_[`setup_output33_${dropdown_pin}${dropdown_pin2}`] = `pinMode([${dropdown_pin}][${dropdown_pin2}], OUTPUT);`;
        const code = `digitalWrite([${dropdown_pin}][${dropdown_pin2}],${dropdown_stat});\n`;
        return code;
    };
    // 读取LED灯状态
    Blockly.Arduino.QH_read_ledlight = function () {
        const dropdown_pin = this.getFieldValue('PIN');
        const dropdown_pin2 = this.getFieldValue('PIN1');
        Blockly.Arduino.setups_[`setup_output33_${dropdown_pin}${dropdown_pin2}`] = `pinMode([${dropdown_pin}][${dropdown_pin2}], OUTPUT);`;
        const code = `digitalRead([${dropdown_pin}][${dropdown_pin2}])`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // LED亮度
    Blockly.Arduino.QH_ledlight_PWM = function () {
        const dropdown_pin = this.getFieldValue('PIN');
        const dropdown_pin2 = this.getFieldValue('PIN1');
        const ledn = Blockly.Arduino.valueToCode(this, 'ledn', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.setups_[`setup_output1_${dropdown_pin}${dropdown_pin2}`] = `pinMode([${dropdown_pin}][${dropdown_pin2}], OUTPUT);`;
        const code = `analogWrite([${dropdown_pin}][${dropdown_pin2}],${ledn});\n`;
        return code;
    };

    // RGB全彩灯
    Blockly.Arduino.CC_rgb_init = function (block) {
        const ccrgb = block.getFieldValue('cc-rgb');
        const ccr = block.getFieldValue('Red');
        const ccg = block.getFieldValue('Green');
        const ccb = block.getFieldValue('Blue');
        Blockly.Arduino.definitions_[`define_CC_RGB_init_${ccrgb}`] =
            `void CC_RGB(uint8_t r_pin,uint8_t g_pin,uint8_t b_pin,uint8_t r_stat,uint8_t g_stat,uint8_t b_stat) {
  pinMode(r_pin, OUTPUT);
  pinMode(g_pin, OUTPUT);
  pinMode(b_pin, OUTPUT);
  digitalWrite(r_pin,r_stat);
  digitalWrite(g_pin,g_stat);
  digitalWrite(b_pin,b_stat);
}
`;


        Blockly.Arduino.setups_[`setup_RGB_init_${ccrgb}`] =
            ``;
        return `CC_RGB(${ccrgb},${ccr},${ccg},${ccb});\n`;

    };

    // 数码管显示
    Blockly.Arduino.QH_display = function () {
        const dropdown_pin = this.getFieldValue('pinn');
        const num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_.define_displayd = '#include <TM16XX.h>';
        Blockly.Arduino.definitions_[`definitions_smg_read${dropdown_pin}`] =
            `TM16XX Digitron(${dropdown_pin});`;
        Blockly.Arduino.setups_[`setup_smg_init${num}`] =
            ``;
        return `Digitron.display(${num});\n`;
    };
    // 关闭数码管
    Blockly.Arduino.QH_displayoff = function () {
        const dropdown_pin2 = numberck(this.getFieldValue('pinn'));
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_displayd = '#include <QDP7SegmentDisplay.h>';
        const code = `QDP7SegmentDisplay${dropdown_pin2}.clearDisplay();\n`;
        return code;
    };
    return Blockly;
}

exports = addGenerator;
