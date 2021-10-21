/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {


    const QH_COMMUNICATE_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAE0UlEQVRoge2ZXYhVVRTHf8445TQNYiSOZVE26fRhBRZUphM9WGZqVmQFallRgTlqIj0UCBkTPqSpCVNBL4I09kGg+DEiCT0UKDNE0Fijo2lRVJORjs5YMz2stTnr3HvPvft8zNyH/MPmsv93n//6n7PPXmufc+AC/p+4CVgF7ANOAz3Ap8CkcpryQS0wH2gBjgODEe1X4OoyeYzELcBqYD/QT9jw38BnwAuI8bHA5/rfu+UwazEaeAz4ADhJ/tX+BlgH3AdcVOD4eh33C1AxDH5DmAg0AW1AH2Hjp5Vvwv92OazHTs3caQSeBroJGx8A2oFmoBGoSqC7QbVey8ZmcSwlMP8n0AosAa7IQPt+1f0yA62iqAL+QBbvU8DIjPVHAWeA88CYjLVDaECu2O4hjLFTYzxuuBpgBjDCV6RUtjilv6NiWYsHd5EeMNzrwAHgySwDdSEZqjZLUYOJyIz8TDADLyn3cZaBNqnovCxFc/C9xrhN+9dq/xThbFgHXFZIwKcQuamflcyjF3Jvr26gEym6d5txHdqSpHouAc4Cx5J59MIsZAa+MNx65ZoN16nc9KSB9qrADUkFSqCaIA2PVm6mxmw341wBXZs00AoVWJlUwAO7NMZ87bsaM0BQfN3MHUwaxNWTtsQ2S6NJY7xnOFdjntF+NdCLnNw4H9EKZP9k68dR4BxwaTq/kZiEmP7RcG571Gq43cot9BF9QgevM9wW5eakMFsKXRrjZu1fp/0egu2Ru823+gjepYOPGm6uclvS+43EZo2xynCuxkzT/o3a/w2P8lEJ/K4HXK9cDXJrdWdiuTBma8x9httIfqY6ptztPqLbdPAyw7Up15DCbDG4mtVHsBZdpjpkxrUQI4su1sG7DPeKcivS+S2KPRpjrvZtpqpTrgFZI5MLCUxBZqFe+3V6cK+KQXB/7s3WewjLyV+LrsYs9hFwV7vFcIeUs/us48j016QwWwyTNaZdi8uU2+YjcAf5efxN5d4xnLs/Z6cwWwpHNIa7dVyN6UESUVFUIC/M7J7qHu0fNuMeVm5zJpYLw9Ws5YZzNeZOH4GthBfzSOQqDCLFCeQBqw+5akOFhzTmHsO9rdyjPgILyX9Gb1VuqeH2E576rOFq1lkkJYMknGl4PsePBf7NEViCmN5hxq1Wrim15Wi4mvVgUgGXqdzT2njy0/AU8mtM1lipMTYmFXCZaoPh2pWbabgThGcuK1QiC9plxx+SCk1XgU7DNSu33nDvk3LqDcYBi5A64fZ4ttVHHxqNKuTVzAnDNargd4Z7RLlNCWJUIgt3LfK0N0D0N5RB4OUEMQC4HFn4DlXIq5lB5FUNyLN1P/5TPx550vuIIKX7tp1JT6QQPlHRFw13gOipr0Q+F6zB76oXazbRpMYiFX3DcK8S3upPAJ5D3hC6GcyqeT17+GAEsmWxz/G3apAu5AuVj6GTwIfIl6o4JzIjqxOJOrmfYhq6V49tjHFMLyVeeqT9dpe7H/KBSyITYhyzBvm0N6RYQLwZ6UcK7HmPsd8STi5DijHAPzFPJqqdIfiges1wnYDF1zHM5rYjyHZkDnDxcBvPhXvd6dP+QmrS88BV5TBbDNXAV0Sb7wDeQjJWom8bw4laZOfcgbwd3A48C1xZTlMXUC78BySm6L8QOkDNAAAAAElFTkSuQmCC';

    return `

<category name="%{BKY_QH_COMMUNICATE_CATEGORY}" id="QH_COMMUNICATE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_COMMUNICATE_ICO}">
    <label text="%{BKY_QH_IR_LABEL}"></label>
    <block type="hw_init" id="hw_init">
        <value name="pin">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="hw_readHumidity" id="hw_readHumidity">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">ok</field>
            </shadow>
        </value>
    </block>
    <block type="QH_ir_re2"></block>
    <block type="QH_ir_send_nec">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">0xCF</field>
            </shadow>
        </value>
        <value name="bits">
            <shadow type="math_number">
                <field name="NUM">32</field>
            </shadow>
        </value>
    </block>
    <block type="QH_ir_send_raw">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">0,0,0</field>
        </shadow>
      </value>
      <value name="length">
        <shadow type="math_number">
          <field name="NUM">3</field>
        </shadow>
      </value>
      <value name="freq">
        <shadow type="math_number">
          <field name="NUM">38</field>
        </shadow>
      </value>
    </block>
    <label text="%{BKY_QH_BLUETOOTH_LABEL}"></label>
    <block type="QH_BT_START"></block>
    <block type="QH_BT_button">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">U</field>
            </shadow>
        </value>
    </block>
    <block type="QH_BT_variable"></block>
    <block type="QH_BT_print">
        <value name="N1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N3">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N4">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N5">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_SERIAL_LABEL}"></label>
    <block type="QH_serial_change"></block>
    <block type="QH_serial_jieshouzhi">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="QH_serial_fasong">
        <value name="text">
        <shadow type="text">
            <field name="TEXT">0x7E</field>
        </shadow>
        </value>
    </block>
    <block type="QH_serial_jieshou"></block>
    <block type="QH_serial_suju"></block>
</category>
`;
}

exports = addToolbox;
