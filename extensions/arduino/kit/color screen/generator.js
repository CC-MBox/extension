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
    // 彩屏刷新显示
    Blockly.Arduino.QH_display_samll_refresh_display = function () {
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        let branch = Blockly.Arduino.statementToCode(this, 'DO');
        branch = branch.replace(/(^\s*)|(\s*$)/g, '');// 去除两端空格
        if (dropdown_pin2 == 5){
            var code = `${branch}\nSerial.println("");\n`;
        } else {
            var code = `${branch}\n${dropdown_pin}.println("");\n`;
        }
        return code;
    };
// 横坚屏设置
    Blockly.Arduino.QH_display_samll_HV = function () {
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        const dropdown_pin3 = this.getFieldValue('pin');

        if (dropdown_pin2 == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print("DIR(${dropdown_pin3});");\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `${dropdown_pin}.print("DIR(${dropdown_pin3});");\n`;
        }
        return code;
    };
// 屏亮度设置
    Blockly.Arduino.QH_display_samll_BL = function () {
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        const num = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_bl_1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        if (dropdown_pin2 == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print(String("BL(")+String(${num})+String(");"));\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `${dropdown_pin}.print(String("BL(")+String(${num})+String(");"));\n`;
        }
        return code;
    };
// 小彩屏颜色刷屏
    Blockly.Arduino.QH_display_samll_clr = function () {
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        const dropdown_pin3 = this.getFieldValue('pin');

        const num = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_clr_1', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        if (dropdown_pin2 == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print(String("${dropdown_pin3}(")+String(${num})+String(");"));\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `${dropdown_pin}.print(String("${dropdown_pin3}(")+String(${num})+String(");"));\n`;
        }
        return code;
    };
// 小彩屏默认图片显示
    Blockly.Arduino.QH_display_samll_flash_pic = function () {
        const dropdown_pin = numberck(this.getFieldValue('Serial'));
        const dropdown_pin2 = this.getFieldValue('Serial');
        const Serial = this.getFieldValue('Serial');
        const model = this.getFieldValue('model');
        let picNum = parseInt(this.getFieldValue('picNum'));
        const HV = parseInt(this.getFieldValue('HV'));

        let W; let H;
        picNum = 2097152 + (picNum + HV * 12) * 40960;

        if (HV) {
            W = 160;
            H = 128;
        } else {
            W = 128;
            H = 160;
        }

        if (Serial == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print(String("FSIMG(")+String(${picNum})+String(",0,0,")+String(${W})+String(",")+String(${H})+String(",")+String(${model})+String(");"));\n`;
        } else {
            Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `P${Serial}.print(String("FSIMG(")+String(${picNum})+String(",0,0,")+String(${W})+String(",")+String(${H})+String(",")+String(${model})+String(");"));\n`;
        }
        return code;
    };
// 小彩屏图片显示
    Blockly.Arduino.QH_display_samll_pic = function () {
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        const dropdown_pin3 = this.getFieldValue('pin');
        const num1 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pic_add', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pic_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pic_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pic_W', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num5 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pic_H', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        if (dropdown_pin2 == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print(String("FSIMG(")+String(${num1})+String(",")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(",")+String(${num5})+String(",")+String(${dropdown_pin3})+String(");"));\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `${dropdown_pin}.print(String("FSIMG(")+String(${num1})+String(",")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(",")+String(${num5})+String(",")+String(${dropdown_pin3})+String(");"));\n`;
        }
        return code;
    };
// 小彩屏画点指令
    Blockly.Arduino.QH_display_samll_PS = function () {
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        const num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_ps_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_ps_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_ps_colou', Blockly.Arduino.ORDER_ATOMIC) || '0';


        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        if (dropdown_pin2 == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print(String("PS(")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(");"));\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `${dropdown_pin}.print(String("PS(")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(");"));\n`;
        }
        return code;
    };
// 小彩屏画线框
    Blockly.Arduino.QH_display_samll_PL = function () {
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        const dropdown_pin3 = this.getFieldValue('pin');

        const num1 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pl_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pl_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pl_X2', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pl_Y2', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num5 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pl_colou', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        if (dropdown_pin2 == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print(String("${dropdown_pin3}(")+String(${num1})+String(",")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(",")+String(${num5})+String(");"));\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `${dropdown_pin}.print(String("${dropdown_pin3}(")+String(${num1})+String(",")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(",")+String(${num5})+String(");"));\n`;
        }
        return code;
    };
// 小彩屏画圆
    Blockly.Arduino.QH_display_samll_CIR = function () {
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        const dropdown_pin3 = this.getFieldValue('pin');

        const num1 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_cir_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_cir_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_cir_R', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_cir_colou', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        if (dropdown_pin2 == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print(String("${dropdown_pin3}(")+String(${num1})+String(",")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(");"));\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `${dropdown_pin}.print(String("${dropdown_pin3}(")+String(${num1})+String(",")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(");"));\n`;
        }
        return code;
    };
// 显示文本
    Blockly.Arduino.QH_display_samll_DC = function () {
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        const dropdown_pin3 = this.getFieldValue('pin');

        const num1 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_colou', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_text', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        if (dropdown_pin2 == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print(String("DC${dropdown_pin3}(")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(",")+String(${num1})+String(");"));\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `${dropdown_pin}.print(String("DC${dropdown_pin3}(")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(",")+String(${num1})+String(");"));\n`;
        }
        return code;
    };
// 显示文本
    Blockly.Arduino.QH_display_samll_CN = function () {
        const number = Math.ceil(Math.random() * 100000);
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        const dropdown_pin3 = this.getFieldValue('pin');

        const num1 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_colou', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
        let num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_text', Blockly.Arduino.ORDER_ATOMIC) || '0';
        num4 = num4.replace(/\"/g, '');
        // 编码解析
        num4 = utf8ToGb2312Array(num4);
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_[`var_declare_${number}`] = `const char str_${number}[] = {${num4}};`;// 定义数组

        if (dropdown_pin2 == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print(String("DC${dropdown_pin3}(")+String(${num2})+String(",")+String(${num3})+String(","));\nSerial.write(str_${number},sizeof(str_${number}));\nSerial.print(","+String(${num1})+String(");"));\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `${dropdown_pin}.print(String("DC${dropdown_pin3}(")+String(${num2})+String(",")+String(${num3})+String(","));\n${dropdown_pin}.write(str_${number},sizeof(str_${number}));\n${dropdown_pin}.print(","+String(${num1})+String(");"));\n`;
        }
        return code;
    };
// 显示带底色文本
    Blockly.Arduino.QH_display_samll_SBCDC = function () {
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        const dropdown_pin3 = this.getFieldValue('pin');

        const num1 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_sbcdc_colou', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_sbcdc_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_sbcdc_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_sbcdc_text', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num5 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_sbcdc_colou2', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        if (dropdown_pin2 == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print(String("SBC(${num5});DCV${dropdown_pin3}(")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(",")+String(${num1})+String(");"));\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `${dropdown_pin}.print(String("SBC(${num5});DCV${dropdown_pin3}(")+String(${num2})+String(",")+String(${num3})+String(",")+String(${num4})+String(",")+String(${num1})+String(");"));\n`;
        }
        return code;
    };
// 自定指令
    Blockly.Arduino.QH_display_samll_order = function () {
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        const text = Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        if (dropdown_pin2 == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print(${text}+String(");"));\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `${dropdown_pin}.print(${text}+String(");"));\n`;
        }
        return code;
    };
// 小彩屏波特率设置
    Blockly.Arduino.QH_display_samll_btl = function () {
        const dropdown_pin = numberck(this.getFieldValue('pinn'));
        const dropdown_pin2 = this.getFieldValue('pinn');
        const dropdown_pin3 = this.getFieldValue('pin');


        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        if (dropdown_pin2 == 5){
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            var code = `Serial.print("BPS(${dropdown_pin3});");\n`;
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  ${dropdown_pin}(QDPport[${dropdown_pin2}][1],QDPport[${dropdown_pin2}][0]);\n`;
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `${dropdown_pin}.begin(9600);\n`;
            var code = `${dropdown_pin}.print("BPS(${dropdown_pin3});");\n`;
        }
        return code;
    };
    return Blockly;
}

exports = addGenerator;
