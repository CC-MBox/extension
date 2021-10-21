/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_SDISPLAY_CATEGORY: 'QH SDisplay',
        QH_display_samll_refresh_display: 'Small display refresh %1',
        QH_display_samll_HV: 'Screen direction Port %1 direction %2',
        QH_display_samll_HV1: 'transverse 0',
        QH_display_samll_HV0: 'vertical 90',
        QH_display_samll_HV2: 'transverse 180',
        QH_display_samll_HV3: 'vertical 270',
        QH_display_samll_BL: 'Screen brightness Port %1 Value(0-255) %2',
        QH_display_samll_clr: 'Color Port %1 Mode %2 Color(0-63) %3',
        QH_display_samll_clr1: 'refresh',
        QH_display_samll_clr2: 'background',
        QH_display_samll_flash_pic: 'Picture show Port %1 H/V %2 Mode %3 Picture %4',
        QH_display_samll_HV10: 'transverse',
        QH_display_samll_HV11: 'vertical',
        QH_display_samll_pic0: 'normal',
        QH_display_samll_pic1: 'transparent',
        QH_display_samll_pic: 'Picture show %1 Mode %2 addr %3 Start X %4 Y %5 Wide High W %6 H %7',
        QH_display_samll_PS: 'Draw point Port %1 X %2 Y %3 Color(0-63) %4',
        QH_display_samll_PL: 'Draw line box Port %1 Mode %2 start point X %3 Y %4 End point X %5 Y %6 Color(0-63) %7',
        QH_display_samll_pl1: 'Line drawing',
        QH_display_samll_pl2: 'The hollow box',
        QH_display_samll_pl3: 'The solid frame',
        QH_display_samll_CIR: 'Draw circle Port %1 Type %2 Center X %3 Y %4 Radius R %5 Color(0-63) %6',
        QH_displaysolidround: 'Solid round',
        QH_displayhollowround: 'The hollow circle',
        QH_display_samll_DC: 'TEXT Port %1 Font size %2 Color(0-63) %3 Start point X %4 Y %5 Content %6',
        QH_display_samll_CN: 'TEXT Port %1 Font size %2 Color(0-63) %3 Start point X %4 Y %5 Content %6',
        QH_display_samll_SBCDC: 'Background TEXT Port %1 Font size %2 base color(0-63) %3 Color(0-63) %4 Start point X %5 Y %6 Content %7',
        QH_display_samll_order: 'Custom instruction Port %1 Content %2 ',
        QH_display_samll_btl: 'Baud rate Port %1 BPS %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_SDISPLAY_CATEGORY: '小彩屏',
        QH_display_samll_refresh_display: '彩屏刷新显示 %1',
        QH_display_samll_HV: '彩屏方向 端口 %1 方向 %2',
        QH_display_samll_HV1: '横屏0度',
        QH_display_samll_HV0: '竖屏90度',
        QH_display_samll_HV2: '横屏180度',
        QH_display_samll_HV3: '竖屏270度',
        QH_display_samll_BL: '彩屏亮度 端口 %1 亮度(0-255) %2',
        QH_display_samll_clr: '颜色 端口 %1 模式 %2 颜色(0-63) %3',
        QH_display_samll_clr1: '刷屏',
        QH_display_samll_clr2: '背景',
        QH_display_samll_flash_pic: '图片显示 端口 %1 横/竖 %2 模式 %3 图片 %4',
        QH_display_samll_HV10: '横屏',
        QH_display_samll_HV11: '竖屏',
        QH_display_samll_pic0: '正常',
        QH_display_samll_pic1: '透明',
        QH_display_samll_pic: '图片显示 %1 模式 %2 地址 %3 起点 X %4 Y %5 宽 高 W %6 H %7',
        QH_display_samll_PS: '画点 端口 %1 X %2 Y %3 颜色(0-63) %4',
        QH_display_samll_PL: '画线/框 端口 %1 模式 %2 起点 X %3 Y %4 终点 X %5 Y %6 颜色(0-63) %7',
        QH_display_samll_pl1: '画线',
        QH_display_samll_pl2: '空心框',
        QH_display_samll_pl3: '实心框',
        QH_display_samll_CIR: '画圆 端口 %1 样式 %2 圆心 X %3 Y %4 半径 R %5 颜色(0-63) %6',
        QH_displaysolidround: '实心圆',
        QH_displayhollowround: '空心圆',
        QH_display_samll_DC: '文本显示 端口 %1 字体 %2 颜色(0-63) %3 起点 X %4 Y %5 内容 %6',
        QH_display_samll_CN: '文本 端口 %1 字号 %2 颜色(0-63) %3 起点 X %4 Y %5 内容 %6',
        QH_display_samll_SBCDC: '带底色文本 端口 %1 字号 %2 底色(0-63) %3 颜色(0-63) %4 起点 X %5 Y %6 内容 %7',
        QH_display_samll_order: '自定义指令 端口 %1 内容 %2 ',
        QH_display_samll_btl: '波特率 端口 %1 BPS %2'
    });
    return Blockly;
}

exports = addMsg;
