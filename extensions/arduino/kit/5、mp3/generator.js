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
    // MP3播放
    Blockly.Arduino.QH_MP3_bofangx = function () {
        const dropdown_pin = this.getFieldValue('pinn');
        const num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'num2', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_qdprobot2 = '#include <QDPRobotQDPPlayerMini.h>';
        if (dropdown_pin == 5){
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }';
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  P${dropdown_pin}(QDPport[${dropdown_pin}][1],QDPport[${dropdown_pin}][0]);`;
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `P${dropdown_pin}.begin(9600);`;
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = `if (!myQDPPlayer.begin(P${dropdown_pin})) {\n   while(true);\n }`;

        }

        Blockly.Arduino.setups_.setup_qdprobot_serial4 = 'myQDPPlayer.setTimeOut(600);';
        const code = `myQDPPlayer.volume(${num});\n myQDPPlayer.play(${num2});\n delay(50);`;
        return code;
    };
    // MP3音量
    Blockly.Arduino.QH_MP3_yingliang = function () {
        const dropdown_pin = this.getFieldValue('pinn');
        const num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_qdprobot2 = '#include <QDPRobotQDPPlayerMini.h>';
        if (dropdown_pin == 5){
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }';
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  P${dropdown_pin}(QDPport[${dropdown_pin}][1],QDPport[${dropdown_pin}][0]);`;
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `P${dropdown_pin}.begin(9600);`;
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = `if (!myQDPPlayer.begin(P${dropdown_pin})) {\n   while(true);\n }`;
        }
        const code = `myQDPPlayer.volume(${num});\n `;
        return code;
    };
    // MP3重复播放
    Blockly.Arduino.QH_MP3_loopplay = function () {
        const dropdown_pin = this.getFieldValue('pinn');
        const num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num2 = Blockly.Arduino.valueToCode(this, 'num2', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_qdprobot2 = '#include <QDPRobotQDPPlayerMini.h>';
        if (dropdown_pin == 5){
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }';

        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  P${dropdown_pin}(QDPport[${dropdown_pin}][1],QDPport[${dropdown_pin}][0]);`;
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `P${dropdown_pin}.begin(9600);`;
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = `if (!myQDPPlayer.begin(P${dropdown_pin})) {\n   while(true);\n }`;
        }
        Blockly.Arduino.setups_.setup_qdprobot_serial4 = 'myQDPPlayer.setTimeOut(50);';
        const code = `myQDPPlayer.volume(${num});\n myQDPPlayer.loop(${num2});\n delay(50);`;
        return code;
    };
    // MP3播放暂停

    Blockly.Arduino.QH_MP3_startpause = function () {
        const dropdown_pin = this.getFieldValue('pinn');
        const dropdown_pin3 = this.getFieldValue('PIN22');
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_qdprobot2 = '#include <QDPRobotQDPPlayerMini.h>';
        if (dropdown_pin == 5){
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }';
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  P${dropdown_pin}(QDPport[${dropdown_pin}][1],QDPport[${dropdown_pin}][0]);`;
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `P${dropdown_pin}.begin(9600);`;
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = `if (!myQDPPlayer.begin(P${dropdown_pin})) {\n   while(true);\n }`;
        }
        const code = `myQDPPlayer.order(${dropdown_pin3});\n delay(50);`;
        return code;
    };
    // MP3上一首
    Blockly.Arduino.QH_MP3_previous_next = function () {
        const dropdown_pin = this.getFieldValue('pinn');
        let dropdown_pin3 = this.getFieldValue('PIN22');
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_qdprobot2 = '#include <QDPRobotQDPPlayerMini.h>';
        if (dropdown_pin == 5){
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }';

        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  P${dropdown_pin}(QDPport[${dropdown_pin}][1],QDPport[${dropdown_pin}][0]);`;
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `P${dropdown_pin}.begin(9600);`;
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = `if (!myQDPPlayer.begin(P${dropdown_pin})) {\n   while(true);\n }`;
        }
        if (dropdown_pin3 == '0'){
            dropdown_pin3 = 'previous';
        } else {
            dropdown_pin3 = 'next';
        }
        const code = `myQDPPlayer.${dropdown_pin3}();\n delay(50);`;
        return code;
    };
    // MP3播放音效
    Blockly.Arduino.QH_MP3_play = function () {
        const dropdown_pin = this.getFieldValue('pinn');
        const dropdown_pin3 = this.getFieldValue('pin2');
        const num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_qdprobot2 = '#include <QDPRobotQDPPlayerMini.h>';
        if (dropdown_pin == 5){
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }';
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  P${dropdown_pin}(QDPport[${dropdown_pin}][1],QDPport[${dropdown_pin}][0]);`;
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `P${dropdown_pin}.begin(9600);`;
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = `if (!myQDPPlayer.begin(P${dropdown_pin})) {\n   while(true);\n }`;
        }
        Blockly.Arduino.setups_.setup_qdprobot_serial4 = 'myQDPPlayer.setTimeOut(600);';
        const code = `myQDPPlayer.volume(${num});\n myQDPPlayer.play(${dropdown_pin3});\n delay(600);`;
        return code;
    };
    // 定义PlayerMini目录
    Blockly.Arduino.QH_ESPuno_define_mp3_directory = function () {
        let data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC) || '0';
        data = data.replace(/\.mp3/g, '","');
        data = `"${data}"`;
        data = data.replace(',""', '');
        data = data.replace(/ /g, '');
        Blockly.Arduino.definitions_.var_define_mp3_directory = `String mp3_file_directory[]={${data}};`;
        const code = '';
        return code;
    };
    // PlayerMini指定播放
    Blockly.Arduino.QH_ESPuno_mp3_designated_play = function () {
        const mode = this.getFieldValue('mode');
        const num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC);
        const NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
        const dropdown_pin = this.getFieldValue('pinn');
        Blockly.Arduino.definitions_.define_qdport = '#include <QDPport.h>';
        Blockly.Arduino.definitions_.define_qdprobot2 = '#include <QDPRobotQDPPlayerMini.h>';
        if (dropdown_pin == 5){
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_.setup_qdprobot_serial = 'Serial.begin(9600);';
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }';
        } else {
            Blockly.Arduino.definitions_.define_SoftwareSerial = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_[`var_declare_qdprobot_serial${dropdown_pin}`] = `SoftwareSerial  P${dropdown_pin}(QDPport[${dropdown_pin}][1],QDPport[${dropdown_pin}][0]);`;
            Blockly.Arduino.definitions_.G1_var_declare_qdprobot_serial2 = 'QDPRobotQDPPlayerMini myQDPPlayer;';
            Blockly.Arduino.setups_[`setup_qdprobot_serial${dropdown_pin}`] = `P${dropdown_pin}.begin(9600);`;
            Blockly.Arduino.setups_.setup_qdprobot_serial3 = `if (!myQDPPlayer.begin(P${dropdown_pin})) {\n   while(true);\n }`;
        }
        Blockly.Arduino.setups_.setup_qdprobot_serial4 = 'myQDPPlayer.setTimeOut(600);';
        const code = `  for (int i = (1); i <= (sizeof(mp3_file_directory)/sizeof(mp3_file_directory[0])); i = i + (1)) {\n    if (String(${NAME}).indexOf(String(mp3_file_directory[(int)(i - 1)])) != -1) {\n      myQDPPlayer.volume(${num});\n      ${mode}(i);\n      delay(1);\n      break;\n    }\n  }\n`;
        return code;
    };
        // 蜂鸣器

        Blockly.Arduino.QH_buzzer = function (){
            const dropdown_pin = this.getFieldValue('PIN');
            const dropdown_pin2 = this.getFieldValue('PIN2');
            const dur = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
            Blockly.Arduino.setups_[`setup_output_${dropdown_pin}`] = '';
            const code = `tone(${dropdown_pin},${dropdown_pin2},${dur});\n`;
            return code;
        };
    return Blockly;
}

exports = addGenerator;
