/*
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
const CCRobot = formatMessage => ({
    name: 'CC通讯',
    extensionId: 'CCRobot-4',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoCC'],
    author: '魔盒科技',
    iconURL: `asset/QH.png`,
    description: formatMessage({
        id: 'CCRobot.description',
        default: 'CC robot',
        description: 'Description of CC robot'
    }),
    featured: true,
    blocks: `blocks.js`,
    generator: `generator.js`,
    toolbox: `toolbox.js`,
    msg: `msg.js`,
    tags: ['kit'],
    helpLink: 'https://CCrobot.taobao.com'
});

module.exports = CCRobot;
