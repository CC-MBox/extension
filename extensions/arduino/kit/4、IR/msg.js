/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_COMMUNICATE_CATEGORY: 'Communicate',
        QH_IR_LABEL: '---4、IR---',
        QH_BLUETOOTH_LABEL: '---BLUETOOTH---',
        QH_SERIAL_LABEL: '---SERIAL---',
        HW_INIT: 'init %1 hw control',
        HW_READ_HUMIDITY: 'read %1 hw down',
        QH_ir_re2: 'Remote control input RC5 Port %1 Keybord %2 Mode %3',
        QH_IrPress: 'Press',
        QH_IrPressOn: 'Press on',
        QH_ir_send_nec: 'Infrared emission %1 Port P2(L3) data %2 bits %3',
        QH_ir_send_raw: 'Infrared emission Port P2(L3) %1 Array %2 Array length %3 frequency %4',
        QH_BT_START: 'Bluetooth start P5(R0-L1)',
        QH_BT_button: 'Bluetooth key P5(R0L1) %1',
        QH_BT_variable: 'Bluetooth variable P5(R0L1) %1',
        QH_BT_print: 'Bluetooth send variable P5(R0L1) variable 1 %1 variable 2 %2 variable 3 %3 variable 4 %4 variable 5 %5',
        QH_serial_change: 'Define to serial Port %1',
        QH_serial_jieshouzhi: 'Serial received Port %1 if data= %2',
        QH_serial_fasong: 'Serial send Port %1 Mode %2 Detai1 %3',
        QH_SERIAL_WRITE: 'WRITE',
        QH_SERIAL_PRINT: 'PRINT',
        QH_SERIAL_PRINTLN: 'PRINTLN',
        QH_serial_jieshou: 'Serial received Port %1 return string',
        QH_serial_suju: 'Serial available Port %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_COMMUNICATE_CATEGORY: '通讯',
        QH_IR_LABEL: '---红外---',
        QH_BLUETOOTH_LABEL: '---蓝牙---',
        QH_SERIAL_LABEL: '---串口---',
        HW_INIT: '初始化 %1 红外遥控接收',
        HW_READ_HUMIDITY: '读取 %1 红外按键按下',
        QH_ir_re2: '红外遥控 端口 %1 按键 %2 模式 %3',
        QH_IrPress: '按下',
        QH_IrPressOn: '按住',
        QH_ir_send_nec: '红外发射 模式 %1 端口 P2(L3) 数值 %2 比特数 %3',
        QH_ir_send_raw: '红外发射 端口 P2(L3) %1 数组 %2 数组长度 %3 频率 %4',
        QH_BT_START: '初始化蓝牙模块',
        QH_BT_button: '设置蓝牙字符信息 %1',
        QH_BT_variable: '蓝牙变量 %1',
        QH_BT_print: '蓝牙发送变量 变量1 %1 变量2 %2 变量3 %3 变量4 %4 变量5 %5',
        QH_serial_change: '软串口定义到 接口 %1',
        QH_serial_jieshouzhi: '串口接收数据比较 端口 %1 如果数据= %2',
        QH_serial_fasong: '串口发送 端口 %1 模式 %2 内容 %3',
        QH_SERIAL_WRITE: '原始输出',
        QH_SERIAL_PRINT: '打印',
        QH_SERIAL_PRINTLN: '打印(自动换行)',
        QH_serial_jieshou: '串口接收 端口 %1 返回字符串',
        QH_serial_suju: '串口有数据可读 端口 %1'
    });
    return Blockly;
}

exports = addMsg;
