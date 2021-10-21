/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_ACTUATOR_CATEGORY: '2、Actuator',
    	QH_RELAY_LABEL: '---RELAY---',

        CC_MOTOR: '---MOTOR---',
//    	QH_SERVO_LABEL: '---SERVO---',
        QH_relay: 'Relay Port %1 L/R %2 state %3',
        QH_read_relay: 'Read relay Port %1 L/R %2 ',

        CC_motor: 'DC motor Port %1 speed(-255~255) %2'
        // QH_buzzer_music: 'Buzzer Port %1 play music %2 ',
        // QH_servomotor360: 'Servo 360° Port %1 Direction %2 Speed(0~10) %3'
        // QH_CW: 'CW',
        // QH_CCW: 'CCW',
        // QH_servomotor180: 'Servo 180° Port %1 Speed %2 Angle(0~180) %3 Interrupt %4',
        // QH_Donotinterrupt: 'Do not interrupt',
        // QH_Interruptible: 'Interruptible',
        // QH_servomotorread: 'Servo read angle Port %1',
        // QH_servomotorPWM_set180: 'Servo board N0 %1 [parameter setting] Lower limit range of PWM(1-4095) %2 PWM upper limit range (2-4096) %3',
        // QH_servomotorPWM: 'Servo board N0 %1 Servo NO(0~15) %2 Angle %3 ',
        // QH_servomotorPWM_set360: 'Servo board360° NO %1 [parameter setting] PWM stop value %2 PWM forward lower limit %3 PWM forward upper limit  %4 PWM reverses lower limit %5 PWM reverses upper limit %6 ',
        // QH_servomotorPWM360: 'Servo board360° N0 %1 Direction %2 NO(0`15)  %3 Speed(0`10) %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_ACTUATOR_CATEGORY: '执行器',
    	QH_RELAY_LABEL: '---继电器---',

        CC_MOTOR_LABEL: '---电机---',
    	// QH_SERVO_LABEL: '---舵机---',
        QH_relay: '继电器 引脚 %1 左/右 %2 状态 %3',
        QH_read_relay: '读取 继电器 引脚 %1 左/右 %2 ',

        CC_motor: '直流电机 端口 %1 速度(-255~255) %2'
        //QH_buzzer_music: '蜂鸣器 端口 %1 演奏音乐 %2 ',
        // QH_servomotor360: '舵机360° 端口 %1 方向 %2 速度(0~10) %3'
        // QH_CW: '正转',
        // QH_CCW: '反转',
        // QH_servomotor180: '舵机180° 端口 %1 速度 %2 角度(0~180) %3 是否可中断 %4',
        // QH_Donotinterrupt: '不中断',
        // QH_Interruptible: '中断',
        // QH_servomotorread: '舵机读取角度 端口 %1',
        // QH_servomotorPWM_set180: '舵机板180° 板号 %1 [参数设置] PWM下限值 范围(1-4095) %2 PWM 上限值 范围(2-4096) %3',
        // QH_servomotorPWM: '舵机板180° 板号 %1 舵机号(0~15) %2 角度 %3 ',
        // QH_servomotorPWM_set360: '舵机板360° 板号 %1 [参数设置] PWM停止值 %2 PWM 正转下限值  %3 PWM 正转上限值  %4 PWM 反转下限值  %5 PWM 反转上限值  %6 ',
        // QH_servomotorPWM360: '舵机板360° 板号 %1 方向 %2 舵机号(0`15)  %3 速度(0`10) %4'
    });
    return Blockly;
}

exports = addMsg;
