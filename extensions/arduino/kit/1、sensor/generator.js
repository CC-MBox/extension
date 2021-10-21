/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    // 触碰按键
    Blockly.Arduino.CC_key = function (block) {
        const pin = this.getFieldValue('pin');
        Blockly.Arduino.setups_[`QHbutton_${pin}`] = `pinMode(${pin}, INPUT);`;
        return [`!digitalRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 一般按钮
    Blockly.Arduino.QH_button_general = function (block) {
        const pin = this.getFieldValue('pin');
        const mode = this.getFieldValue('mode');
        Blockly.Arduino.includes_.definitions_include_QDPport = `#include <QDPport.h>`;
        Blockly.Arduino.setups_[`QHbutton_${pin}`] = `pinMode(QDPport[${pin}][${mode}], INPUT);`;
        return [`digitalRead(QDPport[${pin}][${mode}]);`, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 超声波
    Blockly.Arduino.QH_UltraSonicDistanceSensor = function () {
        const dropdown_pin = this.getFieldValue('PIN');
        const dropdown_pin2 = this.getFieldValue('PIN2');
        Blockly.Arduino.definitions_[`var_declare_qdprobot_chaoshengbo${dropdown_pin}`] = `float getDistance(unsigned char pin1,unsigned char pin2) {
  pinMode(pin1, OUTPUT);
  pinMode(pin2, INPUT);
  digitalWrite(pin1, LOW);
  delayMicroseconds(2);
  digitalWrite(pin1, HIGH);
  delayMicroseconds(10);
  digitalWrite(pin1, LOW);
  float distance = pulseIn(pin2, HIGH) / 58.00;
  delay(10);
  return distance;
}\n`;
        const code = `getDistance(${dropdown_pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 巡线
    Blockly.Arduino.QH_Line_follower = function () {
        const PIN = this.getFieldValue('PIN');
        const state1 = this.getFieldValue('state1');
        const state2 = this.getFieldValue('state2');

        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.setups_[`setup_input_${PIN}`] = `pinMode(QDPport[${PIN}][0], INPUT);\n  pinMode(QDPport[${PIN}][1], INPUT);`;
        const code = `(digitalRead(QDPport[${PIN}][0]) == ${state1})&&(digitalRead(QDPport[${PIN}][1]) == ${state2})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 光线
        Blockly.Arduino.QH_lightSensor = function () {
            const pin = this.getFieldValue('PIN');
            Blockly.Arduino.setups_[`setup_input_${pin}`] = `pinMode(${pin}, INPUT);`;
            return [`analogRead([${pin}])`, Blockly.Arduino.ORDER_ATOMIC];
        };

    // 声音
        Blockly.Arduino.QH_sound = function () {
            const pin = this.getFieldValue('PIN');
            Blockly.Arduino.setups_[`setup_input_${pin}`] = `pinMode(${pin}, INPUT);`;
            return [`analogRead([${pin}])`, Blockly.Arduino.ORDER_ATOMIC];
        };
    // 电位器
        Blockly.Arduino.QH_Potentiometer = function () {
            const pin = this.getFieldValue('PIN');
            Blockly.Arduino.setups_[`setup_input_${pin}`] = `pinMode(${pin}, INPUT);`;
            return [`analogRead([${pin}])`, Blockly.Arduino.ORDER_ATOMIC];
        };
    // 摇杆初始化
    Blockly.Arduino.ps2_init = function (block) {
            const din = block.getFieldValue('DIN');

            Blockly.Arduino.includes_.ps2_init = '#include <PS2X_lib.h>';
            Blockly.Arduino.definitions_.ps2_init = 'PS2X ps2x;';

            return `ps2x.config_gamepad(${din}, false, false);\n`;
        };

        Blockly.Arduino.ps2_readData = function () {
            return 'ps2x.read_gamepad();\n';
        };

        Blockly.Arduino.ps2_getButton = function () {
            const button = this.getFieldValue('BUTTON');
            const code = `ps2x.Button(${button})`;

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Arduino.ps2_GetJoystick = function () {
            const joystick = this.getFieldValue('JOYSTICK');
            const code = `ps2x.Analog(${joystick})`;

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
    // 土壤
        Blockly.Arduino.QH_Soilmoisture = function () {
            const pin = this.getFieldValue('PIN');
            Blockly.Arduino.setups_[`setup_input_${pin}`] = `pinMode(${pin}, INPUT);`;
            return [`analogRead([${pin}])`, Blockly.Arduino.ORDER_ATOMIC];
        };
    // DH11温湿度
    Blockly.Arduino.QH_dht11 = function () {
        const dropdown_pin = this.getFieldValue('PIN');
        const what = this.getFieldValue('WHAT');
        Blockly.Arduino.definitions_.define_DHT = '#include <DHT.h>';
        Blockly.Arduino.definitions_.define_dht_p = `DHT_dht11_${dropdown_pin}(${dropdown_pin}, ${what});`;
        Blockly.Arduino.setups_[`myDHT_${dropdown_pin}begin`] = `dht11_${dropdown_pin}.begin(${dropdown_pin});`;

        const code = `dht11_${dropdown_pin}.readTemperature(${what})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 颜色传感器启用块
    Blockly.Arduino.QH_yssb_init = function () {
        Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <Adafruit_TCS34725.h>';
        Blockly.Arduino.definitions_.var_declare_SoftwareSerial = 'TCS34725 tcs34725;';
        const code = 'tcs34725.begin();\n';
        return code;

    };
    // 颜色传感器的值读取
    Blockly.Arduino.CC_yssb_get = function () {
        const dropdown_pin1 = this.getFieldValue('PIN');
        const dropdown_pin2 = this.getFieldValue('PIN2');
        const code = `tcs34725.get${dropdown_pin1}${dropdown_pin2}()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 传感器-MPU6050-更新数据
    Blockly.Arduino.QH_MPU6050_update = function () {
        Blockly.Arduino.definitions_.includeMPU6050 = '#include <MPU6050.h>';
        Blockly.Arduino.definitions_.include_Wire = '#include <Wire.h>';
        Blockly.Arduino.definitions_.var_declare_MPU6050 = 'MPU6050 mpu;';
        Blockly.Arduino.setups_.setup_ngyro = 'mpu.begin(MPU6050_SCALE_2000DPS, MPU6050_RANGE_2G);';
        Blockly.Arduino.setups_.mpu_calibrateGyro = 'mpu.calibrateGyro();';
        Blockly.Arduino.setups_.mpu_setThreshold = 'mpu.setThreshold(3);';
        const code = 'Vector normAccel = mpu.readNormalizeAccel();\nVector normGyro = mpu.readNormalizeGyro();\n';
        return code;
    };
    // 偏航角复位
    Blockly.Arduino.QH_MPU6050_yaw_reset = function () {
        const code = 'yaw = 0;\n';
        return code;
    };
    // MPU6050-获取数据
    Blockly.Arduino.QH_MPU6050_GETDATA = function () {
        const MPU6050_TYPE = this.getFieldValue('MPU6050_TYPE');
        let code;
        if (MPU6050_TYPE == 'readYaw') {
            Blockly.Arduino.definitions_.var_declare_MPU6050GetYaw = 'unsigned long GetYawtimer = 0;\nfloat timeStep = 0.005;\nfloat yaw = 0;';
            Blockly.Arduino.definitions_.var_MPU6050GetYaw = 'float MPU6050GetYaw(Vector &norm)\n' +
          '{\n' +
          '  if (millis() - GetYawtimer >= (timeStep * 1000)) {\n' +
          '    GetYawtimer = millis();\n' +
          '    yaw = yaw + norm.ZAxis * timeStep;\n' +
          '  }\n' +
          '  return yaw;\n' +
          '}\n';
            code = 'MPU6050GetYaw(normGyro)';
        } else {
            code = MPU6050_TYPE;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // MPU6050-动作检测更新数据
    Blockly.Arduino.QH_MPU6050_MOTION_update = function () {
        Blockly.Arduino.definitions_.includeMPU6050 = '#include <MPU6050.h>';
        Blockly.Arduino.definitions_.include_Wire = '#include <Wire.h>';
        Blockly.Arduino.definitions_.var_declare_MPU6050 = 'MPU6050 mpu;';
        Blockly.Arduino.setups_.setup_MOTION = 'mpu.begin(MPU6050_SCALE_2000DPS, MPU6050_RANGE_16G);\n' +
        ' mpu.setAccelPowerOnDelay(MPU6050_DELAY_3MS);\n' +
        ' mpu.setIntFreeFallEnabled(false);  \n' +
        ' mpu.setIntZeroMotionEnabled(false);\n' +
        ' mpu.setIntMotionEnabled(false);\n' +
        ' mpu.setDHPFMode(MPU6050_DHPF_5HZ);\n' +
        ' mpu.setMotionDetectionThreshold(2);\n' +
        ' mpu.setMotionDetectionDuration(5);\n' +
        ' mpu.setZeroMotionDetectionThreshold(4);\n' +
        ' mpu.setZeroMotionDetectionDuration(2);\n';
        const code = 'Vector rawAccel = mpu.readRawAccel();\nActivites act = mpu.readActivites();\n';
        return code;
    };
    // 传感器-MPU6050-获取数据
    Blockly.Arduino.QH_MPU6050_MOTION_GETDATA = function () {
        const MPU6050_TYPE = this.getFieldValue('MPU6050_TYPE');
        const code = MPU6050_TYPE;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.QH_inout_highlow = function () {
        // Boolean values HIGH and LOW.
        const code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    return Blockly;
}

exports = addGenerator;
