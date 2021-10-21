const CCRobot = formatMessage => ({
    name: 'CC Robot',
    deviceId: 'CCRobot_arduinoCC',
    manufactor: '魔盒科技',
    leanMore: '',
    iconURL: 'asset/CCRobot.png',
    description: formatMessage({
        id: 'CCRobot.description',
        default: 'mbox CCRobot kit robot.',
        description: 'Description for the mbox CCRobot kit device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/CCRobot-illustration.svg',
    connectionSmallIconURL: 'asset/CCRobot-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino','kit'],
    deviceExtensions: ['CCRobot'],
    deviceExtensionsCompatible: 'arduinoCC',
    helpLink: 'https://www.sxyiqichuang.com/'
});

module.exports = CCRobot;
