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
    // 添加

    // 继电器
    Blockly.Arduino.QH_relay = function () {
        const dropdown_pin = this.getFieldValue('PIN');
        const dropdown_pin2 = this.getFieldValue('PIN1');
        const dropdown_stat = Blockly.Arduino.valueToCode(this, 'STATE', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.setups_[`setup_output33_${dropdown_pin}${dropdown_pin2}`] = `pinMode([${dropdown_pin}][${dropdown_pin2}], OUTPUT);`;
        const code = `digitalWrite([${dropdown_pin}][${dropdown_pin2}],${dropdown_stat});\n`;
        return code;
    };
    // 读继电器状态
    Blockly.Arduino.QH_read_relay = function () {
        const dropdown_pin = this.getFieldValue('PIN');
        const dropdown_pin2 = this.getFieldValue('PIN1');
        Blockly.Arduino.setups_[`setup_output33_${dropdown_pin}${dropdown_pin2}`] = `pinMode([${dropdown_pin}][${dropdown_pin2}], OUTPUT);`;
        const code = `digitalRead([${dropdown_pin}][${dropdown_pin2}])`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    // 蜂鸣器音乐
//     Blockly.Arduino.QH_buzzer_music = function (){
//         const dropdown_pin = this.getFieldValue('PIN');
//         const dropdown_pin2 = this.getFieldValue('PIN2');
//         Blockly.Arduino.definitions_[`define_qdportqdpbuzzer2${dropdown_pin}`] = `QDPBuzzer QDPBuzzer${dropdown_pin};`;
//
//         Blockly.Arduino.setups_[`setup_output_${dropdown_pin}`] = '';
//         const code = `QDPBuzzer${dropdown_pin}.buzzer_music([${dropdown_pin}][1],${dropdown_pin2});\n`;
//         return code;
//     };
    // 直流电机
    Blockly.Arduino.CC_motor = function () {
        const dropdown_pin = this.getFieldValue('PIN');
        const speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_[`var_declare_ccrobot_motor${dropdown_pin}`] = `void CC_Motor_Run(unsigned char pin1_dir, unsigned char pin2_pwm, int speed) {
  pinMode(pin1_dir, OUTPUT);
  pinMode(pin2_pwm, OUTPUT);
  speed = speed > 255 ? 255 : speed;
  speed = speed < -255 ? -255 : speed;

  if (speed >= 0) {
    digitalWrite(pin1_dir, LOW);
    analogWrite(pin2_pwm, speed);
  } else {
    digitalWrite(pin1_dir, HIGH);
    analogWrite(pin2_pwm, -speed);
  }
}\n`;
        Blockly.Arduino.setups_[`setup_CC_motor_${dropdown_pin}`] =
            ``;
        return `CC_Motor_Run(${dropdown_pin},${speed});\n`;

    };

    // 舵机360
//    Blockly.Arduino.QH_servomotor360 = function () {
//        const dropdown_pin = this.getFieldValue('PIN');
//        const dropdown_pin2 = this.getFieldValue('DIR');
//        const num1 = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
//        Blockly.Arduino.definitions_.define_qdprobotservo = '#include <QDPServo.h>';
//        Blockly.Arduino.definitions_.define_qdprobotread = '#include <VarSpeedServo.h>';
//        Blockly.Arduino.definitions_[`var_declare_qdprobot_motor31${dropdown_pin}`] = `VarSpeedServo QDPservo_${dropdown_pin};\n`;
//        Blockly.Arduino.setups_[`setup_output_3${dropdown_pin}`] = `QDPservo_${dropdown_pin}.attach([${dropdown_pin}][1]);\n`;
//        const code = `QDPservo_${dropdown_pin}.writeMicroseconds(QDPServoPulseWith1(${dropdown_pin2},${num1}));\n`;
//        return code;
//    };
//    // 舵机
//    Blockly.Arduino.QH_servomotor180 = function () {
//        const dropdown_pin = this.getFieldValue('pin');
//        const IsWait = this.getFieldValue('wait');
//        const num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
//        const speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
//        Blockly.Arduino.definitions_.define_qdprobotread = '#include <VarSpeedServo.h>';
//
//        Blockly.Arduino.definitions_[`var_declare_qdprobot_motor31${dropdown_pin}`] = `VarSpeedServo QDPservo_${dropdown_pin};\n`;
//        Blockly.Arduino.setups_[`setup_output_3${dropdown_pin}`] = `QDPservo_${dropdown_pin}.attach([${dropdown_pin}][1],500,2500);\n`;
//        const code = `QDPservo_${dropdown_pin}.write(${num1},${speed},${IsWait});\n`;
//        return code;
//    };
//    // 舵机角度
//
//    Blockly.Arduino.QH_servomotorread = function () {
//        const dropdown_pin = this.getFieldValue('pin');
//        Blockly.Arduino.definitions_.define_qdport = '#include <.h>';
//        Blockly.Arduino.definitions_.define_qdprobotread = '#include <VarSpeedServo.h>';
//        Blockly.Arduino.definitions_[`var_declare_qdprobot_motor31${dropdown_pin}`] = `VarSpeedServo QDPservo_${dropdown_pin};\n`;
//        Blockly.Arduino.setups_[`setup_output_3${dropdown_pin}`] = `QDPservo_${dropdown_pin}.attach([${dropdown_pin}][1]);\n`;
//
//        const code = `QDPservo_${dropdown_pin}.read()`;
//        return [code, Blockly.Arduino.ORDER_ATOMIC];
//    };
//    // 舵机板设置参数180
//    Blockly.Arduino.QH_servomotorPWM_set180 = function () {
//        const dropdown_pin = this.getFieldValue('pin');
//        const param1 = Blockly.Arduino.valueToCode(this, 'param1', Blockly.Arduino.ORDER_ATOMIC) || '0';
//        const param2 = Blockly.Arduino.valueToCode(this, 'param2', Blockly.Arduino.ORDER_ATOMIC) || '0';
//        Blockly.Arduino.definitions_.include_Wire = '#include <Wire.h>';
//        Blockly.Arduino.definitions_.define_qdportPWM2 = '#include "QDP16PWM.h"';
//        Blockly.Arduino.definitions_[`var_declare_qdprobot_PWM${dropdown_pin}`] = `QDP16PWM pwm${dropdown_pin} = QDP16PWM(0x4${dropdown_pin});\n`;
//        Blockly.Arduino.setups_[`setup_output_PWM_set180${dropdown_pin}`] = `pwm${dropdown_pin}.set_180(${param1},${param2});\n`;
//        const code = '';
//        return code;
//    };
//    // 舵机板180
//    Blockly.Arduino.QH_servomotorPWM = function () {
//        const dropdown_pin = this.getFieldValue('pin');
//        const num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
//        const num2 = Blockly.Arduino.valueToCode(this, 'num2', Blockly.Arduino.ORDER_ATOMIC) || '0';
//
//        Blockly.Arduino.definitions_.include_Wire = '#include <Wire.h>';
//        Blockly.Arduino.definitions_.define_qdportPWM2 = '#include "QDP16PWM.h"';
//        Blockly.Arduino.definitions_[`var_declare_qdprobot_PWM${dropdown_pin}`] = `QDP16PWM pwm${dropdown_pin} = QDP16PWM(0x4${dropdown_pin});\n`;
//        Blockly.Arduino.setups_[`setup_output_PWM${dropdown_pin}`] = `pwm${dropdown_pin}.begin();\n`;
//        const code = `pwm${dropdown_pin}.setDegree1(${num2},${num1});\n`;
//        return code;
//    };
//    // 舵机板360度设置参数
//    Blockly.Arduino.QH_servomotorPWM_set360 = function () {
//        const dropdown_pin = this.getFieldValue('pin');
//        const S_param = Blockly.Arduino.valueToCode(this, 'S_param', Blockly.Arduino.ORDER_ATOMIC) || '0';
//        const CW_L_param = Blockly.Arduino.valueToCode(this, 'CW_L_param', Blockly.Arduino.ORDER_ATOMIC) || '0';
//        const CW_H_param = Blockly.Arduino.valueToCode(this, 'CW_H_param', Blockly.Arduino.ORDER_ATOMIC) || '0';
//        const CCW_L_param = Blockly.Arduino.valueToCode(this, 'CCW_L_param', Blockly.Arduino.ORDER_ATOMIC) || '0';
//        const CCW_H_param = Blockly.Arduino.valueToCode(this, 'CCW_H_param', Blockly.Arduino.ORDER_ATOMIC) || '0';
//        const num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
//
//        Blockly.Arduino.definitions_.include_Wire = '#include <Wire.h>';
//        Blockly.Arduino.definitions_.define_qdportPWM2 = '#include "QDP16PWM.h"';
//        Blockly.Arduino.definitions_[`var_declare_qdprobot_PWM${dropdown_pin}`] = `QDP16PWM pwm${dropdown_pin} = QDP16PWM(0x4${dropdown_pin});\n`;
//        Blockly.Arduino.setups_[`setup_output_PWM_set360${dropdown_pin}`] = `pwm${dropdown_pin}.set_360(${S_param},${CW_L_param},${CW_H_param},${CCW_L_param},${CCW_H_param});\n`;
//        const code = '';
//        return code;
//    };
//    // 舵机板360度
//    Blockly.Arduino.QH_servomotorPWM360 = function () {
//        const dropdown_pin = this.getFieldValue('pin');
//        const dropdown_pin3 = this.getFieldValue('pin3');
//        const num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
//        const num2 = Blockly.Arduino.valueToCode(this, 'num2', Blockly.Arduino.ORDER_ATOMIC) || '0';
//
//        Blockly.Arduino.definitions_.include_Wire = '#include <Wire.h>';
//        Blockly.Arduino.definitions_.define_qdportPWM2 = '#include "QDP16PWM.h"';
//        Blockly.Arduino.definitions_[`var_declare_qdprobot_PWM${dropdown_pin}`] = `QDP16PWM pwm${dropdown_pin} = QDP16PWM(0x4${dropdown_pin});\n`;
//        Blockly.Arduino.setups_[`setup_output_PWM${dropdown_pin}`] = `pwm${dropdown_pin}.begin();\n`;
//        const code = `pwm${dropdown_pin}.setDegree2(${num2},${dropdown_pin3},${num1});\n`;
//        return code;
//    };
    return Blockly;
}

exports = addGenerator;
