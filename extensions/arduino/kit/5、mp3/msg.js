/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_MP3_CATEGORY: '---MP3---',
        QH_BUZZER_LABEL: '---BUZZER---',
        QH_buzzer: 'Buzzer Port %1  frequency %2 duration %3',
        QH_MP3_bofangx: 'Play the specified Port %1 volume(0-30) %2 Designated track number %3',
        QH_MP3_yingliang: 'Volume adjustment Port %1 volume(0-30) %2',
        QH_MP3_loopplay: 'Loop play Port %1 Volume(0-30) %2 Designated track number %3',
        QH_MP3_startpause: 'Play/Pause Port %1 Mode %2',
        QH_START: 'PLAY',
        QH_PAUSE: 'PAUSE',
        QH_MP3_previous_next: 'Previous/Next Port %1 Mode %2',
        QH_PREVIOUS: 'PREVIOUS',
        QH_NEXT: 'NEXT',
        QH_MP3_play: 'Play sound sound %1 Port %2 Volume(0-30) %3',
        QH_play1: '1laughter',
        QH_play2: '2cry',
        QH_play3: '3tank ',
        QH_play4: '4strafe',
        QH_play5: '5shot',
        QH_play6: '6transformers',
        QH_play7: '7speed up',
        QH_play8: '8braking',
        QH_play9: '9flight',
        QH_play10: '10copter',
        QH_play11: '11cat',
        QH_play12: '12dog',
        QH_play13: '13tiger',
        QH_play14: '14chicken',
        QH_ESPuno_define_mp3_directory: 'Define the MP3 SD card file directory %1 ',
        QH_ESPuno_mp3_designated_play: 'Mode %1 Port %2 Volume(0-30) %3 Designated track number %4',
        QH_BOFANGX: 'Play specified',
        QH_LOOPPLAY: 'Loop play'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_MP3_CATEGORY: 'MP3',
        QH_BUZZER_LABEL: '---蜂鸣器---',
        QH_buzzer: '蜂鸣器 端口 %1 频率 %2 持续时间 %3',
        QH_MP3_bofangx: '播放指定 端口 %1 音量(0-30) %2 曲目 %3',
        QH_MP3_yingliang: '音量调节 端口 %1 音量(0-30) %2',
        QH_MP3_loopplay: '循环播放 端口 %1 音量(0-30) %2 曲目 %3',
        QH_MP3_startpause: '播放/暂停 端口 %1 模式 %2',
        QH_START: '播放',
        QH_PAUSE: '暂停',
        QH_MP3_previous_next: '上一首/下一首 端口 %1 模式 %2',
        QH_PREVIOUS: '上一首',
        QH_NEXT: '下一首',
        QH_MP3_play: '播放音效 音效 %1 端口 %2 音量(0-30) %3',
        QH_play1: '1笑声',
        QH_play2: '2哭声',
        QH_play3: '3坦克',
        QH_play4: '4扫射',
        QH_play5: '5枪声',
        QH_play6: '6变形',
        QH_play7: '7加速',
        QH_play8: '8刹车',
        QH_play9: '9飞行',
        QH_play10: '10直升机',
        QH_play11: '11猫',
        QH_play12: '12狗',
        QH_play13: '13老虎',
        QH_play14: '14鸡',
        QH_ESPuno_define_mp3_directory: '定义MP3 SD卡文件目录 %1 ',
        QH_ESPuno_mp3_designated_play: '模式 %1 端口 %2 音量(0-30) %3 曲目 %4',
        QH_BOFANGX: '播放指定',
        QH_LOOPPLAY: '循环播放'
    });
    return Blockly;
}

exports = addMsg;
