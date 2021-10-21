/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_SMG_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABiElEQVRoge2Zy0rDQBSGv1SLTyMuXfgAQhciWH1U8QlcuA1YwUWptNaoVKzoRrws0tBkcprJJNWJ5nyQxXTO/DN/budkCorSbgLgy/ci6tDxvYC6qAHfbAq/Bb++Cjcyz+yfvwKuBvaAEfFZSB8hsO2g0wce16ADgkgRF0J8cpyWmKsLbAFTi06X1bdybr02AyfAE/AAvBVM/AzMiM/sYYHOS4FGWmcOHK/DwJ3RPxTGXBrtcQmdqITOrc2AlInNS2frLxv3Izqtews1DjXgGzXgm1YYiIz2hHwCGhgx04o618CHRSeHLRP3Wab2ohIgKTdmwFENnfkibpVOJl76HjDpEGfDd0vcxkI0QM6yZXUSVunkcK2FqtYwWgtJ/a14CzUaNeAbNeCbVhgYGm2phgnJ1jBSAjJroUFFnRy2TLxPvJk1Aj6F+HQtFAH3wIGg02O57fJaQ8d5WyXNuGDiM8vYNOc1dGoZ6AE3wpgQ2HEwsAtcVdRxroWaxv+qhfQ/Mt+oAUVR/PINz4UrHTS33KQAAAAASUVORK5CYII=';


    return `
<category name="%{BKY_QH_SMG_CATEGORY}" id="QH_SMG_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_SMG_ICO}">
<!--    <block type="CC_display_init"></block>-->
<!--    <block type="CC_displayonoroff"></block>-->
    <label text="%{BKY_QH_LED_LABEL}"></label>
    <block type="QH_ledlight">
        <value name="STATE">
            <shadow type="QH_inout_highlow">
            </shadow>
        </value>
    </block>
    <block type="QH_read_ledlight"></block>
    <block type="QH_ledlight_PWM">
        <value name="ledn">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_CC_RGB}"></label>
    <block type="CC_rgb_init" id="CC_rgb_init">
        <value name="cc-rgb">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="Red">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="Green">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <value name="Blue">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_CC_SMG}"></label>
    <block type="QH_display">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">1234</field>
            </shadow>
        </value>
    </block>
<!--    <block type="QH_displayoff"></block>-->
</category>
`;
}

exports = addToolbox;
