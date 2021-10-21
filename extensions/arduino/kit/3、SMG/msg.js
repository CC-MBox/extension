/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_SMG_CATEGORY: 'Display',
        QH_LED_LABEL: '---LED---',
        CC_RGB: '---RGB---',
        CC_SMG: '---SMG---',
        QH_ledlight: 'LED light Port %1 L/R %2 state %3',
        QH_read_ledlight: 'Read LED light Port %1 L/R %2 ',
        QH_ledlight_PWM: 'LED Port %1 L/R %2 Value %3',
        CC_rgb_init: 'set RGB %1 r %2 g %3 b %4',
        // CC_display_init: 'init display ',
        // CC_displayonoroff: 'turn onoroff display %1',
        QH_display: 'Digit Port %1 display %2'
        // QH_displayoff: 'display %1 decimal separator %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_SMG_CATEGORY: '显示器',
        QH_LED_LABEL: '---LED---',
        CC_RGB: '---RGB---',
        CC_SMG: '---数码管---',
        QH_ledlight: 'LED 引脚 %1 左/右 %2 状态 %3',
        QH_read_ledlight: '读取 LED 引脚 %1 左/右 %2 ',
        QH_ledlight_PWM: 'LED 引脚 %1 左/右 %2 值(0~255) %3',
        CC_rgb_init: '设置 RGB %1 红 %2 绿 %3 蓝 %4',
        // CC_display_init: '初始化TM16XX数码管',
        // CC_displayonoroff: '四位数码管TM16XX %1',
        QH_display: '数码管 端口 %1 显示 %2'
        // QH_displayoff: '四位数码管TM16XX第 %1 个小数点 %2'
    });
    return Blockly;
}

exports = addMsg;
